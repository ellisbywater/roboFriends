(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=n(10),i=n(7),l=n(17),u=n(18),h=(n(29),n(2)),d=n(3),b=n(5),m=n(4),p=n(6),E=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(a.Component),f=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc w-20 grow bg-light-green br3 pa3 ma2 dib bw1 shadow-3"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Robots"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"truncate-m"},n),r.a.createElement("p",null,a)))},g=function(e){var t=e.robots;return r.a.createElement("div",{className:"flex flex-wrap justify-center"},t.map(function(e){return r.a.createElement(f,{key:e.id,id:e.id,name:e.name,email:e.email})}))},O=function(e){var t=e.searchChange;e.searchField;return r.a.createElement("div",{className:"pa2 ma2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 br2 tc ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px",padding:"15px"}},e.children)},R=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. that is not good"):this.props.children}}]),t}(r.a.Component),j=(n(30),function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).state={robots:[]},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending;if(0===a.length)return r.a.createElement("h2",null,"Loading...");var c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("h1",{className:"tc"},"Loading... "):r.a.createElement("div",{className:"tc"},r.a.createElement(E,null),r.a.createElement(O,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(R,null,r.a.createElement(g,{robots:c}))))}}]),t}(r.a.Component)),y=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e((n=t.target.value,console.log(n),{type:"CHANGE_SEARCHFIELD",payload:n}));var n},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var S=n(19),w={searchField:" "},C={isPending:!1,robots:[],error:""},N=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(S.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(i.d)(_,Object(i.a)(u.a,N));c.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.e9e45b4c.chunk.js.map