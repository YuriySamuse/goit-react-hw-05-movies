"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{197:function(n,t,e){e.d(t,{Hg:function(){return o},IQ:function(){return d},Tn:function(){return g},s_:function(){return l},uP:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3/",s="2e3720a8bccf444312af356dec280511",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(861),u=e(439),i=e(757),s=e.n(i),o=e(791),p=e(689),f=e(197),l=e(168),h=e(444),d=h.ZP.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 20px;\n  padding: 20px;\n  margin: 0;\n  list-style: none;\n"]))),v=h.ZP.img(a||(a=(0,l.Z)(["\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n"]))),g=e(184),x=function(){var n=(0,o.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,o.useState)(!1),i=(0,u.Z)(a,2),l=i[0],h=i[1],x=(0,p.UO)().id;(0,o.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.t0=r,n.next=5,(0,f.IQ)(x);case 5:n.t1=n.sent,(0,n.t0)(n.t1),n.next=12;break;case 9:n.prev=9,n.t2=n.catch(1),console.error(n.t2);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]);return(0,g.jsxs)(g.Fragment,{children:[l&&(0,g.jsx)("p",{children:"Loading..."}),!e&&(0,g.jsx)("p",{children:"No actors for this Movie"}),e&&(0,g.jsx)(d,{children:e.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,g.jsxs)("li",{children:[(0,g.jsx)(v,{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://via.placeholder.com/200x300",alt:r}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:e}),(0,g.jsx)("p",{children:r})]})]},t)}))})]})}}}]);
//# sourceMappingURL=387.2dc930ef.chunk.js.map