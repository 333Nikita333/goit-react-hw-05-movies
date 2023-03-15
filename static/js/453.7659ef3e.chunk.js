"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[453],{8647:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i,a=t(1087),o=t(7689),c=t(168),s=t(6444),p=s.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  padding: 0 0 20px 0;\n  margin-top: 10px;\n"]))),u=s.ZP.li(i||(i=(0,c.Z)(["\n  overflow: hidden;\n  border: solid 1px black;\n\n  & a {\n    color: #000000;\n\n    & div {\n      text-align: center;\n      width: 250px;\n      height: 460px;\n\n      & span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 376px;\n        border-bottom: solid 1px black;\n\n        font-size: 30px;\n      }\n      & img {\n        width: 250px;\n        margin-bottom: 5px;\n        border-bottom: solid 1px black;\n      }\n    }\n\n    & b {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 10px;\n      font-size: 16px;\n    }\n  }\n\n  &:hover > a {\n    color: red;\n  }\n"]))),l=t(184),d=function(n){var e=n.movies,t=(0,o.TH)();return(0,l.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.title,i=n.poster_path;return(0,l.jsx)(u,{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,l.jsxs)("div",{children:[i?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:"Poster ".concat(r),width:"250px",height:"375px"}):(0,l.jsx)("span",{children:"No poster"}),(0,l.jsx)("b",{children:r})]})})},e)}))})}},5453:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,o,c=t(9439),s=t(2791),p=t(1087),u=t(9627),l=t(8647),d=t(5763),h=t(168),x=t(6444),f=x.ZP.div(r||(r=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=x.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=x.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.4;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  & svg {\n    width: 24px;\n    height: 24px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n  }\n"]))),v=x.ZP.input(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  \n  &::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),b=t(184),y=function(n){var e=n.onSubmit;return(0,b.jsx)(f,{children:(0,b.jsxs)(g,{onSubmit:e,children:[(0,b.jsx)(v,{type:"text",name:"name",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(m,{children:(0,b.jsx)(d.a4h,{})})]})})},j=t(7596),Z=function(){var n,e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],i=t[1],a=(0,p.lr)(),o=(0,c.Z)(a,2),d=o[0],h=o[1],x=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){(0,u.gH)(x).then(i).catch(console.log)}),[x]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{onSubmit:function(n){n.preventDefault();var e=n.target.name.value,t=""!==e?{query:e}:{};""===e&&j.Am.error("Please enter your request"),h(t),n.target.name.value=""}}),r.length>0&&(0,b.jsx)(l.Z,{movies:r})]})}},9627:function(n,e,t){t.d(e,{Df:function(){return p},TP:function(){return h},gH:function(){return l}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243),c="https://api.themoviedb.org/3/",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function p(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var e,t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={trends:"trending/movie/week"},t={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},r="".concat(c).concat(e.trends),n.next=5,o.Z.get(r,t);case 5:return i=n.sent,n.abrupt("return",i.data.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function n(){var e,t,r,i,p,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"",t={search:"search/movie"},r={params:{query:e,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},i="".concat(c).concat(t.search),n.next=6,o.Z.get(i,r);case 6:return p=n.sent,n.abrupt("return",p.data.results);case 8:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(a().mark((function n(e){var t,r,i,p,u,l=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:"details",r={details:"movie/".concat(e),credits:"movie/".concat(e,"/credits"),reviews:"movie/".concat(e,"/reviews")},i={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},p="".concat(c).concat(r[t]),n.next=6,o.Z.get(p,i);case 6:return u=n.sent,n.abrupt("return",u.data);case 8:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=453.7659ef3e.chunk.js.map