"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(9439),c=e(2791),i=e(7689),o=e(9627),s=e(168),u=e(6444).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  \n  & li {\n      display: block;\n      width: 300px;\n      border: solid 1px black;\n  }\n"]))),p=e(184),l=function(){var n=(0,i.UO)().movieId,t=(0,c.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1];return(0,c.useEffect)((function(){(0,o.TP)(n,"credits").then((function(n){return s(n.cast)})).catch(console.log)}),[n]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(u,{children:r.map((function(n){return(0,p.jsxs)("li",{children:[n.profile_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name,width:"100"}):(0,p.jsx)("p",{children:"No photo"}),(0,p.jsx)("b",{children:n.name}),(0,p.jsx)("p",{children:n.character})]},n.cast_id)}))})})}},9627:function(n,t,e){e.d(t,{Df:function(){return u},TP:function(){return h},gH:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="https://api.themoviedb.org/3/",s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={trends:"trending/movie/week"},e={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},r="".concat(o).concat(t.trends),n.next=5,i.Z.get(r,e);case 5:return a=n.sent,n.abrupt("return",a.data.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function n(){var t,e,r,a,u,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:"",e={search:"search/movie"},r={params:{query:t,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},a="".concat(o).concat(e.search),n.next=6,i.Z.get(a,r);case 6:return u=n.sent,n.abrupt("return",u.data.results);case 8:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function n(t){var e,r,a,u,p,l=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:"details",r={details:"movie/".concat(t),credits:"movie/".concat(t,"/credits"),reviews:"movie/".concat(t,"/reviews")},a={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"}},u="".concat(o).concat(r[e]),n.next=6,i.Z.get(u,a);case 6:return p=n.sent,n.abrupt("return",p.data);case 8:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=387.612fdcca.chunk.js.map