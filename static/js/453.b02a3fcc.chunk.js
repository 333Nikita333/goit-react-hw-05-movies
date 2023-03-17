"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[453],{3225:function(n,e,t){t.d(e,{P_:function(){return u},aV:function(){return s},ck:function(){return p}});var r,i,o,a=t(168),c=t(6444),s=c.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  padding: 0 0 20px 0;\n  margin-top: 10px;\n"]))),p=c.ZP.li(i||(i=(0,a.Z)(["\n  overflow: hidden;\n  border: solid 1px black;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,\n      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n  }\n  & a {\n    color: #000000;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    & div {\n      text-align: center;\n      width: 250px;\n      height: 460px;\n\n      & span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 376px;\n        border-bottom: solid 1px black;\n\n        font-size: 30px;\n      }\n      & img {\n        width: 250px;\n        margin-bottom: 5px;\n        border-bottom: solid 1px black;\n      }\n    }\n\n    & b {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 10px;\n      font-size: 16px;\n    }\n  }\n\n  &:hover > a {\n    color: red;\n  }\n"]))),u=c.ZP.b(o||(o=(0,a.Z)(["\n  display: block;\n  margin: 20px auto 0;\n  font-size: 20px;\n  width: 200px;\n"])))},9937:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(1087),i=t(7689),o=t(3225),a=t(184),c=function(n){var e=n.movies,t=(0,i.TH)();return(0,a.jsx)(o.aV,{children:e.map((function(n){var e=n.id,i=n.title,c=n.poster_path;return(0,a.jsx)(o.ck,{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,a.jsxs)("div",{children:[c?(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:"Poster ".concat(i),width:"250px",height:"375px"}):(0,a.jsx)("span",{children:"No poster"}),(0,a.jsx)("b",{children:i})]})})},e)}))})}},5453:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,o,a,c=t(9439),s=t(2791),p=t(1087),u=t(7596),d=t(9627),l=t(3225),x=t(9937),h=t(5763),f=t(168),g=t(6444),m=g.ZP.div(r||(r=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),b=g.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=g.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.4;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    opacity: 1;\n  }\n\n  & svg {\n    width: 24px;\n    height: 24px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n  }\n"]))),y=g.ZP.input(a||(a=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  \n  &::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),Z=t(184),j=function(n){var e=n.onSubmit;return(0,Z.jsx)(m,{children:(0,Z.jsxs)(b,{onSubmit:e,children:[(0,Z.jsx)(y,{type:"text",name:"name",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,Z.jsx)(v,{children:(0,Z.jsx)(h.a4h,{})})]})})},w=function(){var n,e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],i=t[1],o=(0,p.lr)(),a=(0,c.Z)(o,2),h=a[0],f=a[1],g=(0,s.useState)(!1),m=(0,c.Z)(g,2),b=m[0],v=m[1],y=(0,s.useState)(!1),w=(0,c.Z)(y,2),k=w[0],z=w[1],S=null!==(n=h.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){z(!1),S&&(v(!0),(0,d.gH)(S).then((function(n){i(n),0===n.length&&z(!0)})).catch(console.log))}),[S]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j,{onSubmit:function(n){n.preventDefault();var e=n.target.name.value,t=""!==e?{query:e}:{};""===e&&u.Am.error("Please enter your request"),f(t),n.target.name.value=""}}),b&&k&&(0,Z.jsx)(l.P_,{children:"No results found for your search query"}),b&&!k&&(0,Z.jsx)(x.Z,{movies:r})]})}},9627:function(n,e,t){t.d(e,{Df:function(){return p},TP:function(){return x},gH:function(){return d}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243),c="https://api.themoviedb.org/3/",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function p(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(){var e,t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={trends:"trending/movie/week"},t={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},r="".concat(c).concat(e.trends),n.next=5,a.Z.get(r,t);case 5:return i=n.sent,n.abrupt("return",i.data.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(o().mark((function n(){var e,t,r,i,p,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"",t={search:"search/movie"},r={params:{query:e,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},i="".concat(c).concat(t.search),n.next=6,a.Z.get(i,r);case 6:return p=n.sent,n.abrupt("return",p.data.results);case 8:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(o().mark((function n(e){var t,r,i,p,u,d=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:"details",r={details:"movie/".concat(e),credits:"movie/".concat(e,"/credits"),reviews:"movie/".concat(e,"/reviews"),videos:"movie/".concat(e,"/videos")},i={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},p="".concat(c).concat(r[t]),n.next=6,a.Z.get(p,i);case 6:return u=n.sent,n.abrupt("return",u.data);case 8:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}}}]);
//# sourceMappingURL=453.b02a3fcc.chunk.js.map