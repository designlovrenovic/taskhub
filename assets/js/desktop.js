/* TaskHub — desktop page (template + logic) */
window.TH_PAGES = window.TH_PAGES || {};
window.TH_PAGES.desktop = {
  template: "<div class=\"pg\" id=\"top\">\n\n<!-- ================= NAV ================= -->\n<header class=\"nav\">\n  <div class=\"wrap\" style=\"display: flex; align-items: center; justify-content: space-between; gap: 24px; height: 72px\">\n    <a class=\"logo-link\" href=\"#top\" style=\"display: flex; align-items: center; gap: 10px; text-decoration: none; color: #F3F4F8\">\n      <svg class=\"logo-ic\" width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n      <span class=\"hd\" style=\"font-size: 19px; font-weight: 800; letter-spacing: -.02em\">TaskHub</span>\n    </a>\n    <nav class=\"nav-links\" aria-label=\"Main\" style=\"display: flex; align-items: center; gap: 32px\">\n      <a class=\"nl\" href=\"#features\">Features</a>\n      <a class=\"nl\" href=\"#pricing\">Pricing</a>\n      <a class=\"nl\" href=\"#teams\">Teams</a>\n      <a class=\"nl\" href=\"#platform\">Platform</a>\n    </nav>\n    <div style=\"display: flex; align-items: center; gap: 28px\">\n      <a class=\"nl signin\" href=\"#top\">Sign in</a>\n      <a class=\"btn-m\" href=\"#pricing\">Start free trial</a>\n    </div>\n  </div>\n</header>\n\n<!-- ================= HERO ================= -->\n<section class=\"hx\" ref=\"{{hx.heroRef}}\" onMouseMove=\"{{hx.onHeroMove}}\" onMouseLeave=\"{{hx.onHeroLeave}}\">\n  <div class=\"h-beams\" aria-hidden=\"true\"></div>\n  <div class=\"h-grid\" aria-hidden=\"true\"></div>\n\n\n  <div class=\"wrap\" style=\"position: relative; padding-top: 64px; text-align: center\">\n    <div class=\"fu d0\"><span class=\"h-pill\"><i></i>Plan · Track · Ship — together</span></div>\n    <h1 class=\"hd\" style=\"margin: 26px 0 0; font-size: clamp(46px, 6.6vw, 96px); line-height: 1.02; font-weight: 700; letter-spacing: -.03em; color: #F3F4F8\"><span class=\"hw w1\">Where</span> <span class=\"hw w2\">projects</span><br><span class=\"hw w3\">get</span> <span class=\"hw w4 hgl\">simplified</span></h1>\n    <p class=\"fu d1\" style=\"margin: 22px auto 0; max-width: 520px; color: #A6A8BF; font-size: 17px; line-height: 1.6\">Stay connected, accomplish more - no matter the distance.</p>\n    <div class=\"fu d2\" style=\"display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin-top: 32px\">\n      <a class=\"btn-y\" href=\"#top\">Start free trial<svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 2.4\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></a>\n    </div>\n\n    <!-- ===== product stage ===== -->\n    <div class=\"h-stage\" id=\"demo\" style=\"text-align: left\">\n      <div class=\"h-win-in\" ref=\"{{hx.wrapRef}}\" onMouseMove=\"{{hx.onWinMove}}\" onMouseLeave=\"{{hx.onWinLeave}}\">\n        <div class=\"h-win {{hx.winCls}}\" ref=\"{{hx.winRef}}\">\n          <div class=\"h-tbar\">\n            <div class=\"h-dots\"><i></i><i></i><i></i></div>\n            <div class=\"h-search {{hx.pc.search}}\" onMouseEnter=\"{{hx.enter.search}}\" onMouseLeave=\"{{hx.leaveEl}}\"><svg class=\"ic\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>Search or jump to…<kbd>⌘K</kbd></div>\n            <div class=\"h-avs\"><span class=\"h-av\" style=\"background: #7C8CF8\">AO</span><span class=\"h-av\" style=\"background: #5EC4B6\">LP</span><span class=\"h-av\" style=\"background: #F59E6B\">FS</span></div>\n          </div>\n          <div class=\"h-body\">\n            <aside class=\"h-side\">\n              <div class=\"h-si on\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"></rect><path d=\"M3 9h18M9 21V9\"></path></svg>Dashboard</div>\n              <div class=\"h-si\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 13l2.5-8h11L20 13v6H4z\"></path><path d=\"M4 13h5l1 2h4l1-2h5\"></path></svg>Inbox<b>4</b></div>\n              <div class=\"h-si\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\"></rect><path d=\"M9 13l2 2 4-4\"></path></svg>My tasks</div>\n              <div class=\"h-si\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18M8 3v4M16 3v4\"></path></svg>Calendar</div>\n              <div class=\"h-si\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v17h17\"></path><path d=\"M8 8h6M10 12h7M8 16h5\"></path></svg>Timeline</div>\n              <div class=\"h-slab\">Projects</div>\n              <div class=\"h-si\"><span class=\"h-pdot\" style=\"background: #F9B12E\"></span>Horizon</div>\n              <div class=\"h-si\"><span class=\"h-pdot\" style=\"background: #8E87CF\"></span>Phoenix</div>\n              <div class=\"h-si\"><span class=\"h-pdot\" style=\"background: #5EC4B6\"></span>Atlas</div>\n            </aside>\n\n            <div class=\"h-main\">\n              <div style=\"display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 20px\">\n                <div>\n                  <div class=\"h-mut\" style=\"margin-bottom: 8px\">{{hx.dateLabel}}</div>\n                  <h2 class=\"hd\" style=\"margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -.01em\">Good morning, Franklin</h2>\n                </div>\n                <span class=\"h-chip\" style=\"padding: 7px 12px; font-size: 11px\">{{hx.leftLabel}}</span>\n              </div>\n\n              <div class=\"h-mrow h-r1\">\n                <!-- meeting -->\n                <div class=\"h-dc {{hx.pc.meeting}}\" onMouseEnter=\"{{hx.enter.meeting}}\" onMouseLeave=\"{{hx.leaveEl}}\" style=\"display: flex; flex-direction: column\">\n                  <div class=\"h-dh\"><span>Next meeting</span><span class=\"h-chip\">Design sync</span></div>\n                  <div style=\"display: flex; align-items: flex-start; gap: 10px\">\n                    <div><div class=\"h-dig\">{{hx.cd.d}}</div><div class=\"h-dl\">days</div></div><div class=\"h-col\">:</div>\n                    <div><div class=\"h-dig\">{{hx.cd.h}}</div><div class=\"h-dl\">hours</div></div><div class=\"h-col\">:</div>\n                    <div><div class=\"h-dig\">{{hx.cd.m}}</div><div class=\"h-dl\">minutes</div></div>\n                  </div>\n                  <div style=\"display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 18px\">\n                    <div class=\"h-avs\"><span class=\"h-av\" style=\"background: #7C8CF8\">AO</span><span class=\"h-av\" style=\"background: #5EC4B6\">LP</span><span class=\"h-av\" style=\"background: #E57AA8\">MV</span><span class=\"h-av\" style=\"background: #2A2B44; color: #C9CBDB\">+3</span></div>\n                    <button class=\"h-join {{hx.joinCls}}\" onClick=\"{{hx.toggleJoin}}\" aria-pressed=\"{{hx.joined}}\"><i></i>{{hx.joinLabel}}</button>\n                  </div>\n                </div>\n\n                <!-- calendar -->\n                <div class=\"h-dc {{hx.pc.calendar}}\" ref=\"{{hx.calRef}}\" onMouseEnter=\"{{hx.enter.calendar}}\" onMouseLeave=\"{{hx.leaveEl}}\">\n                  <div class=\"h-dh\"><span>Calendar</span><span class=\"h-mut\">{{hx.monthLabel}}</span></div>\n                  <div class=\"h-cg\">\n                    <span class=\"h-cw\">M</span><span class=\"h-cw\">T</span><span class=\"h-cw\">W</span><span class=\"h-cw\">T</span><span class=\"h-cw\">F</span><span class=\"h-cw\">S</span><span class=\"h-cw\">S</span>\n                    <sc-for list=\"{{hx.cells}}\" as=\"c\" hint-placeholder-count=\"35\">\n                      <button class=\"h-cd {{c.cls}}\" onClick=\"{{c.pick}}\" disabled=\"{{c.dis}}\" aria-label=\"{{c.aria}}\">{{c.label}}</button>\n                    </sc-for>\n                  </div>\n                </div>\n\n                <!-- focus ring -->\n                <div class=\"h-dc {{hx.pc.focus}}\" onMouseEnter=\"{{hx.enter.focus}}\" onMouseLeave=\"{{hx.leaveEl}}\" style=\"text-align: center\">\n                  <div class=\"h-dh\"><span>Today</span><span class=\"h-mut\">Focus</span></div>\n                  <div style=\"position: relative; width: 120px; height: 120px; margin: 0 auto\">\n                    <svg class=\"h-ring\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" aria-hidden=\"true\"><circle class=\"h-tr\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke-width=\"9\"></circle><circle class=\"h-pr\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-dasharray=\"289.03\" style=\"stroke-dashoffset: {{hx.ringOff}}\"></circle></svg>\n                    <div style=\"position: absolute; inset: 0; display: grid; place-content: center; gap: 4px\"><span class=\"hd\" style=\"font-size: 28px; font-weight: 700\">{{hx.doneCount}}/5</span><span class=\"h-mut\">tasks done</span></div>\n                  </div>\n                  <div class=\"h-mut\" style=\"margin-top: 14px; font-size: 11.5px; color: #A6A8BF\">{{hx.focusNote}}</div>\n                </div>\n              </div>\n\n              <div class=\"h-mrow h-r2\">\n                <!-- tasks -->\n                <div class=\"h-dc {{hx.pc.tasks}}\" onMouseEnter=\"{{hx.enter.tasks}}\" onMouseLeave=\"{{hx.leaveEl}}\">\n                  <div class=\"h-dh\"><span>Today tasks</span><span class=\"h-mut\">{{hx.doneCount}} of 5</span></div>\n                  <div style=\"display: flex; flex-direction: column; gap: 2px\">\n                    <sc-for list=\"{{hx.tasks}}\" as=\"t\" hint-placeholder-count=\"5\">\n                      <button class=\"h-tk {{t.cls}}\" onClick=\"{{t.toggle}}\" aria-pressed=\"{{t.d}}\"><span class=\"h-bx\"><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.6\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>{{t.t}}<span class=\"h-tag\" style=\"background: {{t.bg}}; color: {{t.fg}}\">{{t.tag}}</span></button>\n                    </sc-for>\n                  </div>\n                </div>\n\n                <!-- timeline -->\n                <div class=\"h-dc {{hx.pc.timeline}}\" onMouseEnter=\"{{hx.enter.timeline}}\" onMouseLeave=\"{{hx.leaveEl}}\">\n                  <div class=\"h-dh\"><span>Timeline</span><span class=\"h-mut\">This week</span></div>\n                  <div class=\"h-gant\">\n                    <div class=\"h-gd\"><sc-for list=\"{{hx.gdays}}\" as=\"g\" hint-placeholder-count=\"8\"><span class=\"{{g.cls}}\">{{g.l}}</span></sc-for></div>\n                    <div class=\"h-tline\" style=\"left: {{hx.todayLeft}}\"></div>\n                    <sc-for list=\"{{hx.gbars}}\" as=\"b\" hint-placeholder-count=\"4\">\n                      <div class=\"h-gb {{b.cls}}\" onMouseEnter=\"{{b.enter}}\" onMouseLeave=\"{{hx.leaveEl}}\" style=\"left: {{b.left}}; width: {{b.width}}; top: {{b.top}}; background: {{b.bg}}\"><span class=\"h-av\" style=\"background: {{b.ac}}\">{{b.ai}}</span>{{b.name}}<em>{{b.pct}}</em></div>\n                    </sc-for>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"cur {{hx.curCls}}\" ref=\"{{hx.curRef}}\" aria-hidden=\"true\">\n          <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\"><path d=\"M3 3 L25 11 L14.5 14.5 L11 25 Z\" fill=\"#F9B12E\" stroke=\"#C98A12\" stroke-width=\"1.2\" stroke-linejoin=\"round\"></path></svg>\n          <div class=\"tip {{hx.tipCls}}\">{{hx.tip}}</div>\n        </div>\n      </div>\n\n      <!-- floating cards (parallax depth) -->\n      <div class=\"h-fl h-f1 {{hx.flCls}}\" aria-hidden=\"true\"><div ref=\"{{hx.f1Ref}}\"><div class=\"h-flc\">\n        <span class=\"h-fico\"><svg class=\"ic\" width=\"17\" height=\"17\" viewBox=\"0 0 24 24\"><path d=\"M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z\"></path><path d=\"M10 20.5a2 2 0 0 0 4 0\"></path></svg></span>\n        <div><div class=\"h-ft\">Design sync</div><div class=\"h-fs\">starts in {{hx.cdText}}</div></div>\n      </div></div></div>\n      <div class=\"h-fl h-f2 {{hx.flCls}}\" aria-hidden=\"true\"><div ref=\"{{hx.f2Ref}}\"><div class=\"h-flc\">\n        <span class=\"h-av\" style=\"width: 34px; height: 34px; background: #5EC4B6; font-size: 11px; border-color: #1E1F35\">LP</span>\n        <div><div class=\"h-ft\">Lena is editing Horizon<span class=\"h-typing\"><i></i><i></i><i></i></span></div><div class=\"h-fs\">Timeline · just now</div></div>\n      </div></div></div>\n      <div class=\"h-fl h-f3 {{hx.flCls}}\" aria-hidden=\"true\"><div ref=\"{{hx.f3Ref}}\"><div class=\"h-flc\">\n        <div class=\"h-toast {{hx.toastSw}}\">\n          <span class=\"h-okc\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" style=\"stroke-width: 2.8\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>\n          <div><div class=\"h-ft\">{{hx.toastTitle}}</div><div class=\"h-fs\">{{hx.toastSub}}</div></div>\n        </div>\n      </div></div></div>\n      <div class=\"h-floor\" aria-hidden=\"true\"></div>\n    </div>\n  </div>\n\n  <!-- ---------- logos ---------- -->\n  <div class=\"rv {{rv.logos}}\" data-rv=\"logos\" ref=\"{{rvRef}}\" style=\"padding: 70px 0 90px\">\n    <p class=\"hd\" style=\"margin: 0; text-align: center; font-size: 16px; font-weight: 700; line-height: 1.45; color: #F3F4F8\">15.000 companies have already<br>simplified their day-to-day</p>\n    <div class=\"marq\" aria-label=\"Customer logos (placeholders)\" style=\"max-width: 1230px; margin-left: auto; margin-right: auto\">\n      <div class=\"track\">\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"sep\"></div>\n\n<!-- ================= FEATURES ================= -->\n<section id=\"features\" class=\"fsec\">\n  <div class=\"rv {{rv.features}}\" data-rv=\"features\" ref=\"{{rvRef}}\">\n    <div class=\"wrap\">\n      <div class=\"eyb\">Features</div>\n      <h2 class=\"h2\">Explore Our Features</h2>\n      <div class=\"tabs\" role=\"tablist\" aria-label=\"Features\">\n        <button class=\"tab {{tabCls.0}}\" role=\"tab\" aria-selected=\"{{tabSel.0}}\" onClick=\"{{tabPick.0}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v17h17\"></path><path d=\"M7.5 16c1.5 0 1.8-9 3.6-9 1.6 0 1.4 6 3.4 6 1.3 0 1.8-2 2.5-3\"></path></svg>Project Timelines</button>\n        <button class=\"tab {{tabCls.1}}\" role=\"tab\" aria-selected=\"{{tabSel.1}}\" onClick=\"{{tabPick.1}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v18\"></path><rect x=\"7\" y=\"5\" width=\"13\" height=\"5\" rx=\"1\"></rect><rect x=\"7\" y=\"14\" width=\"8\" height=\"5\" rx=\"1\"></rect></svg>Drag-and-drop</button>\n        <button class=\"tab {{tabCls.2}}\" role=\"tab\" aria-selected=\"{{tabSel.2}}\" onClick=\"{{tabPick.2}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"6.5\" r=\"2.3\"></circle><path d=\"M3 13.5c0-2.1 1.8-3.6 4-3.6s4 1.5 4 3.6\"></path><circle cx=\"17\" cy=\"13.5\" r=\"2.3\"></circle><path d=\"M13 20.5c0-2.1 1.8-3.6 4-3.6s4 1.5 4 3.6\"></path><path d=\"M14 3.5h3.5a2 2 0 0 1 2 2V8M10 20.5H6.5a2 2 0 0 1-2-2V17\"></path></svg>Collaboration</button>\n        <button class=\"tab {{tabCls.3}}\" role=\"tab\" aria-selected=\"{{tabSel.3}}\" onClick=\"{{tabPick.3}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"17\" y=\"3\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"3\" y=\"17\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"17\" y=\"17\" width=\"4\" height=\"4\" rx=\".8\"></rect><path d=\"M7 5h10M5 7v10M19 7l-.8 10M7 19h10\"></path></svg>Customization</button>\n      </div>\n    </div>\n    <div class=\"tbase\"></div>\n\n    <div class=\"stage\">\n      <div class=\"stage-grid\" aria-hidden=\"true\"></div>\n<div class=\"fx-cap {{fx.capSw}}\">{{fx.cap}}</div>\n      <div class=\"fx-stage\" ref=\"{{fx.stageRef}}\" onMouseMove=\"{{fx.onMove}}\" onMouseLeave=\"{{fx.onLeave}}\">\n        <div class=\"fx-in\" ref=\"{{fRef}}\" onMouseMove=\"{{onFMove}}\" onMouseLeave=\"{{onFLeave}}\">\n          <div class=\"fx-win {{fx.liveCls}}\" ref=\"{{fx.winRef}}\">\n            <div class=\"fx-tbar\">\n              <div class=\"h-dots-x\"><i></i><i></i><i></i></div>\n              <div class=\"fx-crumb\"><span>{{fx.crumbA}}</span><svg class=\"ic\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg><b>{{fx.crumbB}}</b></div>\n              <div class=\"fx-seg\"><sc-for list=\"{{fx.seg}}\" as=\"g\" hint-placeholder-count=\"4\"><button class=\"{{g.cls}}\" onClick=\"{{g.pick}}\">{{g.l}}</button></sc-for></div>\n              <div class=\"fx-pres {{fx.presCls}}\"><span class=\"fx-av\" style=\"background: #5EC4B6\">LP</span><span class=\"fx-av\" style=\"background: #E57AA8\">MV</span><span class=\"fx-av\" style=\"background: #F59E6B\">FS</span></div>\n            </div>\n\n            <!-- ===== screen 1: timeline ===== -->\n            <sc-if value=\"{{fx.s0}}\" hint-placeholder-val=\"{{true}}\">\n            <div class=\"fx-scr\">\n              <div class=\"fx-tool\">\n                <div style=\"display: flex; align-items: center; gap: 10px\"><span class=\"fx-arr\"><svg class=\"ic\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M15 6l-6 6 6 6\"></path></svg></span><b class=\"hd\" style=\"font-size: 15px\">January 2026</b><span class=\"fx-arr\"><svg class=\"ic\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\"></path></svg></span></div>\n                <div class=\"fx-hint on\"><svg class=\"ic\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M8 12V6.5a1.5 1.5 0 0 1 3 0V11M11 10.5V5a1.5 1.5 0 0 1 3 0v5.5M14 10.5V6.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-.5A5.5 5.5 0 0 1 5 13.5V11a1.5 1.5 0 0 1 3 0\"></path></svg>Drag bars to reschedule</div>\n                <div class=\"fx-zoom\"><span>Week</span><span class=\"on\">Month</span></div>\n              </div>\n              <div class=\"fx-grid\">\n                <div class=\"fx-list\">\n                  <div class=\"fx-lh\">Project</div>\n                  <sc-for list=\"{{fx.rows}}\" as=\"r\" hint-placeholder-count=\"6\">\n                    <div class=\"fx-li\"><span class=\"fx-av\" style=\"background: {{r.ac}}\">{{r.ai}}</span><span class=\"fx-ln\">{{r.name}}</span><span class=\"fx-st {{r.stCls}}\">{{r.st}}</span></div>\n                  </sc-for>\n                </div>\n                <div class=\"fx-lanewrap\">\n                  <div class=\"fx-dh\"><sc-for list=\"{{fx.days}}\" as=\"d\" hint-placeholder-count=\"14\"><span class=\"{{d.cls}}\"><i>{{d.w}}</i>{{d.n}}</span></sc-for></div>\n                  <div class=\"fx-lane\" ref=\"{{fx.laneRef}}\">\n                    <div class=\"fx-cols\"><sc-for list=\"{{fx.days}}\" as=\"d\" hint-placeholder-count=\"14\"><span class=\"{{d.cls}}\"></span></sc-for></div>\n                    <div class=\"fx-rowlines\"><sc-for list=\"{{fx.rows}}\" as=\"r\" hint-placeholder-count=\"6\"><span></span></sc-for></div>\n                    <svg class=\"fx-deps\" viewBox=\"{{fx.depBox}}\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><path d=\"{{fx.dep1}}\"></path><path d=\"{{fx.dep2}}\"></path></svg>\n                    <div class=\"fx-today\" style=\"left: {{fx.todayLeft}}\" onMouseEnter=\"{{fEnter.today}}\" onMouseLeave=\"{{fLeaveEl}}\"><span>Today</span></div>\n                    <sc-for list=\"{{fx.bars}}\" as=\"b\" hint-placeholder-count=\"5\">\n                      <div class=\"fx-bar {{b.cls}}\" onMouseDown=\"{{b.down}}\" onMouseEnter=\"{{b.enter}}\" onMouseLeave=\"{{fLeaveEl}}\" style=\"left: {{b.left}}; width: {{b.width}}; top: {{b.top}}; background: {{b.bg}}\">\n                        <span class=\"fx-grip\" aria-hidden=\"true\"></span>\n                        <span class=\"fx-fill\" style=\"width: {{b.pct}}; background: {{b.fill}}\"></span>\n                        <span class=\"fx-bl\">{{b.name}}</span><em>{{b.pctLabel}}</em>\n                      </div>\n                    </sc-for>\n                    <div class=\"fx-ms\" style=\"left: {{fx.msLeft}}; top: {{fx.msTop}}\" onMouseEnter=\"{{fEnter.ms}}\" onMouseLeave=\"{{fLeaveEl}}\"><i></i><span>Launch</span></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </sc-if>\n\n            <!-- ===== screen 2: board (drag and drop) ===== -->\n            <sc-if value=\"{{fx.s1}}\" hint-placeholder-val=\"{{false}}\">\n            <div class=\"fx-scr\">\n              <div class=\"fx-tool\">\n                <div style=\"display: flex; align-items: center; gap: 12px\"><b class=\"hd\" style=\"font-size: 15px\">Sprint 3</b><span class=\"fx-chipx\">Jan 05 – Jan 18</span></div>\n                <div class=\"fx-hint {{fx.bHintCls}}\"><svg class=\"ic\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M8 12V6.5a1.5 1.5 0 0 1 3 0V11M11 10.5V5a1.5 1.5 0 0 1 3 0v5.5M14 10.5V6.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-.5A5.5 5.5 0 0 1 5 13.5V11a1.5 1.5 0 0 1 3 0\"></path></svg>Drag cards between columns</div>\n                <div class=\"fx-zoom\"><span class=\"on\">All</span><span>Mine</span></div>\n              </div>\n              <div class=\"fx-board\" ref=\"{{fx.boardRef}}\">\n                <sc-for list=\"{{fx.cols}}\" as=\"c\" hint-placeholder-count=\"4\">\n                  <div class=\"fx-col {{c.cls}}\" onMouseEnter=\"{{c.enter}}\" onMouseLeave=\"{{fLeaveEl}}\">\n                    <div class=\"fx-ch\"><i style=\"background: {{c.dot}}\"></i>{{c.name}}<span>{{c.count}}</span></div>\n                    <sc-for list=\"{{c.cards}}\" as=\"k\" hint-placeholder-count=\"2\">\n                      <div class=\"fx-card {{k.cls}}\" onMouseDown=\"{{k.down}}\" onMouseEnter=\"{{k.enter}}\" onMouseLeave=\"{{fLeaveEl}}\">\n              <div class=\"fx-kt\">{{k.t}}</div>\n              <div class=\"fx-km\"><span class=\"fx-tag\" style=\"background: {{k.bg}}; color: {{k.fg}}\">{{k.tag}}</span><span class=\"fx-due\"><svg class=\"ic\" width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18\"></path></svg>{{k.due}}</span><span class=\"fx-av\" style=\"background: {{k.ac}}\">{{k.ai}}</span></div>\n                      </div>\n                    </sc-for>\n                    <div class=\"fx-drop\">Drop here</div>\n                  </div>\n                </sc-for>\n                <sc-if value=\"{{fx.dragging}}\" hint-placeholder-val=\"{{false}}\">\n                  <div class=\"fx-card fx-ghost\" ref=\"{{fx.ghostRef}}\" style=\"width: {{fx.gw}}px; transform: translate({{fx.gx}}px, {{fx.gy}}px) rotate(2.5deg)\">\n              <div class=\"fx-kt\">{{fx.gk.t}}</div>\n              <div class=\"fx-km\"><span class=\"fx-tag\" style=\"background: {{fx.gk.bg}}; color: {{fx.gk.fg}}\">{{fx.gk.tag}}</span><span class=\"fx-due\"><svg class=\"ic\" width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18\"></path></svg>{{fx.gk.due}}</span><span class=\"fx-av\" style=\"background: {{fx.gk.ac}}\">{{fx.gk.ai}}</span></div>\n                  </div>\n                </sc-if>\n              </div>\n            </div>\n            </sc-if>\n\n            <!-- ===== screen 3: collaboration ===== -->\n            <sc-if value=\"{{fx.s2}}\" hint-placeholder-val=\"{{false}}\">\n            <div class=\"fx-scr fx-co\">\n              <div class=\"fx-doc\" onMouseEnter=\"{{fEnter.doc}}\" onMouseLeave=\"{{fLeaveEl}}\">\n                <div class=\"fx-dt hd\">Phoenix · Launch brief</div>\n                <div class=\"fx-dm\"><span class=\"fx-av\" style=\"background: #7C8CF8\">AO</span>Edited by Amara · 3 min ago<span class=\"fx-live-dot\">3 people here</span></div>\n                <p class=\"fx-p\">Phoenix ships the new onboarding flow on <mark>Jan 17</mark>. The goal: every new team creates its first project in under five minutes.</p>\n                <p class=\"fx-p\">Open questions for the design review<span class=\"fx-typed\">: final empty states and the mobile nav.</span><span class=\"fx-lcaret\"><b>Lena</b></span></p>\n                <div class=\"fx-chk\">\n                  <sc-for list=\"{{fx.chk}}\" as=\"q\" hint-placeholder-count=\"3\">\n                    <button class=\"fx-ci {{q.cls}}\" onClick=\"{{q.toggle}}\"><span class=\"bx2\"><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.6\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>{{q.t}}</button>\n                  </sc-for>\n                </div>\n                <div class=\"fx-rc rc1\" aria-hidden=\"true\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 28 28\"><path d=\"M3 3 L25 11 L14.5 14.5 L11 25 Z\" fill=\"#5EC4B6\"></path></svg><span style=\"background: #5EC4B6\">Lena</span></div>\n                <div class=\"fx-rc rc2\" aria-hidden=\"true\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 28 28\"><path d=\"M3 3 L25 11 L14.5 14.5 L11 25 Z\" fill=\"#E57AA8\"></path></svg><span style=\"background: #E57AA8\">Marco</span></div>\n              </div>\n              <div class=\"fx-thread\" onMouseEnter=\"{{fEnter.thread}}\" onMouseLeave=\"{{fLeaveEl}}\">\n                <div class=\"fx-th\">Comments<span>{{fx.cmCount}}</span></div>\n                <div class=\"fx-cms\" ref=\"{{fx.cmsRef}}\">\n                  <sc-for list=\"{{fx.comments}}\" as=\"m\" hint-placeholder-count=\"3\">\n                    <div class=\"fx-cmi {{m.cls}}\"><span class=\"fx-av\" style=\"background: {{m.ac}}\">{{m.ai}}</span><div style=\"min-width: 0\"><div class=\"fx-cmh\"><b>{{m.n}}</b><span>{{m.time}}</span></div><p>{{m.text}}</p><button class=\"fx-rx {{m.rxCls}}\" onClick=\"{{m.react}}\"><svg class=\"ic\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 11v9H4v-9zM7 11l4-7a2 2 0 0 1 2.6 2.3L13 10h5.5a2 2 0 0 1 2 2.4l-1.3 6A2 2 0 0 1 17.2 20H7\"></path></svg>{{m.rx}}</button></div></div>\n                  </sc-for>\n                  <div class=\"fx-tyl\"><span class=\"fx-ty\"><i></i><i></i><i></i></span>Lena is typing…</div>\n                </div>\n                <div class=\"fx-reply\" onMouseEnter=\"{{fEnter.reply}}\"><input type=\"text\" value=\"{{fx.draft}}\" onChange=\"{{fx.onDraft}}\" onKeyDown=\"{{fx.onDraftKey}}\" placeholder=\"Reply… use @ to mention\" aria-label=\"Write a comment\"><button class=\"fx-send {{fx.sendCls}}\" onClick=\"{{fx.send}}\" aria-label=\"Send comment\"><svg class=\"ic\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 2.2\"><path d=\"M4 12l16-8-6 16-2.5-6.5z\"></path></svg></button></div>\n              </div>\n            </div>\n            </sc-if>\n\n            <!-- ===== screen 4: customization ===== -->\n            <sc-if value=\"{{fx.s3}}\" hint-placeholder-val=\"{{false}}\">\n            <div class=\"fx-scr fx-cu\">\n              <div class=\"fx-set\">\n                <div class=\"fx-sg\" onMouseEnter=\"{{fEnter.accent}}\" onMouseLeave=\"{{fLeaveEl}}\"><div class=\"fx-sl\">Accent color<span>{{fx.accName}}</span></div><div class=\"fx-acc\"><sc-for list=\"{{fx.accents}}\" as=\"a\" hint-placeholder-count=\"6\"><button class=\"fx-ac {{a.cls}}\" style=\"background: {{a.c}}\" onClick=\"{{a.pick}}\" aria-label=\"{{a.name}}\"></button></sc-for></div></div>\n                <div class=\"fx-sg\" onMouseEnter=\"{{fEnter.theme}}\" onMouseLeave=\"{{fLeaveEl}}\"><div class=\"fx-sl\">Theme</div><div class=\"fx-dens\"><sc-for list=\"{{fx.themes}}\" as=\"t\" hint-placeholder-count=\"3\"><button class=\"{{t.cls}}\" onClick=\"{{t.pick}}\">{{t.name}}</button></sc-for></div></div>\n                <div class=\"fx-sg\" onMouseEnter=\"{{fEnter.density}}\" onMouseLeave=\"{{fLeaveEl}}\"><div class=\"fx-sl\">Density</div><div class=\"fx-dens\"><button class=\"{{fx.dCom}}\" onClick=\"{{fx.setComfy}}\">Comfortable</button><button class=\"{{fx.dCmp}}\" onClick=\"{{fx.setCompact}}\">Compact</button></div></div>\n                <div class=\"fx-sg\" onMouseEnter=\"{{fEnter.radius}}\" onMouseLeave=\"{{fLeaveEl}}\"><div class=\"fx-sl\">Corner radius<span>{{fx.rad}}px</span></div><input class=\"fx-range\" type=\"range\" min=\"0\" max=\"20\" step=\"1\" value=\"{{fx.rad}}\" onChange=\"{{fx.onRad}}\" aria-label=\"Corner radius\" style=\"accent-color: {{fx.acc}}\"></div>\n                <div class=\"fx-sg\" onMouseEnter=\"{{fEnter.toggles}}\" onMouseLeave=\"{{fLeaveEl}}\">\n                  <button class=\"fx-tgr\" onClick=\"{{fx.toggleWe}}\">Show weekends<span class=\"fx-sw2 {{fx.weCls}}\" style=\"background: {{fx.weBg}}\"></span></button>\n                  <button class=\"fx-tgr\" onClick=\"{{fx.toggleProg}}\">Show progress<span class=\"fx-sw2 {{fx.progCls}}\" style=\"background: {{fx.progBg}}\"></span></button>\n                </div>\n              </div>\n              <div class=\"fx-prev\" style=\"background: {{fx.pv.bg}}\" onMouseEnter=\"{{fEnter.preview}}\" onMouseLeave=\"{{fLeaveEl}}\">\n                <div class=\"fx-pvl\" style=\"color: {{fx.pv.mut}}\"><i style=\"background: {{fx.acc}}\"></i>Live preview</div>\n                <div class=\"fx-pc {{fx.denCls}}\" style=\"background: {{fx.pv.card}}; color: {{fx.pv.text}}; border-color: {{fx.pv.line}}; border-radius: {{fx.radPx}}\">\n                  <div class=\"fx-pch\">\n                    <div><div class=\"fx-pcm\" style=\"color: {{fx.pv.mut}}\">Tuesday, January 13</div><div class=\"fx-pct hd\">Good morning, Franklin</div></div>\n                    <span class=\"fx-pbtn\" style=\"background: {{fx.acc}}; border-radius: {{fx.radSm}}\">+ New task</span>\n                  </div>\n                  <sc-for list=\"{{fx.pvTasks}}\" as=\"q\" hint-placeholder-count=\"3\">\n                    <div class=\"fx-pr\" style=\"border-color: {{fx.pv.line}}\"><span class=\"fx-pbx\" style=\"background: {{q.bxBg}}; border-color: {{q.bxBd}}; border-radius: {{fx.radXs}}\"><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.6\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span><span class=\"{{q.cls}}\">{{q.t}}</span><span class=\"fx-ptag\" style=\"background: {{fx.accSoft}}; color: {{fx.accText}}; border-radius: {{fx.radSm}}\">{{q.tag}}</span></div>\n                  </sc-for>\n                  <sc-if value=\"{{fx.prog}}\" hint-placeholder-val=\"{{true}}\">\n                    <div class=\"fx-pp\"><div class=\"fx-ppl\"><span>Sprint progress</span><span style=\"color: {{fx.pv.mut}}\">2 of 3 done</span></div><div class=\"fx-ppt\" style=\"background: {{fx.pv.track}}\"><i style=\"background: {{fx.acc}}\"></i></div></div>\n                  </sc-if>\n                  <div class=\"fx-pw\" style=\"grid-template-columns: repeat({{fx.wkN}}, minmax(0, 1fr))\">\n                    <sc-for list=\"{{fx.week}}\" as=\"w\" hint-placeholder-count=\"7\">\n                      <div class=\"fx-pwd\" style=\"background: {{fx.pv.track}}; border-radius: {{fx.radSm}}\"><span style=\"color: {{fx.pv.mut}}\">{{w.d}}</span><i style=\"height: {{w.h}}; background: {{fx.acc}}; opacity: {{w.o}}\"></i></div>\n                    </sc-for>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </sc-if>\n          </div>\n\n          <div class=\"cur {{fCurCls}}\" ref=\"{{fCurRef}}\" aria-hidden=\"true\">\n            <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\"><path d=\"M3 3 L25 11 L14.5 14.5 L11 25 Z\" fill=\"#F9B12E\" stroke=\"#C98A12\" stroke-width=\"1.2\" stroke-linejoin=\"round\"></path></svg>\n            <div class=\"tip {{fTipCls}}\">{{fx.tip}}</div>\n          </div>\n        </div>\n\n        <div class=\"fx-fl ff1 {{fx.liveCls}}\" aria-hidden=\"true\"><div ref=\"{{fx.f1Ref}}\"><div class=\"fx-flc\">\n          <span class=\"fx-dia\"></span>\n          <div><div class=\"fx-ft\">{{fx.chipT}}</div><div class=\"fx-fs\">{{fx.chipS}}</div></div>\n        </div></div></div>\n        <div class=\"fx-fl ff2 {{fx.liveCls}}\" aria-hidden=\"true\"><div ref=\"{{fx.f2Ref}}\"><div class=\"fx-flc\">\n          <div class=\"fx-toast {{fx.toastSw}}\"><span class=\"fx-ok\"><svg class=\"ic\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" style=\"stroke-width: 2.8\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span><div><div class=\"fx-ft\">{{fx.toastT}}</div><div class=\"fx-fs\">{{fx.toastS}}</div></div></div>\n        </div></div></div>\n        <div class=\"fx-floor\" aria-hidden=\"true\"></div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"sep\"></div>\n</section>\n\n<!-- ================= INTEGRATIONS ================= -->\n<section id=\"platform\" class=\"ix\">\n  <div class=\"x-ix-grid\" aria-hidden=\"true\"></div>\n  <div class=\"rv {{rv.integr}}\" data-rv=\"integr\" ref=\"{{rvRef}}\" style=\"position: relative\">\n    <div class=\"x-ix-eyb\">Integrations</div>\n    <h2 class=\"hd\" style=\"margin: 14px 0 0; font-size: clamp(32px, 3.8vw, 50px); line-height: 1.12; font-weight: 700; letter-spacing: -.02em; color: #DCF5EE\">Integration Ecosystem</h2>\n    <p class=\"x-ix-lead\">Experience Seamless Collaboration: Unleash the Potential of Our Integration Ecosystem</p>\n\n    <div class=\"x-st {{ix.touchedCls}}\">\n      <svg class=\"x-lines\" viewBox=\"0 0 1180 470\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\">\n        <defs><linearGradient id=\"ixg-main\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#F9B12E\" stop-opacity=\"0\"></stop><stop offset=\".7\" stop-color=\"#F9B12E\"></stop><stop offset=\"1\" stop-color=\"#FFE6AE\"></stop></linearGradient></defs>\n        <path class=\"x-base\" d=\"M82 170 H520 C565 170 590 185 590 222 C590 290 400 262 400 330\"></path>\n        <path class=\"x-base\" d=\"M1098 170 H660 C615 170 590 185 590 222 C590 290 780 262 780 330\"></path>\n        <path class=\"x-flow\" pathLength=\"1000\" d=\"M82 170 H520 C565 170 590 185 590 222 C590 290 400 262 400 330\"></path>\n        <path class=\"x-flow x-rgt\" pathLength=\"1000\" d=\"M1098 170 H660 C615 170 590 185 590 222 C590 290 780 262 780 330\"></path>\n        <circle class=\"x-joint x-y\" cx=\"590\" cy=\"236\" r=\"4\"></circle>\n        <circle class=\"x-joint\" cx=\"400\" cy=\"330\" r=\"4\"></circle>\n        <circle class=\"x-joint\" cx=\"780\" cy=\"330\" r=\"4\"></circle>\n      </svg>\n\n      <!-- hub -->\n      <div class=\"x-pt x-pulse\" style=\"left: 50%; top: calc(170 / 470 * 100%)\"></div>\n      <div class=\"x-pt x-pulse x-d\" style=\"left: 50%; top: calc(170 / 470 * 100%)\"></div>\n      <div class=\"x-pt x-hub\" style=\"left: 50%; top: calc(170 / 470 * 100%)\">\n        <svg width=\"64\" height=\"64\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"x-orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n      </div>\n\n      <!-- feature chips on the inbound lines -->\n      <div class=\"x-pt x-chip {{ix.lsw}}\" style=\"left: calc(290 / 1180 * 100%); top: calc(170 / 470 * 100%)\"><i>\n        <sc-if value=\"{{ix.lIs.0}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></sc-if>\n        <sc-if value=\"{{ix.lIs.1}}\" hint-placeholder-val=\"{{true}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></sc-if>\n        <sc-if value=\"{{ix.lIs.2}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></sc-if>\n      </i>{{ix.L.l1}}</div>\n      <div class=\"x-pt x-chip {{ix.rsw}}\" style=\"left: calc(890 / 1180 * 100%); top: calc(170 / 470 * 100%)\"><i>\n        <sc-if value=\"{{ix.rIs.0}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></sc-if>\n        <sc-if value=\"{{ix.rIs.1}}\" hint-placeholder-val=\"{{true}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></sc-if>\n        <sc-if value=\"{{ix.rIs.2}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></sc-if>\n      </i>{{ix.R.l1}}</div>\n\n      <!-- outcome cards -->\n      <div class=\"x-pt x-res {{ix.lsw}}\" style=\"left: calc(400 / 1180 * 100%); top: calc(398 / 470 * 100%)\">\n        <div class=\"x-rk\">{{ix.L.name}}</div>\n        <div class=\"x-rt\">{{ix.L.l2}}</div>\n        <div class=\"x-ro\"><span><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" style=\"stroke-width: 3.4\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>{{ix.L.l3}}</div>\n      </div>\n      <div class=\"x-pt x-res {{ix.rsw}}\" style=\"left: calc(780 / 1180 * 100%); top: calc(398 / 470 * 100%)\">\n        <div class=\"x-rk\">{{ix.R.name}}</div>\n        <div class=\"x-rt\">{{ix.R.l2}}</div>\n        <div class=\"x-ro\"><span><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" style=\"stroke-width: 3.4\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>{{ix.R.l3}}</div>\n      </div>\n\n      <!-- icon columns -->\n      <div class=\"x-col x-l\">\n        <button class=\"{{ix.lic.0}}\" onClick=\"{{ix.lPick.0}}\" data-name=\"Team chat\" aria-label=\"Team chat\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></button>\n        <button class=\"{{ix.lic.1}}\" onClick=\"{{ix.lPick.1}}\" data-name=\"Video meetings\" aria-label=\"Video meetings\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></button>\n        <button class=\"{{ix.lic.2}}\" onClick=\"{{ix.lPick.2}}\" data-name=\"Call recording\" aria-label=\"Call recording\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></button>\n        <div class=\"x-hint\">Pick one</div>\n      </div>\n      <div class=\"x-col x-r\">\n        <button class=\"{{ix.ric.0}}\" onClick=\"{{ix.rPick.0}}\" data-name=\"Voice notes\" aria-label=\"Voice notes\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></button>\n        <button class=\"{{ix.ric.1}}\" onClick=\"{{ix.rPick.1}}\" data-name=\"Cloud files\" aria-label=\"Cloud files\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></button>\n        <button class=\"{{ix.ric.2}}\" onClick=\"{{ix.rPick.2}}\" data-name=\"Social publishing\" aria-label=\"Social publishing\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></button>\n        <div class=\"x-hint\">Pick one</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"sep\"></div>\n\n<!-- ================= PRICING ================= -->\n<section id=\"pricing\" style=\"position: relative; padding: 110px 0 130px; text-align: center\">\n  <div class=\"wrap rv {{rv.pricing}}\" data-rv=\"pricing\" ref=\"{{rvRef}}\">\n    <div class=\"eyb\">Pricing</div>\n    <h2 class=\"h2\">From Freelancers To Corporations</h2>\n    <p class=\"lead\" style=\"max-width: 640px\">Transform Your Workflow with Confidence – Try TaskHub Free for One Month!</p>\n    <div class=\"bill\">\n      <button class=\"bl {{billM}}\" onClick=\"{{setMonthly}}\">Monthly</button>\n      <button class=\"tg {{billT}}\" onClick=\"{{toggleBill}}\" aria-label=\"Annual billing\" aria-pressed=\"{{annual}}\"></button>\n      <button class=\"bl {{billA}}\" onClick=\"{{setAnnual}}\">Annual</button>\n    </div>\n    <div class=\"plans\">\n      <sc-for list=\"{{plans}}\" as=\"p\" hint-placeholder-count=\"3\">\n        <div class=\"plan\" onMouseMove=\"{{p.move}}\">\n          <span class=\"pedge\"></span>\n          <h3 class=\"hd\" style=\"margin: 0; font-size: 27px; font-weight: 600; color: #F3F4F8\">{{p.name}}</h3>\n          <div style=\"display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; margin-top: 18px\">\n            <div style=\"display: flex; align-items: flex-start; gap: 2px\">\n              <span style=\"font-size: 20px; font-weight: 800; margin-top: 4px\">$</span>\n              <span class=\"hd pnum {{p.sw}}\" style=\"font-size: 50px; font-weight: 800; line-height: 1\">{{p.price}}</span>\n              <span style=\"align-self: flex-end; font-size: 15px; font-weight: 700; color: #F3F4F8; margin: 0 0 5px 5px\">{{p.per}}</span>\n            </div>\n            <span class=\"save {{p.saveCls}}\">save 30%</span>\n          </div>\n          <p style=\"margin: 16px 0 0; font-size: 15px; line-height: 1.5; color: #A6A8BF; min-height: 45px\">{{p.desc}}</p>\n          <div style=\"display: flex; flex-direction: column; gap: 16px; margin-top: 26px\">\n            <sc-for list=\"{{p.feats}}\" as=\"f\" hint-placeholder-count=\"3\">\n              <div class=\"feat\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M8 12.5l2.7 2.7L16 10\"></path></svg>{{f}}</div>\n            </sc-for>\n          </div>\n          <div style=\"margin: 24px 0 32px; min-height: 22px; font-size: 15px; font-weight: 600; color: #D9DAE6\">{{p.people}}</div>\n          <a class=\"btn-y\" href=\"#top\">Start free trial</a>\n        </div>\n      </sc-for>\n    </div>\n  </div>\n</section>\n\n<!-- ================= TESTIMONIALS ================= -->\n<section id=\"teams\" class=\"tc\">\n  <div class=\"rv {{rv.testi}}\" data-rv=\"testi\" ref=\"{{rvRef}}\">\n  <div class=\"t-sep\" aria-hidden=\"true\"></div>\n  <div class=\"t-glow\" aria-hidden=\"true\"></div>\n  <div class=\"t-eyb\">Testimonials</div>\n  <h2 class=\"hd\" style=\"margin: 14px 0 0; font-size: clamp(32px, 3.6vw, 48px); line-height: 1.12; font-weight: 700; letter-spacing: -.02em; color: #DCF5EE\">Join 15,000+ Happy Customers</h2>\n  <div style=\"margin-top: 18px\"><span class=\"t-stars\"><span class=\"t-stack\"><i style=\"background: #F59E6B\"></i><i style=\"background: #7C8CF8\"></i><i style=\"background: #5EC4B6\"></i><i style=\"background: #E57AA8\"></i></span>Teams of every size plan with TaskHub</span></div>\n\n  <div class=\"t-stage\">\n    <!-- inner orbit -->\n    <div class=\"t-ring t-r1\" aria-hidden=\"false\">\n      <div class=\"t-flat\">\n        <div class=\"t-circle\"></div>\n        <div class=\"t-spin\">\n          <sc-for list=\"{{tc.inner}}\" as=\"p\" hint-placeholder-count=\"3\">\n            <div class=\"t-slot\" style=\"transform: {{p.pos}}\"><div class=\"t-unspin\"><div class=\"t-up\">\n              <span class=\"t-av {{p.cls}}\" style=\"background: {{p.c}}\" aria-hidden=\"true\">{{p.i}}<span class=\"t-nm\">{{p.first}}</span></span>\n            </div></div></div>\n          </sc-for>\n          <div class=\"t-slot\" style=\"transform: rotate(90deg) translateX(400px)\"><div class=\"t-unspin\"><div class=\"t-up\"><span class=\"t-dot\"></span></div></div></div>\n          <div class=\"t-slot\" style=\"transform: rotate(210deg) translateX(400px)\"><div class=\"t-unspin\"><div class=\"t-up\"><span class=\"t-dot t-w\"></span></div></div></div>\n        </div>\n      </div>\n    </div>\n    <!-- outer orbit -->\n    <div class=\"t-ring t-r2\">\n      <div class=\"t-flat\">\n        <div class=\"t-circle\"></div>\n        <div class=\"t-spin\">\n          <sc-for list=\"{{tc.outer}}\" as=\"p\" hint-placeholder-count=\"3\">\n            <div class=\"t-slot\" style=\"transform: {{p.pos}}\"><div class=\"t-unspin\"><div class=\"t-up\">\n              <span class=\"t-av {{p.cls}}\" style=\"background: {{p.c}}\" aria-hidden=\"true\">{{p.i}}<span class=\"t-nm\">{{p.first}}</span></span>\n            </div></div></div>\n          </sc-for>\n          <div class=\"t-slot\" style=\"transform: rotate(30deg) translateX(600px)\"><div class=\"t-unspin\"><div class=\"t-up\"><span class=\"t-dot t-w\"></span></div></div></div>\n          <div class=\"t-slot\" style=\"transform: rotate(270deg) translateX(600px)\"><div class=\"t-unspin\"><div class=\"t-up\"><span class=\"t-dot\"></span></div></div></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- review card -->\n    <div class=\"t-card\">\n      <span class=\"t-qm\" aria-hidden=\"true\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\"><path d=\"M9.5 6C6.5 7.2 4.5 9.8 4.5 13.3V18h6v-6H7.6c.2-1.9 1.3-3.4 3.2-4.3zM19 6c-3 1.2-5 3.8-5 7.3V18h6v-6h-2.9c.2-1.9 1.3-3.4 3.2-4.3z\" fill=\"currentColor\"></path></svg></span>\n      <div class=\"{{tc.sw}}\">\n        <p class=\"t-qt\">{{tc.T.q}}</p>\n        <div class=\"t-who\"><span class=\"t-mini\" style=\"background: {{tc.T.c}}\">{{tc.T.i}}</span><div><b>{{tc.T.n}}</b><span>{{tc.T.role}}</span></div></div>\n      </div>\n      <div class=\"t-ctrl\">\n        <button class=\"t-arr\" onClick=\"{{tc.prev}}\" aria-label=\"Previous review\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M19 12H5M11 6l-6 6 6 6\"></path></svg></button>\n        <div class=\"t-dots\">\n          <sc-for list=\"{{tc.dots}}\" as=\"d\" hint-placeholder-count=\"6\"><span class=\"t-dt {{d.cls}}\" aria-hidden=\"true\"><i></i></span></sc-for>\n        </div>\n        <button class=\"t-arr\" onClick=\"{{tc.next}}\" aria-label=\"Next review\"><svg class=\"ic\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></button>\n      </div>\n    </div>\n  </div>\n  </div>\n</section>\n\n<!-- ================= CTA ================= -->\n<section class=\"cta\">\n  <div class=\"wrap rv {{rv.cta}}\" data-rv=\"cta\" ref=\"{{rvRef}}\" style=\"position: relative; display: flex; flex-direction: column; align-items: center\">\n    <svg class=\"logo-ic cta-logo\" width=\"64\" height=\"64\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n    <div class=\"hd\" style=\"margin-top: 16px; font-size: 24px; font-weight: 800; letter-spacing: -.02em\">TaskHub</div>\n    <h2 class=\"h2\" style=\"margin-top: 40px\">Experience The Difference.<br>Request Your Demo Today!</h2>\n    <a class=\"btn-y\" href=\"#pricing\" style=\"margin-top: 32px\">Start free trial</a>\n  </div>\n</section>\n\n<!-- ================= FOOTER ================= -->\n<footer style=\"border-top: 1px solid rgba(255,255,255,.06); padding: 56px 0 48px\">\n  <div class=\"wrap\" style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 48px\">\n    <div style=\"display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 150px\">\n      <a class=\"logo-link\" href=\"#top\" style=\"display: flex; align-items: center; gap: 10px; text-decoration: none; color: #F3F4F8\">\n        <svg class=\"logo-ic\" width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n        <span class=\"hd\" style=\"font-size: 19px; font-weight: 800; letter-spacing: -.02em\">TaskHub</span>\n      </a>\n      <span style=\"font-size: 12.5px; color: #C9CBDB\">TaskHub Inc.</span>\n    </div>\n    <div style=\"display: flex; flex-wrap: wrap; gap: 56px 72px\">\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Resources</h4>\n        <a class=\"fl\" href=\"#top\">About Us</a><a class=\"fl\" href=\"#top\">Media Center</a><a class=\"fl\" href=\"#top\">Blog</a><a class=\"fl\" href=\"#top\">Career</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Product</h4>\n        <a class=\"fl\" href=\"#features\">Insights</a><a class=\"fl\" href=\"#platform\">Integrations</a><a class=\"fl\" href=\"#top\">Pixel</a><a class=\"fl\" href=\"#pricing\">Pricing</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Solutions</h4>\n        <a class=\"fl\" href=\"#teams\">TaskHub Teams</a><a class=\"fl\" href=\"#top\">Knowledge Base</a><a class=\"fl\" href=\"#top\">Trust Center</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Company</h4>\n        <a class=\"fl\" href=\"#top\">About Us</a><a class=\"fl\" href=\"#top\">Careers</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"fword\" aria-hidden=\"true\">TaskHub</div>\n</footer>\n\n</div>",
  define: function (DCLogic) {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'calendar', tipN: 0, tracking: false, flip: false, placed: false, nav: 'dashboard',
      tasks: [
        { t: 'Email Management', d: true },
        { t: 'Inventory Check', d: true },
        { t: 'Social Media Engagement', d: false },
        { t: 'Data Entry', d: false },
        { t: 'Meeting Preparation', d: false }
      ],
      events: { 2: 1, 3: 1, 4: 1, 5: 1, 16: 1, 17: 1, 18: 1 },
      joined: false,
      target: Date.now() + ((24 + 8) * 60 + 26) * 60000 + 59000,
      now: Date.now(),
      tab: 0, tabN: 0, day: 6, q: '',
      lSel: 1, lWrap: -1, lN: 0, rSel: 1, rWrap: -1, rN: 0,
      annual: true, billN: 0,
      tIdx: 0, tN: 0, tPaused: false,
      seen: {}, touched: false,
      fHover: 'rest', fTipN: 0, fTrack: false, fFlip: false, fPlaced: false
    };
    Object.assign(this.state, {
      hHover: 'calendar', hTipN: 0, hTrack: false, hFlip: false, hPlaced: false, hJoined: false, hPar: false,
      hEvents: { 2: 1, 3: 1, 4: 1, 5: 1, 16: 1, 17: 1, 18: 1 },
      hTasks: [
        { t: 'Email management', d: true, tag: 'Ops', bg: 'rgba(124,140,248,.16)', fg: '#A9B3FF' },
        { t: 'Inventory check', d: true, tag: 'Ops', bg: 'rgba(124,140,248,.16)', fg: '#A9B3FF' },
        { t: 'Social media engagement', d: true, tag: 'Social', bg: 'rgba(229,122,168,.16)', fg: '#F2A6C8' },
        { t: 'Data entry', d: false, tag: 'Data', bg: 'rgba(94,196,182,.16)', fg: '#8FE0D4' },
        { t: 'Meeting preparation', d: false, tag: 'Meetings', bg: 'rgba(249,177,46,.16)', fg: '#F9C96B' }
      ],
      hToastTitle: 'Inventory check completed', hToastSub: 'by Franklin · 2 min ago', hToastN: 0,
      fBars: [
        { name: 'Horizon', s: 0, e: 5, pct: 70, ai: 'FS', ac: '#F59E6B' },
        { name: 'Atlas', s: 1, e: 4, pct: 100, ai: 'LP', ac: '#5EC4B6' },
        { name: 'Phoenix', s: 5, e: 10, pct: 35, ai: 'AO', ac: '#7C8CF8' },
        { name: 'SkyForge', s: 7, e: 12, pct: 20, ai: 'MV', ac: '#E57AA8' },
        { name: 'Nimbus', s: 10, e: 13, pct: 0, ai: 'PN', ac: '#B79CFA' }
      ],
      fDragI: -1, fDragged: false, fPal: 0, fDense: false, fPar: false,
      fToastT: 'Atlas marked as done', fToastS: 'by Lena · 5 min ago', fToastN: 0,
      fCards: [
        { id: 1, t: 'Draft Q1 roadmap', tag: 'Planning', col: 0, ai: 'FS', ac: '#F59E6B', due: 'Jan 14' },
        { id: 2, t: 'Data entry', tag: 'Data', col: 0, ai: 'PN', ac: '#B79CFA', due: 'Jan 15' },
        { id: 3, t: 'Inventory check', tag: 'Ops', col: 1, ai: 'LP', ac: '#5EC4B6', due: 'Jan 13' },
        { id: 4, t: 'Design sync prep', tag: 'Meetings', col: 1, ai: 'AO', ac: '#7C8CF8', due: 'Jan 13' },
        { id: 5, t: 'Landing page copy', tag: 'Marketing', col: 1, ai: 'MV', ac: '#E57AA8', due: 'Jan 16' },
        { id: 6, t: 'Social media calendar', tag: 'Social', col: 2, ai: 'MV', ac: '#E57AA8', due: 'Jan 12' },
        { id: 7, t: 'Email management', tag: 'Ops', col: 3, ai: 'FS', ac: '#F59E6B', due: 'Jan 09' },
        { id: 8, t: 'Atlas kickoff', tag: 'Planning', col: 3, ai: 'LP', ac: '#5EC4B6', due: 'Jan 08' }
      ],
      fDragCard: null, fOver: -1, fBoardTouched: false, fGx: 0, fGy: 0, fGw: 0,
      fComments: [
        { n: 'Marco', ai: 'MV', ac: '#E57AA8', time: '12 min ago', text: 'Can we start Phoenix a day earlier? Design is ready on our side.', rx: 2, mine: false },
        { n: 'Amara', ai: 'AO', ac: '#7C8CF8', time: '8 min ago', text: 'Works for me, I will move the kickoff to Jan 10.', rx: 1, mine: false },
        { n: 'Lena', ai: 'LP', ac: '#5EC4B6', time: '2 min ago', text: '@Franklin can you confirm the launch date before Friday?', rx: 0, mine: false }
      ],
      fDraft: '', fNewN: 0, fChk: [true, false, false],
      fAcc: 0, fTheme: 0, fDen: false, fRad: 12, fWe: true, fProg: true
    });
    this.tips = {
      profile: 'Your profile, status and workspace settings in one place.',
      dashboard: 'Your home base: everything due today at a glance.',
      project: 'Browse every project with its owners and progress.',
      calnav: 'Open the full calendar with all team events.',
      mytasks: 'Only what is assigned to you, sorted by priority.',
      meeting: 'A live countdown to your next call. Join in one click.',
      calendar: 'View events, set reminders, and never miss a beat. Simplify your schedule with just a click.',
      tasks: 'Tick off today’s tasks or add a new one on the fly.',
      projects: 'Live progress for every active project.'
    };
    this.L = [
      { l1: 'Instant team messaging', l2: 'Turn Messages into Tasks', l3: 'Never Lose a Conversation' },
      { l1: 'Effortless meeting scheduling', l2: 'Organize Meetings Instantly', l3: 'Seamlessly Connect with Ease' },
      { l1: 'Automatic call recording', l2: 'Share Recaps in One Click', l3: 'Catch Up in Minutes' }
    ];
    this.R = [
      { l1: 'Voice notes on any task', l2: 'Record Updates Hands-free', l3: 'Say It Once - Save Time' },
      { l1: 'Creative File Management', l2: 'Effortless Team File Collaboration', l3: 'Boost Productivity - Intuitive File Access' },
      { l1: 'Social publishing calendar', l2: 'Plan Posts with Your Team', l3: 'Grow Your Reach Faster' }
    ];
    this.people = [
      { n: 'Franklin Sierra', i: 'FS', c: '#F59E6B', q: 'Keeps me on top of deadlines with ease. Highly recommended!' },
      { n: 'Amara Okafor', i: 'AO', c: '#7C8CF8', q: 'Our whole studio moved over in a week. Planning finally feels calm.' },
      { n: 'Lena Park', i: 'LP', c: '#5EC4B6', q: 'The calendar and task views replaced three other tools for us.' },
      { n: 'Marco Vidal', i: 'MV', c: '#E57AA8', q: 'Meetings, files and tasks finally live in one place.' },
      { n: 'Priya Nair', i: 'PN', c: '#B79CFA', q: 'I can see every project’s progress without chasing anyone.' },
      { n: 'Tom Becker', i: 'TB', c: '#F9C96B', q: 'Simple enough for freelancers, powerful enough for our team.' }
    ];
    this.enter = {};
    this.navPick = {};
    ['profile', 'dashboard', 'project', 'calnav', 'mytasks', 'meeting', 'calendar', 'tasks', 'projects'].forEach((k) => {
      this.enter[k] = () => this.setHover(k);
      this.navPick[k] = () => this.setState({ nav: k });
    });
    this.leaveEl = () => this.setHover(null);
    // ---- hero (concept) ----
    this.hTips = {
      search: 'Jump to any project, task or person in a keystroke.',
      meeting: 'Live countdown to your next call. Join in one click.',
      calendar: 'View events, set reminders, and never miss a beat. Simplify your schedule with just a click.',
      focus: 'Your daily progress, updating as you tick things off.',
      tasks: 'Tick a task off and the whole dashboard updates.',
      timeline: 'Every project on one live timeline.'
    };
    this.hEnter = {};
    ['search', 'meeting', 'calendar', 'focus', 'tasks', 'timeline', 'bar0', 'bar1', 'bar2', 'bar3'].forEach((k) => { this.hEnter[k] = () => this.hSetHover(k); });
    this.hLeave = () => this.hSetHover(null);
    this.heroRef = (el) => { this.heroEl = el; };
    this.wrapRef = (el) => { this.wrapEl = el; };
    this.winRef = (el) => { this.winEl = el; };
    this.hCalRef = (el) => { this.hCalEl = el; };
    this.hCurRef = (el) => { this.hCurEl = el; };
    this.f1Ref = (el) => { this.hf1 = el; };
    this.f2Ref = (el) => { this.hf2 = el; };
    this.f3Ref = (el) => { this.hf3 = el; };
    this.onHeroMove = this.onHeroMove.bind(this);
    this.onHeroLeave = this.onHeroLeave.bind(this);
    this.onWinMove = this.onWinMove.bind(this);
    this.onWinLeave = this.onWinLeave.bind(this);
    this.placeHRest = this.placeHRest.bind(this);
    this.hToggleJoin = () => this.setState((s) => ({ hJoined: !s.hJoined }));
    // ---- features (timeline app) ----
    this.fxStageRef = (el) => { this.fxStage = el; };
    this.fxWinRef = (el) => { this.fxWin = el; };
    this.fxF1Ref = (el) => { this.fxF1 = el; };
    this.fxF2Ref = (el) => { this.fxF2 = el; };
    this.laneRef = (el) => { this.laneEl = el; };
    this.onFxMove = this.onFxMove.bind(this);
    this.onFxLeave = this.onFxLeave.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragUp = this.onDragUp.bind(this);
    this.palNames = ['Classic', 'Ocean', 'Sunset', 'Mono'];
    this.pals = [
      ['#F9B12E', '#5EC4B6', '#8E87CF', '#E57AA8', '#7C8CF8'],
      ['#5EB1F7', '#4ED3C5', '#7C8CF8', '#9AA8FF', '#3C7BE8'],
      ['#FF8A5B', '#F9B12E', '#FF6F91', '#FFC75F', '#E57AA8'],
      ['#E6E7F0', '#C9CBDB', '#A6A8BF', '#8C8EA6', '#B9BBCF']
    ];
    this.palPick = [0, 1, 2, 3].map((i) => () => { if (i !== this.state.fPal) this.setState((s) => ({ fPal: i, fToastT: 'Theme set to ' + this.palNames[i], fToastS: 'Appearance · just now', fToastN: s.fToastN + 1 })); });
    this.setComfy = () => this.setState({ fDense: false });
    this.setCompact = () => this.setState({ fDense: true });
    this.fe = (k) => { if (!this.fEnter) this.fEnter = {}; if (!this.fEnter[k]) this.fEnter[k] = () => this.setFHover(k); return this.fEnter[k]; };
    ['doc', 'thread', 'reply', 'accent', 'theme', 'density', 'radius', 'toggles', 'preview'].forEach((k) => this.fe(k));
    this.colNames = ['To do', 'In progress', 'Review', 'Done'];
    this.tagCol = { Planning: '#F9B12E', Data: '#5EC4B6', Ops: '#7C8CF8', Meetings: '#B79CFA', Marketing: '#FF8A5B', Social: '#E57AA8' };
    this.boardRef = (el) => { this.boardEl = el; };
    this.ghostRef = (el) => { this.ghostEl = el; };
    this.cmsRef = (el) => { this.cmsEl = el; };
    this.onCardMove = this.onCardMove.bind(this);
    this.onCardUp = this.onCardUp.bind(this);
    this.segPick = [0, 1, 2, 3].map((i) => () => { if (i !== this.state.tab) this.setState((s) => ({ tab: i, tabN: s.tabN + 1 })); });
    this.onDraft = (e) => this.setState({ fDraft: (e && e.target && e.target.value) || '' });
    this.sendComment = () => {
      const t = (this.state.fDraft || '').trim();
      if (!t) return;
      this.setState((s) => ({ fDraft: '', fNewN: s.fNewN + 1,
        fComments: s.fComments.concat([{ n: 'You', ai: 'FS', ac: '#F59E6B', time: 'just now', text: t, rx: 0, mine: false, fresh: true }]),
        fToastT: 'Comment posted', fToastS: 'Phoenix · Launch brief', fToastN: s.fToastN + 1 }));
    };
    this.onDraftKey = (e) => { if (e && e.key === 'Enter') { if (e.preventDefault) e.preventDefault(); this.sendComment(); } };
    this.accents = [['Amber', '#F9B12E'], ['Coral', '#FF7A59'], ['Rose', '#E57AA8'], ['Violet', '#8E87CF'], ['Sky', '#5EB1F7'], ['Mint', '#4ED3C5']];
    this.themes = [
      { name: 'Midnight', bg: '#101122', card: '#1B1C33', text: '#F3F4F8', mut: '#8C8EA6', line: 'rgba(255,255,255,.08)', track: 'rgba(255,255,255,.08)' },
      { name: 'Graphite', bg: '#131315', card: '#222226', text: '#F2F2F3', mut: '#9A9AA2', line: 'rgba(255,255,255,.08)', track: 'rgba(255,255,255,.08)' },
      { name: 'Light', bg: '#E4E5EE', card: '#FFFFFF', text: '#17182A', mut: '#6F7190', line: 'rgba(15,16,32,.08)', track: 'rgba(15,16,32,.07)' }
    ];
    this.saved = (t) => this.setState((s) => ({ fToastT: t, fToastS: 'Appearance · saved', fToastN: s.fToastN + 1 }));
    this.accPick = this.accents.map((a, i) => () => { if (i !== this.state.fAcc) { this.setState({ fAcc: i }); this.saved('Accent set to ' + a[0]); } });
    this.themePick = this.themes.map((t, i) => () => { if (i !== this.state.fTheme) { this.setState({ fTheme: i }); this.saved(t.name + ' theme on'); } });
    this.setDenC = () => { if (this.state.fDen) { this.setState({ fDen: false }); this.saved('Comfortable density'); } };
    this.setDenK = () => { if (!this.state.fDen) { this.setState({ fDen: true }); this.saved('Compact density'); } };
    this.onRad = (e) => { const v = +((e && e.target && e.target.value) || 0); this.setState({ fRad: v }); };
    this.toggleWe = () => { const v = !this.state.fWe; this.setState({ fWe: v }); this.saved(v ? 'Weekends shown' : 'Weekends hidden'); };
    this.toggleProg = () => { const v = !this.state.fProg; this.setState({ fProg: v }); this.saved(v ? 'Progress shown' : 'Progress hidden'); };
    this.planMove = (e) => { const el = e.currentTarget; if (!el) return; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); };
    this.fEnter = this.fEnter || {};
    ['title', 'search', 'days', 'bar0', 'bar1', 'bar2', 'bar3', 'bar4', 'ms', 'today', 'panel'].forEach((k) => { this.fEnter[k] = () => this.setFHover(k); });
    this.fLeaveEl = () => this.setFHover(null);
    this.fRef = (el) => { this.fEl = el; };
    this.tlcRef = (el) => { this.tlcEl = el; };
    this.fCurRef = (el) => { this.fCurEl = el; };
    this.onFMove = this.onFMove.bind(this);
    this.onFLeave = this.onFLeave.bind(this);
    this.placeFRest = this.placeFRest.bind(this);
    this.demoRef = (el) => { this.demoEl = el; };
    this.calRef = (el) => { this.calEl = el; };
    this.curRef = (el) => { this.curEl = el; };
    this.rvRef = (el) => this.observe(el);
    this.onDemoMove = this.onDemoMove.bind(this);
    this.onDemoLeave = this.onDemoLeave.bind(this);
    this.placeRest = this.placeRest.bind(this);
    this.toggleJoin = () => this.setState((s) => ({ joined: !s.joined }));
    this.addTask = () => this.setState((s) => (s.tasks.length >= 7 ? null : { tasks: s.tasks.concat([{ t: 'New task ' + (s.tasks.length - 4), d: false }]) }));
    this.tabPick = [0, 1, 2, 3].map((i) => () => { if (i !== this.state.tab) this.setState((s) => ({ tab: i, tabN: s.tabN + 1 })); });
    this.dayPrev = () => this.setState((s) => ({ day: Math.max(1, s.day - 1) }));
    this.dayNext = () => this.setState((s) => ({ day: Math.min(12, s.day + 1) }));
    this.onSearch = (e) => this.setState({ q: (e && e.target && e.target.value) || '' });
    this.lPick = [0, 1, 2].map((i) => () => { this.userTouched(); this.pickSide('l', i); });
    this.rPick = [0, 1, 2].map((i) => () => { this.userTouched(); this.pickSide('r', i); });
    this.setMonthly = () => { if (this.state.annual) this.setState((s) => ({ annual: false, billN: s.billN + 1 })); };
    this.setAnnual = () => { if (!this.state.annual) this.setState((s) => ({ annual: true, billN: s.billN + 1 })); };
    this.toggleBill = () => this.setState((s) => ({ annual: !s.annual, billN: s.billN + 1 }));
    this.tPrev = () => this.goT(this.state.tIdx - 1);
    this.tNext = () => this.goT(this.state.tIdx + 1);
    this.tPicks = this.people.map((p, i) => () => this.goT(i));
    this.tPause = () => { clearInterval(this.auto); this.setState({ tPaused: true }); };
    this.tResume = () => { this.setState({ tPaused: false }); this.startAuto(); };
  }

  componentDidMount() {
    this.clock = setInterval(() => this.setState({ now: Date.now() }), 10000);
    this.startAuto();
    this.cycle = setInterval(() => {
      if (this.state.touched || !this.state.seen.integr) return;
      this.cycleSide = this.cycleSide === 'l' ? 'r' : 'l';
      const side = this.cycleSide;
      this.pickSide(side, (this.state[side + 'Sel'] + 1) % 3);
    }, 3200);
    this.t1 = setTimeout(this.placeRest, 60);
    this.t2 = setTimeout(this.placeRest, 1950);
    this.t5 = setTimeout(this.placeFRest, 80);
    this.t6 = setTimeout(this.placeFRest, 2000);
    window.addEventListener('resize', this.placeRest);
    window.addEventListener('resize', this.placeFRest);
    this.h1 = setTimeout(this.placeHRest, 80);
    this.h2 = setTimeout(this.placeHRest, 2300);
    window.addEventListener('resize', this.placeHRest);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.auto);
    clearInterval(this.cycle);
    clearTimeout(this.t1); clearTimeout(this.t2); clearTimeout(this.t3);
    clearTimeout(this.t4); clearTimeout(this.t5); clearTimeout(this.t6);
    window.removeEventListener('resize', this.placeRest);
    window.removeEventListener('resize', this.placeFRest);
    window.removeEventListener('resize', this.placeHRest);
    window.removeEventListener('mousemove', this.onDragMove);
    window.removeEventListener('mouseup', this.onDragUp);
    window.removeEventListener('mousemove', this.onCardMove);
    window.removeEventListener('mouseup', this.onCardUp);
    clearTimeout(this.h1); clearTimeout(this.h2); clearTimeout(this.h3);
    cancelAnimationFrame(this.hraf); cancelAnimationFrame(this.fraf);
    if (this.io) this.io.disconnect();
  }

  setFHover(k) {
    if (k === this.state.fHover) return;
    this.setState((s) => ({ fHover: k, fTipN: s.fTipN + 1 }));
  }

  onFMove(e) {
    if (!this.fEl || !this.fCurEl) return;
    const d = this.fEl.getBoundingClientRect();
    const x = e.clientX - d.left;
    const y = e.clientY - d.top;
    this.fCurEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = e.clientX > window.innerWidth - 270;
    const upd = {};
    if (!this.state.fTrack) { upd.fTrack = true; if (this.state.fHover === 'rest') upd.fHover = null; }
    if (!this.state.fPlaced) upd.fPlaced = true;
    if (flip !== this.state.fFlip) upd.fFlip = flip;
    if (Object.keys(upd).length) this.setState(upd);
  }

  onFLeave() {
    this.setState((s) => ({ fTrack: false, fHover: 'rest', fTipN: s.fTipN + 1 }));
    clearTimeout(this.t4);
    this.t4 = setTimeout(this.placeFRest, 30);
  }

  placeFRest() {
    if (this.state.fTrack || !this.fEl || !this.fCurEl) return;
    const d = this.fEl.getBoundingClientRect();
    if (!d.width) return;
    const x = d.width - 190;
    const y = d.height - 60;
    this.fCurEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = d.left + x > window.innerWidth - 270;
    if (flip !== this.state.fFlip || !this.state.fPlaced) this.setState({ fFlip: flip, fPlaced: true });
  }

  // ================= hero (concept) =================
  hSetHover(k) {
    if (k === this.state.hHover) return;
    this.setState((s) => ({ hHover: k, hTipN: s.hTipN + 1 }));
  }

  tilt(x, y, win, floats, deg) {
    if (win) win.style.transform = 'rotateX(' + (-y * deg[0]).toFixed(2) + 'deg) rotateY(' + (x * deg[1]).toFixed(2) + 'deg)';
    floats.forEach((p) => { if (p[0]) p[0].style.transform = 'translate3d(' + (-x * 34 * p[1]).toFixed(1) + 'px,' + (-y * 26 * p[1]).toFixed(1) + 'px,0)'; });
  }

  onHeroMove(e) {
    if (!this.heroEl) return;
    const r = this.heroEl.getBoundingClientRect();
    this.hpx = (e.clientX - r.left) / r.width - 0.5;
    this.hpy = (e.clientY - r.top) / r.height - 0.5;
    if (!this.state.hPar) this.setState({ hPar: true });
    if (this.hraf) return;
    this.hraf = requestAnimationFrame(() => { this.hraf = null; this.tilt(this.hpx || 0, this.hpy || 0, this.winEl, [[this.hf1, 1.2], [this.hf2, 1.6], [this.hf3, 0.9]], [5, 6]); });
  }

  onHeroLeave() {
    this.setState({ hPar: false });
    if (this.winEl) this.winEl.style.transform = '';
    [this.hf1, this.hf2, this.hf3].forEach((f) => { if (f) f.style.transform = ''; });
  }

  onWinMove(e) {
    if (!this.wrapEl || !this.hCurEl) return;
    const d = this.wrapEl.getBoundingClientRect();
    const x = e.clientX - d.left, y = e.clientY - d.top;
    this.hCurEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > d.width - 270;
    const upd = {};
    if (!this.state.hTrack) upd.hTrack = true;
    if (!this.state.hPlaced) upd.hPlaced = true;
    if (flip !== this.state.hFlip) upd.hFlip = flip;
    if (Object.keys(upd).length) this.setState(upd);
  }

  onWinLeave() {
    this.setState((s) => ({ hTrack: false, hHover: 'calendar', hTipN: s.hTipN + 1 }));
    clearTimeout(this.h3);
    this.h3 = setTimeout(this.placeHRest, 30);
  }

  placeHRest() {
    if (this.state.hTrack || !this.wrapEl || !this.hCalEl || !this.hCurEl) return;
    const d = this.wrapEl.getBoundingClientRect();
    const c = this.hCalEl.getBoundingClientRect();
    if (!d.width) return;
    const x = c.left - d.left + c.width * 0.18;
    const y = c.top - d.top + c.height * 0.82;
    this.hCurEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > d.width - 270;
    if (flip !== this.state.hFlip || !this.state.hPlaced) this.setState({ hFlip: flip, hPlaced: true });
  }

  // ================= features (timeline app) =================
  onFxMove(e) {
    if (!this.fxStage) return;
    const r = this.fxStage.getBoundingClientRect();
    this.fpx = (e.clientX - r.left) / r.width - 0.5;
    this.fpy = (e.clientY - r.top) / r.height - 0.5;
    if (!this.state.fPar) this.setState({ fPar: true });
    if (this.fraf || this.drag || this.cdrag) return;
    this.fraf = requestAnimationFrame(() => { this.fraf = null; this.tilt(this.fpx || 0, this.fpy || 0, this.fxWin, [[this.fxF1, 1.3], [this.fxF2, 0.9]], [3, 4]); });
  }

  onFxLeave() {
    this.setState({ fPar: false });
    if (this.fxWin) this.fxWin.style.transform = '';
    [this.fxF1, this.fxF2].forEach((f) => { if (f) f.style.transform = ''; });
  }

  cardDown(id, e) {
    if (!this.boardEl || (e && e.button)) return;
    if (e && e.preventDefault) e.preventDefault();
    const br = this.boardEl.getBoundingClientRect();
    const tgt = e && e.currentTarget;
    const cr = tgt ? tgt.getBoundingClientRect() : br;
    this.cdrag = { id: id, br: br, ox: e.clientX - cr.left, oy: e.clientY - cr.top };
    const card = this.state.fCards.find((c) => c.id === id);
    window.addEventListener('mousemove', this.onCardMove);
    window.addEventListener('mouseup', this.onCardUp);
    this.setState({ fDragCard: id, fOver: card ? card.col : -1, fGx: cr.left - br.left, fGy: cr.top - br.top, fGw: cr.width });
  }

  onCardMove(e) {
    const d = this.cdrag;
    if (!d) return;
    const x = e.clientX - d.br.left - d.ox, y = e.clientY - d.br.top - d.oy;
    if (this.ghostEl) this.ghostEl.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(2.5deg)';
    const col = Math.max(0, Math.min(3, Math.floor((e.clientX - d.br.left) / (d.br.width / 4))));
    if (col !== this.state.fOver) this.setState({ fOver: col });
  }

  onCardUp() {
    const d = this.cdrag;
    window.removeEventListener('mousemove', this.onCardMove);
    window.removeEventListener('mouseup', this.onCardUp);
    this.cdrag = null;
    if (!d) return;
    const to = this.state.fOver;
    const card = this.state.fCards.find((c) => c.id === d.id);
    const moved = !!card && to >= 0 && card.col !== to;
    this.setState((st) => ({
      fDragCard: null, fOver: -1, fBoardTouched: st.fBoardTouched || moved,
      fCards: moved ? st.fCards.filter((c) => c.id !== d.id).concat([Object.assign({}, card, { col: to })]) : st.fCards,
      fToastT: moved ? '\u201c' + card.t + '\u201d moved to ' + this.colNames[to] : st.fToastT,
      fToastS: moved ? 'Sprint 3 board \u00b7 just now' : st.fToastS,
      fToastN: moved ? st.fToastN + 1 : st.fToastN
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState && prevState.fComments && prevState.fComments.length !== this.state.fComments.length && this.cmsEl) this.cmsEl.scrollTop = this.cmsEl.scrollHeight;
  }

  barDown(i, e) {
    if (!this.laneEl || (e && e.button)) return;
    if (e && e.preventDefault) e.preventDefault();
    const b = this.state.fBars[i];
    this.drag = { i: i, x0: e.clientX, w: this.laneEl.getBoundingClientRect().width, s0: b.s, len: b.e - b.s + 1 };
    window.addEventListener('mousemove', this.onDragMove);
    window.addEventListener('mouseup', this.onDragUp);
    this.setState({ fDragI: i });
  }

  onDragMove(e) {
    const d = this.drag;
    if (!d) return;
    const dd = Math.round((e.clientX - d.x0) / (d.w / 14));
    const ns = Math.max(0, Math.min(14 - d.len, d.s0 + dd));
    if (ns !== this.state.fBars[d.i].s) this.setState((st) => ({ fBars: st.fBars.map((b, j) => (j === d.i ? Object.assign({}, b, { s: ns, e: ns + d.len - 1 }) : b)) }));
  }

  onDragUp() {
    const d = this.drag;
    window.removeEventListener('mousemove', this.onDragMove);
    window.removeEventListener('mouseup', this.onDragUp);
    this.drag = null;
    if (!d) return;
    const b = this.state.fBars[d.i];
    const lab = (n) => 'Jan ' + (n + 5 < 10 ? '0' : '') + (n + 5);
    const moved = b.s !== d.s0;
    this.setState((st) => ({ fDragI: -1, fDragged: st.fDragged || moved,
      fToastT: moved ? b.name + ' moved to ' + lab(b.s) + ' – ' + lab(b.e) : st.fToastT,
      fToastS: moved ? 'Rescheduled by you · just now' : st.fToastS,
      fToastN: moved ? st.fToastN + 1 : st.fToastN }));
  }

  userTouched() {
    if (this.state.touched) return;
    clearInterval(this.cycle);
    this.setState({ touched: true });
  }

  startAuto() {
    clearInterval(this.auto);
    if (this.props.autoplay !== true) return;
    this.auto = setInterval(() => this.setState((s) => ({ tIdx: (s.tIdx + 1) % 6, tN: s.tN + 1 })), 6500);
  }

  goT(i) {
    const n = (i + 6) % 6;
    if (n === this.state.tIdx) return;
    this.setState((s) => ({ tIdx: n, tN: s.tN + 1 }));
    if (!this.state.tPaused) this.startAuto();
  }

  observe(el) {
    if (!el) return;
    const k = el.getAttribute('data-rv');
    if (typeof IntersectionObserver === 'undefined') {
      setTimeout(() => this.setState((s) => ({ seen: Object.assign({}, s.seen, { [k]: 1 }) })), 0);
      return;
    }
    if (!this.io) {
      this.io = new IntersectionObserver((entries) => {
        const add = {};
        entries.forEach((en) => {
          if (en.isIntersecting) { add[en.target.getAttribute('data-rv')] = 1; this.io.unobserve(en.target); }
        });
        if (Object.keys(add).length) this.setState((s) => ({ seen: Object.assign({}, s.seen, add) }));
      }, { threshold: 0.08 });
    }
    this.io.observe(el);
  }

  setHover(k) {
    if (k === this.state.hover) return;
    this.setState((s) => ({ hover: k, tipN: s.tipN + 1 }));
  }

  onDemoMove(e) {
    if (!this.demoEl || !this.curEl) return;
    const d = this.demoEl.getBoundingClientRect();
    const x = e.clientX - d.left;
    const y = e.clientY - d.top;
    this.curEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > d.width - 250;
    const upd = {};
    if (!this.state.tracking) upd.tracking = true;
    if (!this.state.placed) upd.placed = true;
    if (flip !== this.state.flip) upd.flip = flip;
    if (Object.keys(upd).length) this.setState(upd);
  }

  onDemoLeave() {
    this.setState((s) => ({ tracking: false, hover: 'calendar', tipN: s.tipN + 1 }));
    clearTimeout(this.t3);
    this.t3 = setTimeout(this.placeRest, 30);
  }

  placeRest() {
    if (this.state.tracking || !this.demoEl || !this.calEl || !this.curEl) return;
    const d = this.demoEl.getBoundingClientRect();
    const c = this.calEl.getBoundingClientRect();
    if (!d.width) return;
    const x = c.left - d.left + c.width * 0.12;
    const y = c.top - d.top + c.height * 0.8;
    this.curEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > d.width - 250;
    if (flip !== this.state.flip || !this.state.placed) this.setState({ flip: flip, placed: true });
  }

  pickSide(side, i) {
    const selKey = side + 'Sel';
    const cur = this.state[selKey];
    if (i === cur) return;
    const slot = (j, s) => (j - s + 4) % 3;
    let wrap = -1;
    for (let j = 0; j < 3; j++) if (Math.abs(slot(j, cur) - slot(j, i)) === 2) wrap = j;
    this.setState((s) => ({ [selKey]: i, [side + 'Wrap']: wrap, [side + 'N']: s[side + 'N'] + 1 }));
  }

  renderVals() {
    const s = this.state;
    const sw = (n) => (n % 2 ? 'swA' : 'swB');
    const pad = (n) => (n < 10 ? '0' : '') + n;

    // hover / pop classes
    const pc = {};
    ['profile', 'meeting', 'calendar', 'tasks', 'projects'].forEach((k) => { pc[k] = s.hover === k ? 'pop' : ''; });
    const nc = {};
    ['dashboard', 'project', 'calnav', 'mytasks'].forEach((k) => {
      nc[k] = (s.nav === k ? 'on ' : '') + (s.hover === k ? 'pop' : '');
    });

    // countdown
    const diff = Math.max(0, s.target - s.now);
    const cd = {
      d: pad(Math.floor(diff / 86400000)),
      h: pad(Math.floor(diff / 3600000) % 24),
      m: pad(Math.floor(diff / 60000) % 60)
    };

    // calendar
    const today = new Date();
    const yr = today.getFullYear();
    const mo = today.getMonth();
    const lead = (new Date(yr, mo, 1).getDay() + 6) % 7;
    const dim = new Date(yr, mo + 1, 0).getDate();
    const prevDim = new Date(yr, mo, 0).getDate();
    const rows = Math.ceil((lead + dim) / 7);
    const raw = [];
    for (let i = 0; i < rows * 7; i++) {
      const n = i - lead + 1;
      const inM = n >= 1 && n <= dim;
      raw.push({ n: n, inM: inM, label: inM ? n : (n < 1 ? prevDim + n : n - dim) });
    }
    const isEv = (c) => !!(c && c.inM && s.events[c.n]);
    const cells = raw.map((c, i) => {
      const ev = isEv(c);
      const pe = i % 7 !== 0 && isEv(raw[i - 1]);
      const ne = i % 7 !== 6 && isEv(raw[i + 1]);
      const cls = [!c.inM ? 'dim' : '', ev ? 'ev' : '', ev && !pe ? 'evL' : '', ev && !ne ? 'evR' : '', c.inM && c.n === today.getDate() ? 'today' : ''].join(' ');
      return {
        label: c.label, cls: cls, dis: !c.inM,
        aria: c.inM ? (ev ? 'Remove event on day ' : 'Add event on day ') + c.n : 'Other month',
        pick: () => { if (!c.inM) return; this.setState((st) => { const e = Object.assign({}, st.events); if (e[c.n]) delete e[c.n]; else e[c.n] = 1; return { events: e }; }); }
      };
    });
    const monthLabel = today.toLocaleString('en', { month: 'short' }) + ' ' + yr;

    // tasks + projects
    const tasks = s.tasks.map((t, i) => ({
      t: t.t, d: t.d, cls: t.d ? 'done' : '',
      toggle: () => this.setState((st) => ({ tasks: st.tasks.map((x, j) => (j === i ? { t: x.t, d: !x.d } : x)) }))
    }));
    const projects = [{ n: 'Horizon', pct: '70%' }, { n: 'Phoenix', pct: '20%' }, { n: 'Atlas', pct: '65%' }];

    // features timeline
    const days = [];
    for (let d = 1; d <= 12; d++) days.push({ label: pad(d), cls: d === s.day ? 'on' : '', pick: () => this.setState({ day: d }) });
    const q = s.q.trim().toLowerCase();
    const bars = [
      { name: 'SkyForge', s: 2, e: 8, row: 0, open: true },
      { name: 'SkyForge', s: 1, e: 2, row: 1, open: false },
      { name: 'SkyForge', s: 5, e: 9, row: 1, open: true },
      { name: 'SkyForge', s: 4, e: 7, row: 2, open: true }
    ].map((b, i) => ({
      name: b.name, open: b.open,
      left: ((b.s - 1) / 12 * 100) + '%',
      width: ((b.e - b.s + 1) / 12 * 100) + '%',
      top: (b.row * 56 + 10) + 'px',
      cls: 'b' + i + (s.day >= b.s && s.day <= b.e ? ' act' : '') + (q && b.name.toLowerCase().indexOf(q) < 0 ? ' dimb' : '') + (s.fHover === 'bar' + i ? ' pop' : ''),
      enter: this.fEnter['bar' + i],
      tip: b.name + ': Jan ' + pad(b.s) + ' – Jan ' + pad(b.e) + (b.open ? ' · Open' : ' · Done')
    }));

    const fTips = {
      rest: 'Track projects, set deadlines, never miss a milestone. Streamline your project management with ease.',
      title: 'All your projects on one shared timeline.',
      search: 'Find any project instantly by name.',
      days: 'Pick a day to see which projects are running.'
    };
    const fTip = !s.fHover ? '' : (s.fHover.indexOf('bar') === 0 ? ((bars[+s.fHover.slice(3)] || {}).tip || '') : (fTips[s.fHover] || ''));
    const fpc = { title: s.fHover === 'title' ? 'pop' : '', search: s.fHover === 'search' ? 'pop' : '', days: s.fHover === 'days' ? 'pop' : '' };

    // integrations
    const slot = (j, sel) => (j - sel + 4) % 3;
    const icCls = (side, j) => {
      const sel = s[side + 'Sel'];
      const base = 'ii ' + (side === 'l' ? 'il' : 'ir') + ' s' + slot(j, sel);
      const wr = s[side + 'Wrap'] === j ? ' wr' + (s[side + 'N'] % 2) : '';
      return base + (j === sel ? ' sel' : '') + wr;
    };
    const lic = [0, 1, 2].map((j) => icCls('l', j));
    const ric = [0, 1, 2].map((j) => icCls('r', j));
    const lOn = [0, 1, 2].map((j) => j === s.lSel);
    const rOn = [0, 1, 2].map((j) => j === s.rSel);
    const mL = [0, 1, 2].map((j) => (j === s.lSel ? 'sel' : ''));
    const mR = [0, 1, 2].map((j) => (j === s.rSel ? 'sel' : ''));

    // pricing
    const plans = [
      { name: 'Freelancer', m: 19, a: 13, desc: 'Tailored for Freelancers and Solo Entrepreneurs', feats: ['Up to 3 projects', 'Budget tracking', 'Up to 2 integrations'], people: '' },
      { name: 'Team', m: 49, a: 34, desc: 'Built for small teams that plan and ship together', feats: ['Up to 10 projects', 'Budget tracking', 'Up to 5 integrations'], people: '2 - 20 people' },
      { name: 'Company', m: 99, a: 69, desc: 'For companies running many projects at once', feats: ['Unlimited projects', 'Budget tracking', 'Unlimited integrations'], people: '20+ people' }
    ].map((p) => ({ name: p.name, desc: p.desc, feats: p.feats, people: p.people, price: s.annual ? p.a : p.m, per: '/mo', sw: sw(s.billN), saveCls: s.annual ? 'on' : '', move: this.planMove }));

    // testimonials
    const people = this.people.map((p, i) => ({ n: p.n, i: p.i, c: p.c, cls: 'p' + i + (i === s.tIdx ? ' on' : ''), pick: this.tPicks[i] }));

    // ================= hero (concept) values =================
    const hpc = {};
    ['search', 'meeting', 'calendar', 'focus', 'tasks', 'timeline'].forEach((k) => { hpc[k] = s.hHover === k ? 'pop' : ''; });
    const cdText = (+cd.d ? (+cd.d + 'd ') : '') + (+cd.h) + 'h ' + (+cd.m) + 'm';
    const hIsEv = (c) => !!(c && c.inM && s.hEvents[c.n]);
    const hCells = raw.map((c, i) => {
      const ev = hIsEv(c), pe = i % 7 !== 0 && hIsEv(raw[i - 1]), ne = i % 7 !== 6 && hIsEv(raw[i + 1]);
      return {
        label: c.label, dis: !c.inM, aria: c.inM ? 'Toggle event on day ' + c.n : 'Other month',
        cls: [!c.inM ? 'dim' : '', ev ? 'ev' : '', ev && !pe ? 'evL' : '', ev && !ne ? 'evR' : '', c.inM && c.n === today.getDate() ? 'today' : ''].join(' '),
        pick: () => { if (!c.inM) return; this.setState((st) => { const e = Object.assign({}, st.hEvents); if (e[c.n]) delete e[c.n]; else e[c.n] = 1; return { hEvents: e }; }); }
      };
    });
    const hDone = s.hTasks.filter((t) => t.d).length;
    const hTasks = s.hTasks.map((t, i) => ({
      t: t.t, d: t.d, tag: t.tag, bg: t.bg, fg: t.fg, cls: t.d ? 'done' : '',
      toggle: () => this.setState((st) => {
        const nt = st.hTasks.map((x, j) => (j === i ? Object.assign({}, x, { d: !x.d }) : x));
        return { hTasks: nt, hToastTitle: '“' + t.t + '” ' + (nt[i].d ? 'completed' : 'reopened'), hToastSub: 'by Franklin · just now', hToastN: st.hToastN + 1 };
      })
    }));
    const hLeft = 5 - hDone;
    const dow = (today.getDay() + 6) % 7;
    const gdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'].map((l, i) => ({ l: l, cls: i === dow ? 'on' : '' }));
    const gbars = [
      { name: 'Horizon', s: 0, e: 4, pct: '70%', bg: 'linear-gradient(90deg,rgba(249,177,46,.32),rgba(249,177,46,.18))', ac: '#F59E6B', ai: 'FS' },
      { name: 'Phoenix', s: 2, e: 6, pct: '20%', bg: 'linear-gradient(90deg,rgba(142,135,207,.38),rgba(142,135,207,.2))', ac: '#7C8CF8', ai: 'AO' },
      { name: 'Atlas', s: 1, e: 3, pct: '65%', bg: 'linear-gradient(90deg,rgba(94,196,182,.34),rgba(94,196,182,.18))', ac: '#5EC4B6', ai: 'LP' },
      { name: 'SkyForge', s: 4, e: 7, pct: '40%', bg: 'linear-gradient(90deg,rgba(229,122,168,.34),rgba(229,122,168,.18))', ac: '#E57AA8', ai: 'MV' }
    ].map((b, i) => ({
      name: b.name, pct: b.pct, bg: b.bg, ac: b.ac, ai: b.ai,
      left: (b.s / 8 * 100) + '%', width: ((b.e - b.s + 1) / 8 * 100) + '%', top: (34 + i * 36) + 'px',
      cls: 'g' + (i + 1) + (s.hHover === 'bar' + i ? ' pop' : ''), enter: this.hEnter['bar' + i]
    }));
    const hBarTips = ['Horizon · 70% done · due Friday', 'Phoenix · 20% done · kicks off Wednesday', 'Atlas · 65% done · on track', 'SkyForge · 40% done · design review Sunday'];
    const hTip = !s.hHover ? '' : (s.hHover.indexOf('bar') === 0 ? hBarTips[+s.hHover.slice(3)] : this.hTips[s.hHover]);
    const hx = {
      heroRef: this.heroRef, wrapRef: this.wrapRef, winRef: this.winRef, calRef: this.hCalRef, curRef: this.hCurRef,
      f1Ref: this.f1Ref, f2Ref: this.f2Ref, f3Ref: this.f3Ref,
      onHeroMove: this.onHeroMove, onHeroLeave: this.onHeroLeave, onWinMove: this.onWinMove, onWinLeave: this.onWinLeave,
      enter: this.hEnter, leaveEl: this.hLeave, pc: hpc,
      winCls: s.hPar ? 'live' : '', flCls: s.hPar ? 'live' : '',
      curCls: (s.hTrack ? '' : 'idle ') + (s.hFlip ? 'flip ' : '') + (s.hPlaced ? '' : 'hide'),
      tipCls: s.hHover ? sw(s.hTipN) : 'hide', tip: hTip,
      dateLabel: today.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' }),
      leftLabel: hLeft ? hLeft + (hLeft === 1 ? ' task' : ' tasks') + ' left today' : 'All clear today',
      cd: cd, cdText: cdText, joined: s.hJoined, joinCls: s.hJoined ? 'on' : '', joinLabel: s.hJoined ? 'IN CALL' : 'JOIN', toggleJoin: this.hToggleJoin,
      monthLabel: today.toLocaleString('en', { month: 'long' }), cells: hCells,
      doneCount: hDone, ringOff: (289.03 * (1 - hDone / 5)).toFixed(2),
      focusNote: hLeft ? 'Keep going, ' + hLeft + ' to go' : 'Everything done. Nice work.',
      tasks: hTasks, gdays: gdays, gbars: gbars, todayLeft: ((dow + 0.5) / 8 * 100) + '%',
      toastTitle: s.hToastTitle, toastSub: s.hToastSub, toastSw: sw(s.hToastN)
    };

    // ================= features (timeline app) values =================
    const pal = this.pals[s.fPal];
    const hexA = (h, a) => 'rgba(' + parseInt(h.slice(1, 3), 16) + ',' + parseInt(h.slice(3, 5), 16) + ',' + parseInt(h.slice(5, 7), 16) + ',' + a + ')';
    const rh = s.fDense ? 40 : 52;
    const lab = (n) => 'Jan ' + (n + 5 < 10 ? '0' : '') + (n + 5);
    const fxBars = s.fBars.map((b, i) => ({
      name: b.name, c: pal[i], pct: b.pct + '%', pctLabel: b.pct === 100 ? 'Done' : b.pct + '%',
      bg: hexA(pal[i], s.fPal === 3 ? 0.16 : 0.22), fill: hexA(pal[i], s.fPal === 3 ? 0.3 : 0.42),
      left: (b.s / 14 * 100) + '%', width: ((b.e - b.s + 1) / 14 * 100) + '%', top: (i * rh + 11) + 'px',
      cls: 'b' + i + (s.fHover === 'bar' + i ? ' pop' : '') + (s.fDragI === i ? ' drag' : '') + (s.tab === 1 && !s.fDragged && i === 2 && s.fDragI < 0 ? ' hint' : ''),
      enter: this.fEnter['bar' + i], down: (e) => this.barDown(i, e),
      tip: b.name + ' · ' + lab(b.s) + ' – ' + lab(b.e) + ' · ' + (b.pct === 100 ? 'done' : b.pct + '% complete')
    }));
    const fxRows = s.fBars.map((b) => ({ name: b.name, ai: b.ai, ac: b.ac, st: b.pct === 100 ? 'Done' : (b.pct ? 'In progress' : 'Planned'), stCls: b.pct === 100 ? 'done' : (b.pct ? 'prog' : '') })).concat([{ name: 'Launch', ai: 'TH', ac: '#F9B12E', st: 'Milestone', stCls: 'prog' }]);
    const fxDays = [];
    for (let i = 0; i < 14; i++) { const wd = (i % 7); fxDays.push({ w: 'MTWTFSS'[wd], n: (i + 5 < 10 ? '0' : '') + (i + 5), cls: (wd >= 5 ? 'we ' : '') + (i === 8 ? 'td' : '') }); }
    const dep = (a, b) => { const A = s.fBars[a], B = s.fBars[b]; const x1 = A.e + 1, y1 = a * rh + rh / 2, x2 = B.s, y2 = b * rh + rh / 2; const mx = Math.max(x1 + 0.35, Math.min(x2 - 0.2, (x1 + x2) / 2)); return 'M' + x1 + ' ' + y1 + ' H' + mx + ' V' + y2 + ' H' + x2; };
    const caps = ['Plan every project on one live timeline.', 'Reschedule anything by dragging it – dependencies follow along.', 'See who is working where, and talk right on the timeline.', 'Make the workspace yours: colors, density and more.'];
    const fxTips = {
      rest: ['Hover any bar to see its dates and progress.', 'Grab a bar and drag it to a new date.', 'Lena and Marco are on this timeline with you, live.', 'Try a theme in the Appearance panel.'][s.tab], today: 'Today · Tuesday, Jan 13', ms: 'Launch milestone · Jan 17 · 4 days left',
      panel: 'Pick a theme and density – the timeline updates live.', title: '', search: '', days: ''
    };
    const fx = {
      stageRef: this.fxStageRef, winRef: this.fxWinRef, f1Ref: this.fxF1Ref, f2Ref: this.fxF2Ref, laneRef: this.laneRef,
      onMove: this.onFxMove, onLeave: this.onFxLeave, tab: s.tab,
      liveCls: s.fPar && !this.drag ? 'live' : '', presCls: s.tab === 2 ? 'live' : '', hintCls: s.tab === 1 ? 'on' : '',
      denseCls: s.fDense ? 'dense' : '', cap: caps[s.tab], capSw: sw(s.tabN),
      rows: fxRows, days: fxDays, bars: fxBars,
      depBox: '0 0 14 ' + (rh * 6), dep1: dep(1, 2), dep2: dep(2, 4),
      todayLeft: (8.5 / 14 * 100) + '%', msLeft: (12.5 / 14 * 100) + '%', msTop: (5 * rh + rh / 2) + 'px', msLabel: 'Jan 17 · 4 days left',
      cmLeft: (s.fBars[2].s / 14 * 100) + '%', cmTop: (2 * rh + 6) + 'px',
      pals: this.pals.map((p, i) => ({ name: this.palNames[i], c0: p[0], c1: p[1], c2: p[2], cls: i === s.fPal ? 'on' : '', on: i === s.fPal, pick: this.palPick[i] })),
      dCom: s.fDense ? '' : 'on', dCmp: s.fDense ? 'on' : '', setComfy: this.setComfy, setCompact: this.setCompact,
      toastT: s.fToastT, toastS: s.fToastS, toastSw: sw(s.fToastN),
      tip: !s.fHover ? '' : (s.fHover.indexOf('bar') === 0 ? ((fxBars[+s.fHover.slice(3)] || {}).tip || '') : (fxTips[s.fHover] || ''))
    };

    // ---- features: screens ----
    const hexA2 = (h, a) => 'rgba(' + parseInt(h.slice(1, 3), 16) + ',' + parseInt(h.slice(3, 5), 16) + ',' + parseInt(h.slice(5, 7), 16) + ',' + a + ')';
    const tab = s.tab;
    const fxCols = [0, 1, 2, 3].map((ci) => {
      const cards = s.fCards.filter((c) => c.col === ci).map((c) => {
        const tc = this.tagCol[c.tag] || '#A6A8BF';
        return {
          t: c.t, tag: c.tag, due: c.due, ai: c.ai, ac: c.ac, bg: hexA2(tc, 0.16), fg: tc,
          cls: (ci === 3 ? 'done ' : '') + (s.fDragCard === c.id ? 'ph ' : '') + (s.fHover === 'card' + c.id ? 'pop ' : '') + (!s.fBoardTouched && c.id === 2 && s.fDragCard == null ? 'hint' : ''),
          down: (e) => this.cardDown(c.id, e), enter: this.fe('card' + c.id)
        };
      });
      return { name: this.colNames[ci], dot: ['#8C8EA6', '#F9B12E', '#8E87CF', '#2F9E6E'][ci], count: cards.length, cards: cards,
        cls: s.fDragCard != null && s.fOver === ci ? 'over' : '', enter: this.fe('col' + ci) };
    });
    const gc = s.fCards.find((c) => c.id === s.fDragCard) || s.fCards[0];
    const gtc = this.tagCol[gc.tag] || '#A6A8BF';
    const th = this.themes[s.fTheme];
    const acc = this.accents[s.fAcc][1];
    const accText = s.fTheme === 2 ? acc : acc;
    const wk = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => ({ d: d, h: [26, 38, 18, 44, 30, 12, 8][i] + 'px', o: i >= 5 ? 0.45 : 1 })).filter((w, i) => s.fWe || i < 5);
    const tipFor = (k) => {
      if (!k) return '';
      if (k.indexOf('card') === 0) { const c = s.fCards.find((x) => 'card' + x.id === k); return c ? c.t + ' \u00b7 due ' + c.due + ' \u00b7 drag to move' : ''; }
      if (k.indexOf('col') === 0) { const ci = +k.slice(3); const n = s.fCards.filter((c) => c.col === ci).length; return this.colNames[ci] + ' \u00b7 ' + n + (n === 1 ? ' card' : ' cards'); }
      if (k.indexOf('bar') === 0) return (fxBars[+k.slice(3)] || {}).tip || '';
      const m = {
        rest: ['Hover any bar to see its dates and progress.', 'Grab a card and drop it in another column.', 'Lena and Marco are here with you, live.', 'Change a setting and watch the preview.'][tab],
        today: 'Today \u00b7 Tuesday, Jan 13', ms: 'Launch milestone \u00b7 Jan 17 \u00b7 4 days left',
        doc: 'Everyone edits the same doc, live.', thread: 'Discuss right where the work happens.', reply: 'Type a reply and hit Enter.',
        accent: 'Pick an accent, the preview updates instantly.', theme: 'Switch between Midnight, Graphite and Light.',
        density: 'Comfortable or compact, your call.', radius: 'Drag to round the corners.', toggles: 'Show or hide what matters to you.',
        preview: 'This is exactly how your workspace will look.'
      };
      return m[k] || '';
    };
    Object.assign(fx, {
      s0: tab === 0, s1: tab === 1, s2: tab === 2, s3: tab === 3,
      crumbA: ['Projects', 'Projects', 'Phoenix', 'Settings'][tab], crumbB: ['Q1 Roadmap', 'Sprint 3 board', 'Launch brief', 'Appearance'][tab],
      seg: ['Timeline', 'Board', 'Docs', 'Settings'].map((l, i) => ({ l: l, cls: i === tab ? 'on' : '', pick: this.segPick[i] })),
      presCls: tab === 2 ? 'live' : '',
      cap: ['Plan every project on one live timeline.', 'Move work across stages by simply dragging it.', 'Write, comment and decide together, in real time.', 'Make the workspace yours: colors, theme, density and more.'][tab],
      chipT: ['Launch milestone', 'Sprint 3', 'Live session', 'Appearance'][tab],
      chipS: ['Jan 17 \u00b7 4 days left', s.fCards.filter((c) => c.col === 3).length + ' of ' + s.fCards.length + ' cards done', '3 people in Launch brief', 'Changes save automatically'][tab],
      boardRef: this.boardRef, ghostRef: this.ghostRef, cols: fxCols, bHintCls: s.fBoardTouched ? '' : 'on',
      dragging: s.fDragCard != null, gx: Math.round(s.fGx), gy: Math.round(s.fGy), gw: Math.round(s.fGw),
      gk: { t: gc.t, tag: gc.tag, due: gc.due, ai: gc.ai, ac: gc.ac, bg: hexA2(gtc, 0.16), fg: gtc },
      chk: ['Confirm launch date', 'Final empty states', 'Mobile nav review'].map((t, i) => ({ t: t, cls: s.fChk[i] ? 'done' : '', toggle: () => this.setState((st) => ({ fChk: st.fChk.map((v, j) => (j === i ? !v : v)) })) })),
      cmsRef: this.cmsRef, cmCount: s.fComments.length,
      comments: s.fComments.map((m, i) => ({ n: m.n, ai: m.ai, ac: m.ac, time: m.time, text: m.text, rx: m.rx + (m.mine ? 1 : 0), rxCls: m.mine ? 'on' : '', cls: m.fresh ? 'new' : '',
        react: () => this.setState((st) => ({ fComments: st.fComments.map((x, j) => (j === i ? Object.assign({}, x, { mine: !x.mine }) : x)) })) })),
      draft: s.fDraft, onDraft: this.onDraft, onDraftKey: this.onDraftKey, send: this.sendComment, sendCls: (s.fDraft || '').trim() ? 'on' : '',
      accents: this.accents.map((a, i) => ({ name: a[0], c: a[1], cls: i === s.fAcc ? 'on' : '', pick: this.accPick[i] })), accName: this.accents[s.fAcc][0],
      themes: this.themes.map((t, i) => ({ name: t.name, cls: i === s.fTheme ? 'on' : '', pick: this.themePick[i] })),
      dCom: s.fDen ? '' : 'on', dCmp: s.fDen ? 'on' : '', setComfy: this.setDenC, setCompact: this.setDenK,
      rad: s.fRad, onRad: this.onRad, radPx: s.fRad + 'px', radSm: Math.round(s.fRad * 0.55) + 'px', radXs: Math.round(s.fRad * 0.35) + 'px',
      toggleWe: this.toggleWe, toggleProg: this.toggleProg, weCls: s.fWe ? 'on' : '', progCls: s.fProg ? 'on' : '',
      weBg: s.fWe ? acc : 'rgba(255,255,255,.14)', progBg: s.fProg ? acc : 'rgba(255,255,255,.14)',
      pv: th, acc: acc, accSoft: hexA2(acc, s.fTheme === 2 ? 0.16 : 0.18), accText: accText, denCls: s.fDen ? 'dense' : '', prog: s.fProg,
      pvTasks: [['Email management', 'Ops', true], ['Inventory check', 'Ops', true], ['Data entry', 'Data', false]].map((q) => ({ t: q[0], tag: q[1], cls: q[2] ? 'dn' : '', bxBg: q[2] ? acc : 'transparent', bxBd: q[2] ? acc : th.mut })),
      week: wk, wkN: wk.length,
      tip: tipFor(s.fHover)
    });

    // ---- testimonials (orbit) ----
    const tmk = (i, ang, r) => {
      const p = this.people[i];
      return { n: p.n, i: p.i, c: p.c, first: p.n.split(' ')[0], pick: this.tPicks[i], pos: 'rotate(' + ang + 'deg) translateX(' + r + 'px) rotate(' + (-ang) + 'deg)', cls: i === s.tIdx ? 't-on' : 't-off' };
    };
    const tc = {
      inner: [tmk(0, 330, 400), tmk(2, 150, 400), tmk(4, 250, 400)],
      outer: [tmk(1, 200, 600), tmk(3, 345, 600), tmk(5, 110, 600)],
      T: Object.assign({ role: '[Role, Company]' }, this.people[s.tIdx]), sw: s.tN % 2 ? 't-swA' : 't-swB',
      dots: this.people.map((p, i) => ({ n: i + 1, pick: this.tPicks[i], cls: i === s.tIdx ? 't-on ' + (s.tN % 2 ? 't-pA' : 't-pB') : '' })),
      prev: this.tPrev, next: this.tNext, pause: this.tPause, resume: this.tResume, cardCls: s.tPaused ? 't-paused' : ''
    };

    // ---- integrations (flow) ----
    const ixSlot = (j, sel) => (j - sel + 4) % 3;
    const ixCls = (side, j) => {
      const sel = s[side + 'Sel'];
      return 'x-ii x-s' + ixSlot(j, sel) + (j === sel ? ' x-sel' : '') + (s[side + 'Wrap'] === j ? ' x-wr' + (s[side + 'N'] % 2) : '');
    };
    const ixL = [
      { name: 'Team chat', l1: 'Instant team messaging', l2: 'Turn messages into tasks', l3: 'Never lose a conversation' },
      { name: 'Video meetings', l1: 'Effortless meeting scheduling', l2: 'Organize meetings instantly', l3: 'Seamlessly connect with ease' },
      { name: 'Call recording', l1: 'Automatic call recording', l2: 'Share recaps in one click', l3: 'Catch up in minutes' }
    ];
    const ixR = [
      { name: 'Voice notes', l1: 'Voice notes on any task', l2: 'Record updates hands-free', l3: 'Say it once, save time' },
      { name: 'Cloud files', l1: 'Creative file management', l2: 'Effortless team file collaboration', l3: 'Intuitive file access' },
      { name: 'Social publishing', l1: 'Social publishing calendar', l2: 'Plan posts with your team', l3: 'Grow your reach faster' }
    ];
    const ix = {
      lic: [0, 1, 2].map((j) => ixCls('l', j)), ric: [0, 1, 2].map((j) => ixCls('r', j)),
      lIs: [0, 1, 2].map((j) => j === s.lSel), rIs: [0, 1, 2].map((j) => j === s.rSel),
      lPick: this.lPick, rPick: this.rPick, L: ixL[s.lSel], R: ixR[s.rSel],
      lsw: s.lN % 2 ? 'x-swA' : 'x-swB', rsw: s.rN % 2 ? 'x-swA' : 'x-swB', touchedCls: s.touched ? 'x-touched' : ''
    };

    const rv = {};
    ['logos', 'features', 'integr', 'pricing', 'testi', 'cta'].forEach((k) => { rv[k] = s.seen[k] ? 'in' : ''; });

    return {
      demoRef: this.demoRef, calRef: this.calRef, curRef: this.curRef, rvRef: this.rvRef,
      onDemoMove: this.onDemoMove, onDemoLeave: this.onDemoLeave,
      enter: this.enter, leaveEl: this.leaveEl, navPick: this.navPick,
      pc: pc, nc: nc,
      curCls: (s.tracking ? '' : 'idle ') + (s.flip ? 'flip ' : '') + (s.placed ? '' : 'hide'),
      tipCls: s.hover ? sw(s.tipN) : 'hide',
      tip: s.hover ? this.tips[s.hover] : '',
      cd: cd, joined: s.joined, joinCls: s.joined ? 'on' : '', joinLabel: s.joined ? 'JOINED' : 'JOIN', toggleJoin: this.toggleJoin,
      cells: cells, monthLabel: monthLabel,
      tasks: tasks, addTask: this.addTask, projects: projects,
      tabCls: [0, 1, 2, 3].map((i) => (i === s.tab ? 'on' : '')),
      tabSel: [0, 1, 2, 3].map((i) => i === s.tab),
      tabPick: this.tabPick, tline: 't' + s.tab, panelSw: sw(s.tabN),
      days: days, dayPrev: this.dayPrev, dayNext: this.dayNext, onSearch: this.onSearch,
      lineLeft: ((s.day - 0.5) / 12 * 100) + '%', bars: bars,
      fRef: this.fRef, tlcRef: this.tlcRef, fCurRef: this.fCurRef, onFMove: this.onFMove, onFLeave: this.onFLeave,
      fEnter: this.fEnter, fLeaveEl: this.fLeaveEl, fpc: fpc, fTip: fTip,
      fCurCls: (s.fTrack ? '' : 'idle ') + (s.fFlip ? 'flip ' : '') + (s.fPlaced ? '' : 'hide'),
      fTipCls: s.fHover ? sw(s.fTipN) : 'hide',
      lic: lic, ric: ric, lOn: lOn, rOn: rOn, lIs: lOn, rIs: rOn, mL: mL, mR: mR,
      lPick: this.lPick, rPick: this.rPick, intTouched: s.touched ? 'touched' : '',
      L: this.L[s.lSel], R: this.R[s.rSel], lsw: sw(s.lN), rsw: sw(s.rN),
      annual: s.annual, billM: s.annual ? '' : 'on', billA: s.annual ? 'on' : '', billT: s.annual ? 'on' : '',
      setMonthly: this.setMonthly, setAnnual: this.setAnnual, toggleBill: this.toggleBill,
      plans: plans, priceSw: sw(s.billN), saveCls: s.annual ? 'on' : '',
      people: people, T: this.people[s.tIdx], tSw: sw(s.tN), tPrev: this.tPrev, tNext: this.tNext,
      rv: rv, hx: hx, fx: fx, tc: tc, ix: ix
    };
  }
}
    return Component;
  }
};
