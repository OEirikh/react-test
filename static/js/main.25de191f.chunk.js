(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],[,,,,,function(t,e,r){t.exports={container:"ColorPicker_container__VuLeJ",title:"ColorPicker_title__1RStB",option:"ColorPicker_option__dHZJ1"}},,function(t,e,r){t.exports={container:"Paiting_container__16B4t",img:"Paiting_img__1vhVR"}},function(t,e,r){t.exports={flex:"PaintingList_flex__XQRuW",li:"PaintingList_li__3UZg5"}},function(t,e,r){t.exports={counter:"Counter_counter__2d6O8",value:"Counter_value__2-sRl"}},function(t,e,r){t.exports={Dropdown:"Dropdown_Dropdown__VxUOr",Menu:"Dropdown_Menu__nCaQT"}},,,function(t,e,r){t.exports={alert:"Alert_alert__1rkHi",error:"Alert_error__3geWi Alert_alert__1rkHi",warning:"Alert_warning__2gWI4 Alert_alert__1rkHi",success:"Alert_success__2FJwX Alert_alert__1rkHi"}},,function(t,e,r){t.exports={controls:"Controls_controls__TYVc9"}},function(t){t.exports=JSON.parse('[{"id":"id-1","url":"https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg","title":"Feathers. Art abstract","price":500,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":10},{"id":"id-2","url":"https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg","title":"Bird. Animal art abstract","price":400,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":15},{"id":"id-3","url":"https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg","title":"Flowers. Tulip nature art abstract","price":600,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":5}]')},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(1),c=r.n(n),i=r(11),o=r.n(i),a=r(0);var l=function(t){var e=t.title,r=t.children;return Object(a.jsxs)("div",{children:[e&&Object(a.jsx)("h2",{children:e}),r]})},s=r.p+"static/media/default.2e01288c.jpg",u=r(7),j=r.n(u);function p(t){var e=t.imageUrl,r=void 0===e?s:e,n=t.title,c=t.authorProfile,i=t.authorName,o=void 0===i?"\u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e":i,l=t.price,u=t.quantity;return Object(a.jsxs)("div",{className:j.a.container,children:[Object(a.jsx)("img",{className:j.a.img,src:null!==r&&void 0!==r?r:s,alt:n,width:"480"}),Object(a.jsx)("h2",{children:n}),Object(a.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",Object(a.jsx)("a",{href:c,children:o})]}),Object(a.jsxs)("p",{children:["\u0426\u0435\u043d\u0430: ",l," \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432"]}),Object(a.jsxs)("p",{children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c: ",u<10?"\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f":"\u0435\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"]}),Object(a.jsx)("button",{type:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})}console.log(s);var d=r(8),b=r.n(d);function h(t){var e=t.items;return Object(a.jsx)("ul",{className:b.a.flex,children:e.map((function(t){return Object(a.jsx)("li",{className:b.a.li,children:Object(a.jsx)(p,{imageUrl:t.url,title:t.title,authorName:t.author.tag,authorProfile:t.author.url,price:t.price,quantity:t.quantity})},t.id)}))})}console.log(h);var x=h,_=r(5),O=r.n(_),v=r(12),m=r.n(v);function f(t){var e=t.options;return Object(a.jsxs)("div",{className:O.a.container,children:[Object(a.jsx)("h2",{className:O.a.title,children:"ColorPicker"}),Object(a.jsx)("div",{children:e.map((function(t){return Object(a.jsx)("span",{className:O.a.option,style:{backgroundColor:t.color}},t.id)}))})]})}var g=f;f.prototype={options:m.a.object.isRequired};var y=r(13),k=r.n(y);var w=function(t){var e=t.text,r=t.type;return console.log([r]),Object(a.jsx)("p",{role:"alert",className:"".concat(k.a[r]),children:e})},N=r(2),C=r(14),A=r(4),P=r(3),D=r(9),q=r.n(D),F=r(15),S=r.n(F),V=function(t){var e=t.onIncrement,r=t.onDecrement;return Object(a.jsxs)("div",{className:S.a.controls,children:[Object(a.jsx)("button",{type:"button",onClick:e,children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 1"}),Object(a.jsx)("button",{type:"button",onClick:r,children:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 1"})]})},J=function(t){Object(A.a)(r,t);var e=Object(P.a)(r);function r(){var t;Object(N.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={value:t.props.initialValue},t.hendleIncrement=function(e){console.log("click on increment"),console.log(e),t.setState((function(t){return{value:t.value+1}}))},t.hendleDecrement=function(){t.setState((function(t){return{value:t.value-1}}))},t}return Object(C.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:q.a.counter,children:[Object(a.jsx)("span",{className:q.a.value,children:this.state.value}),Object(a.jsx)(V,{onIncrement:this.hendleIncrement,onDecrement:this.hendleDecrement})]})}}]),r}(c.a.Component);J.defaultProps={initialValue:0};var B=J,H=r(10),I=r.n(H),M=function(t){Object(A.a)(r,t);var e=Object(P.a)(r);function r(){var t;Object(N.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={visible:!0},t.togle=function(){t.setState((function(t){return{visible:!t.visible}}))},t.render=function(){return Object(a.jsxs)("div",{className:I.a.Dropdown,children:[Object(a.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:t.togle,children:t.state.visible?"\u0421\u043a\u0440\u0438\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),t.state.visible&&Object(a.jsx)("div",{className:I.a.Menu,children:"MENU"})]})},t}return r}(n.Component),R=M,U=r(16),E=[{id:"01",label:"red",color:"#F44336"},{id:"02",label:"green",color:"#4CAF50"},{id:"03",label:"blue",color:"#2196F3"},{id:"04",label:"grey",color:"#607D8B"},{id:"05",label:"pink",color:"#E91E63"},{id:"06",label:"indigo",color:"#3F51B5"}];function L(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{title:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:Object(a.jsx)(B,{initialValue:10})}),Object(a.jsx)(l,{title:"\u0412\u0438\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u043c\u0435\u043d\u044e",children:Object(a.jsx)(R,{})}),Object(a.jsx)(l,{title:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432",children:Object(a.jsx)(x,{items:U})}),Object(a.jsx)(l,{title:"Color Picker",children:Object(a.jsx)(g,{options:E})}),Object(a.jsx)(w,{text:"success",type:"success"}),Object(a.jsx)(w,{text:"warning",type:"warning"}),Object(a.jsx)(w,{text:"error",type:"error"})]})}r(24);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.querySelector("#root"));var T=Object(a.jsx)("span",{children:"\u041f\u0440\u0438\u0432\u0435\u0442 "}),W=Object(a.jsx)("span",{children:"\u043c\u0438\u0440"});console.log(T,W);var Q=Object(a.jsxs)("div",{children:[T,W]});console.log(Q)}],[[25,1,2]]]);
//# sourceMappingURL=main.25de191f.chunk.js.map