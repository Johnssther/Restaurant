(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{24:function(c,e,t){},25:function(c,e,t){},33:function(c,e,t){"use strict";t.r(e);var n=t(1),o=t.n(n),r=t(17),a=t.n(r),i=(t(24),t(25),t(10)),s=t(9),j=t(0),d=function(c){var e=c.balance;return Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/",style:{color:"white",textDecoration:"none"},children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/products",style:{color:"white",textDecoration:"none"},children:"Productos"})})]}),Object(j.jsx)("p",{children:"John Alejandro Hernandez R"}),Object(j.jsxs)("p",{className:"balance",children:["$ ",(new Intl.NumberFormat).format(e)]}),Object(j.jsx)("i",{class:"bi bi-cart-fill",children:Object(j.jsx)("span",{children:"11"})})]})},l=function(c){c.balance;return Object(j.jsxs)("footer",{className:"footer mt-1",children:[Object(j.jsx)("p",{children:"John Al"}),Object(j.jsx)("p",{children:"Desarrollado por John Hernandez"})]})},b=function(c){var e=c.children;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{balance:1e4}),Object(j.jsx)("main",{className:"container",children:e}),Object(j.jsx)(l,{})]})})},p=t(15),h=t.n(p),m=t(19),u=function(c){var e=c.img,t=c.price,o=(c.background,c.balance),r=c.name,a=c.product_new,s=Object(n.useState)(0),d=Object(i.a)(s,2),l=d[0],b=d[1],p=function(c){return(new Intl.NumberFormat).format(c)},u=function(){var c=Object(m.a)(h.a.mark((function c(){return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:b(l+1),o(t,"+");case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("p",{className:"product_name",children:r}),Object(j.jsxs)("div",{className:"img",children:[Object(j.jsx)("img",{src:e,alt:r}),a?Object(j.jsx)("div",{className:"product_new",children:"Nuevo"}):""]}),Object(j.jsxs)("div",{className:"price",children:[Object(j.jsx)("h3",{children:"$ ".concat(p(t))}),Object(j.jsx)("p",{children:"(Total: $ ".concat(p(t*l),")")})]}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsx)("button",{type:"button",className:"".concat(l?"btn":"btn-disabled"),onClick:function(){l>0&&(b(l-1),o(t,"-"))},children:"-"}),"".concat(l," uds"),Object(j.jsx)("button",{type:"button",className:"btn",onClick:function(){return u()},children:"+"})]})]})},x=[{name:"Hamburgueza rokera",img:"https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg",price:2e4,background:"#4d2323",color:"#fff",product_new:!0},{name:"Pizza familiar",img:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",price:32e3,background:"#580F0C",color:"#fff"},{name:"Cono de chocolate",img:"https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_960_720.jpg",price:2400,background:"#3C6FA2",color:"#fff",product_new:!0},{name:"Cafe negro",img:"https://cdn.pixabay.com/photo/2016/04/26/16/58/coffe-1354786_960_720.jpg",price:3e3,background:"#2C1A08",color:"#fff"},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff"},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff",product_new:!0},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff"},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff"},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff",product_new:!0},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff"},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff",product_new:!0},{name:"Pollo",img:"https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338309_960_720.jpg",price:16e3,background:"#7F3E1A",color:"#fff"}],f=function(c){c.balance;return Object(j.jsxs)("div",{className:"category grid col-2",children:[Object(j.jsx)("div",{className:"span-2",children:Object(j.jsx)("h3",{children:"Categorias"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg"}),Object(j.jsx)("h3",{children:"Comidas rapidas"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2018/03/31/07/43/bread-3277473__340.jpg"}),Object(j.jsx)("h3",{children:"Bebidas"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2016/12/20/21/43/orange-1921548_960_720.jpg"}),Object(j.jsx)("h3",{children:"Almuerzo"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_960_720.jpg"}),Object(j.jsx)("h3",{children:"Desayunos"})]})]})},g=function(){var c=Object(n.useState)(0),e=Object(i.a)(c,2),t=e[0],o=e[1],r=function(c,e){"+"===e&&o(t+c),"-"===e&&o(t-c)};return Object(j.jsx)(b,{children:Object(j.jsxs)("div",{className:"grid col-4 col-md-2 col-sm-1 mt-1",id:"products",children:[Object(j.jsx)(f,{}),x.map((function(c,e){return Object(j.jsx)(u,{name:c.name,img:c.img,price:c.price,background:c.background,product_new:c.product_new,balance:r},e)}))]})})},O=t(2),_=function(){return Object(j.jsxs)(b,{children:["Bienvenido, conozca nuestro men\xfa",Object(j.jsx)(f,{})]})};function v(){return Object(j.jsx)(s.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{path:"/products",children:Object(j.jsx)(g,{})}),Object(j.jsx)(O.a,{path:"/",children:Object(j.jsx)(_,{})})]})})})}var y=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{})})},k=function(c){c&&c instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(e){var t=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(c),n(c),o(c),r(c),a(c)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),k()}},[[33,1,2]]]);
//# sourceMappingURL=main.d17aa6e6.chunk.js.map