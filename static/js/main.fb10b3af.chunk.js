(this["webpackJsonpcart-hooks"]=this["webpackJsonpcart-hooks"]||[]).push([[0],[,,,function(t,e,n){t.exports={item:"CartItem_item__1ya_K",summary:"CartItem_summary__3n3Tc",price:"CartItem_price__1F2TI",amount:"CartItem_amount__31eL1",totalPrice:"CartItem_totalPrice__1rcwe"}},function(t,e,n){t.exports={button:"CartButton_button__pxgav",icon:"CartButton_icon__XSQST",items:"CartButton_items__1LI-X",amount:"CartButton_amount__3RpSC",bump:"CartButton_bump__27EI9"}},function(t,e,n){t.exports={list:"Cart_list__3dCfB",total:"Cart_total__34Gm9",btnContainer:"Cart_btnContainer__GqcpD"}},function(t,e,n){t.exports={item:"ListItem_item__3QKj_",price:"ListItem_price__1oy_n",buttonSuccess:"ListItem_buttonSuccess__1sRxQ",buttonDanger:"ListItem_buttonDanger__2m4bC"}},function(t,e,n){t.exports={backdrop:"Modal_backdrop__T0ybH",modal:"Modal_modal__2avVe","slide-down":"Modal_slide-down__2YOIf"}},,function(t,e,n){t.exports={products:"ProductList_products__1tUXb","fade-in":"ProductList_fade-in__34WhO"}},,,,function(t,e,n){t.exports={header:"Header_header__1zst5"}},function(t,e,n){t.exports={card:"Card_card__3s3SG"}},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(11),i=n.n(r),s=(n(19),n(2)),o=n(10),u=n(12),d=function(t,e){return Object(u.a)(t,(function(n){if("ADD"===e.type){var c=t.findIndex((function(t){return t.id===e.id}));-1!==c&&(n[c].quantity+=1)}else if("REMOVE"===e.type){var a=t.findIndex((function(t){return t.id===e.id}));-1!==a&&n[a].quantity>0&&(n[a].quantity-=1)}}))},l=n(0),j=a.a.createContext(null),b=[{id:1,name:"Tomate",price:120,quantity:0},{id:2,name:"Galletitas",price:250,quantity:0},{id:3,name:"Lata Atun",price:380,quantity:0},{id:4,name:"Coca-cola",price:270,quantity:0}],m=function(t){var e=Object(c.useReducer)(d,b),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(l.jsx)(j.Provider,Object(o.a)(Object(o.a)({},t),{},{value:{products:a,dispatch:r}}))},_=n(5),p=n.n(_),x=n(3),O=n.n(x),h=function(t){var e=t.name,n=t.price,c=t.amount,a="$".concat(n.toFixed(2));return Object(l.jsxs)("li",{className:O.a.item,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e}),Object(l.jsxs)("div",{className:O.a.summary,children:[Object(l.jsx)("span",{className:O.a.price,children:a}),Object(l.jsxs)("span",{className:O.a.amount,children:["x ",c]})]})]}),Object(l.jsxs)("div",{className:O.a.totalPrice,children:["$",n*c]})]})},f=function(t){var e=t.closeHandler,n=Object(c.useContext)(j),a=n.products.reduce((function(t,e){return e.price*e.quantity+t}),0).toFixed(2),r=n.products.filter((function(t){return t.quantity>0}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:p.a.list,children:r.map((function(t){return Object(l.jsx)(h,{name:t.name,price:t.price,amount:t.quantity},t.id)}))}),Object(l.jsxs)("div",{className:p.a.total,children:[Object(l.jsx)("span",{children:"Total amount"}),Object(l.jsxs)("span",{children:["$",a]})]}),Object(l.jsx)("div",{className:p.a.btnContainer,children:Object(l.jsx)("button",{className:p.a.button,onClick:e,children:"Close"})})]})},C=n(13),v=n.n(C),N=n(4),y=n.n(N),k=function(t){var e=t.onClick,n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],i=a[1],o="".concat(y.a.button," ").concat(r?y.a.bump:""),u=Object(c.useContext)(j),d=u.products.reduce((function(t,e){return e.quantity>0?t+1:t}),0),b=u.products.reduce((function(t,e){return e.price*e.quantity+t}),0);return Object(c.useEffect)((function(){d>0&&i(!0);var t=setTimeout((function(){i(!1)}),200);return function(){clearTimeout(t)}}),[u.products]),Object(l.jsxs)("button",{className:o,onClick:e,children:[Object(l.jsx)("span",{className:y.a.icon,children:Object(l.jsx)("i",{className:"fa fa-lg fa-shopping-cart"})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsxs)("span",{className:y.a.amount,children:["$",b]}),Object(l.jsx)("span",{className:y.a.items,children:d})]})},I=function(t){var e=t.onCartClicked;return Object(l.jsxs)("header",{className:v.a.header,children:[Object(l.jsxs)("h1",{children:["TP3 - ",Object(l.jsx)("em",{children:"Boaglio"}),", Franco"]}),Object(l.jsx)(k,{onClick:e})]})},q=n(7),g=n.n(q),S=function(t){var e=t.onClick;return Object(l.jsx)("div",{className:g.a.backdrop,onClick:e})},B=function(t){var e=t.children;return Object(l.jsx)("div",{className:g.a.modal,children:Object(l.jsx)("div",{className:g.a.content,children:e})})},L=function(t){var e=t.children,n=t.onBackdropClick;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(S,{onClick:n}),Object(l.jsx)(B,{children:e})]})},T=n(14),D=n.n(T),w=function(t){var e=t.children;return Object(l.jsx)("div",{className:D.a.card,children:e})},E=n(6),F=n.n(E),P=function(t){var e=t.product,n=(t.dispatch,t.onAdd),c=t.onRemove,a="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:F.a.item,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:F.a.price,children:a})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:F.a.buttonSuccess,onClick:n,children:"+"}),Object(l.jsx)("button",{className:F.a.buttonDanger,disabled:e.quantity<=0,onClick:c,children:"-"})]})]})},R=n(9),M=n.n(R),A=function(t){var e=Object(c.useContext)(j);if(!e)return Object(l.jsx)("p",{className:M.a.products,children:"Something went wrong..."});var n=e.products.map((function(t){return Object(l.jsx)(P,{product:t,onAdd:function(){return n=t.id,void e.dispatch({type:"ADD",id:n});var n},onRemove:function(){return n=t.id,void e.dispatch({type:"REMOVE",id:n});var n}},t.id)}));return Object(l.jsx)("section",{className:M.a.products,children:Object(l.jsx)(w,{children:Object(l.jsx)("ul",{children:n})})})};var $=function(){var t=Object(c.useState)(!1),e=Object(s.a)(t,2),n=e[0],a=e[1],r=function(){a(!n)};return Object(l.jsxs)(m,{children:[n&&Object(l.jsx)(L,{onBackdropClick:r,children:Object(l.jsx)(f,{closeHandler:r})}),Object(l.jsx)(I,{onCartClicked:r}),Object(l.jsx)(A,{})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)($,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.fb10b3af.chunk.js.map