(this["webpackJsonptraining-code"]=this["webpackJsonptraining-code"]||[]).push([[0],{11:function(e,t,n){e.exports={CartPage:"CartPage_CartPage__2lOvj",Cart:"CartPage_Cart__2uic5",CartPageTitle:"CartPage_CartPageTitle__1OGSk",SelectedContainer:"CartPage_SelectedContainer__3jjmW",EmptyCart:"CartPage_EmptyCart__2j8jv",SelectedItem:"CartPage_SelectedItem__3Cudb",Quantity:"CartPage_Quantity__281Bw"}},12:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__37jm1",HomePageTitle:"HomePage_HomePageTitle__33Mig",DrinkContainer:"HomePage_DrinkContainer__20Oas",DrinkItem:"HomePage_DrinkItem__33fC6",Warning:"HomePage_Warning__3eZ5t"}},24:function(e,t,n){e.exports={DetailPage:"DetailPage_DetailPage__10NEp",DetailPageTitle:"DetailPage_DetailPageTitle__1WPBp",DetailDrink:"DetailPage_DetailDrink__2QFuv"}},39:function(e,t,n){e.exports={Loading:"GlobalLoading_Loading__2Qq-T"}},41:function(e,t,n){e.exports={pagenotfound:"PageNotFound_pagenotfound__3xPpU"}},48:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(20),r=n.n(i),o=(n(48),n(15)),s=n(2),l=(n(49),n(4)),j=n(39),u=n.n(j),d=n(0);var b=function(e){return Object(l.c)((function(e){return e.GlobalReducer.isLoading}))?Object(d.jsx)("div",{className:u.a.Loading,children:"Loading..."}):null},g=n(13),O=n(19),h={selectedCocktail:[],isLoading:!1,searchInput:""},m=Object(O.b)({name:"globalSlice",initialState:h,reducers:{toggleLoading:function(e,t){e.isLoading=!e.isLoading},addToCart:function(e,t){if(e.selectedCocktail){var n=!1;if(e.selectedCocktail.map((function(c,a){c.idDrink==t.payload.idDrink&&(e.selectedCocktail[a].quantity++,n=!0)})),!n){var c={idDrink:t.payload.idDrink,quantity:1,strDrinkThumb:t.payload.strDrinkThumb,strDrink:t.payload.strDrink};e.selectedCocktail.push(c)}}else{var a={idDrink:t.payload.idDrink,quantity:1,strDrinkThumb:t.payload.strDrinkThumb,strDrink:t.payload.strDrink};e.selectedCocktail.push(a)}},removeFromCart:function(e,t){var n=e.selectedCocktail.filter((function(e){return e.idDrink!==t.payload}));e.selectedCocktail=n},increaseQuantity:function(e,t){e.selectedCocktail.map((function(n,c){n.idDrink==t.payload&&e.selectedCocktail[c].quantity++}))},decreaseQuantity:function(e,t){e.selectedCocktail.map((function(n,c){n.idDrink==t.payload&&e.selectedCocktail[c].quantity--}));var n=e.selectedCocktail.filter((function(e){return e.quantity>0}));e.selectedCocktail=n},saveSearchInput:function(e,t){e.searchInput=t.payload},logOut:function(e,t){return h}}}),f=m.actions,p=m.reducer;n(56);var x=function(e){var t=Object(c.useState)(""),n=Object(g.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),o=Object(g.a)(r,2),j=o[0],u=o[1],b=Object(c.useState)(!0),O=Object(g.a)(b,2),h=O[0],m=O[1],p=Object(l.b)(),x=Object(s.g)();return Object(c.useEffect)((function(){p(f.toggleLoading()),setTimeout((function(){p(f.toggleLoading())}),2e3)}),[]),Object(d.jsx)("div",{className:"signin",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{onChange:function(e){i(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},type:"password"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){""!==a&&""!==j&&("admin"===a&&"admin"===j?(localStorage.setItem("username",a),localStorage.setItem("password",j),x.push("/"),m(!0)):m(!1))},children:"Log In"}),!h&&Object(d.jsx)("div",{className:"warning",children:"Please enter correct username and password"})]})]})})},k=n(12),v=n.n(k);var C=function(e){var t=Object(s.g)(),n=Object(l.b)(),c=Object(l.c)((function(e){return e.GlobalReducer.selectedCocktail}));return c=(c=c.reduce((function(e,t){return e+t.quantity}),0))||"",Object(d.jsxs)("div",{className:v.a.HomePageTitle,children:[Object(d.jsx)("button",{onClick:function(){localStorage.clear(),n(f.logOut()),t.push("/login")},children:"Log out"}),Object(d.jsx)("h2",{children:"List of Cocktail"}),Object(d.jsxs)("button",{onClick:function(){t.push("/cart")},children:["Cart  ",c]})]})},D=a.a.memo((function(e){var t=e.onSearch,n=e.searchInput;return Object(d.jsx)("input",{placeholder:n||"Search ...",onChange:function(e){t(e.target.value)}})}));var _=function(e){var t=e.listCocktail,n=Object(s.g)(),c=Object(l.b)(),a=function(e){n.push("/details/".concat(e.target.value))};return Object(d.jsx)("div",{className:v.a.DrinkContainer,children:t.map((function(e,t){return Object(d.jsxs)("div",{className:v.a.DrinkItem,children:[Object(d.jsx)("p",{children:e.strDrink}),Object(d.jsx)("img",{src:e.strDrinkThumb,alt:e.strDrink}),Object(d.jsx)("button",{value:e.idDrink,onClick:a,children:"Detail"}),Object(d.jsx)("button",{onClick:function(){return function(e){c(f.addToCart(e))}(e)},children:"Add to Cart"})]},e.idDrink)}))})},P=n(22),y=n.n(P),L=n(40),S=n.n(L);var N=function(e){var t=Object(c.useState)([]),n=Object(g.a)(t,2),a=n[0],i=n[1],r=Object(l.c)((function(e){return e.GlobalReducer.searchInput})),o=Object(l.b)();Object(c.useEffect)((function(){j(r)}),[]);var s=Object(c.useCallback)(S.a.debounce((function(e){j(e),o(f.saveSearchInput(e))}),2e3),[]),j=function(e){o(f.toggleLoading()),y.a.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(e)).then((function(e){i(e.data.drinks),o(f.toggleLoading())})).catch((function(){alert("Request to API failed, Please try again !!!"),o(f.toggleLoading())}))};return Object(d.jsxs)("div",{className:v.a.HomePage,children:[Object(d.jsx)(C,{}),Object(d.jsx)(D,{searchInput:r,onSearch:s}),a?Object(d.jsx)(_,{listCocktail:a}):Object(d.jsx)("div",{className:v.a.Warning,children:"No results found"})]})},I=n(11),T=n.n(I);var w=function(e){var t=Object(l.c)((function(e){return e.GlobalReducer.selectedCocktail})),n=Object(l.b)(),c=t.reduce((function(e,t){return e+t.quantity}),0);return c=c||"",Object(d.jsx)(d.Fragment,{children:t.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:T.a.Cart,children:["Cart ",c," "]}),Object(d.jsx)("div",{className:T.a.SelectedContainer,children:t.map((function(e,t){return Object(d.jsxs)("div",{className:T.a.SelectedItem,children:[Object(d.jsx)("p",{children:t+1}),Object(d.jsx)("p",{children:e.strDrink}),Object(d.jsx)("img",{src:e.strDrinkThumb,alt:e.strDrink}),Object(d.jsxs)("div",{className:T.a.Quantity,children:[Object(d.jsx)("button",{value:e.idDrink,onClick:function(){return t=e.idDrink,void n(f.decreaseQuantity(t));var t},children:"-"}),Object(d.jsx)("p",{children:e.quantity}),Object(d.jsx)("button",{value:e.idDrink,onClick:function(){return function(e){n(f.increaseQuantity(e))}(e.idDrink)},children:"+"})]}),Object(d.jsx)("button",{value:e.idDrink,onClick:function(){return function(e){n(f.removeFromCart(e))}(e.idDrink)},children:"Remove"})]},e.idDrink)}))})]}):Object(d.jsx)("div",{className:T.a.EmptyCart,children:"Cart is Empty"})})};var F=function(e){var t=Object(s.g)(),n=Object(l.b)();return Object(d.jsxs)("div",{className:T.a.CartPageTitle,children:[Object(d.jsx)("button",{onClick:function(){localStorage.clear(),n(f.logOut()),t.push("/login")},children:"Log out"}),Object(d.jsx)("h2",{children:"Selected Cocktail"}),Object(d.jsx)("button",{onClick:function(){t.push("/")},children:"Back"})]})};var q=function(e){var t=Object(l.b)();return Object(c.useEffect)((function(){t(f.toggleLoading()),setTimeout((function(){t(f.toggleLoading())}),2e3)}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:T.a.CartPage,children:[Object(d.jsx)(F,{}),Object(d.jsx)(w,{})]})})},H=n(24),E=n.n(H);var G=function(e){var t=Object(s.h)().idDrink,n=Object(s.g)(),a=Object(l.b)(),i=Object(c.useState)(""),r=Object(g.a)(i,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){a(f.toggleLoading()),y.a.get("".concat("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=").concat(t)).then((function(e){j(e.data.drinks),setTimeout((function(){a(f.toggleLoading())}),2e3)})).catch((function(){alert("Request to API failed, Please try again !!!"),a(f.toggleLoading())}))}),[t]),Object(d.jsx)("div",{children:o&&Object(d.jsxs)("div",{className:E.a.DetailPage,children:[Object(d.jsxs)("div",{className:E.a.DetailPageTitle,children:[Object(d.jsx)("button",{onClick:function(){localStorage.clear(),a(f.logOut()),n.push("/login")},children:"Log out"}),Object(d.jsx)("h2",{children:"Detail Cocktail"}),Object(d.jsx)("button",{onClick:function(){n.push("/")},children:"Back"})]}),Object(d.jsxs)("div",{className:E.a.DetailDrink,children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[" ",o[0].strDrink]}),Object(d.jsxs)("p",{children:[" ID : ",t,Object(d.jsx)("br",{}),"Category : ",o[0].strCategory,Object(d.jsx)("br",{}),"Glass : ",o[0].strGlass,Object(d.jsx)("br",{}),"Alcoholic : ",o[0].strAlcoholic,Object(d.jsx)("br",{}),"Description : ",o[0].strInstructions]})]}),Object(d.jsx)("img",{src:o[0].strDrinkThumb,alt:o[0].strDrink})]})]})})},Q=n(14),R=n(23),B=function(){var e=localStorage.getItem("username"),t=localStorage.getItem("password");return!(!e||!t)},A=["component"];var W=function(e){var t=e.component,n=Object(R.a)(e,A);return Object(d.jsx)("div",{children:Object(d.jsx)(s.b,Object(Q.a)(Object(Q.a)({},n),{},{render:function(e){return!1===B()?Object(d.jsx)(t,Object(Q.a)({},e)):Object(d.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))})},U=["component"];var J=function(e){var t=e.component,n=Object(R.a)(e,U);return Object(d.jsx)("div",{className:"homepage",children:Object(d.jsx)(s.b,Object(Q.a)(Object(Q.a)({},n),{},{render:function(e){return B()?Object(d.jsx)(t,Object(Q.a)({},e)):Object(d.jsx)(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))})},M=n(41),Z=n.n(M);var z=function(){return Object(d.jsxs)("div",{className:Z.a.pagenotfound,children:[Object(d.jsx)("h1",{children:"Page Not Found"}),Object(d.jsx)("p",{children:"Please check your URL and make sure that the address entered is correct"}),Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)("button",{children:"Back"})})]})};var K=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(o.a,{className:"App",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(W,{path:"/login",component:x}),Object(d.jsx)(J,{exact:!0,path:"/",component:N}),Object(d.jsx)(J,{path:"/cart",component:q}),Object(d.jsx)(J,{path:"/details/:idDrink",component:G}),Object(d.jsx)(s.b,{component:z})]})})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},X=n(43),Y=n(42),$=n.n(Y),ee=n(9),te=Object(ee.b)({GlobalReducer:p}),ne=[].concat(Object(X.a)(Object(O.c)()),[$.a]),ce=Object(O.a)({reducer:te,middleware:ne});r.a.render(Object(d.jsx)(l.a,{store:ce,children:Object(d.jsx)(K,{})}),document.getElementById("root")),V()}},[[79,1,2]]]);
//# sourceMappingURL=main.f3682da9.chunk.js.map