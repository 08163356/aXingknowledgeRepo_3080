(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,5,6,7,8,9,11,13],{237:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return d})),n.d(e,"i",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return g}));n(88);const r=/#.*$/,s=/\.(md|html)$/,i=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return t.replace(r,"").replace(s,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;const e=t.match(r),n=e?e[0]:"",s=a(t);return i.test(s)?t:s+".html"+n}function d(t,e){const n=t.hash,s=function(t){const e=t.match(r);if(e)return e[0]}(e);if(s&&n!==s)return!1;return a(t.path)===a(e)}function f(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const r=a(e);for(let n=0;n<t.length;n++)if(a(t[n].path)===r)return Object.assign({},t[n],{type:"page",path:p(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,r){if("auto"===t.frontmatter.sidebar)return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const{pages:s,themeConfig:i}=n,o=(r&&i.locales&&i.locales[r]||i).sidebar||i.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(r))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,s){if("string"==typeof e)return f(n,e,r);if(Array.isArray(e))return Object.assign(f(n,e[0],r),{title:e[1]});{s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const i=e.children||[];return{type:"group",title:e.title,children:i.map(e=>t(e,n,r,!0)),collapsable:!1!==e.collapsable}}}(e,s,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},238:function(t,e,n){},239:function(t,e,n){"use strict";n.r(e);var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(240),n(15)),i=Object(s.a)(r,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=i.exports},240:function(t,e,n){"use strict";n(238)},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){"use strict";n.r(e);var r=n(237),s={props:{item:{required:!0}},computed:{link(){return Object(r.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:r.e,isMailto:r.f,isTel:r.g}},i=n(15),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=o.exports},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var r=n(237);function s(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function i(t,e,n,o,a,l=1){return!e||l>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(r.d)(o,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,"#"+e.slug,e.title,u),i(t,e.children,n,o,a,l+1)])}))}var o={functional:!0,props:["item"],render(t,{parent:{$page:e,$site:n,$route:o},props:{item:a}}){const l=Object(r.d)(o,a.path),u="auto"===a.type?l||a.children.some(t=>Object(r.d)(o,a.basePath+"#"+t.slug)):l,c=s(t,a.path,a.title||a.path,u),p=null!=e.frontmatter.sidebarDepth?e.frontmatter.sidebarDepth:n.themeConfig.sidebarDepth,d=null==p?1:p;if("auto"===a.type)return[c,i(t,a.children,a.basePath,o,d)];if(u&&a.headers&&!r.c.test(a.path)){return[c,i(t,Object(r.b)(a.headers),a.path,o,d)]}return c}},a=(n(248),n(15)),l=Object(a.a)(o,void 0,void 0,!1,null,null,null);e.default=l.exports},247:function(t,e,n){"use strict";n(241)},248:function(t,e,n){"use strict";n(242)},249:function(t,e,n){"use strict";n.r(e);var r=n(243),s=n(239),i={components:{NavLink:r.default,DropdownTransition:s.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},o=(n(247),n(15)),a=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,r){return e("li",{key:n.link||r,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=a.exports},250:function(t,e,n){"use strict";n(244)},251:function(t,e,n){},252:function(t,e,n){"use strict";n(245)},253:function(t,e,n){},254:function(t,e,n){"use strict";n.r(e);var r=n(249),s=n(237),i={components:{NavLink:n(243).default,DropdownLink:r.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(s=>{const i=t[s],o=r[s]&&r[s].label||i.lang;let a;return i.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===a)||(a=s)),{text:o,link:a}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.h)(t),{items:(t.items||[]).map(s.h)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:"https://github.com/"+t},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}},o=(n(250),n(15)),a=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports},255:function(t,e,n){"use strict";n.r(e);var r=n(246),s=n(239),i={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:r.default,DropdownTransition:s.default}},o=(n(252),n(15)),a=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return e("li",[e("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null);e.default=a.exports},256:function(t,e,n){"use strict";n(251)},257:function(t,e,n){"use strict";n(253)},260:function(t,e,n){},261:function(t,e,n){"use strict";n.r(e);var r={props:["sidebarItems"]},s=(n(256),n(15)),i=Object(s.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"page"},[t("Content",{staticClass:"content",attrs:{custom:!1}})],1)}),[],!1,null,null,null);e.default=i.exports},262:function(t,e,n){"use strict";n.r(e);var r=n(255),s=n(246),i=n(254),o=n(237);var a={components:{SidebarGroup:r.default,SidebarLink:s.default,NavLinks:i.default},props:["items"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if("group"===r.type&&r.children.some(e=>Object(o.d)(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(o.d)(this.$route,t.path)}}},l=(n(257),n(15)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,r){return e("li",{key:r},["group"===n.type?e("SidebarGroup",{attrs:{item:n,first:0===r,open:r===t.openGroupIndex,collapsable:n.collapsable},on:{toggle:function(e){return t.toggleGroup(r)}}}):e("SidebarLink",{attrs:{item:n}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=u.exports},265:function(t,e,n){var r,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=s(t,r.minimum,1),n.status=1===t?null:t;var l=n.render(!e),u=l.querySelector(r.barSelector),c=r.speed,p=r.easing;return l.offsetWidth,o((function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(u,function(t,e,n){var s;return(s="translate3d"===r.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+e+"ms "+n,s}(t,c,p)),1===t?(a(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout((function(){a(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),c)}),c)):setTimeout(e,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*s(Math.random()*e,.1,.95)),e=s(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var s,o=e.querySelector(r.barSelector),l=t?"-100":i(n.status||0),c=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),r.showSpinner||(s=e.querySelector(r.spinnerSelector))&&d(s),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,s=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((r=t[s]+i)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,s,i=arguments;if(2==i.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&r(t,n,s);else r(t,i[1],i[2])}}();function l(t,e){return("string"==typeof t?t:p(t)).indexOf(" "+e+" ")>=0}function u(t,e){var n=p(t),r=n+e;l(n,e)||(t.className=r.substring(1))}function c(t,e){var n,r=p(t);l(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function p(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=s)},266:function(t,e,n){"use strict";n(260)},268:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(265),i=n.n(s),o=n(261),a=n(262),l=n(237),u={components:{Page:o.default,Sidebar:a.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(l.i)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),i.a.configure({showSpinner:!1}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||r.a.component(t.name)||i.a.start(),n()}),this.$router.afterEach(()=>{i.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(n(266),n(15)),p=Object(c.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?e("div",{staticClass:"custom-layout"},[e(t.$page.frontmatter.layout,{tag:"component"})],1):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=p.exports}}]);