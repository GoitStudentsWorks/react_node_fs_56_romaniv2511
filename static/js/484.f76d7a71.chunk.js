"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[484],{6484:function(e,t,n){n.r(t);var r=n(5861),i=n(9439),a=n(4687),c=n.n(a),u=n(1243),s=n(1980),o=n(854),l=n(2798),p=n(8430),f=n(5809),h=n(9246),d=n(2791),v=n(2934),m=n(2424),x=n(4753),y=n(7182),j=n(3329);t.default=function(){var e=(0,d.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],w=(0,d.useState)(null),k=(0,i.Z)(w,2),g=k[0],Z=k[1],b=(0,d.useState)(!1),S=(0,i.Z)(b,2),A=S[0],C=S[1],_=(0,d.useState)(1),B=(0,i.Z)(_,2),M=B[0],P=B[1],z=(0,s.a)().token;(0,d.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),Z(null),e.next=5,u.Z.get("https://soyummy-tw3y.onrender.com/api/v1/own-recipes",{headers:{Authorization:"Bearer ".concat(z)}});case 5:t=e.sent,n=t.data.data,a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0);case 13:return e.prev=13,C(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[z]);var N=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),Z(null),e.next=5,u.Z.delete("https://soyummy-tw3y.onrender.com/api/v1/own-recipes/".concat(t),{headers:{Authorization:"Bearer ".concat(z)}});case 5:return n=e.sent,a((function(e){return e.filter((function(e){return e._id!==t}))})),e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),Z(e.t0);case 13:return e.prev=13,C(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}(),D=n.length>0?Math.ceil(n.length/4):0,E=4*M,F=E-4,L=n.slice(F,E);return(0,j.jsxs)(j.Fragment,{children:[A&&(0,j.jsx)(o.a,{}),g?(0,j.jsx)(y.default,{}):(0,j.jsx)("main",{children:(0,j.jsxs)(h.e,{children:[(0,j.jsx)(l.e,{title:"My recipes"}),L&&L.length>0?(0,j.jsx)(v.aV,{children:L.map((function(e){var t=e._id,n=e.thumb,r=e.title,i=e.time,a=e.description;return(0,j.jsx)(v.ck,{children:(0,j.jsx)(p.v,{thumb:n||x,title:null!==r&&void 0!==r?r:"No title",id:t,description:null!==a&&void 0!==a?a:"No description",time:null!==i&&void 0!==i?i:"--",page:"My recipes",onDelete:N},t)},t)}))}):(0,j.jsx)(v.W2,{children:(0,j.jsx)(f.B,{title:"You don't have recipes in favorites yet, add your first recipe!"})}),D>1&&(0,j.jsx)(m.t,{totalPages:D,currentPage:M,onSelectPage:function(e){P(e)},onArrowLeftClick:function(){P((function(e){return e+1}))},onArrowRightClick:function(){P((function(e){return e-1}))}})]})})]})}}}]);
//# sourceMappingURL=484.f76d7a71.chunk.js.map