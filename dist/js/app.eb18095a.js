(function(){"use strict";var t={1455:function(t,e,a){var n=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sticky-top custom-nav",attrs:{id:"navbar"}},[e("b-container",{attrs:{fluid:""}},[e("b-navbar",{staticClass:"p-4 px-5 navbar-brand-center",attrs:{toggleable:"md"}},[e("b-navbar-brand",{staticClass:"text-bebas-neue text-xl d-md-none d-lg-inline-block d-lg-block d-sm-block"},[e("span",{staticClass:"navbar-logo"},[t._v("Andrew Crossan Sites")])]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"mx-auto"},[e("b-nav-item",[e("b-link",{staticClass:"nav-link",attrs:{to:{name:"home"},active:"home"===t.$route.name,tag:"a"}},[e("b-icon",{attrs:{icon:"house-door-fill"}}),t._v(" Home ")],1)],1)],1),e("b-form",{staticClass:"ml-auto",attrs:{inline:""}},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchData,expression:"searchData"}],staticClass:"form-control search-form",attrs:{type:"text",id:"example-search-input",placeholder:"Search the site"},domProps:{value:t.searchData},on:{input:function(e){e.target.composing||(t.searchData=e.target.value)}}}),e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-graphite-gray rounded-0 ms-n3 search",attrs:{type:"button"},on:{click:function(e){return t.search()}}},[e("b-icon",{attrs:{icon:"search"}})],1)])])])],1)],1)],1)],1)},l=[],r={name:"NavBar",data(){return{searchData:""}},methods:{search(){console.log(this.searchData)}}},c=r,d=a(1001),m=(0,d.Z)(c,i,l,!1,null,null,null),u=m.exports,p={name:"HomeView",components:{NavBar:u},data(){return{search:""}}},f=p,g=(0,d.Z)(f,s,o,!1,null,null,null),b=g.exports,v=a(2631),_=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("div",{attrs:{id:"section-1"}},[e("b-container",{attrs:{size:"md"}},[e("b-row",[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xl-8 pt-5 text-align"},[e("p",{staticClass:"display-1 text-bebas-neue animate-1 animate__animated animate__fadeInLeft"},[t._v(" Hi, I'm "),e("span",{staticClass:"text-cornflower-blue"},[t._v("Andrew")]),e("br")]),e("p",{staticClass:"display-1 text-bebas-neue animate-2 animate__animated animate__fadeInLeft"},[t._v(" A "),e("span",{staticClass:"text-cornflower-blue"},[t._v("Software Engineering")]),t._v(" Student "),e("br")]),e("p",{staticClass:"display-1 text-bebas-neue animate-3 animate__animated animate__fadeInLeft"},[t._v(" Welcome to my "),e("span",{staticClass:"text-cornflower-blue"},[t._v("portfolio")])])]),e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xl-4 py-5 my-auto animate-4 animate__animated animate__fadeIn"},[e("img",{staticClass:"img-fluid",attrs:{src:a(5219),alt:"Programmer"}})])])],1)],1),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#53565b","fill-opacity":"1",d:"M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}})]),e("div",{staticClass:"pt-5",attrs:{id:"section-2"}},[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"mx-5 justify-content-center"},[e("div",{staticClass:"col-lg-3 col-xl-3 col-md-3 col-sm-12 border-graphite-gray rounded-1 text-center d-flex align-items-center justify-content-center my-2"},[e("span",{staticClass:"display-1 text-bebas-neue animate__animated animate__fadeIn"},[t._v(" My"),e("br"),e("span",{staticClass:"text-cornflower-blue"},[t._v("Story")])])]),e("div",{staticClass:"col-lg-3 col-xl-3 col-md-3 col-sm-12 text-center align-items-center justify-content-center d-flex"},[e("b-icon",{staticClass:"text-center icon-for-about d-none d-sm-none d-md-none d-lg-block d-xl-block",attrs:{icon:"arrow-right","font-scale":"6"}})],1),e("div",{staticClass:"col-lg-3 col-xl-3 col-md-3 col-sm-12 border-graphite-gray rounded-1 p-0 my-2"},[e("p",{staticClass:"text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn"},[t._v(" Secondary School ")]),e("p",{staticClass:"px-2"},[t._v(" My Journey began in secondary school where I was introduced to the following technologies: ")]),e("ul",[e("li",[t._v("HTML")]),e("li",[t._v("CSS")]),e("li",[t._v("JavaScript")]),e("li",[t._v("Python")]),e("li",[t._v("SQL")]),e("li",[t._v("Visual Basic")])])]),e("div",{staticClass:"col-lg-3 col-xl-3 col-md-3 col-sm-12 text-center align-items-center justify-content-center d-flex"},[e("b-icon",{staticClass:"text-center d-none d-sm-none d-md-none d-lg-block d-xl-block",staticStyle:{"-moz-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)","-ms-transform":"scaleX(-1)"},attrs:{icon:"arrow-90deg-down","font-scale":"6"}})],1)]),e("b-row",{staticClass:"mx-5 justify-content-center mb-5"},[e("div",{staticClass:"col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0 my-2"},[e("p",{staticClass:"text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn"},[t._v(" Self Learning ")]),e("p",{staticClass:"px-2"},[t._v(" Throughout this whole journey I have been teaching myself many different concepts to enhance my knowledge and skills. ")]),e("ul",[e("li",[t._v("Vue.JS (You are currently seeing this)")]),e("li",[t._v("Bootstrap (You are also seeing this)")]),e("li",[t._v("Django REST Framework (This site consumes an API)")]),e("li",[t._v(".NET Core (Entity Framework, ML.NET, Razor Pages)")]),e("li",[t._v("Apache Server Configuration")]),e("li",[t._v("Design with Figma and Adobe XD")])])]),e("div",{staticClass:"col-lg-2 col-xl-2 col-md-2 col-sm-12 text-center align-items-center justify-content-center d-flex my-2"},[e("b-icon",{staticClass:"text-center d-none d-sm-none d-md-none d-lg-block d-xl-block",attrs:{icon:"arrow-left","font-scale":"6"}})],1),e("div",{staticClass:"col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0 my-2"},[e("p",{staticClass:"text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn"},[t._v(" University of Strathclyde ")]),e("p",{staticClass:"px-2"},[t._v(" Graduating from Glasgow Clyde College with a HND in Computing: Software Development, I progressed into university where I am now learning the following: ")]),e("ul",[e("li",[t._v("Java (Again)")]),e("li",[t._v("Haskell")]),e("li",[t._v("C")]),e("li",[t._v("Further SQL")]),e("li",[t._v("Applicable Python")])])]),e("div",{staticClass:"col-lg-2 col-xl-2 col-md-2 col-sm-12 text-center align-items-center justify-content-center d-flex"},[e("b-icon",{staticClass:"text-center d-none d-sm-none d-md-none d-lg-block d-xl-block",attrs:{icon:"arrow-left","font-scale":"6"}})],1),e("div",{staticClass:"col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0"},[e("p",{staticClass:"text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn"},[t._v(" College (Higher Education) ")]),e("p",{staticClass:"px-2"},[t._v(" Continuing my journey in college, I was introduced to the following technologies: ")]),e("ul",[e("li",[t._v("C# (My favourite)")]),e("li",[t._v("Java")]),e("li",[t._v("jQuery")]),e("li",[t._v("PHP")]),e("li",[t._v("C++")])])])]),e("b-row",{staticClass:"mb-5"},[e("div",{staticClass:"col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center align-items-center justify-content-center d-flex"},[e("b-icon",{staticClass:"text-center d-none d-sm-none d-md-none d-lg-block d-xl-block",attrs:{icon:"caret-down-fill","font-scale":"6"}})],1)]),e("b-row",{staticClass:"my-5 mx-5"},[e("div",{staticClass:"col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center border-cornflower-blue p-0 rounded-1"},[e("p",{staticClass:"text-bebas-neue text-white bg-cornflower-blue display-6 p-2 animate__animated animate__fadeIn"},[t._v(" The end result ")]),e("b-row",{staticClass:"justify-content-center"},[e("div",{staticClass:"col-md-4 col-lg-6 col-xl-6 col-sn-4"},[e("img",{staticClass:"img-fluid",attrs:{src:a(4451),alt:"Programmer"}})]),e("div",{staticClass:"col-md-4 col-lg-6 col-xl-6 col-sm-4 d-flex align-items-center justify-content-center"},[e("b-row",{staticClass:"w-100"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"text-md"},[t._v(" The journey so far has made me confident in my ability to "),e("span",{staticClass:"text-cornflower-blue"},[t._v(" develop.")]),e("br"),t._v(" I aspire to continue my journey by learning more, taking accredited courses and gaining more experience. "),e("br"),t._v(" This website is the first step in my journey to becoming a "),e("span",{staticClass:"text-cornflower-blue"},[t._v("Full Stack Developer.")])])]),e("div",{staticClass:"col-12"},[e("p",{staticClass:"text-bebas-neue bg-grapite-gray display-6 p-2 text-center"},[t._v(" Professional Accredations ")]),e("ul",{staticClass:"justify-content-center",staticStyle:{"list-style-type":"none"}},[e("li",[e("a",{staticClass:"btn btn-graphite-gray w-50",attrs:{href:"certificates/course_certificate.pdf",download:"programming.pdf"}},[e("span",{staticClass:"px-2"},[t._v("Oracle: Database Programming")])])]),e("li",{staticClass:"mt-3"},[e("a",{staticClass:"btn btn-graphite-gray w-50",attrs:{href:"certificates/DatabaseDesign.pdf",download:"design.pdf"}},[e("span",{staticClass:"px-2"},[t._v("Oracle: Database Design")])])]),e("li",{staticClass:"mt-3"},[e("a",{staticClass:"btn btn-graphite-gray w-50"},[e("span",{staticClass:"px-2"},[t._v("Oracle: Database Fundamentals")])])])])])])],1)])],1)])],1)],1),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#53565b","fill-opacity":"1",d:"M0,128L160,256L320,160L480,160L640,288L800,224L960,32L1120,128L1280,32L1440,96L1440,0L1280,0L1120,0L960,0L800,0L640,0L480,0L320,0L160,0L0,0Z"}})])])},h=[],y={name:"HomeView",components:{},data(){return{}},methods:{downloadDesign:()=>{},downloadProgramming:()=>{}}},C=y,x=(0,d.Z)(C,_,h,!1,null,null,null),w=x.exports,L=a(3822);n["default"].use(L.ZP);var k=new L.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),S=a(2482);n["default"].use(v.ZP);const j=[{path:"/",name:"home",component:w,meta:{requiresAuth:!1,seo:{title:"Home | Andrew Crossan",metaTags:[{name:"description",content:"The homepage of my portfolio"}]}}}],P=new v.ZP({mode:"history",base:"/portfolio/",routes:j});P.beforeEach(S.Z),P.beforeEach(((t,e,a)=>{if("login"===t.name){if(k.getters.isLoggedIn)return a({name:"home"});a()}else t.meta&&!1===t.meta.requiresAuth||k.getters.isLoggedIn?a():a({name:"login"})}));var I=P,D=a(6681),A=a(9425),O=a(4311);a(7024);n["default"].config.productionTip=!1,n["default"].use(D.ZPm),n["default"].use(A.A7),n["default"].prototype.$http=O.Z,n["default"].prototype.$http.defaults.baseURL={NODE_ENV:"production",BASE_URL:"/portfolio/"}.VUE_APP_API_BASE_URL;const T=localStorage.getItem("token");T&&(n["default"].prototype.$http.defaults.headers.common.Authorization=T),new n["default"]({router:I,store:k,render:t=>t(b)}).$mount("#app")},5219:function(t,e,a){t.exports=a.p+"img/undraw_programming_re_kg9v.e0334b76.svg"},4451:function(t,e,a){t.exports=a.p+"img/undraw_web_developer_re_h7ie.b71646db.svg"}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],o=t[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(l=!1,o<i&&(i=o));if(l){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/portfolio/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,i=n[0],l=n[1],r=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var d=r(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1455)}));n=a.O(n)})();
//# sourceMappingURL=app.eb18095a.js.map