(this["webpackJsonpuser-login"]=this["webpackJsonpuser-login"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),l=a.n(r),o=(a(24),a(25),{LOAD_CATALOG:"LOAD_CATALOG",CATALOG_RECEIVED:"CATALOG_RECEIVED",SELECTED_CATALOG:"SELECTED_CATALOG"});var s=a(4);a(32);var i=c.a.memo((function(){var e=Object(s.d)((function(e){return e.catalogReducer}),s.b),t=Object(s.c)(),a=function(a,n){var c;t((c=e.catalog[a].branches[n],{type:o.SELECTED_CATALOG,branches:c,title:"/ "+c.name}))};return c.a.createElement("div",{className:"header-container"},c.a.createElement("p",{className:"title"},"Rental Management system"),c.a.createElement("ul",{className:"top-level-menu"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Select Location"),c.a.createElement("ul",{className:"second-level-menu"},e.catalog.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{href:"#"},e.name),c.a.createElement("ul",{className:"third-level-menu"},e.branches.map((function(e,n){return c.a.createElement("li",{key:n},c.a.createElement("a",{href:"#",onClick:function(){return a(t,n)}},e.name))}))))}))))))}));a(33);var u=c.a.memo((function(){var e=Object(s.d)((function(e){return e.catalogReducer}),s.b),t=Object(s.c)(),a=function(a){var n,c,r;a.subcategories&&t((n=a.subcategories,c=e.title,r=a.name,{type:o.SELECTED_CATALOG,branches:{categories:n},title:c+"/ "+r}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},0===e.selectedBranch.categories.length?c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,"Welcome to Rental Management system"),c.a.createElement("p",null,"Please select location on header")):c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Equipment Catalog ",e.title),e.selectedBranch.categories.map((function(e,t){return c.a.createElement("div",{key:t,className:"sub-container"},c.a.createElement("img",{src:"img/"+e.image,className:"img",alt:e.name}),c.a.createElement("div",{className:"footer"},c.a.createElement("h4",{onClick:function(){return a(e)}},e.name)))})))))}));var m=function(){var e=Object(s.c)();return Object(n.useEffect)((function(){e({type:o.LOAD_CATALOG})}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(5),f=a(11),O={catalog:[],selectedBranch:{categories:[]},loading:!1,title:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.LOAD_CATALOG:e=Object(f.a)({},e,{loading:!0});break;case o.CATALOG_RECEIVED:e=Object(f.a)({},e,{loading:!1,catalog:t.catalog});break;case o.SELECTED_CATALOG:e=Object(f.a)({},e,{selectedBranch:t.branches,title:t.title})}return e},d=Object(E.c)({catalogReducer:h}),g=a(6),v=a.n(g),b=a(10),p=a(17),A="http://localhost:3000",L=function(){var e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A,"/catalog.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=v.a.mark(w),_=v.a.mark(j),T=v.a.mark(D);function w(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:return e=t.sent,t.next=5,Object(b.b)({type:o.CATALOG_RECEIVED,catalog:e.data.locations});case 5:case"end":return t.stop()}}),C)}function j(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(o.LOAD_CATALOG,w);case 2:case"end":return e.stop()}}),_)}function D(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([j()]);case 2:case"end":return e.stop()}}),T)}var k=a(18),G=Object(k.a)(),N=Object(E.e)(d,Object(E.d)(Object(E.a)(G),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));G.run(D);var y=N;l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:y},c.a.createElement(m,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0760f532.chunk.js.map