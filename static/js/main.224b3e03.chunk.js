(this["webpackJsonpgoit-react-hw-01-components2"]=this["webpackJsonpgoit-react-hw-01-components2"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__ScnbO",content:"Profile_content__3PMx7",avatar:"Profile_avatar__2prGc",stats:"Profile_stats__2LluB",statsItem:"Profile_statsItem__34oyW",label:"Profile_label__1PGAj",quantity:"Profile_quantity__Bu6dp"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__3xrNw",statList:"Statistics_statList__1s1LM",item:"Statistics_item__2o7L8",label:"Statistics_label__JAzcD"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__258SZ",item:"FriendList_item__2ZQLL",onLine:"FriendList_onLine__2YcBs",offLine:"FriendList_offLine__2H1ey",avatar:"FriendList_avatar__1qB8d",name:"FriendList_name__21GdD"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__3KZCt"}},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),s=t(8),i=t.n(s),r=(t(16),t.p+"static/media/default.2e01288c.jpg"),d=t(1),l=t.n(d),o=t(0),b=function(e){var a=e.name,t=e.tag,c=e.location,n=void 0===c?"not detected":c,s=e.avatar,i=void 0===s?r:s,d=e.stats,b=void 0===d?{}:d,p=b.followers,m=b.views,j=b.likes;return Object(o.jsxs)("div",{className:l.a.profile,children:[Object(o.jsxs)("div",{className:l.a.description,children:[Object(o.jsx)("img",{src:i,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:l.a.avatar}),Object(o.jsx)("p",{className:l.a.name,children:a}),Object(o.jsxs)("p",{className:l.a.tag,children:["@",t]}),Object(o.jsx)("p",{className:l.a.location,children:n})]}),Object(o.jsxs)("ul",{className:l.a.stats,children:[Object(o.jsxs)("li",{className:l.a.statsItem,children:[Object(o.jsx)("span",{className:l.a.label,children:"Followers"}),Object(o.jsx)("span",{className:l.a.quantity,children:p})]}),Object(o.jsxs)("li",{className:l.a.statsItem,children:[Object(o.jsx)("span",{className:l.a.label,children:"Views"}),Object(o.jsx)("span",{className:l.a.quantity,children:m})]}),Object(o.jsxs)("li",{className:l.a.statsItem,children:[Object(o.jsx)("span",{className:l.a.label,children:"Likes"}),Object(o.jsx)("span",{className:l.a.quantity,children:j})]})]})]})},p=t(4),m=t(2),j=t.n(m),u=function(e){var a=e.title,t=e.stats;return Object(o.jsxs)("section",{className:j.a.statistics,children:[Object(o.jsx)("h2",{className:j.a.title,children:a}),Object(o.jsx)("ul",{className:j.a.statList,children:t.map((function(e){var a=e.id,t=e.label,c=e.percentage;return Object(o.jsxs)("li",{className:j.a.item,style:{backgroundColor:"#".concat(Math.random().toString(16).substr(2,6))},children:[Object(o.jsx)("span",{className:j.a.label,children:t}),Object(o.jsx)("span",{className:j.a.percentage,children:c})]},a)}))})]})},f=t(7),y=t(3),h=t.n(y),O=function(e){var a=e.friends;return Object(o.jsx)("ul",{className:h.a.friendList,children:a.map((function(e){var a=e.id,t=e.isOnline,c=e.avatar,n=e.name;return Object(o.jsxs)("li",{className:h.a.item,children:[Object(o.jsx)("span",{className:t?h.a.onLine:h.a.offLine}),Object(o.jsx)("img",{className:h.a.avatar,src:c,alt:"{name}",width:"48"}),Object(o.jsx)("p",{className:h.a.name,children:n})]},a)}))})},x=t(9),_=t(10),v=t(11),N=t.n(v),g=function(e){var a=e.items;return Object(o.jsxs)("table",{className:N.a.transactionHistory,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,c=e.amount,n=e.currency;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:n})]},a)}))})]})};t(18);var L=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{name:p.name,tag:p.tag,location:p.location,avatar:p.avatar,stats:p.stats}),Object(o.jsx)(u,{title:"Upload stats",stats:f}),Object(o.jsx)(u,{stats:f}),Object(o.jsx)(O,{friends:x}),Object(o.jsx)(g,{items:_})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.224b3e03.chunk.js.map