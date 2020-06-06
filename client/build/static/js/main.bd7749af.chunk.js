(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(96),a(22)),i=a(10),s=a(15),m=a(176),u=a(4),p=Object(u.a)({button:{width:"250px",height:"50px",margin:"20px 50px",fontSize:"18px",backgroundColor:"#ff6b6b","&:hover":{backgroundColor:"#fc2d2d"}}})((function(e){return r.a.createElement(m.a,{className:e.classes.button,variant:"contained",color:"primary",onClick:e.onButtonClick},e.children)})),d=a(100).connect("https://innate-lovely-blossom.glitch.me/");d.on("connected",(function(e){console.log(e)}));var f=function(e,t){var a={id:e};d.emit("join",a),d.once("joined",(function(e){t(e._id)}))},E=function(e){d.once("gameStarted",(function(t){e(t)}))},v=a(40),g=a.n(v),_=a(79),h=a.n(_),C=a(175),b=a(178),y=a(174),w=a(172),O=a(173),N=a(171);function k(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],l=a[1],o=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(b.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(N.a,{id:"form-dialog-title"},"Join Room"),r.a.createElement(w.a,null,r.a.createElement(O.a,null,"Please enter the id of the tournament room that you would like to join"),r.a.createElement(C.a,{autoFocus:!0,margin:"dense",label:"Room ID",fullWidth:!0,color:"secondary",onChange:function(e){l(e.target.value)}})),r.a.createElement(y.a,null,r.a.createElement(m.a,{onClick:e.onClose,color:"secondary"},"Cancel"),r.a.createElement(m.a,{onClick:function(){o.push("/room/".concat(n,"/select-restaurant/waiting"))},color:"secondary"},"Join"))))}var j=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(i.f)();return r.a.createElement("div",{className:g.a.homePageContainer},r.a.createElement("div",{className:g.a.title},r.a.createElement("h1",null,"Restaurant Tournament"),r.a.createElement("h2",null,"Host or join a room!")),r.a.createElement("div",{className:g.a.buttonContainer},r.a.createElement(p,{onButtonClick:function(){var e;e=function(e){f(e,(function(t){o.push("/room/".concat(e,"/").concat(t,"/select-restaurant"))}))},d.emit("create"),d.once("roomCreated",(function(t){e(t.id)}))}},"Host"),r.a.createElement(p,{onButtonClick:function(){l(!0)}},"Join")),r.a.createElement(k,{open:a,onClose:function(){l(!1)}}),r.a.createElement("img",{className:g.a.foodFightImage,src:h.a,alt:"Food Fight"}))},S=a(24),I=a.n(S);var B=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),u=m[0],f=m[1],v=Object(i.f)();return Object(n.useEffect)((function(){E((function(t){v.push({pathname:"/room/".concat(e.match.params.roomId,"/").concat(e.match.params.playerId,"/tournament"),state:t})}))}),[]),r.a.createElement("div",{className:I.a.selectRestaurantContainer},r.a.createElement("div",{className:I.a.idContainer},r.a.createElement("h2",{style:{margin:"0"}},"Your room ID is: ",e.match.params.roomId),r.a.createElement("h3",null,"Share the room ID with others to participate in the tournament")),r.a.createElement("div",{className:I.a.searchContainer},r.a.createElement("div",{className:I.a.termsContainer},r.a.createElement("label",null,"Find"),r.a.createElement("input",{className:I.a.terms,list:"categories",placeholder:"pizza, sushi, chicken...",onChange:function(e){return o(e.target.value)}})),r.a.createElement("datalist",{id:"categories"},["Acai Bowls","Bagels","Bakeries","Beer, Wine & Spirits","Beverage Store","Breweries","Brewpubs","Bubble Tea","Butcher","CSA","Chimney Cakes","Cideries","Coffee & Tea","Coffee Roasteries","Convenience Stores","Cupcakes","Custom Cakes","Desserts","Distilleries","Do-It-Yourself Food","Donuts","Empanadas","Farmers Market","Food Delivery Services","Food Trucks","Gelato","Grocery","Honey","Ice Cream & Frozen Yogurt","Imported Food","International Grocery","Internet Cafes","Juice Bars & Smoothies","Kombucha","Meaderies","Organic Stores","Patisserie/Cake Shop","Piadina","Poke","Pretzels","Shaved Ice","Shaved Snow","Smokehouse","Specialty Food","Candy Stores","Cheese Shops","Chocolatiers & Shops","Fruits & Veggies","Health Markets","Herbs & Spices","Macarons","Meat Shops","Olive Oil","Pasta Shops","Popcorn Shops","Seafood Markets","Street Vendors","Tea Rooms","Water Stores","Wineries","Wine Tasting Room"].map((function(e){return r.a.createElement("option",{value:e,key:e})}))),r.a.createElement("div",{className:I.a.locationContainer},r.a.createElement("label",null,"Near"),r.a.createElement("input",{className:I.a.location,placeholder:"address, neighborhood, city, state, or zip",onChange:function(e){return f(e.target.value)}}))),r.a.createElement(p,{className:I.a.button,onButtonClick:function(){!function(e){d.emit("getRestaurants",e)}({id:e.match.params.roomId,term:l,location:u})}},"Get Restaurants"))},R=a(7),x=a.n(R),P=a(59),F=a.n(P);a(133);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var z=r.a.createElement("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"}),J=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",A({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"star",className:"svg-inline--fa fa-star fa-w-18",role:"img",viewBox:"0 0 576 512",ref:t},n),a?r.a.createElement("title",null,a):null,z)},W=r.a.forwardRef((function(e,t){return r.a.createElement(J,A({svgRef:t},e))}));a.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=r.a.createElement("path",{fill:"currentColor",d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"}),H=function(e){var t=e.svgRef,a=e.title,n=M(e,["svgRef","title"]);return r.a.createElement("svg",D({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star-half-alt",className:"svg-inline--fa fa-star-half-alt fa-w-17",role:"img",viewBox:"0 0 536 512",ref:t},n),a?r.a.createElement("title",null,a):null,T)},X=r.a.forwardRef((function(e,t){return r.a.createElement(H,D({svgRef:t},e))}));a.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y=r.a.createElement("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}),K=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",V({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",className:"svg-inline--fa fa-star fa-w-18",role:"img",viewBox:"0 0 576 512",ref:t},n),a?r.a.createElement("title",null,a):null,Y)},Z=r.a.forwardRef((function(e,t){return r.a.createElement(K,V({svgRef:t},e))}));a.p;function Q(e){var t;switch(e.rating){case.5:t=r.a.createElement("div",null,r.a.createElement(X,null));break;case 1:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(W,null),r.a.createElement(W,null),r.a.createElement(W,null),r.a.createElement(W,null));break;case 1.5:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(X,null),r.a.createElement(W,null),r.a.createElement(W,null),r.a.createElement(W,null));break;case 2:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(W,null),r.a.createElement(W,null),r.a.createElement(W,null));break;case 2.5:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(X,null),r.a.createElement(W,null),r.a.createElement(W,null));break;case 3:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(W,null),r.a.createElement(W,null));break;case 3.5:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(X,null),r.a.createElement(W,null));break;case 4:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(W,null));break;case 4.5:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(X,null));break;case 5:t=r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null));break;default:t=r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(W,null))}return t}var q=function(e){var t=Object(i.g)(),a=Object(n.useState)(!1),l=Object(s.a)(a,2),o=l[0],c=l[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),p=u[0],f=u[1],E=Object(n.useState)(window.innerWidth>768),v=Object(s.a)(E,2),g=v[0],_=v[1],h=Object(n.useState)(!0),C=Object(s.a)(h,2),b=C[0],y=C[1],w=Object(i.f)();Object(n.useEffect)((function(){var a;null!=t.state&&(c(!0),f(t.state),console.log(t.state)),a=function(t){f(t),console.log(t),y(!0),"FINISHED"==t.state&&w.push({pathname:"/room/".concat(e.match.params.roomId,"/winner"),state:t.winner})},d.on("roundFinished",(function(e){a(e)})),function(e){d.on("voted",(function(t){e(t)}))}((function(e){"VOTED"==e.state&&y(!1)})),window.addEventListener("resize",(function(){_(window.innerWidth>768)}))}),[]);var O=function(t){console.log("VOTING"),console.log(t);var a={};a.roomId=p._id,a.playerId="".concat(e.match.params.playerId),a.restaurantId=t,function(e){d.emit("vote",e)}(a)},N=function(e){return r.a.createElement("div",{className:x.a.descriptionContainer},r.a.createElement("div",{className:x.a.starsContainer},r.a.createElement(Q,{rating:e.rating})),r.a.createElement("div",{className:x.a.locationButtonsContainer},r.a.createElement("div",{className:x.a.location},e.address,", ",e.city,", ",e.state,", ",e.zip),r.a.createElement("div",{className:x.a.buttonsContainer},r.a.createElement("button",{className:x.a.reviewsButton,onClick:function(){window.open(e.url,"_blank")}},"Reviews"),r.a.createElement("div",{className:x.a.voteButton,onClick:function(){return O(e._id)},style:{display:b?"block":"none"}},r.a.createElement("img",{src:F.a})))))},k=function(e){return r.a.createElement("div",{className:x.a.descriptionContainer},r.a.createElement("div",{className:x.a.location},e.address,", ",e.city,", ",e.state,", ",e.zip),r.a.createElement("div",{className:x.a.locationButtonsContainer},r.a.createElement("div",{className:x.a.starsContainer},r.a.createElement(Q,{rating:e.rating})),r.a.createElement("div",{className:x.a.buttonsContainer},r.a.createElement("button",{className:x.a.reviewsButton,onClick:function(){window.open(e.url,"_blank")}},"Reviews"),r.a.createElement("div",{className:x.a.voteButton,onClick:function(){return O(e._id)},style:{display:b?"block":"none"}},r.a.createElement("img",{src:F.a})))))};return r.a.createElement("div",{className:x.a.tournamentPageContainer},o?r.a.createElement("div",{className:x.a.restaurantContainer},r.a.createElement("div",{className:x.a.restaurant},r.a.createElement("div",{className:x.a.imageContainer},r.a.createElement("img",{className:x.a.image,src:p.option1.imageLink})),r.a.createElement("div",{className:x.a.titleContainer},r.a.createElement("p",{className:x.a.title},t.state.option1.name),r.a.createElement("p",{className:x.a.priceRange},p.option1.priceRange)),g?N(p.option1):k(p.option1)),r.a.createElement("div",{className:x.a.restaurant},r.a.createElement("div",{className:x.a.imageContainer},r.a.createElement("img",{className:x.a.image,src:p.option2.imageLink})),r.a.createElement("div",{className:x.a.titleContainer},r.a.createElement("p",{className:x.a.title},p.option2.name),r.a.createElement("p",{className:x.a.priceRange},p.option2.priceRange)),g?N(p.option2):k(p.option2))):r.a.createElement("h1",{style:{color:"white"}},"Sorry, the tournament has already started"))},$=a(80),U=a.n($);var ee=function(e){var t=Object(i.f)();return Object(n.useEffect)((function(){f(e.match.params.roomId,(function(a){E((function(n){t.push({pathname:"/room/".concat(e.match.params.roomId,"/").concat(a,"/tournament"),state:n})}))}))}),[]),r.a.createElement("div",{className:U.a.waitingPageContainer},r.a.createElement("h1",null,"Waiting for host to select restaurants..."))},te=a(16),ae=a.n(te);var ne=function(e){var t=Object(i.g)(),a=Object(n.useState)(t.state),l=Object(s.a)(a,2),o=l[0];return l[1],r.a.createElement("div",{className:ae.a.winnerPageContainer},r.a.createElement("div",{className:ae.a.winnerContainer},r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"Winner!")),r.a.createElement("div",{className:ae.a.restaurantContainer},r.a.createElement("div",{className:ae.a.restaurant},r.a.createElement("div",{className:ae.a.imageContainer},r.a.createElement("img",{className:ae.a.image,src:o.imageLink})),r.a.createElement("div",{className:ae.a.titleContainer},r.a.createElement("p",{className:ae.a.title},o.name),r.a.createElement("p",{className:ae.a.priceRange},o.priceRange)),r.a.createElement("div",{className:ae.a.starsContainer},r.a.createElement(Q,{rating:o.rating})),r.a.createElement("div",{className:ae.a.location},o.address,", ",o.city,", ",o.state,", ",o.zip),r.a.createElement("div",{className:ae.a.buttonsContainer},r.a.createElement("button",{className:ae.a.reviewsButton,onClick:function(){window.open(o.url,"_blank")}},"Reviews"))))))},re=a(81),le=a.n(re);var oe=function(){return r.a.createElement("div",{className:le.a.App},r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/room/:roomId/select-restaurant/waiting",component:ee}),r.a.createElement(i.a,{path:"/room/:roomId/:playerId/select-restaurant",exact:!0,component:B}),r.a.createElement(i.a,{path:"/room/:roomId/:playerId/tournament",exact:!0,component:q}),r.a.createElement(i.a,{path:"/room/:roomId/winner",component:ne}),r.a.createElement(i.a,{path:"/",exact:!0,component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,a){e.exports={winnerPageContainer:"styles_winnerPageContainer__3tBn9",winnerContainer:"styles_winnerContainer__3wJI-",restaurantContainer:"styles_restaurantContainer__3-kOq",restaurant:"styles_restaurant__2aBVB",imageContainer:"styles_imageContainer__3mXAt",image:"styles_image__2INZG",titleContainer:"styles_titleContainer__1JK_L",title:"styles_title__3rWRF",priceRange:"styles_priceRange__3OJuI",starsContainer:"styles_starsContainer__N8Z8E",location:"styles_location__2YpDW",buttonsContainer:"styles_buttonsContainer__1MPk7",reviewsButton:"styles_reviewsButton__2nBQX",voteButton:"styles_voteButton__1Qdnh"}},24:function(e,t,a){e.exports={selectRestaurantContainer:"styles_selectRestaurantContainer__kZlwH",idContainer:"styles_idContainer__1Aj7E",searchContainer:"styles_searchContainer__3333I",termsContainer:"styles_termsContainer__3lcI4",terms:"styles_terms__2_2to",locationContainer:"styles_locationContainer__2tH6g",location:"styles_location__mizQF",button:"styles_button__9fHCj"}},40:function(e,t,a){e.exports={homePageContainer:"styles_homePageContainer__3KXLv",buttonContainer:"styles_buttonContainer__1X4ep",foodFightImage:"styles_foodFightImage__2KxxX"}},59:function(e,t,a){e.exports=a.p+"static/media/heart.9524f560.svg"},7:function(e,t,a){e.exports={tournamentPageContainer:"styles_tournamentPageContainer__2uKfw",restaurantContainer:"styles_restaurantContainer__XLgrP",restaurant:"styles_restaurant__1pEDP",imageContainer:"styles_imageContainer__2YXPx",image:"styles_image__2JJdu",titleContainer:"styles_titleContainer__2Zb0v",title:"styles_title__2JCyo",priceRange:"styles_priceRange__2u3Ti",descriptionContainer:"styles_descriptionContainer__T2JLX",starsContainer:"styles_starsContainer__3V8FT",locationButtonsContainer:"styles_locationButtonsContainer__3xJzY",location:"styles_location___6kwF",buttonsContainer:"styles_buttonsContainer__cOR0B",reviewsButton:"styles_reviewsButton__3TsIi",voteButton:"styles_voteButton__12Vbw"}},79:function(e,t,a){e.exports=a.p+"static/media/food_fight.ba26e034.jpg"},80:function(e,t,a){e.exports={waitingPageContainer:"styles_waitingPageContainer__2ftAu"}},81:function(e,t,a){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9"}},91:function(e,t,a){e.exports=a(134)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.bd7749af.chunk.js.map