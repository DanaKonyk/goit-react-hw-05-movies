"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{701:function(e,n,t){t.d(n,{Df:function(){return u},IQ:function(){return l},Jh:function(){return p},Pg:function(){return o},Ph:function(){return d}});var r=t(861),a=t(757),s=t.n(a),i=t(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="aeefe06fbbe4ba7db8cb4cd1bd83ad48",u=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/week?api_key=".concat(c));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),u=t(701),o={box:"MovieDetails_box__0AyGO",textBox:"MovieDetails_textBox__RjZwl",listGenres:"MovieDetails_listGenres__ih8G+",linkBox:"MovieDetails_linkBox__W4fcK",link:"MovieDetails_link__U+v+7"},l=t(689),p=t(87),d=t(184),v=function(){var e,n,t,s=(0,c.useState)(""),v=(0,a.Z)(s,2),f=v[0],h=v[1],x=(0,l.UO)().movieId,m=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Pg)(x);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.rU,{className:o.link,to:m,children:"Go back"}),(0,d.jsxs)("div",{className:o.box,children:[(0,d.jsx)("img",{src:f.poster_path?["https://image.tmdb.org/t/p/w500"+f.poster_path]:"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:"poster"}),(0,d.jsxs)("div",{className:o.textBox,children:[(0,d.jsx)("h2",{children:f.original_title}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(10*f.vote_average),"%"]}),(0,d.jsxs)("ul",{className:o.list,children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("ul",{className:o.listGenres,children:null===(t=f.genres)||void 0===t?void 0:t.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]})]})]}),(0,d.jsxs)("div",{className:o.linkBox,children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(p.OL,{className:o.link,to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(p.OL,{className:o.link,to:"reviews",children:"Review"})})]}),(0,d.jsx)(l.j3,{})]})]})}}}]);
//# sourceMappingURL=135.444168b4.chunk.js.map