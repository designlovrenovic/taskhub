/*!
 * TaskHub page runtime
 * A tiny, dependency-free renderer for the page templates in this site:
 * {{holes}}, <sc-for>, <sc-if>, event props, callback refs and a
 * React-style component class (state, setState, lifecycle).
 */
(function (global) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var WHOLE = /^\{\{\s*([^}]+?)\s*\}\}$/;

  /* ---------------- value lookup ---------------- */
  function resolve(path, scope) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
    if (/^'.*'$|^".*"$/.test(path)) return path.slice(1, -1);
    var parts = path.split('.');
    var v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (m, p) {
      var v = resolve(p, scope);
      return v == null ? '' : String(v);
    });
  }
  function child(scope, name, value, index) {
    var s = Object.create(scope);
    s[name] = value;
    s.$index = index;
    return s;
  }

  /* ---------------- template compiler ---------------- */
  function compileAttr(name, raw) {
    var m = raw.match(WHOLE);
    if (m) { var p = m[1]; return function (sc) { return resolve(p, sc); }; }
    if (raw.indexOf('{{') !== -1) return function (sc) { return interp(raw, sc); };
    return function () { return raw; };
  }

  function compileNode(node) {
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      if (text.indexOf('{{') === -1) return function () { return { t: '#', v: text }; };
      return function (sc) { return { t: '#', v: interp(text, sc) }; };
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'helmet' || tag === 'script') return null;
    var kids = compileChildren(node);

    if (tag === 'sc-for') {
      var listFn = compileAttr('list', node.getAttribute('list') || '');
      var as = node.getAttribute('as') || 'item';
      return function (sc) {
        var list = listFn(sc) || [];
        var out = [];
        for (var i = 0; i < list.length; i++) {
          var s = child(sc, as, list[i], i);
          for (var k = 0; k < kids.length; k++) push(out, kids[k](s));
        }
        return out;
      };
    }
    if (tag === 'sc-if') {
      var condFn = compileAttr('value', node.getAttribute('value') || '');
      return function (sc) {
        if (!condFn(sc)) return null;
        var out = [];
        for (var k = 0; k < kids.length; k++) push(out, kids[k](sc));
        return out;
      };
    }

    var attrs = [];
    for (var a = 0; a < node.attributes.length; a++) {
      var at = node.attributes[a];
      if (at.name.indexOf('hint-') === 0) continue;
      attrs.push([at.name, compileAttr(at.name, at.value)]);
    }
    var isField = tag === 'input' || tag === 'textarea' || tag === 'select';
    return function (sc) {
      var props = {};
      for (var i = 0; i < attrs.length; i++) props[attrs[i][0]] = attrs[i][1](sc);
      var c = [];
      for (var k = 0; k < kids.length; k++) push(c, kids[k](sc));
      return { t: tag, p: props, c: c, f: isField };
    };
  }
  function compileChildren(node) {
    var out = [];
    for (var n = node.firstChild; n; n = n.nextSibling) {
      var fn = compileNode(n);
      if (fn) out.push(fn);
    }
    return out;
  }
  function push(arr, v) {
    if (v == null) return;
    if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) push(arr, v[i]); }
    else arr.push(v);
  }
  function compile(html) {
    var doc = new DOMParser().parseFromString('<!doctype html><html><body>' + html + '</body></html>', 'text/html');
    var kids = compileChildren(doc.body);
    return function (vals) {
      var out = [];
      for (var k = 0; k < kids.length; k++) push(out, kids[k](vals));
      return out;
    };
  }

  /* ---------------- DOM patching ---------------- */
  function evName(name, v) {
    var e = name.slice(2).toLowerCase();
    if (e === 'change' && v.f) {
      var type = (v.p.type || 'text').toLowerCase();
      if (type !== 'checkbox' && type !== 'radio' && v.t !== 'select') e = 'input';
    }
    return e;
  }
  function setProp(dom, v, name, val, old, svg) {
    if (name === 'ref') return;
    if (name.charAt(0) === 'o' && name.charAt(1) === 'n' && (typeof val === 'function' || typeof old === 'function')) {
      var ev = evName(name, v);
      var hs = dom.__dc || (dom.__dc = {});
      if (!(ev in hs)) {
        dom.addEventListener(ev, function (e) { var f = hs[ev]; if (typeof f === 'function') f(e); });
      }
      hs[ev] = val;
      return;
    }
    if (name === 'style') {
      if (val !== old) dom.style.cssText = val == null ? '' : String(val);
      return;
    }
    if (name === 'value' && v.f) {
      var sv = val == null ? '' : String(val);
      if (dom.value !== sv) dom.value = sv;
      return;
    }
    if ((name === 'disabled' || name === 'checked' || name === 'selected') && !svg) {
      dom[name] = !!val;
      return;
    }
    if (val === old && dom.__mounted) return;
    var aria = name.indexOf('aria-') === 0;
    if (val == null || (val === false && !aria)) dom.removeAttribute(name);
    else dom.setAttribute(name, val === true && !aria ? '' : String(val));
  }
  function create(v, svg) {
    if (v.t === '#') return document.createTextNode(v.v);
    svg = svg || v.t === 'svg';
    var dom = svg ? document.createElementNS(SVG_NS, v.t) : document.createElement(v.t);
    for (var name in v.p) setProp(dom, v, name, v.p[name], undefined, svg);
    for (var i = 0; i < v.c.length; i++) dom.appendChild(create(v.c[i], svg && v.t !== 'foreignObject'));
    dom.__mounted = true;
    if (typeof v.p.ref === 'function') v.p.ref(dom);
    return dom;
  }
  function unref(dom, v) {
    if (!v || v.t === '#') return;
    if (typeof v.p.ref === 'function') v.p.ref(null);
    for (var i = 0; i < v.c.length; i++) unref(dom && dom.childNodes[i], v.c[i]);
  }
  function patch(parent, dom, o, n, svg) {
    if (!o) { var c = create(n, svg); parent.appendChild(c); return c; }
    if (o.t !== n.t) {
      var r = create(n, svg);
      unref(dom, o);
      parent.replaceChild(r, dom);
      return r;
    }
    if (n.t === '#') { if (o.v !== n.v) dom.nodeValue = n.v; return dom; }
    svg = svg || n.t === 'svg';
    var name;
    for (name in o.p) if (!(name in n.p)) setProp(dom, n, name, null, o.p[name], svg);
    for (name in n.p) if (n.p[name] !== o.p[name] || name === 'value') setProp(dom, n, name, n.p[name], o.p[name], svg);
    if (n.p.ref !== o.p.ref) {
      if (typeof o.p.ref === 'function') o.p.ref(null);
      if (typeof n.p.ref === 'function') n.p.ref(dom);
    }
    patchChildren(dom, o.c, n.c, svg && n.t !== 'foreignObject');
    return dom;
  }
  function patchChildren(parent, oc, nc, svg) {
    var nodes = Array.prototype.slice.call(parent.childNodes);
    var i;
    for (i = 0; i < nc.length; i++) patch(parent, nodes[i], oc[i], nc[i], svg);
    for (i = oc.length - 1; i >= nc.length; i--) {
      unref(nodes[i], oc[i]);
      if (nodes[i] && nodes[i].parentNode === parent) parent.removeChild(nodes[i]);
    }
  }

  /* ---------------- component base ---------------- */
  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
    this.__q = [];
  }
  DCLogic.prototype.setState = function (u) {
    this.__q.push(u);
    var self = this;
    if (!self.__sched) {
      self.__sched = true;
      Promise.resolve().then(function () { self.__flush(); });
    }
  };
  DCLogic.prototype.forceUpdate = function () { this.setState(null); };
  DCLogic.prototype.__flush = function () {
    this.__sched = false;
    if (this.__dead) return;
    var q = this.__q; this.__q = [];
    var prev = this.state, s = prev;
    for (var i = 0; i < q.length; i++) {
      var part = typeof q[i] === 'function' ? q[i].call(this, s, this.props) : q[i];
      if (part != null) s = Object.assign({}, s, part);
    }
    this.state = s;
    this.__render();
    if (typeof this.componentDidUpdate === 'function') this.componentDidUpdate(this.props, prev);
  };
  DCLogic.prototype.__render = function () {
    var next = this.__tpl(this.renderVals());
    patchChildren(this.__root, this.__tree || [], next, false);
    this.__tree = next;
  };

  function mount(Comp, html, container, props) {
    var c = new Comp(props || {});
    c.__tpl = compile(html);
    c.__root = container;
    c.__q = c.__q || [];
    c.__render();
    if (typeof c.componentDidMount === 'function') c.componentDidMount();
    return {
      unmount: function () {
        c.__dead = true;
        if (typeof c.componentWillUnmount === 'function') c.componentWillUnmount();
        for (var i = 0; i < (c.__tree || []).length; i++) unref(container.childNodes[i], c.__tree[i]);
        container.innerHTML = '';
      }
    };
  }

  global.DCLogic = DCLogic;
  global.DCRuntime = { mount: mount, compile: compile };
})(window);
