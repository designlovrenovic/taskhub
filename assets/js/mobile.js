/* TaskHub — mobile page (template + logic) */
window.TH_PAGES = window.TH_PAGES || {};
window.TH_PAGES.mobile = {
  template: "<div class=\"pg\" id=\"top\">\n\n<!-- ================= NAV ================= -->\n<header class=\"nav\">\n  <div class=\"wrap\" style=\"display: flex; align-items: center; justify-content: space-between; gap: 24px; height: 72px\">\n    <a class=\"logo-link\" href=\"#top\" style=\"display: flex; align-items: center; gap: 10px; text-decoration: none; color: #F3F4F8\">\n      <svg class=\"logo-ic\" width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n      <span class=\"hd\" style=\"font-size: 19px; font-weight: 800; letter-spacing: -.02em\">TaskHub</span>\n    </a>\n    <nav class=\"nav-links\" aria-label=\"Main\" style=\"display: flex; align-items: center; gap: 32px\">\n      <a class=\"nl\" href=\"#features\">Features</a>\n      <a class=\"nl\" href=\"#pricing\">Pricing</a>\n      <a class=\"nl\" href=\"#teams\">Customers</a>\n      <a class=\"nl\" href=\"#platform\">Integrations</a>\n    </nav>\n    <button class=\"burger {{menuCls}}\" onClick=\"{{toggleMenu}}\" aria-label=\"Menu\" aria-expanded=\"{{menuOpen}}\"><span></span><span></span><span></span></button>\n  </div>\n  <div class=\"mmwrap {{menuCls}}\">\n    <nav class=\"mmenu\" aria-label=\"Mobile menu\">\n      <a class=\"mm\" href=\"#features\" onClick=\"{{closeMenu}}\">Features</a>\n      <a class=\"mm\" href=\"#pricing\" onClick=\"{{closeMenu}}\">Pricing</a>\n      <a class=\"mm\" href=\"#teams\" onClick=\"{{closeMenu}}\">Customers</a>\n      <a class=\"mm\" href=\"#platform\" onClick=\"{{closeMenu}}\">Integrations</a>\n      <a class=\"mm\" href=\"#top\" onClick=\"{{closeMenu}}\">Sign in</a>\n      <a class=\"btn-m\" href=\"#pricing\" onClick=\"{{closeMenu}}\">Start free month</a>\n    </nav>\n  </div>\n</header>\n\n<!-- ================= HERO ================= -->\n<section class=\"hero\">\n  <div class=\"m-beams\" aria-hidden=\"true\"></div>\n  <div class=\"wrap\" style=\"position: relative\">\n    <div class=\"fu\"><span class=\"m-pill\"><i></i>Tired of asking “where are we on this?”</span></div>\n    <h1 class=\"hd\" style=\"margin: 22px 0 0; font-size: clamp(44px, 6.2vw, 88px); line-height: 1.04; font-weight: 700; letter-spacing: -.02em; color: #F3F4F8\"><span class=\"hw w1\">Stop</span> <span class=\"hw w1\">chasing</span> <span class=\"hw w2\">updates.</span> <span class=\"hw w3\">Start</span> <span class=\"hw w4 hgl\">finishing projects.</span></h1>\n    <p class=\"fu d1\" style=\"margin: 20px 0 30px; color: #A6A8BF; font-size: 15px\">TaskHub puts your tasks, timelines, meetings and files in one place, so everyone knows what’s due and who’s on it without having to ask.</p>\n    <div class=\"fu d2\" style=\"display: flex; flex-direction: column; align-items: center; gap: 12px\"><a class=\"btn-y\" href=\"#pricing\" style=\"min-width: 220px\">Start your free month</a></div>\n    <p class=\"fu d2 hero-note\">Free for 30 days. Cancel before then and you pay nothing.</p>\n\n    <!-- ---------- phone app demonstration (auto tour) ---------- -->\n    <div class=\"ph\">\n      <div class=\"phs\">\n        <div class=\"phead\">\n          <div class=\"pav\">FS</div>\n          <div style=\"display: flex; flex-direction: column; gap: 3px; text-align: left\">\n            <span style=\"font: 700 13px/1.2 Nunito, sans-serif; color: #F3F4F8\">Hi, Franklin</span>\n            <span style=\"font-size: 10.5px; color: #9A9CB5\">{{pLeftText}}</span>\n          </div>\n          <span class=\"pbell\"><svg class=\"ic\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z\"></path><path d=\"M10 20.5a2 2 0 0 0 4 0\"></path></svg></span>\n        </div>\n\n        <div class=\"pc {{pOn.meet}}\">\n          <div class=\"pct\"><span>Next Meeting</span><span class=\"pmut\">Design sync</span></div>\n          <div style=\"display: flex; align-items: center; justify-content: space-between; gap: 8px\">\n            <div style=\"display: flex; align-items: baseline; gap: 5px\">\n              <span class=\"hd pdig\">{{cd.d}}</span><span class=\"colon pcol\">:</span><span class=\"hd pdig\">{{cd.h}}</span><span class=\"colon pcol\">:</span><span class=\"hd pdig\">{{cd.m}}</span>\n            </div>\n            <span class=\"pjoin {{pJoinCls}}\">{{pJoinLabel}}<i></i><span class=\"tap\"></span></span>\n          </div>\n          <div class=\"ptip\">One tap to join your next call.</div>\n        </div>\n\n        <div class=\"pc pwk {{pOn.week}}\">\n          <div class=\"pweek\">\n            <sc-for list=\"{{pWeek}}\" as=\"w\" hint-placeholder-count=\"7\">\n              <span class=\"pday {{w.cls}}\">{{w.d}}<b>{{w.n}}</b><sc-if value=\"{{w.tap}}\" hint-placeholder-val=\"{{false}}\"><span class=\"tap\"></span></sc-if></span>\n            </sc-for>\n          </div>\n          <div class=\"ptip\">Plan your whole week at a glance.</div>\n        </div>\n\n        <div class=\"pc {{pOn.tasks}}\">\n          <div class=\"pct\"><span>Today Tasks</span><span class=\"pmut\">{{pDone}}/3</span></div>\n          <div class=\"ptk done\"><span class=\"bx\"><svg class=\"ic\" width=\"9\" height=\"9\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.5\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>Email Management</div>\n          <div class=\"ptk done\"><span class=\"bx\"><svg class=\"ic\" width=\"9\" height=\"9\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.5\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>Inventory Check</div>\n          <div class=\"ptk {{pT3}}\"><span class=\"bx\" style=\"position: relative\"><svg class=\"ic\" width=\"9\" height=\"9\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 3.5\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg><span class=\"tap\"></span></span>Social Media Engagement</div>\n          <div class=\"ptip\">Check off tasks as you go.</div>\n        </div>\n\n        <div class=\"pc {{pOn.proj}}\">\n          <div class=\"pct\"><span>Projects</span><span class=\"pmut\">3 active</span></div>\n          <div class=\"pprs {{pBarSw}}\">\n            <div class=\"ppr\"><span>Horizon</span><span class=\"pb\"><i style=\"width: 70%\"></i></span><span>70%</span></div>\n            <div class=\"ppr\"><span>Phoenix</span><span class=\"pb\"><i style=\"width: 20%\"></i></span><span>20%</span></div>\n            <div class=\"ppr\"><span>Atlas</span><span class=\"pb\"><i style=\"width: 65%\"></i><span class=\"tap\" style=\"left: 65%\"></span></span><span>65%</span></div>\n          </div>\n          <div class=\"ptip up\">Track every project&#39;s progress live.</div>\n        </div>\n\n        <div class=\"ptab\">\n          <span class=\"on\"><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><path d=\"M3 9h18M9 21V9\"></path></svg></span>\n          <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18M8 3v4M16 3v4\"></path></svg></span>\n          <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\"></rect><path d=\"M9 3h6v3H9zM9 13l2 2 4-4\"></path></svg></span>\n          <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7\"></path></svg></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- ---------- logos ---------- -->\n  <div class=\"rv {{rv.logos}}\" data-rv=\"logos\" ref=\"{{rvRef}}\" style=\"padding: 70px 0 90px\">\n    <p class=\"hd\" style=\"margin: 0; text-align: center; font-size: 16px; font-weight: 700; line-height: 1.45; color: #F3F4F8\">15,000 teams already run<br>their week on TaskHub</p>\n    <div class=\"marq\" aria-label=\"Customer logos (placeholders)\" style=\"max-width: 1230px; margin-left: auto; margin-right: auto\">\n      <div class=\"track\">\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M2 14c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path><path d=\"M2 9c3-4 5-4 8 0s5 4 8 0 4-3 4-3\"></path></svg><span style=\"font: 700 21px/1 Mulish, sans-serif; letter-spacing: -.02em\">Northwind</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><path class=\"fillc\" d=\"M12 4a8 8 0 0 1 0 16z\"></path></svg><span style=\"font: 800 23px/1 Nunito, sans-serif\">lumina.</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7 9-7 9-7-9z\"></path><path d=\"M12 3v18\"></path></svg><span style=\"font: 800 19px/1 Mulish, sans-serif; letter-spacing: .18em\">KITEBASE</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"3\"></circle><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4\"></ellipse></svg><span style=\"font: 600 22px/1 Mulish, sans-serif; font-style: italic\">orbital</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><path d=\"M12 4l9 16H3z\"></path></svg><span style=\"font: 800 20px/1 Nunito, sans-serif; letter-spacing: .06em\">VERTEX</span></div>\n        <div class=\"lg\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"></rect><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"></rect><rect class=\"fillc\" x=\"13\" y=\"13\" width=\"7\" height=\"7\"></rect></svg><span style=\"font: 700 20px/1 Mulish, sans-serif\">Halcyon</span></div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- ================= PROBLEM ================= -->\n<section id=\"why\" class=\"probs\">\n  <div class=\"wrap rv {{rv.why}}\" data-rv=\"why\" ref=\"{{rvRef}}\">\n    <div class=\"pb-grid\">\n      <div class=\"pb-story\">\n        <div class=\"eyb\">Sound familiar?</div>\n        <h2 class=\"h2 pb-h\">It’s 9:40 on Monday. The client wants an update by noon.</h2>\n        <p class=\"pb-p\">The plan is in a spreadsheet. The latest file is in someone’s inbox. The decision you need was made in a chat thread on Thursday, and the one person who remembers it is in meetings until 11.</p>\n        <p class=\"pb-p\">So you spend the morning asking around instead of doing the work. Then you do it all again on Wednesday.</p>\n      </div>\n      <div class=\"pb-list\">\n        <div class=\"pb-card\"><span class=\"pb-i\"><svg class=\"ic\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"></rect></svg></span><div><b>Updates live in five apps</b><span>Chat, email, docs, sheets and a calendar. Nobody has the full picture.</span></div><em>01</em></div>\n        <div class=\"pb-card\"><span class=\"pb-i\"><svg class=\"ic\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"></rect><path d=\"M3 10h18M8 3v4M16 3v4M9 15l6 0M13 13l2 2-2 2\"></path></svg></span><div><b>Dates slip without anyone noticing</b><span>A task moves a week, and the people waiting on it find out on the due date.</span></div><em>02</em></div>\n        <div class=\"pb-card\"><span class=\"pb-i\"><svg class=\"ic\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 7v5l3 2\"></path></svg></span><div><b>Meetings just to catch up</b><span>Half of every sync is people reading out their status to each other.</span></div><em>03</em></div>\n      </div>\n    </div>\n    <div class=\"pb-turn\">\n      <span class=\"pb-line\" aria-hidden=\"true\"></span>\n      <p>TaskHub keeps the plan, the work and the conversation in <span class=\"pb-hl\">one place</span>. Everyone sees the same thing, so nobody has to ask.</p>\n      <a class=\"pb-link\" href=\"#features\">See how it works<svg class=\"ic\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 2.2\"><path d=\"M12 5v14M6 13l6 6 6-6\"></path></svg></a>\n    </div>\n  </div>\n</section>\n\n<div class=\"sep\"></div>\n\n<!-- ================= FEATURES ================= -->\n<section id=\"features\" class=\"fsec\">\n  <div class=\"rv {{rv.features}}\" data-rv=\"features\" ref=\"{{rvRef}}\">\n    <div class=\"wrap\">\n      <div class=\"eyb\">How it works</div>\n      <h2 class=\"h2\">One place for the plan, the work and the talk</h2>\n      <div class=\"tabs\" role=\"tablist\" aria-label=\"Features\" ref=\"{{tabsRef}}\" onScroll=\"{{onTabsScroll}}\">\n        <button class=\"tab {{tabCls.0}}\" role=\"tab\" aria-selected=\"{{tabSel.0}}\" onClick=\"{{tabPick.0}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v17h17\"></path><path d=\"M7.5 16c1.5 0 1.8-9 3.6-9 1.6 0 1.4 6 3.4 6 1.3 0 1.8-2 2.5-3\"></path></svg>Project Timelines</button>\n        <button class=\"tab {{tabCls.1}}\" role=\"tab\" aria-selected=\"{{tabSel.1}}\" onClick=\"{{tabPick.1}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v18\"></path><rect x=\"7\" y=\"5\" width=\"13\" height=\"5\" rx=\"1\"></rect><rect x=\"7\" y=\"14\" width=\"8\" height=\"5\" rx=\"1\"></rect></svg>Drag-and-drop</button>\n        <button class=\"tab {{tabCls.2}}\" role=\"tab\" aria-selected=\"{{tabSel.2}}\" onClick=\"{{tabPick.2}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"6.5\" r=\"2.3\"></circle><path d=\"M3 13.5c0-2.1 1.8-3.6 4-3.6s4 1.5 4 3.6\"></path><circle cx=\"17\" cy=\"13.5\" r=\"2.3\"></circle><path d=\"M13 20.5c0-2.1 1.8-3.6 4-3.6s4 1.5 4 3.6\"></path><path d=\"M14 3.5h3.5a2 2 0 0 1 2 2V8M10 20.5H6.5a2 2 0 0 1-2-2V17\"></path></svg>Collaboration</button>\n        <button class=\"tab {{tabCls.3}}\" role=\"tab\" aria-selected=\"{{tabSel.3}}\" onClick=\"{{tabPick.3}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"17\" y=\"3\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"3\" y=\"17\" width=\"4\" height=\"4\" rx=\".8\"></rect><rect x=\"17\" y=\"17\" width=\"4\" height=\"4\" rx=\".8\"></rect><path d=\"M7 5h10M5 7v10M19 7l-.8 10M7 19h10\"></path></svg>Customization</button>\n      </div>\n    </div>\n    <div class=\"tbase\"></div>\n\n    <div class=\"stage\">\n      <div class=\"stage-grid\" aria-hidden=\"true\"></div>\n      <div class=\"fpanel {{panelSw}}\" style=\"position: relative\">\n        <!-- ---------- phone timeline demonstration (auto tour) ---------- -->\n        <div class=\"ph\">\n          <div class=\"phs sm\">\n            <div class=\"pttl\"><span>Projects</span><span class=\"pav\" style=\"width: 30px; height: 30px; flex-basis: 30px; font-size: 10px\">FS</span></div>\n\n            <div class=\"pc psrch {{fOn.search}}\">\n              <svg class=\"ic\" width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg>\n              <sc-if value=\"{{fSearching}}\" hint-placeholder-val=\"{{false}}\"><span class=\"typed\">SkyForge</span><span class=\"caret\"></span></sc-if>\n              <sc-if value=\"{{fNotSearching}}\" hint-placeholder-val=\"{{true}}\"><span>Search Project</span></sc-if>\n              <span class=\"tap\" style=\"left: 78%\"></span>\n              <div class=\"ptip\">Find any project instantly.</div>\n            </div>\n\n            <div class=\"pc {{fOn.days}}\" style=\"padding: 10px 10px\">\n              <div class=\"pct\" style=\"padding: 0 4px\"><span>January</span><span class=\"pmut\">Week 1</span></div>\n              <div class=\"pdays\">\n                <sc-for list=\"{{fDays}}\" as=\"d\" hint-placeholder-count=\"6\">\n                  <span class=\"pd {{d.cls}}\">{{d.n}}<sc-if value=\"{{d.tap}}\" hint-placeholder-val=\"{{false}}\"><span class=\"tap\"></span></sc-if></span>\n                </sc-for>\n              </div>\n              <div class=\"ptip\">Jump to any day on the timeline.</div>\n            </div>\n\n            <div class=\"pc {{fOn.lane}}\">\n              <div class=\"plane\">\n                <div class=\"pvl\" style=\"left: {{fLine}}\"></div>\n            <div class=\"pbar {{fBar.0}}\" style=\"left: 16.6667%; width: 83.3333%; top: 6px\"><span class=\"bdot\"></span><span>SkyForge</span><em>Open</em><span class=\"tap\" style=\"left: 34%\"></span></div>\n            <div class=\"pbar {{fBar.1}}\" style=\"left: 0.0000%; width: 50.0000%; top: 38px\"><span class=\"bdot\"></span><span>Horizon</span></div>\n            <div class=\"pbar {{fBar.2}}\" style=\"left: 50.0000%; width: 50.0000%; top: 70px\"><span class=\"bdot\"></span><span>Phoenix</span><em>Open</em></div>\n            <div class=\"pbar {{fBar.3}}\" style=\"left: 0.0000%; width: 33.3333%; top: 102px\"><span class=\"bdot\"></span><span>Atlas</span></div>\n              </div>\n              <div class=\"ptip\">See every project&#39;s span at a glance.</div>\n            </div>\n\n            <div class=\"pc pdet {{fOn.det}}\">\n              <div style=\"display: flex; flex-direction: column; gap: 5px\">\n                <span style=\"font: 700 13px/1 Nunito, sans-serif; color: #F3F4F8\">SkyForge</span>\n                <span class=\"pmut\">Jan 04 – Jan 08 · 5 days</span>\n              </div>\n              <span class=\"pstat {{fStatCls}}\">{{fStatLabel}}<span class=\"tap\"></span></span>\n              <div class=\"ptip up\">Update a project&#39;s status with one tap.</div>\n            </div>\n\n            <div class=\"ptab\">\n              <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><path d=\"M3 9h18M9 21V9\"></path></svg></span>\n              <span class=\"on\"><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 3v17h17\"></path><path d=\"M8 8h6M10 12h7M8 16h5\"></path></svg></span>\n              <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\"></rect><path d=\"M9 3h6v3H9zM9 13l2 2 4-4\"></path></svg></span>\n              <span><svg class=\"ic\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7\"></path></svg></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"sep\"></div>\n</section>\n\n<!-- ================= INTEGRATIONS ================= -->\n<section id=\"platform\" class=\"isec\">\n  <div class=\"wrap rv {{rv.integr}}\" data-rv=\"integr\" ref=\"{{rvRef}}\">\n    <div class=\"eyb\">Integrations</div>\n    <h2 class=\"h2\">Plugs into the tools you already use</h2>\n    <p class=\"lead\">Calls, chats and files flow into TaskHub and come out as tasks your team can act on.</p>\n\n    <!-- desktop circuit -->\n    <div class=\"int {{intTouched}}\">\n      <div class=\"arc a1\"></div>\n      <div class=\"arc a2\"></div>\n\n      <!-- lines: left (icon → label → down → label → down) -->\n      <div class=\"ln h\" style=\"left: 28px; width: calc(20% - 28px); top: 102px\"><i></i></div>\n      <div class=\"ln v k1\" style=\"left: 20%; top: 102px; height: 198px\"><i></i></div>\n      <div class=\"ln h k2\" style=\"left: 20%; width: 17%; top: 300px\"><i></i></div>\n      <div class=\"ln v k3\" style=\"left: 37%; top: 300px; height: 145px\"><i></i></div>\n      <!-- lines: right -->\n      <div class=\"ln h rev\" style=\"left: 80%; width: calc(20% - 28px); top: 102px\"><i></i></div>\n      <div class=\"ln v k1\" style=\"left: 80%; top: 102px; height: 198px\"><i></i></div>\n      <div class=\"ln h rev k2\" style=\"left: 63%; width: 17%; top: 300px\"><i></i></div>\n      <div class=\"ln v k3\" style=\"left: 63%; top: 300px; height: 145px\"><i></i></div>\n\n      <!-- hub -->\n      <div class=\"hub\">\n        <svg class=\"logo-ic\" width=\"78\" height=\"78\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n      </div>\n\n      <!-- left icons -->\n      <button class=\"{{lic.0}}\" onClick=\"{{lPick.0}}\" data-name=\"Team chat\" aria-label=\"Team chat\" aria-pressed=\"{{lOn.0}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></span></button>\n      <button class=\"{{lic.1}}\" onClick=\"{{lPick.1}}\" data-name=\"Video meetings\" aria-label=\"Video meetings\" aria-pressed=\"{{lOn.1}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></span></button>\n      <button class=\"{{lic.2}}\" onClick=\"{{lPick.2}}\" data-name=\"Call recording\" aria-label=\"Call recording\" aria-pressed=\"{{lOn.2}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></span></button>\n      <!-- right icons -->\n      <button class=\"{{ric.0}}\" onClick=\"{{rPick.0}}\" data-name=\"Voice notes\" aria-label=\"Voice notes\" aria-pressed=\"{{rOn.0}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></span></button>\n      <button class=\"{{ric.1}}\" onClick=\"{{rPick.1}}\" data-name=\"Cloud files\" aria-label=\"Cloud files\" aria-pressed=\"{{rOn.1}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></span></button>\n      <button class=\"{{ric.2}}\" onClick=\"{{rPick.2}}\" data-name=\"Social publishing\" aria-label=\"Social publishing\" aria-pressed=\"{{rOn.2}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></span></button>\n      <div class=\"ihint hl\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\" style=\"stroke-width: 2.4\"><path d=\"M6 15l6-6 6 6\"></path></svg>Click to explore</div>\n      <div class=\"ihint hr\" aria-hidden=\"true\"><svg class=\"ic\" viewBox=\"0 0 24 24\" style=\"stroke-width: 2.4\"><path d=\"M6 15l6-6 6 6\"></path></svg>Click to explore</div>\n\n      <!-- left circuit texts -->\n      <div class=\"lb {{lsw}}\" style=\"left: 20%; top: 102px\">{{L.l1}}</div>\n      <div class=\"bxi\" style=\"left: 20%; top: 202px\"><span class=\"bxin {{lsw}}\"><sc-if value=\"{{lIs.0}}\" hint-placeholder-val=\"{{true}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></sc-if><sc-if value=\"{{lIs.1}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></sc-if><sc-if value=\"{{lIs.2}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></sc-if></span></div>\n      <div class=\"lb {{lsw}}\" style=\"left: 37%; top: 300px\">{{L.l2}}</div>\n      <div class=\"lb y {{lsw}}\" style=\"left: 37%; top: 445px\">{{L.l3}}</div>\n      <!-- right circuit texts -->\n      <div class=\"lb {{rsw}}\" style=\"left: 80%; top: 102px\">{{R.l1}}</div>\n      <div class=\"bxi\" style=\"left: 80%; top: 251px\"><span class=\"bxin {{rsw}}\"><sc-if value=\"{{rIs.0}}\" hint-placeholder-val=\"{{true}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></sc-if><sc-if value=\"{{rIs.1}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></sc-if><sc-if value=\"{{rIs.2}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></sc-if></span></div>\n      <div class=\"lb {{rsw}}\" style=\"left: 63%; top: 300px\">{{R.l2}}</div>\n      <div class=\"lb y {{rsw}}\" style=\"left: 63%; top: 445px\">{{R.l3}}</div>\n    </div>\n\n    <!-- mobile: six integrations, one chain -->\n    <div class=\"intm {{intTouched}}\">\n      <div class=\"mrow\" onTouchStart=\"{{mTs}}\" onTouchEnd=\"{{mTe}}\">\n        <div class=\"mtrack\" style=\"transform: translateX(-{{mOff}}px)\">\n          <button class=\"ii {{m6.0}}\" onClick=\"{{m6Pick.0}}\" aria-label=\"Team chat\" aria-pressed=\"{{m6On.0}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></span></button>\n          <button class=\"ii {{m6.1}}\" onClick=\"{{m6Pick.1}}\" aria-label=\"Video meetings\" aria-pressed=\"{{m6On.1}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></span></button>\n          <button class=\"ii {{m6.2}}\" onClick=\"{{m6Pick.2}}\" aria-label=\"Call recording\" aria-pressed=\"{{m6On.2}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></span></button>\n          <button class=\"ii {{m6.3}}\" onClick=\"{{m6Pick.3}}\" aria-label=\"Voice notes\" aria-pressed=\"{{m6On.3}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></span></button>\n          <button class=\"ii {{m6.4}}\" onClick=\"{{m6Pick.4}}\" aria-label=\"Cloud files\" aria-pressed=\"{{m6On.4}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></span></button>\n          <button class=\"ii {{m6.5}}\" onClick=\"{{m6Pick.5}}\" aria-label=\"Social publishing\" aria-pressed=\"{{m6On.5}}\"><span class=\"gl\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></span></button>\n        </div>\n      </div>\n      <div class=\"mchain\">\n        <div class=\"ln v\"></div>\n        <div class=\"mrail\" ref=\"{{mrailRef}}\" aria-hidden=\"true\"><b></b></div>\n        <div class=\"mx-chip {{msw}}\"><i><sc-if value=\"{{mIs.0}}\" hint-placeholder-val=\"{{true}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 5h16v11H9l-5 4z\"></path></svg></sc-if><sc-if value=\"{{mIs.1}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"7\" width=\"12\" height=\"10\" rx=\"2\"></rect><path d=\"M15 11l6-3v8l-6-3z\"></path></svg></sc-if><sc-if value=\"{{mIs.2}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle class=\"fillc\" cx=\"12\" cy=\"12\" r=\"6\"></circle></svg></sc-if><sc-if value=\"{{mIs.3}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 10v4M9 7v10M13 4v16M17 8v8M21 11v2\"></path></svg></sc-if><sc-if value=\"{{mIs.4}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.2 4.2 0 0 0 7 18z\"></path></svg></sc-if><sc-if value=\"{{mIs.5}}\" hint-placeholder-val=\"{{false}}\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"6\" r=\"2.5\"></circle><circle cx=\"18\" cy=\"18\" r=\"2.5\"></circle><path d=\"M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8\"></path></svg></sc-if></i>{{M.l1}}</div>\n        <div class=\"mx-hubw\"><span class=\"mx-pulse\"></span><span class=\"mx-pulse d\"></span><div class=\"mx-hub\"><svg width=\"52\" height=\"52\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"mx-orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>\n        <div class=\"mx-res {{msw}}\">\n          <div class=\"mx-rk\">{{Mname}}</div>\n          <div class=\"mx-rt\">{{M.l2}}</div>\n          <div class=\"mx-ro\"><span><svg class=\"ic\" width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" style=\"stroke-width: 3.4\"><path d=\"M5 12.5l4.5 4.5L19 7\"></path></svg></span>{{M.l3}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"sep\"></div>\n\n<!-- ================= PRICING ================= -->\n<section id=\"pricing\" style=\"position: relative; padding: 110px 0 130px; text-align: center\">\n  <div class=\"wrap rv {{rv.pricing}}\" data-rv=\"pricing\" ref=\"{{rvRef}}\">\n    <div class=\"eyb\">Pricing</div>\n    <h2 class=\"h2\">Pick a plan. Pay nothing for 30 days.</h2>\n    <p class=\"lead\" style=\"max-width: 640px\">Every plan starts with a free month. Pay yearly and you save 30%.</p>\n    <div class=\"bill\">\n      <button class=\"bl {{billM}}\" onClick=\"{{setMonthly}}\">Monthly</button>\n      <button class=\"tg {{billT}}\" onClick=\"{{toggleBill}}\" aria-label=\"Annual billing\" aria-pressed=\"{{annual}}\"></button>\n      <button class=\"bl {{billA}}\" onClick=\"{{setAnnual}}\">Annual</button>\n    </div>\n    <div class=\"plans\">\n      <sc-for list=\"{{plans}}\" as=\"p\" hint-placeholder-count=\"3\">\n        <div class=\"plan\">\n          <h3 class=\"hd\" style=\"margin: 0; font-size: 27px; font-weight: 600; color: #F3F4F8\">{{p.name}}</h3>\n          <div style=\"display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; margin-top: 18px\">\n            <div style=\"display: flex; align-items: flex-start; gap: 2px\">\n              <span style=\"font-size: 20px; font-weight: 800; margin-top: 4px\">$</span>\n              <span class=\"hd pnum {{p.sw}}\" style=\"font-size: 50px; font-weight: 800; line-height: 1\">{{p.price}}</span>\n              <span style=\"align-self: flex-end; font-size: 15px; font-weight: 700; color: #F3F4F8; margin: 0 0 5px 5px\">{{p.per}}</span>\n            </div>\n            <span class=\"save {{p.saveCls}}\">save 30%</span>\n          </div>\n          <p style=\"margin: 16px 0 0; font-size: 15px; line-height: 1.5; color: #A6A8BF; min-height: 45px\">{{p.desc}}</p>\n          <div style=\"display: flex; flex-direction: column; gap: 16px; margin-top: 26px\">\n            <sc-for list=\"{{p.feats}}\" as=\"f\" hint-placeholder-count=\"3\">\n              <div class=\"feat\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M8 12.5l2.7 2.7L16 10\"></path></svg>{{f}}</div>\n            </sc-for>\n          </div>\n          <div style=\"margin: 24px 0 32px; min-height: 22px; font-size: 15px; font-weight: 600; color: #D9DAE6\">{{p.people}}</div>\n          <a class=\"btn-y\" href=\"#top\">Start free month</a>\n        </div>\n      </sc-for>\n    </div>\n    <div class=\"gtee\"><span class=\"gtee-i\"><svg class=\"ic\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 1.9\"><path d=\"M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z\"></path><path d=\"M8.8 12.2l2.2 2.2 4.3-4.6\"></path></svg></span><p><b>Try it for 30 days, risk-free.</b> If TaskHub doesn’t save your team time, cancel before day 30 and you pay nothing.</p></div>\n  </div>\n</section>\n\n<!-- ================= TESTIMONIALS ================= -->\n<section id=\"teams\" class=\"testi\">\n  <div class=\"rv {{rv.testi}}\" data-rv=\"testi\" ref=\"{{rvRef}}\">\n    <sc-for list=\"{{people}}\" as=\"t\" hint-placeholder-count=\"6\">\n      <button class=\"fa {{t.cls}}\" style=\"background: {{t.c}}\" onClick=\"{{t.pick}}\" aria-label=\"Show testimonial from {{t.n}}\">{{t.i}}</button>\n    </sc-for>\n    <div class=\"wrap\" style=\"position: relative; text-align: center\">\n      <h2 class=\"h2\" style=\"margin: 0\">15,000 teams switched. Here’s why.</h2>\n      <div onTouchStart=\"{{tTs}}\" onTouchEnd=\"{{tTe}}\" style=\"display: flex; align-items: center; justify-content: center; gap: 48px; margin-top: 44px\">\n        <button class=\"arr\" onClick=\"{{tPrev}}\" aria-label=\"Previous testimonial\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 2.2\"><path d=\"M19 12H5M11 6l-6 6 6 6\"></path></svg></button>\n        <div class=\"{{tSw}}\" style=\"display: flex; flex-direction: column; align-items: center; gap: 10px; width: 320px; max-width: 60vw\">\n          <div class=\"tav\" style=\"background: {{T.c}}\">{{T.i}}</div>\n          <div style=\"font-size: 14px; font-weight: 600; margin-top: 4px\">{{T.n}}</div>\n          <p style=\"margin: 0; font-size: 13px; line-height: 1.6; color: #C9CBDB; min-height: 42px\">{{T.q}}</p>\n        </div>\n        <button class=\"arr\" onClick=\"{{tNext}}\" aria-label=\"Next testimonial\"><svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" style=\"stroke-width: 2.2\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></button>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- ================= CTA ================= -->\n<section class=\"cta\">\n  <div class=\"wrap rv {{rv.cta}}\" data-rv=\"cta\" ref=\"{{rvRef}}\" style=\"position: relative; display: flex; flex-direction: column; align-items: center\">\n    <svg class=\"logo-ic cta-logo\" width=\"64\" height=\"64\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n    <div class=\"hd\" style=\"margin-top: 16px; font-size: 24px; font-weight: 800; letter-spacing: -.02em\">TaskHub</div>\n    <h2 class=\"h2\" style=\"margin-top: 40px\">Get your team on one page this week.</h2>\n    <p class=\"cta-p\">Or keep asking for updates across five different apps. Your free month starts the minute you sign up.</p>\n    <a class=\"btn-y\" href=\"#pricing\" style=\"margin-top: 30px\">Start your free month</a>\n    <p class=\"cta-ps\"><b>P.S.</b> Every plan is free for 30 days, and paying yearly saves you 30%. If TaskHub isn’t right for your team, cancel before day 30 and you pay nothing.</p>\n  </div>\n</section>\n\n<!-- ================= FOOTER ================= -->\n<footer style=\"border-top: 1px solid rgba(255,255,255,.06); padding: 56px 0 48px\">\n  <div class=\"wrap\" style=\"display: flex; flex-wrap: wrap; justify-content: space-between; gap: 48px\">\n    <div class=\"fbrand\" style=\"display: flex; flex-direction: column; justify-content: space-between; gap: 40px; min-height: 150px\">\n      <a class=\"logo-link\" href=\"#top\" style=\"display: flex; align-items: center; gap: 10px; text-decoration: none; color: #F3F4F8\">\n        <svg class=\"logo-ic\" width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g class=\"orb\"><circle cx=\"24\" cy=\"24\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,.3)\" stroke-width=\"2\"></circle><circle cx=\"38.14\" cy=\"9.86\" r=\"3.4\" fill=\"#F3F4F8\"></circle></g><circle cx=\"24\" cy=\"24\" r=\"12.5\" fill=\"#F9B12E\"></circle><path class=\"ck\" d=\"M18.4 24.4l3.9 3.9 7.2-7.8\" pathLength=\"1\" fill=\"none\" stroke=\"#0F1020\" stroke-width=\"2.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>\n        <span class=\"hd\" style=\"font-size: 19px; font-weight: 800; letter-spacing: -.02em\">TaskHub</span>\n      </a>\n      <span style=\"font-size: 12.5px; color: #C9CBDB\">TaskHub Inc.</span>\n    </div>\n    <div class=\"fcols\" style=\"display: flex; flex-wrap: wrap; gap: 56px 72px\">\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Resources</h4>\n        <a class=\"fl\" href=\"#top\">About Us</a><a class=\"fl\" href=\"#top\">Media Center</a><a class=\"fl\" href=\"#top\">Blog</a><a class=\"fl\" href=\"#top\">Career</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Product</h4>\n        <a class=\"fl\" href=\"#features\">Insights</a><a class=\"fl\" href=\"#platform\">Integrations</a><a class=\"fl\" href=\"#top\">Pixel</a><a class=\"fl\" href=\"#pricing\">Pricing</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Solutions</h4>\n        <a class=\"fl\" href=\"#teams\">TaskHub Teams</a><a class=\"fl\" href=\"#top\">Knowledge Base</a><a class=\"fl\" href=\"#top\">Trust Center</a>\n      </div>\n      <div style=\"display: flex; flex-direction: column; gap: 12px\">\n        <h4 class=\"hd\" style=\"margin: 0 0 6px; font-size: 14px; font-weight: 700\">Company</h4>\n        <a class=\"fl\" href=\"#top\">About Us</a><a class=\"fl\" href=\"#top\">Careers</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"fword\" aria-hidden=\"true\">TaskHub</div>\n</footer>\n\n</div>",
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
      tIdx: 0, tN: 0,
      seen: {}, touched: false,
      fHover: 'rest', fTipN: 0, fTrack: false, fFlip: false, fPlaced: false,
      menuOpen: false, mSel: 1, mN: 0, tour: 0, ftour: 0
    };
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
      { l1: 'Chat right next to the work', l2: 'Turn any message into a task', l3: 'Nothing gets lost in a thread' },
      { l1: 'Schedule calls from any task', l2: 'Agenda and notes live on the task', l3: 'Join with one click' },
      { l1: 'Every call recorded for you', l2: 'Share the recap with one link', l3: 'Catch up in five minutes' }
    ];
    this.R = [
      { l1: 'Leave a voice note on any task', l2: 'Update the team without typing', l3: 'Say it once, everyone hears it' },
      { l1: 'Every file sits next to its task', l2: 'Edit files together, in context', l3: 'No more “which version is final?”' },
      { l1: 'Plan posts on the same calendar', l2: 'Review posts with your team', l3: 'Publish on time, every time' }
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
    this.toggleMenu = () => this.setState((s) => ({ menuOpen: !s.menuOpen }));
    this.mrowRef = (el) => { this.mrowEl = el; };
    this.mrailRef = (el) => { this.mrailEl = el; };
    this.tTs = (e) => { const t = e && e.touches && e.touches[0]; this.tX0 = t ? t.clientX : null; };
    this.tTe = (e) => {
      const t = e && e.changedTouches && e.changedTouches[0];
      if (this.tX0 == null || !t) return;
      const dx = t.clientX - this.tX0;
      this.tX0 = null;
      if (Math.abs(dx) > 36) this.goT(this.state.tIdx + (dx < 0 ? 1 : -1));
    };
    this.mTs = (e) => { const t = e && e.touches && e.touches[0]; this.mX0 = t ? t.clientX : null; };
    this.mTe = (e) => {
      const t = e && e.changedTouches && e.changedTouches[0];
      if (this.mX0 == null || !t) return;
      const dx = t.clientX - this.mX0;
      this.mX0 = null;
      if (Math.abs(dx) < 36) return;
      this.userTouched();
      this.setState((s) => ({ mSel: (s.mSel + (dx < 0 ? 1 : 5)) % 6, mN: s.mN + 1 }));
    };
    this.onMrowScroll = () => {
      clearTimeout(this.mT);
      this.mT = setTimeout(() => {
        const box = this.mrowEl;
        if (!box || this.progScroll) return;
        const r = box.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        let best = 0, bd = Infinity;
        Array.prototype.forEach.call(box.querySelectorAll('.ii'), (t, i) => {
          const tr = t.getBoundingClientRect();
          const dd = Math.abs(tr.left + tr.width / 2 - mid);
          if (dd < bd) { bd = dd; best = i; }
        });
        if (best !== this.state.mSel) { this.userTouched(); this.setState((s) => ({ mSel: best, mN: s.mN + 1 })); }
      }, 140);
    };
    this.closeMenu = () => this.setState({ menuOpen: false });
    this.m6Pick = [0, 1, 2, 3, 4, 5].map((i) => () => { this.userTouched(); if (i !== this.state.mSel) this.setState((s) => ({ mSel: i, mN: s.mN + 1 })); });
    this.fEnter = {};
    ['title', 'search', 'days', 'bar0', 'bar1', 'bar2', 'bar3'].forEach((k) => { this.fEnter[k] = () => this.setFHover(k); });
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
    this.tabPick = [0, 1, 2, 3].map((i) => (e) => {
      if (e && e.currentTarget && e.currentTarget.scrollIntoView) e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      if (i !== this.state.tab) this.setState((s) => ({ tab: i, tabN: s.tabN + 1 }));
    });
    this.tabsRef = (el) => { this.tabsEl = el; };
    this.onTabsScroll = () => {
      clearTimeout(this.tabT);
      this.tabT = setTimeout(() => {
        const box = this.tabsEl;
        if (!box) return;
        const r = box.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        let best = 0, bd = Infinity;
        Array.prototype.forEach.call(box.querySelectorAll('.tab'), (t, i) => {
          const tr = t.getBoundingClientRect();
          const dd = Math.abs(tr.left + tr.width / 2 - mid);
          if (dd < bd) { bd = dd; best = i; }
        });
        if (best !== this.state.tab) this.setState((s) => ({ tab: best, tabN: s.tabN + 1 }));
      }, 140);
    };
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
  }

  componentDidMount() {
    this.clock = setInterval(() => this.setState({ now: Date.now() }), 10000);
    this.startAuto();
    this.cycle = setInterval(() => {
      if (this.state.touched || !this.state.seen.integr) return;
      this.setState((s) => ({ mSel: (s.mSel + 1) % 6, mN: s.mN + 1 }));
    }, 3200);
    this.t1 = setTimeout(this.placeRest, 60);
    this.t2 = setTimeout(this.placeRest, 1950);
    this.t5 = setTimeout(this.placeFRest, 80);
    this.t7 = setTimeout(() => this.centerM(this.state.mSel, true), 120);
    const run = (ts) => {
      const el = this.mrailEl;
      const b = el && el.firstChild;
      if (b && b.style) {
        const H = Math.max(0, el.clientHeight - 34);
        const p = (ts % 4200) / 4200;
        b.style.top = (p * H) + 'px';
        b.style.opacity = String(Math.max(0, Math.min(1, p / 0.08, (1 - p) / 0.1)) * 0.6);
      }
      this.raf = requestAnimationFrame(run);
    };
    this.raf = requestAnimationFrame(run);
    this.ft0 = setTimeout(() => { this.ftourT = setInterval(() => this.setState((s) => ({ ftour: (s.ftour + 1) % 4 })), 3100); }, 1400);
    this.tourT = setInterval(() => this.setState((s) => ({ tour: (s.tour + 1) % 4 })), 2900);
    this.t6 = setTimeout(this.placeFRest, 2000);
    window.addEventListener('resize', this.placeRest);
    window.addEventListener('resize', this.placeFRest);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.auto);
    clearInterval(this.cycle);
    cancelAnimationFrame(this.raf);
    clearInterval(this.tourT);
    clearInterval(this.ftourT);
    clearTimeout(this.ft0);
    clearTimeout(this.t1); clearTimeout(this.t2); clearTimeout(this.t3);
    clearTimeout(this.t4); clearTimeout(this.t5); clearTimeout(this.t6);
    window.removeEventListener('resize', this.placeRest);
    window.removeEventListener('resize', this.placeFRest);
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

  centerM(i, instant) {
    const box = this.mrowEl;
    if (!box) return;
    const b = box.querySelectorAll('.ii')[i];
    if (!b) return;
    this.progScroll = true;
    box.scrollTo({ left: b.offsetLeft - (box.clientWidth - b.offsetWidth) / 2, behavior: instant ? 'auto' : 'smooth' });
    clearTimeout(this.progT);
    this.progT = setTimeout(() => { this.progScroll = false; }, 800);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState && prevState.mSel !== this.state.mSel) this.centerM(this.state.mSel);
  }

  userTouched() {
    if (this.state.touched) return;
    clearInterval(this.cycle);
    this.setState({ touched: true });
  }

  startAuto() {
    clearInterval(this.auto);
    if (this.props.autoplay === false) return;
    this.auto = setInterval(() => this.setState((s) => ({ tIdx: (s.tIdx + 1) % 6, tN: s.tN + 1 })), 6500);
  }

  goT(i) {
    const n = (i + 6) % 6;
    if (n === this.state.tIdx) return;
    this.setState((s) => ({ tIdx: n, tN: s.tN + 1 }));
    this.startAuto();
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
    const k = d.width / (this.demoEl.offsetWidth || d.width);
    const x = (e.clientX - d.left) / k;
    const y = (e.clientY - d.top) / k;
    this.curEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > this.demoEl.offsetWidth - 720;
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
    const k = d.width / (this.demoEl.offsetWidth || d.width);
    const x = (c.left - d.left + c.width * 0.12) / k;
    const y = (c.top - d.top + c.height * 0.8) / k;
    this.curEl.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    const flip = x > this.demoEl.offsetWidth - 720;
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
    const fTip = !s.fHover ? '' : (s.fHover.indexOf('bar') === 0 ? bars[+s.fHover.slice(3)].tip : fTips[s.fHover]);
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
      { name: 'Freelancer', m: 19, a: 13, desc: 'For one person running a handful of client projects.', feats: ['Up to 3 projects', 'Budget tracking', 'Up to 2 integrations'], people: '' },
      { name: 'Team', m: 49, a: 34, desc: 'For teams of 2 to 20 who plan and ship together.', feats: ['Up to 10 projects', 'Budget tracking', 'Up to 5 integrations'], people: '2 - 20 people' },
      { name: 'Company', m: 99, a: 69, desc: 'For companies running many projects across several teams.', feats: ['Unlimited projects', 'Budget tracking', 'Unlimited integrations'], people: '20+ people' }
    ].map((p) => ({ name: p.name, desc: p.desc, feats: p.feats, people: p.people, price: s.annual ? p.a : p.m, per: '/mo', sw: sw(s.billN), saveCls: s.annual ? 'on' : '' }));

    // testimonials
    const people = this.people.map((p, i) => ({ n: p.n, i: p.i, c: p.c, cls: 'p' + i + (i === s.tIdx ? ' on' : ''), pick: this.tPicks[i] }));

    const rv = {};
    ['logos', 'why', 'features', 'integr', 'pricing', 'testi', 'cta'].forEach((k) => { rv[k] = s.seen[k] ? 'in' : ''; });

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
      tabsRef: this.tabsRef, onTabsScroll: this.onTabsScroll,
      tabPick: this.tabPick, tline: 't' + s.tab, panelSw: sw(s.tabN),
      days: days, dayPrev: this.dayPrev, dayNext: this.dayNext, onSearch: this.onSearch,
      lineLeft: ((s.day - 0.5) / 12 * 100) + '%', bars: bars,
      fRef: this.fRef, tlcRef: this.tlcRef, fCurRef: this.fCurRef, onFMove: this.onFMove, onFLeave: this.onFLeave,
      fEnter: this.fEnter, fLeaveEl: this.fLeaveEl, fpc: fpc, fTip: fTip,
      fCurCls: (s.fTrack ? '' : 'idle ') + (s.fFlip ? 'flip ' : '') + (s.fPlaced ? '' : 'hide'),
      fTipCls: s.fHover ? sw(s.fTipN) : 'hide',
      lic: lic, ric: ric, lOn: lOn, rOn: rOn, lIs: lOn, rIs: rOn, mL: mL, mR: mR,
      lPick: this.lPick, rPick: this.rPick, intTouched: s.touched ? 'touched' : '',
      menuOpen: s.menuOpen, menuCls: s.menuOpen ? 'open' : '', toggleMenu: this.toggleMenu, closeMenu: this.closeMenu,
      m6: [0, 1, 2, 3, 4, 5].map((i) => (i === s.mSel ? 'sel' : '')), m6On: [0, 1, 2, 3, 4, 5].map((i) => i === s.mSel), m6Pick: this.m6Pick,
      M: s.mSel < 3 ? this.L[s.mSel] : this.R[s.mSel - 3], msw: sw(s.mN), Mname: ['Team chat', 'Video meetings', 'Call recording', 'Voice notes', 'Cloud files', 'Social publishing'][s.mSel],
      fOn: { search: s.ftour === 0 ? 'on' : '', days: s.ftour === 1 ? 'on' : '', lane: s.ftour === 2 ? 'on' : '', det: s.ftour === 3 ? 'on' : '' },
      fSearching: s.ftour === 0, fNotSearching: s.ftour !== 0,
      fDays: [3, 4, 5, 6, 7, 8].map((n) => ({ n: (n < 10 ? '0' : '') + n, tap: n === 7, cls: n === (s.ftour === 0 ? 6 : 7) ? 'sel' : '' })),
      fLine: (((s.ftour === 0 ? 6 : 7) - 3 + 0.5) / 6 * 100) + '%',
      fBar: [[4, 8, 0], [3, 5, 1], [6, 8, 1], [3, 4, 1]].map((r) => { const d = s.ftour === 0 ? 6 : 7; return ((d >= r[0] && d <= r[1]) ? 'act ' : '') + (s.ftour === 0 && r[2] ? 'dim' : ''); }),
      fStatCls: s.ftour === 3 ? 'done' : '', fStatLabel: s.ftour === 3 ? 'Done' : 'Open',
      pOn: { meet: s.tour === 0 ? 'on' : '', week: s.tour === 1 ? 'on' : '', tasks: s.tour === 2 ? 'on' : '', proj: s.tour === 3 ? 'on' : '' },
      pJoinCls: s.tour === 0 ? 'on' : '', pJoinLabel: s.tour === 0 ? 'JOINED' : 'JOIN',
      pT3: s.tour >= 2 ? 'done' : '', pDone: s.tour >= 2 ? 3 : 2,
      pLeftText: s.tour >= 2 ? 'All tasks done today' : '1 task left today',
      pBarSw: s.tour === 3 ? 'swA' : 'swB',
      pWeek: (() => { const t = new Date(); const mon = new Date(t.getFullYear(), t.getMonth(), t.getDate() - ((t.getDay() + 6) % 7)); return [0, 1, 2, 3, 4, 5, 6].map((i) => { const d = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i); return { d: 'MTWTFSS'[i], n: d.getDate(), tap: i === 4, cls: (d.toDateString() === t.toDateString() ? 'today ' : '') + (s.tour === 1 && i === 4 ? 'sel' : '') }; }); })(),
      mIs: [0, 1, 2, 3, 4, 5].map((i) => i === s.mSel), mrailRef: this.mrailRef, tTs: this.tTs, tTe: this.tTe, mOff: s.mSel * 76 + 28, mTs: this.mTs, mTe: this.mTe,
      L: this.L[s.lSel], R: this.R[s.rSel], lsw: sw(s.lN), rsw: sw(s.rN),
      annual: s.annual, billM: s.annual ? '' : 'on', billA: s.annual ? 'on' : '', billT: s.annual ? 'on' : '',
      setMonthly: this.setMonthly, setAnnual: this.setAnnual, toggleBill: this.toggleBill,
      plans: plans, priceSw: sw(s.billN), saveCls: s.annual ? 'on' : '',
      people: people, T: this.people[s.tIdx], tSw: sw(s.tN), tPrev: this.tPrev, tNext: this.tNext,
      rv: rv
    };
  }
}
    return Component;
  }
};
