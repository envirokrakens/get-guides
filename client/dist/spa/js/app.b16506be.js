(function(e){function t(t){for(var s,o,r=t[0],c=t[1],l=t[2],u=0,g=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(g.length)g.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},o={1:0},n={1:0},i=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{2:"d4cca15d",3:"eb3faca7",4:"efd95bd9"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{2:"838ac334",3:"360c1b89",4:"31d6cfe0"}[e]+".css",n=c.p+s,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return t()}var g=document.getElementsByTagName("style");for(r=0;r<g.length;r++){l=g[r],u=l.getAttribute("data-href");if(u===s||u===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete o[e],d.parentNode.removeChild(d),a(i)},d.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var g=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",g.name="ChunkLoadError",g.type=s,g.request=o,a[1](g)}n[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var g=0;g<l.length;g++)t(l[g]);var d=u;i.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"2f39":function(e,t,a){"use strict";a.r(t);a("5319"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var s=a("2b0e"),o=a("1f91"),n=a("42d2"),i=a("b05d");s["a"].use(i["a"],{config:{},lang:o["a"],iconSet:n["a"]});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},c=[],l={name:"App",mounted(){}},u=l,g=a("2877"),d=Object(g["a"])(u,r,c,!1,null,null,null),h=d.exports,m=(a("ddb0"),a("2f62")),p=a("bc3a"),f=a.n(p),y=a("43ac"),v=a.n(y);function w(e){return t=>{t.$socket=e,e.on("authResult",(a=>{e.auth.token=a.id,t.commit("setUserId",a.id),"Search"===a.path?t.commit("setUserType","traveller"):"MyProfile"===a.path&&t.commit("setUserType","guide"),t.commit("changeView",a.path),t.commit("loggedIn",a.loggedIn),"Registration"===a.path&&(t.commit("setUserName",a.name),t.commit("setUserEmail",a.email),t.commit("setUsergid",a.gid))})),e.on("changeView",(()=>{console.log("store access here"),t.state.currentView="HowTo"})),e.on("chatUpdate",(e=>t.commit("chatUpdate",e)))}}var b=a("6c23");s["a"].use(m["a"]);const P=w(b["a"]);var S=new m["a"].Store({state:{currentView:"Login",userType:"",id:"",name:"",email:"",gid:"",sendTo:"",searchQuery:{location:"",language:"",date:""},travellerPackage:{},guidePackage:{},currentChat:"",currentChatLog:[],typingStatus:!1,chatList:[],singleGuide:{},guideSelf:{},bookings:[],filteredGuides:[],loggedIn:"false"},plugins:[P],mutations:{changeView(e,t){this.state.currentView=t},loggedIn(e,t){this.state.loggedIn=t},setUserType(e,t){console.log("setting user type to: ",t),this.state.userType=t},setUserId(e,t){console.log("setuserid function in store ",t),this.state.id=t,b["a"].emit("matchSocketWithMongoId",t)},setCurrentChat(e,t){this.state.currentChat=t,console.log(this.state.currentChat)},chatUpdate(e,t){for(message of t)this.state.currentChatLog.push(message)},setUserName(e,t){this.state.name=t},setUserEmail(e,t){this.state.email=t},setUsergid(e,t){this.state.gid=t},setSearchQuery(e,t){this.state.searchQuery=t,console.log("In store, setSearchQuery",t),console.log("maybe I did it right ",this.state.searchQuery.date,Date.now())},setTravellerPackage(e,t){this.state.travellerPackage=t},setGuidePackage(e,t){this.state.guidePackage=t},setFilteredGuides(e,t){this.state.filteredGuides=t,console.log(t)},setSingleGuide(e,t){this.state.singleGuide.id=t._id,this.state.singleGuide.name=t.name,this.state.singleGuide.avatar=t.avatar,this.state.singleGuide.languages=t.languages,this.state.singleGuide.locations=t.locations,this.state.singleGuide.weekdays=t.weekdays,this.state.singleGuide.bio=t.bio,this.state.singleGuide.gallery=t.gallery,this.state.singleGuide.rate=t.rate,console.log("before ",t.unavailable_dates);let a=t.unavailable_dates;a=a.map((function(e){return e.substring(0,4)+"/"+e.substring(4,6)+"/"+e.substring(6,8)})),this.state.singleGuide.unavailableDates=a},setUser(e,t){console.log(t),this.state.guideSelf.id=t._id,this.state.guideSelf.name=t.name,this.state.guideSelf.avatar=t.avatar,this.state.guideSelf.languages=t.languages,this.state.guideSelf.locations=t.locations,this.state.guideSelf.weekdays=t.weekdays,this.state.guideSelf.bio=t.bio,this.state.guideSelf.gallery=t.gallery,this.state.guideSelf.rate=t.rate,console.log("before ",t.unavailable_dates);let a=t.unavailable_dates;a=a.map((function(e){return e.substring(0,4)+"/"+e.substring(4,6)+"/"+e.substring(6,8)})),this.state.guideSelf.unavailableDates=a},setBookings(e,t){this.state.bookings=t},setChatList(e,t){this.state.chatList=t,console.log("State after setting: ",this.state.chatList)},appendMessage(e,t){this.state.currentChatLog.push(t)},setTypingStatus(e,t){this.state.typingStatus=t},setCheckoutSessionId(e,t){this.state.checkoutSessionId=t}},actions:{async receiveMessage(e,t){console.log("this was received:",t)},async search(e,t){e.commit("setFilteredGuides")},async getFilteredGuides(e,t){console.log("Payload is: ",t);const a=t.location,s=t.language,o=t.date,n=t.meme,i=(await f.a.get(`${v.a}/api/guides/search/${a}/${s}/${o}/${n}`)).data;e.commit("setFilteredGuides",i),e.commit("changeView",t.nextPage)},async getSingleGuide(e,t){console.log("getSingleGuide called",t);try{const a=(await f.a.get(`${v.a}/api/guides/${t.id}`)).data;e.commit("setSingleGuide",a),e.commit("changeView",t.nextPage)}catch(a){console.log(a)}},async getUser(e,t){try{const a=(await f.a.get(`${v.a}/api/guides/${t.id}`)).data;e.commit("setUser",a),e.commit("changeView",t.nextPage)}catch(a){console.log(a)}},async getChatLog(e,t){const a=(await f.a.get(`${v.a}/api/conversations/${t.id}/messages`)).data;console.log("data: ",a),console.log("messages: ",a.messages);let s="guide"===this.state.userType?"traveller":"guide";this.state.currentChatLog=a.messages,console.log(a[s]._id),this.state.sendTo=a[s]._id,console.log(this.state.sendTo),e.commit("changeView",t.nextPage)},async getTravellerChats(e,t){const a=(await f.a.get(`${v.a}/api/conversations/traveller/${t.id}`)).data;e.commit("setChatList",a),console.log("Data passed to setter: ",a),e.commit("changeView",t.nextPage)},async getGuideChats(e,t){const a=(await f.a.get(`${v.a}/api/conversations/guide/${t.id}`)).data;e.commit("setChatList",a),console.log("Data passed to setter: ",a),e.commit("changeView",t.nextPage)},async getBookings(e,t){const a=(await f.a.get(`${v.a}/api/bookings/${this.state.userType}/${this.state.id}`)).data;e.commit("setBookings",a),e.commit("changeView","Bookings")},async travellerPackage(e,t){f.a.post(`${v.a}/api/travellers/newtravellerregistration`,t).then((t=>e.commit("setUserId",t["data"]))).then(e.commit("setUserType","traveller")).then(e.commit("loggedIn",!0)).then(e.commit("changeView","Search"))},async guidePackage(e,t){const a=(await f.a.post(`${v.a}/api/guides/newguideregistration`,t)).data;console.log("This is the newGuideId",a),e.commit("setUserId",a),e.commit("setUserType","guide"),e.commit("loggedIn",!0),e.dispatch("getUser",{id:a,nextPage:"MyProfile"}),e.commit("changeView","MyProfile")},async guidePackageUpdate(e,t){f.a.post(`${v.a}/api/guides/update`,t),e.commit("changeView","MyProfile")}},getters:{chatChecker(e){return console.log("GETTTTTAAAAAAAAAZZZZ"),Object.keys(e.currentChatLog).length}}}),k=a("8c4f");const T=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var C=T;s["a"].use(k["a"]);var G=function(){const e=new k["a"]({scrollBehavior:()=>({x:0,y:0}),routes:C,mode:"hash",base:""});return e},$=async function(){const e="function"===typeof S?await S({Vue:s["a"]}):S,t="function"===typeof G?await G({Vue:s["a"],store:e}):G;e.$router=t;const a={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:a,store:e,router:t}};s["a"].prototype.$axios=f.a;const U="";async function x(){const{app:e,store:t,router:a}=await $();let o=!1;const n=e=>{o=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),r=[void 0];for(let l=0;!1===o&&l<r.length;l++)if("function"===typeof r[l])try{await r[l]({app:e,router:a,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:i,publicPath:U})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new s["a"](e)}x()},"31cd":function(e,t,a){},"43ac":function(e,t){e.exports=server=(()=>"http://localhost:8080"===window.location.origin||"http://localhost:5000"===window.location.origin?"http://localhost:5000":"https://getguides.herokuapp.com")()},"6c23":function(e,t,a){"use strict";var s=a("8e27"),o=a.n(s);const n=o()("wss://getguides.herokuapp.com");n.on("connect",(()=>{console.log("connected now")})),n.on("disconnect",(()=>{console.log("disconnected now")})),t["a"]=n}});