"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[185],{737:function(e,r,t){t.d(r,{Hg:function(){return u},IQ:function(){return f},Jh:function(){return p},Mc:function(){return i},mv:function(){return o}});var n=t(861),a=t(757),c=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8e8c3d98d3e43f50386cf07b0bdc43af"}}),u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},185:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i=t(689),o=t(737),f=t(87),p="MovieDetailsPage_movieInfo__RVh2B",d=t(184),h=function(){var e,r=function(){var e=(0,u.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],f=(0,i.UO)().id;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Mc)(f);case 3:r=e.sent,c(r),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),t}(),t=(null===(e=(0,i.TH)().state)||void 0===e?void 0:e.from)||"/",c=(0,i.s0)();return(0,d.jsx)(d.Fragment,{children:r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:function(){return c(t)},type:"button",children:"Go back"}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:"",width:"300"}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h1",{children:r.title}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:r.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:r.genres.map((function(e){var r=e.id,t=e.name;return(0,d.jsx)("li",{children:t},r)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(f.rU,{to:"/movies/".concat(r.id,"/cast"),state:{from:t},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(f.rU,{to:"/movies/".concat(r.id,"/review"),state:{from:t},children:"Reviews"})})]})]}),(0,d.jsx)(i.j3,{})]})})}}}]);
//# sourceMappingURL=185.820b9e75.chunk.js.map