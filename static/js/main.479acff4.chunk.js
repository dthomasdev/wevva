(this.webpackJsonpwevva=this.webpackJsonpwevva||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(13),c=n.n(r),i=(n(22),n(2)),s=n(3),u=n(16),l=n(15),h=(n(23),n(14)),f=n.n(h),p=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.text))}},{key:"getForecast",value:function(){return this.getRequest("https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&units=metric&appid=a0a4ed2421e783072dfb96623b63f774")}},{key:"getRequest",value:function(e){return f.a.get(e).then(this.status).catch((function(e){console.log(e),alert(e)}))}}]),e}(),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a.ApiClient=new p,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.ApiClient.getForecast().then((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("pre",null,JSON.stringify(this.state)))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.479acff4.chunk.js.map