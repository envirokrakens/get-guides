(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"069d":function(e,t,a){"use strict";a("7af2")},"10c1":function(e,t,a){},"1d1b":function(e,t,a){},"4e3e":function(e,t,a){"use strict";a("1d1b")},5398:function(e,t,a){"use strict";a("10c1")},"75c7":function(e,t,a){},"7af2":function(e,t,a){},"7e5f":function(e,t,a){},"82a1":function(e,t,a){"use strict";a("efd8")},"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},["Search"===this.$store.state.currentView?a("Search"):e._e(),"SearchResults"===this.$store.state.currentView?a("SearchResults"):e._e(),"Bookings"===this.$store.state.currentView?a("Bookings"):e._e(),"SelectedProfile"===this.$store.state.currentView?a("SelectedProfile"):e._e(),"MyProfile"===this.$store.state.currentView?a("MyProfile"):e._e(),"EditProfile"===this.$store.state.currentView?a("EditProfile"):e._e(),"Chats"===this.$store.state.currentView?a("Chats"):e._e(),"Messages"===this.$store.state.currentView?a("Messages"):e._e(),"HowTo"===this.$store.state.currentView?a("HowTo"):e._e(),"AboutUs"===this.$store.state.currentView?a("AboutUs"):e._e(),"Login"===this.$store.state.currentView?a("Login"):e._e(),"Logout"===this.$store.state.currentView?a("Logout"):e._e(),"Registration"===this.$store.state.currentView?a("Registration"):e._e()],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md column",staticStyle:{width:"60vw"}},[a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select location"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"my_location",round:"",color:"primary"}})]},proxy:!0},{key:"append",fn:function(){return[""!==e.location?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.location=""}}}):e._e()]},proxy:!0}]),model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select language"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"language",round:"",color:"primary"}})]},proxy:!0},{key:"append",fn:function(){return[""!==e.language?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.language=""}}}):e._e()]},proxy:!0}]),model:{value:e.language,callback:function(t){e.language=t},expression:"language"}}),a("q-input",{attrs:{filled:"","bottom-slots":"",label:"Select date"},scopedSlots:e._u([{key:"before",fn:function(){return[a("q-btn",{attrs:{icon:"today",round:"",color:"primary"}},[a("q-popup-proxy",{ref:"datePicker",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{title:"Start Date",subtitle:"Select the first day"},on:{input:function(){return e.$refs.datePicker.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[""!==e.date?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.date=""}}}):e._e()]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{size:"2vh",color:"primary",label:"Search Guides"},on:{click:e.search}})],1)])])},l=[],n={name:"Search",data:()=>({location:"",language:"",date:""}),methods:{search(){let e=this.date.split("/").join("");console.log(`New Date is: ${e}`),this.$store.dispatch("getFilteredGuides",{location:this.location.toLowerCase(),language:this.language.toLowerCase(),date:e,meme:"69420",nextPage:"SearchResults"})}}},r=n,c=a("2877"),d=a("27f9"),u=a("9c40"),m=a("0016"),h=a("7cbe"),p=a("52ee"),g=a("eebe"),f=a.n(g),b=Object(c["a"])(r,o,l,!1,null,null,null),v=b.exports;f()(b,"components",{QInput:d["a"],QBtn:u["a"],QIcon:m["a"],QPopupProxy:h["a"],QDate:p["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"search-results"}},[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100vw"}},[a("q-list",{attrs:{bordered:""}},e._l(this.$store.state.filteredGuides,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""},on:{click:function(a){return e.getSingleGuide(t._id)}}},[a("q-item-section",[e._v(e._s(t.name))]),a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.avatar}})])],1)],1)})),1)],1)])},y=[],q={name:"SearchResults",data:()=>({}),methods:{getSingleGuide(e){const t={id:e,nextPage:"SelectedProfile"};this.$store.dispatch("getSingleGuide",t)}}},$=q,k=a("1c1c"),w=a("66e5"),x=a("4074"),C=a("cb32"),S=a("714f"),P=Object(c["a"])($,_,y,!1,null,"f925e30e",null),T=P.exports;f()(P,"components",{QList:k["a"],QItem:w["a"],QItemSection:x["a"],QAvatar:C["a"]}),f()(P,"directives",{Ripple:S["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"bookings"}},[a("div",{staticClass:"q-pa-md",staticStyle:{width:"100vw"}},[a("q-list",{attrs:{bordered:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[a("q-item-section",[e._v("Confirmed bookings")])],1),e._l(this.$store.state.bookings,(function(t){return a("q-expansion-item",{key:t._id,attrs:{label:t.date}},[a("q-card",[a("q-card-section",[a("q-card-section",[e._v(e._s(t.date))]),a("q-card-section",[e._v(e._s(t.location))]),a("q-card-section",[e._v(e._s(t.meeting_location))]),a("q-card-section",[e._v(e._s(t.start_time))]),a("q-card-section",[e._v(e._s(t.end_time))]),a("q-card-section",[e._v(e._s(t.details))]),a("q-card-section",[e._v(e._s(t.price))]),a("q-card-section",[e._v(e._s(t.currency))]),"paid"===t.type?a("q-btn",{attrs:{id:"pay",color:"deep-orange",icon:"credit_card"},on:{click:function(a){return e.checkout(t.price,t.currency)}}}):e._e()],1)],1)],1)}))],2),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)])},M=[],I=a("bc3a"),E=a.n(I),G=a("43ac"),L=a.n(G),O=a("bf8a");const A=Object(O["a"])("pk_test_51IyBaBBjEZPN4gtmG1jLAzZM4yRbvITQHdOApeVCIPXTMianEW5DbRWKMcVPbCxbujQgKIeW0IUytxeUfGlWlRKM00kAUTP5sO");var D={name:"Bookings",methods:{async checkout(e,t){let a={amount:e,currency:t};console.log("payload @ component: ",a);const s=(await E.a.post(`${L.a}/api/checkout-session`,a)).data;console.log(s),A.then((e=>{e.redirectToCheckout({sessionId:s})}))}}},U=D,R=a("3b73"),V=a("f09f"),N=a("a370"),j=Object(c["a"])(U,Q,M,!1,null,"069a1ee0",null),H=j.exports;f()(j,"components",{QList:k["a"],QItem:w["a"],QItemSection:x["a"],QExpansionItem:R["a"],QCard:V["a"],QCardSection:N["a"],QBtn:u["a"]}),f()(j,"directives",{Ripple:S["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"SelectedProfile"}},[a("div",{attrs:{id:"top"}},[a("div",{staticClass:"absolute-top-left",attrs:{id:"guide-data"}},[a("p",[e._v("Name: "+e._s(this.$store.state.singleGuide.name))]),a("p",{staticClass:"pre-chip"},[e._v("I can guide you in:")]),e._l(this.$store.state.singleGuide.locations,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])})),a("p",{staticClass:"pre-chip"},[e._v("I can speak:")]),e._l(this.$store.state.singleGuide.languages,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])}))],2),a("div",{staticClass:"q-pa-md q-gutter-sm",attrs:{id:"avatar-container"}},[a("q-avatar",{staticClass:"absolute-top-right",attrs:{id:"avatar",rounded:"",size:"25vw"}},[a("img",{attrs:{src:this.$store.state.singleGuide.avatar}})])],1)]),a("div",{attrs:{id:"mid"}},[a("div",{attrs:{id:"bio"}},[a("p",[e._v("More about me:")]),a("p"),a("p",[e._v(e._s(this.$store.state.singleGuide.bio))])])]),a("div",{attrs:{id:"bot"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md"},[a("q-date",{attrs:{options:e.optionsFn,minimal:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("q-btn",{attrs:{id:"chat-btn",color:"red",icon:"chat",label:"Request a booking"},on:{click:function(t){return e.startChat()}}})],1)])])])},Y=[],F=a("bd4c"),W={name:"SelectedProfile",data:()=>({left:!0,date:""}),methods:{optionsFn(e){return!this.$store.state.singleGuide.unavailableDates.includes(e)&&e>=F["b"].formatDate(Date.now(),"YYYY/MM/DD")},async startChat(){let e={traveller:this.$store.state.id,guide:this.$store.state.singleGuide.id,location:this.$store.state.searchQuery.location,date:this.date,start_time:"",end_time:"",meeting_location:"",details:"",status:"pending",conversation:"",price:"",currency:"",type:"free"};const t=(await E.a.post(`${L.a}/api/bookings`,e)).data;this.$store.commit("setCurrentChat",t);const a={id:t,nextPage:"Messages"};this.$store.dispatch("getChatLog",a),console.log(newConvo)}},mounted(){this.date=this.$store.state.searchQuery.date}},K=W,z=(a("5398"),a("b047")),J=Object(c["a"])(K,B,Y,!1,null,"17d79a2a",null),Z=J.exports;f()(J,"components",{QChip:z["a"],QAvatar:C["a"],QDate:p["a"],QBtn:u["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"my-profile"}},[a("div",{attrs:{id:"top"}},[a("div",{staticClass:"absolute-top-left",attrs:{id:"guide-data"}},[a("p",[e._v("Name: "+e._s(this.$store.state.guideSelf.name))]),a("p",{staticClass:"pre-chip"},[e._v("I can guide you in:")]),e._l(this.$store.state.guideSelf.locations,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])})),a("p",{staticClass:"pre-chip"},[e._v("I can speak:")]),e._l(this.$store.state.guideSelf.languages,(function(t){return a("q-chip",{key:t.fakeValueThatIMadeUp,attrs:{clickable:"",color:"primary","text-color":"white"}},[e._v("\n        "+e._s(t)+"\n      ")])}))],2),a("div",{staticClass:"q-pa-md q-gutter-sm",attrs:{id:"avatar-container"}},[a("q-avatar",{staticClass:"absolute-top-right",attrs:{id:"avatar",rounded:"",size:"25vw"}},[a("img",{attrs:{src:this.$store.state.guideSelf.avatar}})]),a("q-btn",{staticClass:"absolute-top-right",attrs:{id:"edit-btn",color:"deep-orange",icon:"edit"},on:{click:e.editProfile}})],1)]),a("div",{attrs:{id:"mid"}},[a("div",{attrs:{id:"bio"}},[a("p",[e._v("More about me:")]),a("p"),a("p",[e._v(e._s(this.$store.state.guideSelf.bio))])])]),a("div",{attrs:{id:"bot"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md"},[a("q-date",{attrs:{options:e.optionsFn,minimal:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)])])])},ee=[],te={name:"MyProfile",data:()=>({left:!0,date:""}),methods:{optionsFn(e){return!this.$store.state.guideSelf.unavailableDates.includes(e)&&e>=F["b"].formatDate(Date.now(),"YYYY/MM/DD")},editProfile(){this.$store.state.currentView="EditProfile"}}},ae=te,se=(a("a27e"),Object(c["a"])(ae,X,ee,!1,null,"158a5a33",null)),ie=se.exports;f()(se,"components",{QChip:z["a"],QAvatar:C["a"],QBtn:u["a"],QDate:p["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"editprofile"}},[a("h1",[e._v(" Edit own profile ")]),a("br"),a("span",[e._v("Please update the necessary fields to finish the editing process.")]),a("br"),a("q-select",{attrs:{disable:"",filled:"",username:e.username},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("br"),a("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Alert")])]),a("q-card-section",{staticClass:"q-pt-none"},[e._v("\n                 Please edit all necessary information.\n                ")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("div",{attrs:{id:"guidereg"}},[a("br"),a("q-input",{attrs:{filled:"",type:"string",maxlength:"160",placeholder:"Please write a short bio about yourself!",hint:"max 160 characters",dense:e.dense},model:{value:e.biomodel,callback:function(t){e.biomodel=t},expression:"biomodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.location,label:"Location",hint:"Multiple Options",dense:e.dense},model:{value:e.locationmodel,callback:function(t){e.locationmodel=t},expression:"locationmodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.languages,label:"Languages",hint:"Multiple Options",dense:e.dense},model:{value:e.languagemodel,callback:function(t){e.languagemodel=t},expression:"languagemodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.availabledays,label:"Available Days",hint:"Multiple Options"},model:{value:e.availabledaysmodel,callback:function(t){e.availabledaysmodel=t},expression:"availabledaysmodel"}}),a("br"),a("q-input",{attrs:{filled:"",type:"number",placeholder:"Approx. Rate",hint:"in JPY, per hour",dense:e.dense},model:{value:e.ratemodel,callback:function(t){e.ratemodel=t},expression:"ratemodel"}}),a("br"),a("span",[e._v("Please confirm to finish the editing process.")]),a("br"),a("q-btn",{attrs:{id:"guideconfirm",color:"primary",label:"Finish"},on:{click:e.editGuide}})],1)],1)},le=[],ne={name:"EditProfile",methods:{editGuide(){if(console.log(this.usermodel,this.username,this.locationmodel,this.languagemodel,this.availabledaysmodel,this.ratemodel,this.biomodel),null!==this.usermodel&&""!==this.username&&null!==this.locationmodel&&null!==this.languagemodel&&null!==this.availabledaysmodel&&null!==this.ratemodel&&null!==this.biomodel){let e={};e["usertype"]=this.usermodel,e["username"]=this.username,e["location"]=this.locationmodel,e["language"]=this.languagemodel,e["availabledays"]=this.availabledaysmodel,e["rate"]=this.ratemodel,e["bio"]=this.biomodel,e["id"]=this.$store.state.id,this.$store.commit("setUser",e),this.$store.commit("setGuidePackageUpdate",e),this.$store.dispatch("guidePackageUpdate",e)}else this.alert=!0}},data(){return{usermodel:"guide",locationmodel:this.$store.state.guideSelf.locations,languagemodel:this.$store.state.guideSelf.languages,availabledaysmodel:this.$store.state.guideSelf.weekdays,ratemodel:this.$store.state.guideSelf.rate,biomodel:this.$store.state.guideSelf.bio,usertype:["traveller","guide"],location:["nikko","tokyo","osaka"],languages:["english","japanese","italian"],availabledays:["mon","tue","wed","thu","fri","sat","sun"],username:this.$store.state.guideSelf.name,dense:!0,alert:!1}}},re=ne,ce=(a("069d"),a("ddd8")),de=a("24e8"),ue=a("4b7e"),me=a("7f67"),he=Object(c["a"])(re,oe,le,!1,null,"50dd84f4",null),pe=he.exports;f()(he,"components",{QSelect:ce["a"],QDialog:de["a"],QCard:V["a"],QCardSection:N["a"],QCardActions:ue["a"],QBtn:u["a"],QInput:d["a"]}),f()(he,"directives",{ClosePopup:me["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{ref:"chatPage",staticClass:"flex full-width column"},[a("div",{staticClass:"q-pa-md column col justify-end"},[e._l(e.messageLog,(function(t){return a("q-chat-message",{key:t.text,attrs:{text:[t.text],sent:t.from==e.me,"bg-color":t.from==e.me?"green-5":"grey-4"}})})),e.theirTypingStatus?a("q-spinner-dots",{attrs:{size:"2rem"}}):e._e()],2),a("q-footer",{attrs:{elevated:""}},[a("q-toolbar",[a("q-form",{staticClass:"full-width"},[a("q-input",{attrs:{"bg-color":"white",outlined:"",rounded:"",label:"Message",dense:""},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{round:"",color:"white",dense:"",flat:"",icon:"send"},on:{click:e.sendMessage}})]},proxy:!0}]),model:{value:e.newMessage,callback:function(t){e.newMessage=t},expression:"newMessage"}})],1)],1)],1)],1)},fe=[],be=a("6c23"),ve={watch:{messageLog:function(e){return console.log(e),this.scrollToBottom(),console.log("WATCH MESSAGE LOG FIRED")},newMessage:function(){""!==this.newMessage?this.myTypingStatus=!0:this.myTypingStatus=!1,console.log("NS",this.myTypingStatus),console.log("SHOULD EMIT TS NOW"),be["a"].emit("typingStatus",{to:this.you,from:this.me,status:this.myTypingStatus})}},created(){be["a"].on("typingStatus",(e=>{console.log("TYPING STATUS ON LISTNER"),console.log("THISYOU",this.you),console.log("PAYTO",e),this.you===e.from&&(this.theirTypingStatus=e.status)})),be["a"].on("relayMessage",(e=>{console.log("CHECKING CURRENT CHAT"),this.you===e["from"]&&(console.log("CHECK OK. MESSAGE RECEIVED AND PUSHING"),this.messageLog.push(e))}))},name:"Messages",data(){return{messageLog:this.$store.state.currentChatLog,myTypingStatus:!1,theirTypingStatus:!1,me:this.$store.state.id,you:this.$store.state.sendTo,newMessage:""}},methods:{sendMessage(){let e=Date.now();console.log("PUSHING TO CHAT LOG"),this.messageLog.push({text:this.newMessage,from:this.$store.state.id,timestamp:e}),console.log("PRE CHAT EMIT"),be["a"].emit("chatMessage",{conversationId:this.$store.state.currentChat,text:this.newMessage,from:this.$store.state.id,to:this.$store.state.sendTo,timestamp:e}),this.newMessage=""},scrollToBottom(){let e=this.$refs.chatPage.$el;console.log("STB METHOD FIRED"),console.log("CHAT PAGE",e),console.log("CHAT PAGE HEIGHT",e.scrollHeight),setTimeout((()=>{window.scrollTo(0,e.scrollHeight)}),20)}}},_e=ve,ye=(a("cf89"),a("9989")),qe=a("8169"),$e=a("8380"),ke=a("7ff0"),we=a("65c6"),xe=a("0378"),Ce=Object(c["a"])(_e,ge,fe,!1,null,"574d995e",null),Se=Ce.exports;f()(Ce,"components",{QPage:ye["a"],QChatMessage:qe["a"],QSpinnerDots:$e["a"],QFooter:ke["a"],QToolbar:we["a"],QForm:xe["a"],QInput:d["a"],QBtn:u["a"]});var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex full-width"},[a("q-list",{staticClass:"full-width",attrs:{bordered:""}},e._l(this.$store.state.chatList,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t._id,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(a){return e.openChat(t._id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n          "+e._s(t[e.chatPartner].name.charAt(0))+"\n        ")])],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t[e.chatPartner].name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(t[e.chatPartner].name))])],1),a("q-item-section",{attrs:{side:""}},[a("q-badge",{attrs:{color:t.online?"blue":"grey-5"}},[e._v("\n          "+e._s(t.online?"online":"offline")+"\n        ")])],1)],1)})),1)],1)},Te=[],Qe={data(){return{chatPartner:"traveller"===this.$store.state.userType?"guide":"traveller"}},methods:{openChat(e){this.$store.commit("setCurrentChat",e);const t={id:e,nextPage:"Messages"};this.$store.dispatch("getChatLog",t)}}},Me=Qe,Ie=a("0170"),Ee=a("58a81"),Ge=Object(c["a"])(Me,Pe,Te,!1,null,"747d6495",null),Le=Ge.exports;f()(Ge,"components",{QPage:ye["a"],QList:k["a"],QItem:w["a"],QItemSection:x["a"],QAvatar:C["a"],QItemLabel:Ie["a"],QBadge:Ee["a"]}),f()(Ge,"directives",{Ripple:S["a"]});var Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"how-to"}},[a("h5",[e._v("Thank you for creating an account with us!")]),a("span",[e._v("Please use the menu to the left to navigate to where you want to go.")])])}],De={name:"HowTo",methods:{}},Ue=De,Re=Object(c["a"])(Ue,Oe,Ae,!1,null,"a64e55a0",null),Ve=Re.exports,Ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about-us"}},[a("h4",[e._v("Welcome to GetGuides!")]),a("span",[e._v("We are Team EnviroKraken, and we've been told to create an about us\n    page.")]),a("p",[e._v("Please subscribe to our patreon")])])}],He={name:"AboutUs"},Be=He,Ye=(a("fde2"),Object(c["a"])(Be,Ne,je,!1,null,"45842dc9",null)),Fe=Ye.exports,We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Login"}},[e.$q.platform.is.desktop?a("div",[e._v("\n    I'm only rendered on desktop!\n  ")]):e._e(),e.$q.platform.is.mobile?a("div",[a("h1",[e._v("Welcome to Get Guides!")]),a("span",[e._v("Please log in to continue.")]),a("br"),a("br"),a("button",{on:{click:e.loginAction}},[e._v("LOGIN")]),a("button",{on:{click:e.loginFront}},[e._v("LOGIN:8080")])]):e._e()])},Ke=[],ze=(a("5319"),{name:"Login",methods:{loginAction(){window.location.replace(`${L.a}/login`)},loginFront(){this.$store.commit("setUserId","60b98f9d1b2a8142eec9753e"),this.$store.commit("setUserType","traveller"),this.$store.commit("changeView","Search"),this.$store.commit("loggedIn",!0)}},async created(){const e=(await E.a.get(`${L.a}/auth`)).data;if(e)if("Registration"===e.path)this.$store.commit("setUserName",e.name),this.$store.commit("setUserEmail",e.email),this.$store.commit("setUsergid",e.gid),this.$store.commit("changeView",e.path);else{if(this.$store.commit("setUserId",e.id),this.$store.commit("setUserType",e.userType),"traveller"===e.userType)this.$store.commit("changeView",e.path);else if("guide"===e.userType){const t={id:e.id,nextPage:"MyProfile"};this.$store.dispatch("getUser",t)}this.$store.commit("loggedIn",e.loggedIn)}}}),Je=ze,Ze=(a("82a1"),Object(c["a"])(Je,We,Ke,!1,null,"3663091f",null)),Xe=Ze.exports,et=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},tt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Logout"}},[a("h1",[e._v("Logging out...")])])}],at={name:"Logout",created(){window.location.replace(`${L.a}/logout`)}},st=at,it=Object(c["a"])(st,et,tt,!1,null,"8827f820",null),ot=it.exports,lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"registragion"}},[a("h1",[e._v(" New user registration ")]),a("br"),a("span",[e._v("Please fill in the following fields to finish the registration process.")]),a("br"),a("q-select",{attrs:{disable:"",filled:"",username:e.username},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("q-select",{attrs:{disable:"",filled:"",emailaddress:e.emailaddress},model:{value:e.emailaddress,callback:function(t){e.emailaddress=t},expression:"emailaddress"}}),a("br"),a("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Alert")])]),a("q-card-section",{staticClass:"q-pt-none"},[e._v("\n                 Please fill in all necessary information.\n                ")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("span",[e._v("Please confirm the type of account you would like to create:")]),a("q-select",{attrs:{outlined:"",options:e.usertype,label:"Account Type",dense:e.dense},model:{value:e.usermodel,callback:function(t){e.usermodel=t},expression:"usermodel"}}),"traveller"===e.usermodel?a("div",{attrs:{id:"travelreg"}},[a("br"),a("span",[e._v("You're all set! Please confirm to finish the registration.")]),a("br"),a("q-btn",{attrs:{id:"travelconfirm",color:"primary",label:"Finish"},on:{click:e.registerTraveller}})],1):e._e(),"guide"===e.usermodel?a("div",{attrs:{id:"guidereg"}},[a("br"),a("q-input",{attrs:{filled:"",type:"string",maxlength:"160",placeholder:"Please write a short bio about yourself!",hint:"max 160 characters",dense:e.dense},model:{value:e.biomodel,callback:function(t){e.biomodel=t},expression:"biomodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.location,label:"Location",hint:"Multiple Options",dense:e.dense},model:{value:e.locationmodel,callback:function(t){e.locationmodel=t},expression:"locationmodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.languages,label:"Languages",hint:"Multiple Options",dense:e.dense},model:{value:e.languagemodel,callback:function(t){e.languagemodel=t},expression:"languagemodel"}}),a("br"),a("q-select",{attrs:{filled:"",multiple:"",options:e.availabledays,label:"Available Days",hint:"Multiple Options"},model:{value:e.availabledaysmodel,callback:function(t){e.availabledaysmodel=t},expression:"availabledaysmodel"}}),a("br"),a("q-input",{attrs:{filled:"",type:"number",placeholder:"Approx. Rate",hint:"in JPY, per hour",dense:e.dense},model:{value:e.ratemodel,callback:function(t){e.ratemodel=t},expression:"ratemodel"}}),a("br"),a("span",[e._v("You're all set! Please confirm to finish the registration.")]),a("br"),a("q-btn",{attrs:{id:"guideconfirm",color:"primary",label:"Finish"},on:{click:e.registerGuide}})],1):e._e()],1)},nt=[],rt={name:"Registration",methods:{registerTraveller(){if(null!==this.usermodel&&""!==this.username&&""!==this.emailaddress&&""!==this.$store.state.gid){let e={};e["usertype"]=this.usermodel,e["username"]=this.username,e["email"]=this.emailaddress,e["gid"]=this.$store.state.gid,this.$store.commit("setTravellerPackage",e),this.$store.dispatch("travellerPackage",e)}else this.alert=!0},registerGuide(){if(null!==this.usermodel&&""!==this.username&&""!==this.emailaddress&&null!==this.locationmodel&&null!==this.languagemodel&&null!==this.availabledaysmodel&&null!==this.ratemodel&&null!==this.biomodel&&""!==this.$store.state.gid){let e={};e["usertype"]=this.usermodel,e["username"]=this.username,e["email"]=this.emailaddress,e["location"]=this.locationmodel,e["language"]=this.languagemodel,e["availabledays"]=this.availabledaysmodel,e["rate"]=this.ratemodel,e["bio"]=this.biomodel,e["gid"]=this.$store.state.gid,e["unavailable_dates"]=[],this.$store.commit("setGuidePackage",e),this.$store.dispatch("guidePackage",e)}else this.alert=!0}},mounted(){},data(){return{usermodel:null,locationmodel:null,languagemodel:null,availabledaysmodel:null,ratemodel:null,biomodel:null,usertype:["traveller","guide"],location:["nikko","tokyo","osaka"],languages:["english","japanese","italian"],availabledays:["mon","tue","wed","thu","fri","sat","sun"],username:this.$store.state.name,emailaddress:this.$store.state.email,dense:!0,alert:!1}}},ct=rt,dt=(a("4e3e"),Object(c["a"])(ct,lt,nt,!1,null,"41f58f6e",null)),ut=dt.exports;f()(dt,"components",{QSelect:ce["a"],QDialog:de["a"],QCard:V["a"],QCardSection:N["a"],QCardActions:ue["a"],QBtn:u["a"],QInput:d["a"]}),f()(dt,"directives",{ClosePopup:me["a"]});var mt={name:"PageIndex",components:{Search:v,SearchResults:T,Bookings:H,SelectedProfile:Z,MyProfile:ie,EditProfile:pe,Chats:Le,Messages:Se,HowTo:Ve,AboutUs:Fe,Login:Xe,Logout:ot,Registration:ut},methods:{whatever(){this.$store.commit("userView")},asyncWhatever(){this.$store.dispatch("asyncSomething")}}},ht=mt,pt=Object(c["a"])(ht,s,i,!1,null,null,null);t["default"]=pt.exports;f()(pt,"components",{QPage:ye["a"]})},a27e:function(e,t,a){"use strict";a("7e5f")},a2b0:function(e,t,a){},cf89:function(e,t,a){"use strict";a("a2b0")},efd8:function(e,t,a){},fde2:function(e,t,a){"use strict";a("75c7")}}]);