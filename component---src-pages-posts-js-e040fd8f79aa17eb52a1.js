(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(151),r=t(157),l=t(155),d=t(153),c=i.b.li.withConfig({displayName:"PostLink__PostLinkSquare",componentId:"sc-1cdzz5v-0"})(["width:100%;min-height:30vh;height:auto;margin-bottom:30px;background-color:#2892F4;box-shadow:0px 4px 4px rgba(0,0,0,0.25);display:flex;justify-content:center;flex-direction:column;align-items:center;position:relative;transition-duration:0.5s;&:hover{transform:scale(1.10);box-shadow:0px 4px 4px rgba(0,0,0,0.5);}& h3{top:3vh;color:white;margin:10px;font-size:2.10em;text-align:center;font-weight:700;@media (max-width:800px){font-size:2em;}}@media (max-width:800px){min-height:30vh;& p{font-size:3em;}}& p{margin-top:30px;text-align:left;color:white;width:80%;font-size:2em;line-height:1.5;@media (max-width:800px){font-size:1.25em;}}"]),s=function(e){var n=e.post;return o.a.createElement(d.a,{to:n.frontmatter.path},o.a.createElement(c,null,o.a.createElement("h3",null,n.frontmatter.title," (",n.frontmatter.date,")"),o.a.createElement("p",null,n.excerpt)))},m=t(180),p=t.n(m);t.d(n,"pageQuery",function(){return g});var u=i.b.ul.withConfig({displayName:"posts__PostLinkContainer",componentId:"sc-7p78ip-0"})(["height:100%;grid-column:2/7;grid-row:4;@media (max-width:800px){grid-column:2/12;}"]),h=i.b.img.withConfig({displayName:"posts__ReadingImage",componentId:"sc-7p78ip-1"})(["grid-column:8/12;width:100%;grid-row:3;@media (max-width:800px){display:none;}"]),g=(n.default=function(e){var n=e.data.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return o.a.createElement(s,{key:e.node.id,post:e.node})});return o.a.createElement(r.a,{pageTitle:"Kamil Michna - posty"},o.a.createElement(l.a,null),o.a.createElement(u,null,n),o.a.createElement(h,{src:p.a}))},"3473231669")},152:function(e,n,t){var a;e.exports=(a=t(156))&&a.default||a},153:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(4),r=t.n(i),l=t(33),d=t.n(l);t.d(n,"a",function(){return d.a});t(152),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},154:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(158),r=t.n(i);n.a=function(e){return o.a.createElement(r.a,null,o.a.createElement("title",null,e.title),o.a.createElement("description",null,"Amatorski blog programistyczny połączony z portfolio"),o.a.createElement("meta",{name:"theme-color",content:"#2892F4"}))}},155:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(151),r=t(153),l=i.b.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-1r6rb97-0"})(["grid-column:1/13;height:10vh;display:grid;grid-template-columns:repeat(12,1fr);grid-gap:20px;align-items:flex-end;&:hover{cursor:default;}@media (max-width:800px){grid-gap:0px;}"]),d=i.b.h1.withConfig({displayName:"Header__Logo",componentId:"sc-1r6rb97-1"})(["display:flex;justify-content:center;align-items:center;font-size:2.4em;font-weight:bold;grid-column:2/4;background-color:green;height:60%;background:#2892F4;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:10px;color:white;@media (max-width:800px){height:100%;grid-column:1/4;padding:20px;box-sizing:border-box;box-shadow:none;border-radius:0px;}"]),c=i.b.nav.withConfig({displayName:"Header__Navigation",componentId:"sc-1r6rb97-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:20px;font-size:1.6em;grid-column:8/12;height:60%;background:#2892F4;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:10px;& a{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-weight:bold;text-decoration:none;}& a::after{transition-duration:0.1s;content:'';}& a:hover::after{content:'';width:50%;border-radius:4px;height:3px;margin:1px;background-color:white;}@media (max-width:800px){height:100%;grid-column:4/13;box-shadow:none;border-radius:0px;}"]);n.a=function(e){return o.a.createElement(l,null,o.a.createElement(d,null,"Kamil Michna"),o.a.createElement(c,null,o.a.createElement(r.a,{to:"/"},"O mnie"),o.a.createElement(r.a,{to:"/posts"},"Posty"),o.a.createElement(r.a,{to:"/contact"},"Kontakt"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kamilmichna"},"Github")))}},156:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),o=t.n(a),i=t(4),r=t.n(i),l=t(55),d=t(2),c=function(e){var n=e.location,t=d.default.getResourcesForPathnameSync(n.pathname);return t?o.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=c},157:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(159),r=t.n(i),l=t(151);function d(){var e=r()(["\n/* http://meyerweb.com/eric/tools/css/reset/ \nv2.0 | 20110126\nLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n margin: 0;\n padding: 0;\n border: 0;\n font-size: 100%;\n font: inherit;\n vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n display: block;\n}\nbody {\n line-height: 1;\n}\nol, ul {\n list-style: none;\n}\nblockquote, q {\n quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n content: '';\n content: none;\n}\ntable {\n border-collapse: collapse;\n border-spacing: 0;\n}\n@import url('https://fonts.googleapis.com/css?family=Roboto');\n#layoutContainer{\n    font-family: 'Roboto', sans-serif;\n    max-width: 100vw;\n    width: 100%;\n    height:100%;\n    font-size: 10px;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    grid-auto-rows: 5vh;\n    grid-gap: 20px;\n    min-height: 100vh;\n}\nbody::-webkit-scrollbar {\n    width: 1em;\n}\nbody::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n}\nbody::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color:  #2892F4;\n  outline: 1px solid slategrey;\n}\n\na{\n    text-decoration: none;\n}\n@media (max-width: 1600px) {\n    #layoutContainer{\n        font-size: 8px;\n    }\n}\n"]);return d=function(){return e},e}var c=Object(l.a)(d()),s=t(154);n.a=function(e){return o.a.createElement("div",{id:"layoutContainer"},o.a.createElement(s.a,{title:e.pageTitle}),o.a.createElement(c,null),e.children)}},180:function(e,n,t){e.exports=t.p+"static/reading-7d5ecf3e106b5672967528c76dc7a638.svg"}}]);
//# sourceMappingURL=component---src-pages-posts-js-e040fd8f79aa17eb52a1.js.map