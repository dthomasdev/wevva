(this.webpackJsonpwevva=this.webpackJsonpwevva||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(12),n(3)),l=n(4),s=n(6),d=n(5),u=(n(13),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,weather:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=fetch("https://api.openweathermap.org/data/2.5/weather?q=Sheffield,uk&appid=0fbd6c6079d3fdfcb32d21d2c735760c");console.log(t),t.then((function(t){t.json().then((function(t){e.setState({isLoaded:!0,weather:t.weather})}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("pre",null,"STATE  = ",JSON.stringify(this.state)),this.state.isLoaded?"":"<<<< \u25b2 LOADING \u25b2 >>>>"," ",o.a.createElement("h2",null,"Todo's"),o.a.createElement("br",null),"add api call",o.a.createElement("br",null),"get 5 day forecast",o.a.createElement("br",null),"add some stuff")}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3dc39855.chunk.js.map