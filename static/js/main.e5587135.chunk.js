(this["webpackJsonpgroceries-by-meal"]=this["webpackJsonpgroceries-by-meal"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"name":"Broccoli & Mushroom Stir Fry","ingredients":["broccoli","mushroom","garlic","lemon"]},{"name":"Chicken Salad","ingredients":["chicken breast","romaine lettuce","tomato","lemon"]},{"name":"Air Fried Tofu","ingredients":["tofu"]},{"name":"Morning Fruits","ingredients":["banana","orange","dates","strawberry"]},{"name":"Supplementary Dairy","ingredients":["milk","cheese","creamer","yogurt","eggs"]},{"name":"Air Fried Potato","ingredients":["potato"]},{"name":"Rice and Beans w/ Ground Chicken","ingredients":["ground chicken","beans","rice","avocado","lemon"]},{"name":"Tofu Curry","ingredients":["coconut milk","sweet potato","mushroom","tofu"]},{"name":"Chicken & Lentil Rice","ingredients":["chicken thighs","lentil","rice"]},{"name":"Chicken Biryani","ingredients":["chicken thighs","brown rice","tomato","lemon","yogurt","fried onion"]},{"name":"Chicken Wings","ingredients":["chicken wings","hot sauce","honey garlic bbq sauce"]}]')},16:function(e,n,t){e.exports=t(32)},21:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(12),r=t.n(i),o=(t(21),t(15)),s=t(10),l=t(4),m=t(8),u=(t(23),t(24),t(3)),d=t(7),g=function(){return c.a.createElement("div",{className:"page-title"},c.a.createElement(u.a,{icon:d.b})," Groceries by"," ",c.a.createElement("span",{className:"page-title-bold"},"Meal"))},f=(t(30),t(13)),h=function(){return c.a.createElement("div",{className:"page-footer"},c.a.createElement("a",{href:"https://github.com/nafeu/groceries-by-meal"},c.a.createElement(u.a,{icon:f.a}))," ","/ Made with ",c.a.createElement(u.a,{icon:d.a})," by"," ",c.a.createElement("a",{href:"http://nafeu.com"},"Nafeu Nasir."))},b=t(14);var p=function(){var e=Object(a.useState)(b),n=Object(l.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)([]),u=Object(l.a)(r,2),d=u[0],f=u[1],p=Object(a.useState)([]),E=Object(l.a)(p,2),k=E[0],y=E[1],v=Object(a.useState)(!1),O=Object(l.a)(v,2),j=O[0],N=O[1];return Object(a.useEffect)((function(){0===k.length?N(!1):N(k.length===d.length)}),[d,k]),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app-container"},c.a.createElement(g,null),c.a.createElement("div",{className:"meals"},t.map((function(e){return c.a.createElement("div",{key:e.name,className:"meal ".concat(e.selected?"selected":""),onClick:function(){return function(e){var n=t.map((function(n){return e===n.name?Object(s.a)(Object(s.a)({},n),{},{selected:!n.selected}):n})),a=Object(m.chain)(n).filter((function(e){return e.selected})).map((function(e){return e.ingredients})).flatten().uniq().value();i(n),f(a)}(e.name)}},c.a.createElement("div",{className:"meal-name"},e.name),c.a.createElement("div",{className:"meal-ingredients"},e.ingredients.map((function(e){return c.a.createElement("div",{key:e,className:"meal-ingredient"},e)}))))}))),d.length>0&&c.a.createElement("div",{className:"shopping-list ".concat(j?"is-complete":"")},d.map((function(e){return c.a.createElement("div",{key:e,onClick:function(){return function(e){Object(m.includes)(k,e)?y(k.filter((function(n){return n!==e}))):y([].concat(Object(o.a)(k),[e]))}(e)},className:"shopping-list-item ".concat(Object(m.includes)(k,e)?"in-cart":"not-in-cart")},e)}))),c.a.createElement(h,null)))};t(31);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e5587135.chunk.js.map