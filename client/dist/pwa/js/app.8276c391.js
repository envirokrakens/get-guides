(function(e){function t(t){for(var o,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={1:0},r={1:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"db406afc",3:"efdd4ca8",4:"efd95bd9",5:"bb9a7074"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"f7a1832f",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",r=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===r)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],g.parentNode.removeChild(g),n(i)},g.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(g)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var g=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("ddb0"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),a=n("1f91"),r=n("42d2"),i=n("b05d");o["a"].use(i["a"],{config:{},lang:a["a"],iconSet:r["a"]});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],c={name:"App",mounted(){}},u=c,d=n("2877"),g=Object(d["a"])(u,s,l,!1,null,null,null),h=g.exports,f=n("2f62"),p=n("bc3a"),m=n.n(p);function v(e){return t=>{t.$socket=e,e.on("authResult",(e=>{console.log(e),t.commit("setUserId",e.id),t.commit("changeView",e.path),t.commit("loggedIn",e.loggedIn),"Registration"===e.path&&(t.commit("setUserName",e.name),t.commit("setUserEmail",e.email),t.commit("setUsergid",e.gid))})),e.on("chatUpdate",(e=>t.commit("chatUpdate",e)))}}var w=n("6c23");o["a"].use(f["a"]);const y=v(w["a"]);var b=new f["a"].Store({state:{currentView:"Search",userType:"",id:"",name:"",email:"",gid:"",travellerPackage:{},guidePackage:{},currentChatId:"",currentChat:[],singleGuide:{},filteredGuides:[],somethingStupid:0,loggedIn:"false"},plugins:[y],mutations:{changeView(e,t){this.state.currentView=t},loggedIn(e,t){this.state.loggedIn=t},setUserType(e,t){this.state.userType="traveller"},setUserId(e,t){this.state.id=t},chatUpdate(e,t){for(message of t)this.state.currentChat.push(message)},setUserName(e,t){this.state.name=t},setUserEmail(e,t){this.state.email=t},setUsergid(e,t){this.state.gid=t},setTravellerPackage(e,t){this.state.travellerPackage=t},setGuidePackage(e,t){this.state.guidePackage=t},setFilteredGuides(e,t){this.state.filteredGuides=t,console.log("Setter's"),console.log(this.state.filteredGuides)},setSingleGuide(e,t){this.state.singleGuide.id=t._id,this.state.singleGuide.name=t.name,this.state.singleGuide.avatar=t.avatar,this.state.singleGuide.languages=t.languages,this.state.singleGuide.locations=t.locations,this.state.singleGuide.weekdays=t.weekdays,this.state.singleGuide.bio=t.bio,this.state.singleGuide.gallery=t.gallery,this.state.singleGuide.rate=t.rate,this.state.singleGuide.unavailableDates=t.unavailable_dates,console.log("setter function"),this.state.somethingStupid+=1,console.log("forced render",Date.now())}},actions:{login(e){this.$router.push("/login")},async receiveMessage(e,t){console.log("this was received:",t)},async search(e,t){e.commit("setFilteredGuides")},async getFilteredGuides(e,t){console.log("Payload is: ",t);const n=t.location,o=t.language,a=t.date,r=t.meme,i=(await m.a.get(`http://localhost:5000/api/guides/search/${n}/${o}/${a}/${r}`)).data;console.log(i),e.commit("setFilteredGuides",i)},async getSingleGuide(e,t){console.log(t);try{const n=(await m.a.get(`http://localhost:5000/api/guides/${t}`)).data;console.log(n),e.commit("setSingleGuide",n)}catch(n){console.log(n)}},async getChatLogs(e,t){(await m.a.get(`http://localhost:5000/api/messages/${t}`)).data},async dispatchMessage(e,t){w["a"].emit("Message",t),console.log("I SENT IT YOU PRICK")},async travellerPackage(e,t){w["a"].emit("newTravellerRegistration",t),console.log("newTravellerRegistration on front")},async guidePackage(e,t){w["a"].emit("newGuideRegistration",t),console.log("newGuideRegistration on front")}}}),P=n("8c4f");const G=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/authorized",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"bd8c"))},{path:"/login",name:"login",beforeEnter(){location.href="http://localhost:5000/login"}},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var S=G;o["a"].use(P["a"]);var k=function(){const e=new P["a"]({scrollBehavior:()=>({x:0,y:0}),routes:S,mode:"hash",base:""});return e},O=async function(){const e="function"===typeof b?await b({Vue:o["a"]}):b,t="function"===typeof k?await k({Vue:o["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},T=n("9483");Object(T["a"])("service-worker.js",{registrationOptions:{scope:"./"},ready(){console.log("Service worker is active.")},registered(){console.log("Service worker has been registered in the file where it shouldnt.")},cached(){},updatefound(){},updated(){},offline(){},error(){}}),o["a"].prototype.$axios=m.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const j="";async function E(){const{app:e,store:t,router:n}=await O();let a=!1;const r=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0];for(let c=0;!1===a&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:r,urlPath:i,publicPath:j})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&new o["a"](e)}E()},"31cd":function(e,t,n){},"6c23":function(e,t,n){"use strict";var o=n("8e27"),a=n.n(o);const r=a()("http://localhost:5000",{transportOptions:{polling:{auth:123}}});r.on("connect",(()=>{console.log("connected now"),r.emit()})),r.on("disconnect",(()=>{console.log("disconnected now")})),r.on("changeView",(()=>{console.log("store access here"),(void 0).$store.state.currentView="HowTo"})),t["a"]=r}});