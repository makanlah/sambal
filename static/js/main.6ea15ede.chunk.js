(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){"use strict";(function(t){var o=n(23),i=n(24),a=n(26),r=n(25),c=n(27),s=n(1),u=n.n(s),l=(n(36),n(37)),p=function(e){function n(){var t;return Object(o.a)(this,n),(t=Object(a.a)(this,Object(r.a)(n).call(this))).state={recipe:[],page:1},t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement("form",{className:"Main-form",onSubmit:this.getRecipe.bind(this),style:{height:"30px"}},"Food name: ",u.a.createElement("input",{type:"text",ref:"toSearch",style:{width:100}})," ",u.a.createElement("br",null),u.a.createElement("input",{type:"submit",value:"Submit"})),this.state.recipe)}},{key:"getRecipe",value:function(t){var e,n=this;0!==this.refs.toSearch.value.length?(e='{ "content": "'+this.refs.toSearch.value+'" }',this.httpsPost(e,function(t){var e=n.state;e.recipe=JSON.parse("["+t+"]")[0],console.log(t),n.setState(e)}),t.preventDefault()):alert("Input cannot be empty!")}},{key:"httpsPost",value:function(t,e){var n=this.requestOption(t,"POST"),o=l.request(n,function(t){t.setEncoding("utf8");var n="";t.on("data",function(t){n+=t}),t.on("end",function(){e(n)})});o.write(JSON.stringify(t)),o.end()}},{key:"httpsGet",value:function(t,e){var n=this.requestOption(t,"GET"),o=l.request(n,function(t){t.setEncoding("utf8");var n="";t.on("data",function(t){n+=t}),t.on("end",function(){e(n)})});o.write(JSON.stringify(t)),o.end()}},{key:"requestOption",value:function(e,n){return{host:"127.0.0.1",path:"/todo/api/v1.0/recipes/",port:5e3,method:n,headers:{"Content-Type":"application/json","Content-Length":t.byteLength(JSON.stringify(e))}}}}]),n}(s.Component);e.a=p}).call(this,n(3).Buffer)},28:function(t,e,n){t.exports=n(56)},33:function(t,e,n){},36:function(t,e,n){},39:function(t,e){},41:function(t,e){},56:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(21),r=n.n(a),c=(n(33),n(22));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.6ea15ede.chunk.js.map