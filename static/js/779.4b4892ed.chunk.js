"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r,a=t(9439),c=t(2791),i=t(7689),u=t(9627),o=t(168),s=t(6444).ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),l=t(184),p=function(){var e=(0,i.UO)().movieId,n=(0,c.useState)({}),t=(0,a.Z)(n,2),r=t[0],o=t[1],p=(0,c.useState)(null),h=(0,a.Z)(p,2),d=h[0],f=h[1];return(0,c.useEffect)((function(){(0,u.TP)(e,"reviews").then((function(e){o(e.results),f(e.total_results)})).catch(console.log)}),[e]),0===d?(0,l.jsx)("p",{children:"We donn`t any reviews for this movie."}):d>0?(0,l.jsx)(s,{children:r.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("b",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))}):void 0}},9627:function(e,n,t){t.d(n,{Df:function(){return s},TP:function(){return d},gH:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243),u="https://api.themoviedb.org/3/",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function s(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var n,t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={trends:"trending/movie/week"},t={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(o),"Content-Type":"application/json"}},r="".concat(u).concat(n.trends),e.next=5,i.Z.get(r,t);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function e(){var n,t,r,a,s,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:"",t={search:"search/movie"},r={params:{query:n,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(o),"Content-Type":"application/json"}},a="".concat(u).concat(t.search),e.next=6,i.Z.get(a,r);case 6:return s=e.sent,e.abrupt("return",s.data.results);case 8:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function e(n){var t,r,a,s,l,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:"details",r={details:"movie/".concat(n),credits:"movie/".concat(n,"/credits"),reviews:"movie/".concat(n,"/reviews")},a={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(o),"Content-Type":"application/json"}},s="".concat(u).concat(r[t]),e.next=6,i.Z.get(s,a);case 6:return l=e.sent,e.abrupt("return",l.data);case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=779.4b4892ed.chunk.js.map