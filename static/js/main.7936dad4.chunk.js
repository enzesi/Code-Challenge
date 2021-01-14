(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),s=n.n(r),c=n(9),i=n.n(c),o=(n(92),n(62)),l=n(12),j=n(29),d=n(33),u=n(76),h=n(46),m="FETCH_MOVIE_DATA",b="FETCH_MOVIE_PLOT",p={searchResponse:!1,searchResultArray:[],totalResults:0,errorMessage:""},O=function(e){return"False"===e.Response?{response:!1,resultArray:[],totalResult:0,errorMessage:e.Error}:"True"===e.Response?{response:!0,resultArray:e.Search,totalResults:e.totalResults,errorMessage:""}:void 0},x=Object(d.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=O(t.payload);return Object(h.a)(Object(h.a)({},e),{},{searchResponse:n.response,searchResultArray:n.resultArray,totalResults:n.totalResults,errorMessage:n.errorMessage});case b:return Object(h.a)(Object(h.a)({},e),{},{searchResultArray:e.searchResultArray.map((function(e,n){return e.imdbID===t.payload.imdbID?t.payload:e}))});default:return e}}}),f=[u.a],v=Object(d.d)(x,{},d.a.apply(void 0,f)),g=n(65),y=n(133),N=n(135),R=n(137),w=n(105),S=n(145),I=n(147),M=n(148),C=n(138),T=n(139),A=n(140),k=n(141),D=n(142),J=n(143),E=n(144),F=n(146),P=n(77),z=n.n(P),B=n(78),H=n.n(B),_=n(30),L=n.n(_),V=n(45),Y=n.n(V),G=n(61);function K(e){return function(){var t=Object(G.a)(Y.a.mark((function t(n){var a,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.omdbapi.com/?apikey=4f1f7d07&i=".concat(e,"&plot=short"));case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,n({type:b,payload:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var W=function(e){return e.movie.searchResultArray},q=function(e){return e.movie.totalResults},Q=function(e){return e.movie.searchResponse},U=function(e){return e.movie.errorMessage},X=Object(y.a)((function(e){return{root:{flexGrow:1,margin:50,display:"flex",justifyContent:"center",alignItems:"center",height:"auto",width:"auto"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15)},paper:{padding:e.spacing(2)},search:{width:353},result:{marginBottom:10},card:{maxWidth:450},media:{height:600}}})),Z=function(){var e=X(),t=Object(j.b)(),n=Object(j.c)(W),s=Object(j.c)(q),c=Object(j.c)(Q),i=Object(j.c)(U),o=Object(r.useState)(""),l=Object(g.a)(o,2),d=l[0],u=l[1],h=Object(r.useState)(JSON.parse(L.a.get("nominatedMovies"))),b=Object(g.a)(h,2),p=b[0],O=b[1],x=function(e){var n;"Enter"===e&&t((n=d,function(){var e=Object(G.a)(Y.a.mark((function e(t){var a,r,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=4f1f7d07&s="+n,{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(r=e.sent,t({type:m,payload:r}),"True"===r.Response)for(s=0;s<r.Search.length;s++)t(K(r.Search[s].imdbID));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},f=function(e){if(null===L.a.get("nominatedMovies"))L.a.set("nominatedMovies",JSON.stringify([e])),O([e]);else{var t=JSON.parse(L.a.get("nominatedMovies"));t.push(e),L.a.set("nominatedMovies",JSON.stringify(t)),O(t)}},v=function(e){var t=JSON.parse(L.a.get("nominatedMovies")).filter((function(t){return e.imdbID!==t.imdbID}));L.a.set("nominatedMovies",JSON.stringify(t)),O(t)};return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(N.a,{container:!0,spacing:3,children:[Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsx)(R.a,{variant:"h4",children:"The Shoppies"})}),Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{className:e.paper,children:Object(a.jsxs)(N.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(a.jsx)(N.a,{item:!0,children:Object(a.jsx)(z.a,{})}),Object(a.jsx)(N.a,{item:!0,children:Object(a.jsx)(S.a,{className:e.search,label:"Search by Movie Title",value:d,onChange:function(e){return t=e.target.value,void u(t);var t},onKeyDown:function(e){return x(e.key)}})})]})})}),Object(a.jsx)(N.a,{item:!0,xs:12,children:Object(a.jsxs)(w.a,{className:e.paper,children:[Object(a.jsx)(R.a,{variant:"h4",className:e.result,children:"My Nominations"}),null===p?Object(a.jsx)(R.a,{variant:"h5",className:e.result,children:"None"}):Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(M.a,{expandIcon:Object(a.jsx)(H.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(a.jsxs)(R.a,{className:e.heading,children:["Total Nominations: ",p.length]}),Object(a.jsx)(R.a,{className:e.secondaryHeading})]}),Object(a.jsx)(C.a,{children:Object(a.jsx)(N.a,{container:!0,spacing:3,children:p.map((function(t,n){return Object(a.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(a.jsxs)(T.a,{className:e.card,children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)(k.a,{className:e.media,image:t.Poster,title:"Contemplative Reptile"}),Object(a.jsxs)(D.a,{children:[Object(a.jsxs)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[t.Title,"(",t.Year,")"]}),Object(a.jsx)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:t.Plot})]})]}),Object(a.jsx)(J.a,{children:p&&p.some((function(e){return e.imdbID===t.imdbID}))?Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return v(t)},children:"Innominate"}):Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return f(t)},children:"Nominate"})})]})},n)}))})})]})]})}),Object(a.jsx)(N.a,{item:!0,xs:12,children:0===n.length?null:Object(a.jsxs)(w.a,{className:e.paper,children:[Object(a.jsxs)(R.a,{variant:"h4",className:e.result,children:['Results for: "',d,'"']}),c?Object(a.jsxs)(N.a,{container:!0,spacing:3,children:[n.map((function(t,n){return Object(a.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(a.jsxs)(T.a,{className:e.card,children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)(k.a,{className:e.media,image:t.Poster,title:"Contemplative Reptile"}),Object(a.jsxs)(D.a,{children:[Object(a.jsxs)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[t.Title,"(",t.Year,")"]}),Object(a.jsx)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:t.Plot})]})]}),Object(a.jsx)(J.a,{children:p&&p.some((function(e){return e.imdbID===t.imdbID}))?Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return v(t)},children:"Innominate"}):Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return f(t)},children:"Nominate"})})]})},n)})),Object(a.jsx)(N.a,{item:!0,xs:12,sm:4,children:s})]}):Object(a.jsx)(F.a,{children:i})]})})]})})};n(101);var $=function(){return Object(a.jsx)(j.a,{store:v,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{exact:!0,path:"/Code-Challenge",render:function(){return Object(a.jsx)(Z,{})}})})})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root")),ee()},92:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.7936dad4.chunk.js.map