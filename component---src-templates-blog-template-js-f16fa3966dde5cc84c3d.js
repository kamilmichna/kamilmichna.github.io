(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i}),n.d(t,"pageQuery",function(){return o});var a=n(0),r=n.n(a),A=n(150);function i(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(A.a,null,r.a.createElement("main",{className:"post_content"},r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("h2",{className:"post_content__post_title"},n.title),r.a.createElement("h3",null,n.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}})))))}var o="1579142440"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(143),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(145),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Kamil Michna"}}}}},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),A=n(4),i=n.n(A),o=n(51),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},149:function(e,t){e.exports="data:image/png;base64,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"},150:function(e,t,n){"use strict";var a=n(7),r=n.n(a),A=n(146),i=n(0),o=n.n(i),c=(n(147),n(144)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement(c.Link,{to:"/"},"O mnie"),o.a.createElement(c.Link,{to:"/posts/"},"Posty"),o.a.createElement("a",{href:"https://github.com/kamilmichna",rel:"noopener noreferrer",target:"_blank"},"Github"))},t}(o.a.Component),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("p",{className:"logotype"},this.props.logo),o.a.createElement(u,null),this.props.children)},t}(o.a.Component),s=n(151),d=n(149),h=n.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"layout__container"},o.a.createElement(c.StaticQuery,{query:"337171944",render:function(e){return o.a.createElement(l,{logo:e.site.siteMetadata.title})},data:A}),this.props.children,o.a.createElement(s.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Kamil Michna"),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:h.a})))},t}(o.a.Component);t.a=p}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-f16fa3966dde5cc84c3d.js.map