(this.webpackJsonpredux=this.webpackJsonpredux||[]).push([[0],{28:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(6),u=t.n(c),a=(t(28),t(3)),s="BUY_CAKE",o=function(){return{type:s}},i="BUY_ICECREAM",d=t(21),f=t.n(d),j="FETCH_USERS_REQUEST",l="FETCH_USERS_SUCCESS",b="FETCH_USERS_FAILURE",O=function(){return{type:j}},h=function(){return function(e){e(O),f.a.get(" https://jsonplaceholder.typicode.com/users").then((function(n){var t=n.data;e(function(e){return{type:l,payload:e}}(t))})).catch((function(n){var t=n.message;e(function(e){return{type:b,payload:e}}(t))}))}},m=t(1);Object(a.b)((function(e){return console.log("s",e),{numOfCakes:e.cake.numOfCakes}}),(function(e){return console.log("d",e),{buyCake:function(){return e(o())}}}))((function(e){return console.log("c",e),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Numbers of cake - ",e.numOfCakes]}),Object(m.jsx)("button",{onClick:e.buyCake,children:"Buy cake"})]})}));var C=t(5),p=t(22),v=t.n(p),x=t(4),y={numOfCakes:10},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return Object(x.a)(Object(x.a)({},e),{},{numOfCakes:e.numOfCakes-1});default:return e}},k={numOfIceCream:20},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i:return Object(x.a)(Object(x.a)({},e),{},{numOfIceCream:e.numOfIceCream-1});default:return e}},I={loading:!1,users:[],error:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case l:return{loading:!1,users:n.payload,error:""};case b:return{loading:!1,user:[],error:n.payload};default:return e}},U=Object(C.c)({cake:g,iceCream:E,user:S}),_=t(23),R=Object(C.d)(U,Object(C.a)(v.a,_.a));Object(a.b)((function(e){return{numOfIceCream:e.iceCream.numOfIceCream}}),(function(e){return{buyIceCream:function(){return e({type:i})}}}))((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[" Number of IceCream - ",e.numOfIceCream]}),Object(m.jsx)("button",{onClick:e.buyIceCream,children:"But iceCream"})]})}));var w=Object(a.b)((function(e){return{userData:e.user}}),(function(e){return{fetchUsers:function(){return e(h())}}}))((function(e){var n=e.userData,t=e.fetchUsers;return Object(r.useEffect)((function(){t()}),[]),n.loading?Object(m.jsx)("h2",{children:"Loading"}):n.error?Object(m.jsx)("h2",{children:n.error}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Users List"}),Object(m.jsx)("div",{children:n&&n.users&&n.users.map((function(e){return Object(m.jsx)("p",{children:e.name})}))})]})}));function B(){return Object(m.jsx)(a.a,{store:R,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(w,{})})})}var A=document.getElementById("root");u.a.render(Object(m.jsx)(r.StrictMode,{children:Object(m.jsx)(B,{})}),A)}},[[55,1,2]]]);
//# sourceMappingURL=main.349bc157.chunk.js.map