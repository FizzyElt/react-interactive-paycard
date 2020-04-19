(this["webpackJsonpreact-interactive-paycard"]=this["webpackJsonpreact-interactive-paycard"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(5),d=t.n(n),o=(t(11),t(12),t(3)),l=t(1),i=(t(13),t(2)),m=(t(14),function(e){var a=e.cardSide,t=Object(i.a)(e,["cardSide"]),r=[];Array.from({length:16}).forEach((function(e,a){a%4===0&&a>0&&r.push(c.a.createElement("span",{className:"card__card-number--space",key:"space-".concat(a)}));var n="#";a<t.cardNumber.length&&(n=t.cardNumber[a]),r.push(c.a.createElement("span",{key:"number-".concat(a)},n))}));var n="MM/YY";return n=(n=n.replace(/MM/,t.cardExpirationMonth||"MM")).replace(/YY/,t.cardExpirationYear||"YY"),c.a.createElement("div",{className:"card ".concat("back"===a&&"card--is-flipped")},c.a.createElement("div",{className:"card__front"},c.a.createElement("div",{className:"card__background"},c.a.createElement("img",{src:"https://i.imgur.com/5XHCjPT.jpg",alt:""})),c.a.createElement("div",{className:"card__top"},c.a.createElement("div",{className:"card__chip-icon"},c.a.createElement("img",{src:"https://i.imgur.com/7xhP2ZA.png",alt:""})),c.a.createElement("div",{className:"card__visa-icon"},c.a.createElement("img",{src:"https://i.imgur.com/lokBLnp.png",alt:""}))),c.a.createElement("div",{className:"card__card-number"},r),c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__card-holder"},c.a.createElement("div",{className:"card__card-holder-title"},"Card Holder"),c.a.createElement("div",{className:"card__card-holder-name"},t.cardHolder||"FULL NAME")),c.a.createElement("div",{className:"card__expires"},c.a.createElement("div",{className:"card__expires-title"},"Expires"),c.a.createElement("div",{className:"card__expires-date"},n)))),c.a.createElement("div",{className:"card__back"},c.a.createElement("div",{className:"card__background"},c.a.createElement("img",{src:"https://i.imgur.com/5XHCjPT.jpg",alt:""})),c.a.createElement("div",{className:"card__top"},c.a.createElement("div",{className:"card__black-line"})),c.a.createElement("div",{className:"card__card-cvv"},c.a.createElement("div",{className:"card__card-cvv-title"},t.cardCVV||"CVV"),c.a.createElement("div",{className:"card__card-cvv-number"})),c.a.createElement("div",{className:"card__bottom"},c.a.createElement("div",{className:"card__visa-icon"},c.a.createElement("img",{src:"https://i.imgur.com/lokBLnp.png",alt:""})))))}),s=(t(15),function(e){var a=e.handleRotateCard,t=e.dispatch,r=Object(i.a)(e,["handleRotateCard","dispatch"]);return c.a.createElement("div",{className:"card-form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"card-number"},"Card Number"),c.a.createElement("input",{type:"text",id:"card-number",autoComplete:"off",maxLength:16,value:r.cardNumber,onChange:function(e){var a=e.target.value;(""===a||/^\d+$/.test(a))&&t({type:"updateCardNumber",payload:e.target.value})},onFocus:function(){return a("front")}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"card-holder"},"Card Holder"),c.a.createElement("input",{type:"text",id:"card-holder",autoComplete:"off",maxLength:20,onChange:function(e){t({type:"updateCardHolder",payload:e.target.value})},onFocus:function(){return a("front")}})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-group card-form__expiration-date"},c.a.createElement("label",{htmlFor:"card-expiration-month"},"Expiration Date"),c.a.createElement("div",{className:"row"},c.a.createElement("select",{name:"",id:"card-expiration-month",defaultValue:"Month",onChange:function(e){t({type:"updateCardExpirationMonth",payload:e.target.value})},onFocus:function(){return a("front")}},c.a.createElement("option",{disabled:!0},"Month"),Array.from({length:12}).map((function(e,a){return c.a.createElement("option",{key:a},a+1)}))),c.a.createElement("select",{name:"",id:"card-expiration-year",defaultValue:"Year",onChange:function(e){t({type:"updateCardExpirationYear",payload:e.target.value})},onFocus:function(){return a("front")}},c.a.createElement("option",{disabled:!0},"Year"),Array.from({length:12}).map((function(e,a){return c.a.createElement("option",{key:a},2020+a)}))))),c.a.createElement("div",{className:"form-group card-form__card-cvv"},c.a.createElement("label",{htmlFor:"card-cvv"},"CVV"),c.a.createElement("input",{type:"text",id:"card-cvv",maxLength:3,value:r.cardCVV,onChange:function(e){var a=e.target.value;(""===a||/^\d+$/.test(a))&&t({type:"updateCardCVV",payload:e.target.value})},onFocus:function(){return a("back")}}))),c.a.createElement("button",{type:"submit",className:"card-form__submit-btn"},"Submit")))});function u(e,a){switch(a.type){case"updateCardNumber":return Object(l.a)({},e,{cardNumber:(t=a.payload,t.length>16?t.substr(0,16):t)});case"updateCardHolder":return Object(l.a)({},e,{cardHolder:a.payload});case"updateCardExpirationMonth":return Object(l.a)({},e,{cardExpirationMonth:("0"+a.payload).slice(-2)});case"updateCardExpirationYear":return Object(l.a)({},e,{cardExpirationYear:a.payload.slice(2)});case"updateCardCVV":return Object(l.a)({},e,{cardCVV:a.payload});default:throw new Error}var t}var p=function(){var e=c.a.useReducer(u,{cardNumber:"",cardHolder:"",cardExpirationMonth:"",cardExpirationYear:"",cardCVV:""}),a=Object(o.a)(e,2),t=a[0],r=a[1],n=c.a.useState("front"),d=Object(o.a)(n,2),l=d[0],i=d[1];return c.a.createElement("div",{className:"paycard"},c.a.createElement(m,Object.assign({cardSide:l},t)),c.a.createElement(s,Object.assign({handleRotateCard:function(e){i(e)},dispatch:r},t)))},E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ee2c86c2.chunk.js.map