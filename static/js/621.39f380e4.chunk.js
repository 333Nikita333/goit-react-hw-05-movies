"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{8621:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r,a=n(9439),c=n(2791),i=n(7689),o=n(9627),u=n(168),s=n(6444).ZP.div(r||(r=(0,u.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=n(184),p=function(){var e=(0,i.UO)().movieId,t=(0,c.useState)(null),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,c.useEffect)((function(){(0,o.TP)(e,"videos").then((function(e){var t=e.results.filter((function(e){return"Trailer"===e.type}))[0];t&&u("https://www.youtube.com/embed/".concat(t.key))})).catch(console.log)}),[e,r]),(0,l.jsx)(s,{children:(0,l.jsx)("iframe",{title:"trailer",width:"560",height:"315",src:r,allowFullScreen:!0})})}},9627:function(e,t,n){n.d(t,{Df:function(){return s},TP:function(){return d},gH:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),i=n(1243),o="https://api.themoviedb.org/3/",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function s(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={trends:"trending/movie/week"},n={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(u),"Content-Type":"application/json"}},r="".concat(o).concat(t.trends),e.next=5,i.Z.get(r,n);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function e(){var t,n,r,a,s,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",n={search:"search/movie"},r={params:{query:t,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(u),"Content-Type":"application/json"}},a="".concat(o).concat(n.search),e.next=6,i.Z.get(a,r);case 6:return s=e.sent,e.abrupt("return",s.data.results);case 8:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function e(t){var n,r,a,s,l,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:"details",r={details:"movie/".concat(t),credits:"movie/".concat(t,"/credits"),reviews:"movie/".concat(t,"/reviews"),videos:"movie/".concat(t,"/videos")},a={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(u),"Content-Type":"application/json"}},s="".concat(o).concat(r[n]),e.next=6,i.Z.get(s,a);case 6:return l=e.sent,e.abrupt("return",l.data);case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=621.39f380e4.chunk.js.map