(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"00b9":function(e,t,a){},"0327":function(e,t,a){"use strict";a("7c23")},"0ed5":function(e,t,a){"use strict";a("42f5")},"255a":function(e,t,a){},"42f5":function(e,t,a){},"48ad":function(e,t,a){"use strict";a("d715")},"6f2d":function(e,t,a){"use strict";a("7a7e")},"75c5":function(e,t,a){},"75c7":function(e,t,a){},"7a7e":function(e,t,a){},"7c23":function(e,t,a){},"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},["Search"===this.$store.state.currentView?a("Search"):e._e(),"SearchResults"===this.$store.state.currentView?a("SearchResults"):e._e(),"Bookings"===this.$store.state.currentView?a("Bookings"):e._e(),"SelectedProfile"===this.$store.state.currentView?a("SelectedProfile"):e._e(),"MyProfile"===this.$store.state.currentView?a("MyProfile"):e._e(),"Chats"===this.$store.state.currentView?a("Chats"):e._e(),"Messages"===this.$store.state.currentView?a("Messages"):e._e(),"HowTo"===this.$store.state.currentView?a("HowTo"):e._e(),"AboutUs"===this.$store.state.currentView?a("AboutUs"):e._e(),"Login"===this.$store.state.currentView?a("Login"):e._e(),"Logout"===this.$store.state.currentView?a("Logout"):e._e(),"Registration"===this.$store.state.currentView?a("Registration"):e._e()],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md column",staticStyle:{width:"60vw"}},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select location"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"my_location",round:"",color:"primary"}})]},proxy:!0},{key:"append",fn:function(){return[""!==e.location?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.location=""}}}):e._e()]},proxy:!0}]),model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select language"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"language",round:"",color:"primary"}})]},proxy:!0},{key:"append",fn:function(){return[""!==e.language?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.language=""}}}):e._e()]},proxy:!0}]),model:{value:e.language,callback:function(t){e.language=t},expression:"language"}}),a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select date"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"today",round:"",color:"primary"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"},on:{"before-show":e.startDate}},[a("q-date",{attrs:{title:"Start Date",subtitle:"Select the first day"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[""!==e.startDate?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.startDate=""}}}):e._e()]},proxy:!0}]),model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}),a("q-input",{attrs:{disable:!0,filled:"","bottom-slots":"",label:"Select end date"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"event",round:"",color:"primary"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"},on:{"before-show":e.endDate}},[a("q-date",{attrs:{title:"End Date",subtitle:"Select the last day"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[""!==e.language?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.language=""}}}):e._e()]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}),a("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{size:"2vh",color:"primary",label:"Search Guides"},on:{click:e.search}})],1)])])},r=[],n={name:"Search",data:()=>({location:"",language:"",startDate:"",endDate:""}),methods:{search(){let e=this.startDate.split("/").join("");console.log(`New Date is: ${e}`),this.$store.dispatch("getFilteredGuides",{location:this.location.toLowerCase(),language:this.language.toLowerCase(),date:e,meme:"69420"}),this.$store.state.currentView="SearchResults"}}},l=n,c=a("2877"),d=a("27f9"),u=a("9c40"),m=a("0016"),h=a("7cbe"),p=a("52ee"),g=a("eebe"),f=a.n(g),v=Object(c["a"])(l,o,r,!1,null,"5a32c627",null),b=v.exports;f()(v,"components",{QInput:d["a"],QBtn:u["a"],QIcon:m["a"],QPopupProxy:h["a"],QDate:p["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search-results"}},[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100vw"}},[a("q-list",{attrs:{bordered:""}},e._l(this.$store.state.filteredGuides,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""},on:{click:function(a){return e.getSingleGuide(t._id)}}},[a("q-item-section",[e._v(e._s(t.name))]),a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.avatar}})])],1)],1)})),1)],1)])},y=[],$={name:"SearchResults",data:()=>({}),methods:{getSingleGuide(e){this.$store.dispatch("getSingleGuide",e)}}},q=$,w=a("1c1c"),k=a("66e5"),C=a("4074"),S=a("cb32"),x=a("714f"),T=Object(c["a"])(q,_,y,!1,null,"55c15894",null),Q=T.exports;f()(T,"components",{QList:w["a"],QItem:k["a"],QItemSection:C["a"],QAvatar:S["a"]}),f()(T,"directives",{Ripple:x["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"bookings"}},[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100vw"}},[a("q-list",{attrs:{bordered:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[a("q-item-section",[e._v("Confirmed bookings")])],1),e._l(this.$store.state.bookings,(function(t){return a("q-expansion-item",{key:t.id,attrs:{label:t.date}},[a("q-card",[a("q-card-section",[a("q-card-section",[e._v(e._s(t.date))]),a("q-card-section",[e._v(e._s(t.location))]),a("q-card-section",[e._v(e._s(t.meeting_location))]),a("q-card-section",[e._v(e._s(t.start_time))]),a("q-card-section",[e._v(e._s(t.end_time))]),a("q-card-section",[e._v(e._s(t.details))])],1)],1)],1)}))],2),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)])},I=[],E={name:"Bookings",methods:{},created(){this.$store.dispatch("getBookings")}},G=E,M=a("3b73"),P=a("f09f"),L=a("a370"),A=Object(c["a"])(G,D,I,!1,null,"3b396529",null),O=A.exports;f()(A,"components",{QList:w["a"],QItem:k["a"],QItemSection:C["a"],QExpansionItem:M["a"],QCard:P["a"],QCardSection:L["a"]}),f()(A,"directives",{Ripple:x["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:this.$store.state.somethingStupid,attrs:{id:"my-profile"}},[a("div",{attrs:{id:"top"}},[a("div",{staticClass:"absolute-top-left",attrs:{id:"guide-data"}},[a("p",[e._v("Name: "+e._s(this.$store.state.singleGuide.name))]),a("p",{staticClass:"pre-chip"},[e._v("I can guide you in:")]),e._l(this.$store.state.singleGuide.locations,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])})),a("p",{staticClass:"pre-chip"},[e._v("I can speak:")]),e._l(this.$store.state.singleGuide.languages,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])}))],2),a("div",{staticClass:"q-pa-md q-gutter-sm",attrs:{id:"avatar-container"}},[a("q-avatar",{staticClass:"absolute-top-right",attrs:{id:"avatar",rounded:"",size:"25vw"}},[a("img",{attrs:{src:this.$store.state.singleGuide.avatar}})]),a("q-btn",{staticClass:"absolute-top-right",attrs:{id:"chat-btn",color:"deep-orange",icon:"chat"},on:{click:function(t){return e.startChat(e.singleGuide.id)}}})],1)]),a("div",{attrs:{id:"mid"}},[a("div",{attrs:{id:"bio"}},[a("h9",[e._v("More about me:")]),a("p"),a("p",[e._v(e._s(this.$store.state.singleGuide.bio))]),a("h9",[e._v("I'm unavailable:")]),a("p"),a("p",[e._v(e._s(this.$store.state.singleGuide.unavailableDates))])],1)]),a("div",{attrs:{id:"bot"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md"},[a("q-date",{attrs:{options:e.optionsFn,minimal:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)])])])},R=[],U=a("bd4c"),H={name:"SelectedProfile",data:()=>({left:!0,date:""}),methods:{optionsFn(e){return e=e>=U["b"].formatDate(Date.now(),"YYYY/MM/DD"),console.log(e),e},startChat(e){this.$store.dispatch("getChatLogs",e)}}},N=H,j=(a("48ad"),a("b047")),B=Object(c["a"])(N,V,R,!1,null,"1d1530f0",null),Y=B.exports;f()(B,"components",{QChip:j["a"],QAvatar:S["a"],QBtn:u["a"],QDate:p["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:this.$store.state.somethingStupid,attrs:{id:"my-profile"}},[a("div",{attrs:{id:"top"}},[a("div",{staticClass:"absolute-top-left",attrs:{id:"guide-data"}},[a("p",[e._v("Name: "+e._s(this.$store.state.singleGuide.name))]),a("p",{staticClass:"pre-chip"},[e._v("I can guide you in:")]),e._l(this.$store.state.singleGuide.locations,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])})),a("p",{staticClass:"pre-chip"},[e._v("I can speak:")]),e._l(this.$store.state.singleGuide.languages,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])}))],2),a("div",{staticClass:"q-pa-md q-gutter-sm",attrs:{id:"avatar-container"}},[a("q-avatar",{staticClass:"absolute-top-right",attrs:{id:"avatar",rounded:"",size:"25vw"}},[a("img",{attrs:{src:this.$store.state.singleGuide.avatar}})]),a("q-btn",{staticClass:"absolute-top-right",attrs:{id:"chat-btn",color:"deep-orange",icon:"chat"},on:{click:e.startChat}})],1)]),a("div",{attrs:{id:"mid"}},[a("div",{attrs:{id:"bio"}},[a("p",[e._v("More about me:")]),a("p"),a("p",[e._v(e._s(this.$store.state.singleGuide.bio))]),a("p",[e._v("I'm unavailable:")]),a("p"),a("p",[e._v(e._s(this.$store.state.singleGuide.unavailableDates))])])]),a("div",{attrs:{id:"bot"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md"},[a("q-date",{attrs:{options:e.optionsFn,minimal:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)])])])},W=[],J={name:"SelectedProfile",data:()=>({left:!0,date:""}),methods:{optionsFn(e){return e=e>=U["b"].formatDate(Date.now(),"YYYY/MM/DD"),e},startChat(){this.$store.dispatch("someShit")}}},K=J,z=(a("e078"),Object(c["a"])(K,F,W,!1,null,"8f824fd6",null)),X=z.exports;f()(z,"components",{QChip:j["a"],QAvatar:S["a"],QBtn:u["a"],QDate:p["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{ref:"chatPage",staticClass:"flex full-width column"},[a("div",{staticClass:"q-pa-md column col justify-end"},[e._l(e.messageLog,(function(t){return a("q-chat-message",{key:t.text,attrs:{text:[t.text],sent:t.from==e.me,"bg-color":t.from==e.me?"green-5":"grey-4"}})})),e.theirTypingStatus?a("q-spinner-dots",{attrs:{size:"2rem"}}):e._e()],2),a("q-footer",{attrs:{elevated:""}},[a("q-toolbar",[a("q-form",{staticClass:"full-width"},[a("q-input",{attrs:{"bg-color":"white",outlined:"",rounded:"",label:"Message",dense:""},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{round:"",color:"white",dense:"",flat:"",icon:"send"},on:{click:e.sendMessage}})]},proxy:!0}]),model:{value:e.newMessage,callback:function(t){e.newMessage=t},expression:"newMessage"}})],1)],1)],1)],1)},ee=[],te=a("6c23"),ae={watch:{messageLog:function(e){return console.log(e),this.scrollToBottom(),console.log("WATCH MESSAGE LOG FIRED")},newMessage:function(){""!==this.newMessage?this.myTypingStatus=!0:this.myTypingStatus=!1,console.log("NS",this.myTypingStatus),console.log("SHOULD EMIT TS NOW"),te["a"].emit("typingStatus",{to:this.you,from:this.me,status:this.myTypingStatus})}},created(){te["a"].on("typingStatus",(e=>{console.log("TYPING STATUS ON LISTNER"),console.log("THISYOU",this.you),console.log("PAYTO",e),this.you===e.from&&(this.theirTypingStatus=e.status)})),te["a"].on("relayMessage",(e=>{console.log("CHECKING CURRENT CHAT"),this.you===e["from"]&&(console.log("CHECK OK. MESSAGE RECEIVED AND PUSHING"),this.messageLog.push(e))}))},name:"Messages",data(){return{messageLog:this.$store.state.currentChatLog,myTypingStatus:!1,theirTypingStatus:!1,me:this.$store.state.id,you:this.$store.state.sendTo,newMessage:""}},methods:{sendMessage(){let e=Date.now();console.log("PUSHING TO CHAT LOG"),this.messageLog.push({text:this.newMessage,from:this.$store.state.id,timestamp:e}),console.log("PRE CHAT EMIT"),te["a"].emit("chatMessage",{conversationId:this.$store.state.currentChat,text:this.newMessage,from:this.$store.state.id,to:this.$store.state.sendTo,timestamp:e}),this.newMessage=""},scrollToBottom(){let e=this.$refs.chatPage.$el;console.log("STB METHOD FIRED"),console.log("CHAT PAGE",e),console.log("CHAT PAGE HEIGHT",e.scrollHeight),setTimeout((()=>{window.scrollTo(0,e.scrollHeight)}),20)}}},se=ae,ie=(a("0ed5"),a("9989")),oe=a("8169"),re=a("8380"),ne=a("7ff0"),le=a("65c6"),ce=a("0378"),de=Object(c["a"])(se,Z,ee,!1,null,"d4db9914",null),ue=de.exports;f()(de,"components",{QPage:ie["a"],QChatMessage:oe["a"],QSpinnerDots:re["a"],QFooter:ne["a"],QToolbar:le["a"],QForm:ce["a"],QInput:d["a"],QBtn:u["a"]});var me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex full-width"},[a("q-list",{staticClass:"full-width",attrs:{bordered:""}},e._l(this.$store.state.chatList,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t._id,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(a){return e.openChat(t._id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n          "+e._s(t[e.userType].name.charAt(0))+"\n        ")])],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t[e.userType].name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(t[e.userType].name))])],1),a("q-item-section",{attrs:{side:""}},[a("q-badge",{attrs:{color:t.online?"blue":"grey-5"}},[e._v("\n          "+e._s(t.online?"online":"offline")+"\n        ")])],1)],1)})),1)],1)},he=[],pe={data(){return{userType:"traveller"===this.$store.state.userType?"guide":"traveller"}},methods:{openChat(e){this.$store.commit("setCurrentChat",e),this.$store.dispatch("getChatLog",e)}},created(){"traveller"===this.$store.state.userType?(console.log("created Fired for if Traveller: "),console.log("created state id is currently: ",this.$store.state.id),this.$store.dispatch("getTravellerChats",this.$store.state.id)):(console.log("else statement ran"),this.$store.dispatch("getGuideChats",this.$store.state.id))}},ge=pe,fe=(a("0327"),a("0170")),ve=a("58a81"),be=Object(c["a"])(ge,me,he,!1,null,"f75bd670",null),_e=be.exports;f()(be,"components",{QPage:ie["a"],QList:w["a"],QItem:k["a"],QItemSection:C["a"],QAvatar:S["a"],QItemLabel:fe["a"],QBadge:ve["a"]}),f()(be,"directives",{Ripple:x["a"]});var ye=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"how-to"}},[a("h5",[e._v("Just press the search button homie")])])}],qe={name:"My Profile",methods:{}},we=qe,ke=Object(c["a"])(we,ye,$e,!1,null,"a20e580a",null),Ce=ke.exports,Se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},xe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about-us"}},[a("h4",[e._v("Welcome to GetGuides!")]),a("span",[e._v("We are Team EnviroKraken, and we've been told to create an about us\n    page.")]),a("p",[e._v("Please subscribe to our patreon")])])}],Te={name:"AboutUs"},Qe=Te,De=(a("fde2"),Object(c["a"])(Qe,Se,xe,!1,null,"45842dc9",null)),Ie=De.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Login"}},[e.$q.platform.is.desktop?a("div",[e._v("\n    I'm only rendered on desktop!\n  ")]):e._e(),e.$q.platform.is.mobile?a("div",[a("h1",[e._v("Welcome to Get Guides!")]),a("span",[e._v("Please log in to continue.")]),a("br"),a("br"),a("button",{on:{click:e.loginAction}},[e._v("LOGIN")])]):e._e()])},Ge=[],Me=(a("5319"),a("bc3a")),Pe=a.n(Me),Le={name:"Login",methods:{loginAction(){window.location.replace(`${window.location.origin}/login`)}},async created(){const e=(await Pe.a.get(`${window.location.origin}/auth`)).data;"Search"===e.path?(this.$store.commit("setUserId",e.id),this.$store.commit("setUserType","traveller"),this.$store.commit("changeView",e.path),this.$store.commit("loggedIn",e.loggedIn)):"SelectedProfile"===e.path?(this.$store.commit("setUserId",e.id),this.$store.commit("setUserType","guide"),this.$store.commit("changeView",e.path),this.$store.commit("loggedIn",e.loggedIn)):"Registration"===e.path&&(this.$store.commit("setUserName",e.name),this.$store.commit("setUserEmail",e.email),this.$store.commit("setUsergid",e.gid),this.$store.commit("changeView",e.path))}},Ae=Le,Oe=(a("de6a"),Object(c["a"])(Ae,Ee,Ge,!1,null,"2ea514df",null)),Ve=Oe.exports,Re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Logout"}},[a("h1",[e._v("Logging out...")])])}],He={name:"Logout",created(){window.location.replace(`${window.location.origin}/logout`)}},Ne=He,je=(a("6f2d"),Object(c["a"])(Ne,Re,Ue,!1,null,"e0b614f8",null)),Be=je.exports,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"registragion"}},[a("h1",[e._v(" New user registration ")]),a("br"),a("span",[e._v("Please fill in the following fields to finish the registration process.")]),a("br"),a("q-select",{attrs:{disable:"",filled:"",username:e.username},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("q-select",{attrs:{disable:"",filled:"",emailaddress:e.emailaddress},model:{value:e.emailaddress,callback:function(t){e.emailaddress=t},expression:"emailaddress"}}),a("br"),a("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Alert")])]),a("q-card-section",{staticClass:"q-pt-none"},[e._v("\n                 Please fill in all necessary information.\n                ")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("span",[e._v("Please confirm the type of account you would like to create:")]),a("q-select",{attrs:{outlined:"",options:e.usertype,label:"Account Type",dense:e.dense},model:{value:e.usermodel,callback:function(t){e.usermodel=t},expression:"usermodel"}}),"Traveler"===e.usermodel?a("div",{attrs:{id:"travelreg"}},[a("br"),a("span",[e._v("You're all set! Please confirm to finish the registration.")]),a("br"),a("q-btn",{attrs:{id:"travelconfirm",color:"primary",label:"Finish"},on:{click:e.registerTraveler}})],1):e._e(),"Guide"===e.usermodel?a("div",{attrs:{id:"guidereg"}},[a("br"),a("q-input",{attrs:{filled:"",type:"string",maxlength:"160",placeholder:"Please write a short bio about yourself!",hint:"max 160 characters",dense:e.dense},model:{value:e.biomodel,callback:function(t){e.biomodel=t},expression:"biomodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.location,label:"Location",hint:"Multiple Options",dense:e.dense},model:{value:e.locationmodel,callback:function(t){e.locationmodel=t},expression:"locationmodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.languages,label:"Languages",hint:"Multiple Options",dense:e.dense},model:{value:e.languagemodel,callback:function(t){e.languagemodel=t},expression:"languagemodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.availabledays,label:"Available Days",hint:"Multiple Options"},model:{value:e.availabledaysmodel,callback:function(t){e.availabledaysmodel=t},expression:"availabledaysmodel"}}),a("br"),a("q-input",{attrs:{filled:"",type:"number",placeholder:"Approx. Rate",hint:"in JPY, per hour",dense:e.dense},model:{value:e.ratemodel,callback:function(t){e.ratemodel=t},expression:"ratemodel"}}),a("br"),a("span",[e._v("You're all set! Please confirm to finish the registration.")]),a("br"),a("q-btn",{attrs:{id:"guideconfirm",color:"primary",label:"Finish"},on:{click:e.registerGuide}})],1):e._e()],1)},Fe=[],We={name:"Registration",methods:{registerTraveler(){if(null!==this.usermodel&&""!==this.username&&""!==this.emailaddress&&""!==this.$store.state.gid){let e={};e["usertype"]=this.usermodel,e["username"]=this.username,e["email"]=this.emailaddress,e["gid"]=this.$store.state.gid,this.$store.commit("setTravellerPackage",e),this.$store.dispatch("travellerPackage",e),this.$store.commit("changeView","Search")}else this.alert=!0},registerGuide(){if(null!==this.usermodel&&""!==this.username&&""!==this.emailaddress&&null!==this.locationmodel&&null!==this.languagemodel&&null!==this.ratemodel&&null!==this.biomodel&&""!==this.$store.state.gid){let e={};e["usertype"]=this.usermodel,e["username"]=this.username,e["email"]=this.emailaddress,e["location"]=this.locationmodel,e["language"]=this.languagemodel,e["rate"]=this.ratemodel,e["bio"]=this.biomodel,e["gid"]=this.$store.state.gid,this.$store.commit("setGuidePackage",e),this.$store.dispatch("guidePackage",e),this.$store.commit("changeView","SelectedProfile")}else this.alert=!0}},mounted(){},data(){return{usermodel:null,locationmodel:null,languagemodel:null,availabledaysmodel:null,ratemodel:null,biomodel:null,usertype:["Traveler","Guide"],location:["Tokyo 23 wards","Extended Tokyo","Osaka"],languages:["English","Japanese","Italian"],availabledays:["mon","tue","wed","thu","fri","sat","sun"],username:this.$store.state.name,emailaddress:this.$store.state.email,dense:!0,alert:!1}}},Je=We,Ke=(a("febc"),a("ddd8")),ze=a("24e8"),Xe=a("4b7e"),Ze=a("7f67"),et=Object(c["a"])(Je,Ye,Fe,!1,null,"b45d63b4",null),tt=et.exports;f()(et,"components",{QSelect:Ke["a"],QDialog:ze["a"],QCard:P["a"],QCardSection:L["a"],QCardActions:Xe["a"],QBtn:u["a"],QInput:d["a"]}),f()(et,"directives",{ClosePopup:Ze["a"]});var at={name:"PageIndex",components:{Search:b,SearchResults:Q,Bookings:O,SelectedProfile:Y,MyProfile:X,Chats:_e,Messages:ue,HowTo:Ce,AboutUs:Ie,Login:Ve,Logout:Be,Registration:tt},methods:{whatever(){this.$store.commit("userView")},asyncWhatever(){this.$store.dispatch("asyncSomething")}}},st=at,it=Object(c["a"])(st,s,i,!1,null,null,null);t["default"]=it.exports;f()(it,"components",{QPage:ie["a"]})},d715:function(e,t,a){},de6a:function(e,t,a){"use strict";a("255a")},e078:function(e,t,a){"use strict";a("00b9")},fde2:function(e,t,a){"use strict";a("75c7")},febc:function(e,t,a){"use strict";a("75c5")}}]);