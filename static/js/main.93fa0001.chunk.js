(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),m=a(14),l=a.n(m),r=(a(27),a(5)),i=a(6),o=function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Home"),c.a.createElement("img",{src:"http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/23.png",alt:"Homer"}))},s=a(15),u=a(16),d=a(20),p=a(17),E=a(21),f=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",to:"/about-me"},"About me")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",to:"/item"},"Item"))))}}]),t}(n.Component),h=function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"About me"),c.a.createElement("img",{src:"http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/9.png",alt:"Homer"}))},v=(a(36),[{name:"item 1",id:"1",img:"http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/27.png"},{name:"item 2",id:"2",img:"http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/10.png"},{name:"item 3",id:"3",img:"http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/28.png"}]),b=function(e){var t=e.match,a=v.find(function(e){return e.id===t.params.id});return c.a.createElement("div",{className:"item"},c.a.createElement("h4",null,a.name),c.a.createElement("img",{src:a.img,alt:"Homer"}))},g=function(){return c.a.createElement("div",{className:"item-page"},c.a.createElement("ul",null,v.map(function(e){var t=e.id,a=e.name;return c.a.createElement("li",{key:t},c.a.createElement(r.b,{to:"/item/".concat(t)},a))})),c.a.createElement(i.b,{path:"/item/:id",component:b}))},w=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(r.a,null,c.a.createElement(f,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:o}),c.a.createElement(i.b,{exact:!0,path:"/about-me",component:h}),c.a.createElement(i.b,{path:"/item",component:g}),c.a.createElement(i.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.93fa0001.chunk.js.map