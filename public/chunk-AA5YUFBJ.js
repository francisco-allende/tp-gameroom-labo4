import{a as B1}from"./chunk-5CCLXYTQ.js";import{f as P1,h as F1,i as T1}from"./chunk-YX3NCP3F.js";import{$a as q2,Db as X,Eb as A1,Ka as x1,Na as A,Oa as S,Ta as N1,V as U2,W as M1,bb as b1,cb as s2,da as _,ea as p1,fa as C1,gb as O2,kb as P,la as M2,lb as F,ma as u1,mb as J,na as L1,pb as S1,qb as k1,sa as d1,sb as I2,ta as g1,tb as p2,ub as w1,vb as y1,wb as i2,yb as C2}from"./chunk-MZUU66T2.js";function D1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?D1(Object(e),!0).forEach(function(r){C(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):D1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function A2(c){"@babel/helpers - typeof";return A2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A2(c)}function _4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function R1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function X4(c,a,e){return a&&R1(c.prototype,a),e&&R1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function C(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function s1(c,a){return $4(c)||Q4(c,a)||l4(c,a)||Z4()}function v2(c){return Y4(c)||K4(c)||l4(c)||J4()}function Y4(c){if(Array.isArray(c))return X2(c)}function $4(c){if(Array.isArray(c))return c}function K4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Q4(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function l4(c,a){if(c){if(typeof c=="string")return X2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return X2(c,a)}}function X2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function J4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E1=function(){},i1={},o4={},t4=null,m4={mark:E1,measure:E1};try{typeof window<"u"&&(i1=window),typeof document<"u"&&(o4=document),typeof MutationObserver<"u"&&(t4=MutationObserver),typeof performance<"u"&&(m4=performance)}catch{}var c3=i1.navigator||{},U1=c3.userAgent,q1=U1===void 0?"":U1,O=i1,M=o4,O1=t4,u2=m4,O6=!!O.document,E=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",z4=~q1.indexOf("MSIE")||~q1.indexOf("Trident/"),L2,d2,g2,x2,N2,B="___FONT_AWESOME___",Y2=16,H4="fa",v4="svg-inline--fa",K="data-fa-i2svg",$2="data-fa-pseudo-element",a3="data-fa-pseudo-element-pending",n1="data-prefix",f1="data-icon",I1="fontawesome-i2svg",e3="async",r3=["HTML","HEAD","STYLE","SCRIPT"],V4=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",l1=[h,p];function V2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var o2=V2((L2={},C(L2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(L2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),L2)),t2=V2((d2={},C(d2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(d2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),d2)),m2=V2((g2={},C(g2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(g2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),g2)),s3=V2((x2={},C(x2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(x2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),x2)),i3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,h4="fa-layers-text",n3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,f3=V2((N2={},C(N2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(N2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N2)),M4=[1,2,3,4,5,6,7,8,9,10],l3=M4.concat([11,12,13,14,15,16,17,18,19,20]),o3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z2=new Set;Object.keys(t2[h]).map(z2.add.bind(z2));Object.keys(t2[p]).map(z2.add.bind(z2));var t3=[].concat(l1,v2(z2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Y.GROUP,Y.SWAP_OPACITY,Y.PRIMARY,Y.SECONDARY]).concat(M4.map(function(c){return"".concat(c,"x")})).concat(l3.map(function(c){return"w-".concat(c)})),f2=O.FontAwesomeConfig||{};function m3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function z3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(W1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],W1.forEach(function(c){var a=s1(c,2),e=a[0],r=a[1],s=z3(m3(e));s!=null&&(f2[r]=s)}));var W1,p4={styleDefault:"solid",familyDefault:"classic",cssPrefix:H4,replacementClass:v4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f2.familyPrefix&&(f2.cssPrefix=f2.familyPrefix);var e2=t(t({},p4),f2);e2.autoReplaceSvg||(e2.observeMutations=!1);var z={};Object.keys(p4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){e2[c]=e,l2.forEach(function(r){return r(z)})},get:function(){return e2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){e2.cssPrefix=a,l2.forEach(function(e){return e(z)})},get:function(){return e2.cssPrefix}});O.FontAwesomeConfig=z;var l2=[];function H3(c){return l2.push(c),function(){l2.splice(l2.indexOf(c),1)}}var q=Y2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v3(c){if(!(!c||!E)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return M.head.insertBefore(a,r),c}}var V3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function H2(){for(var c=12,a="";c-- >0;)a+=V3[Math.random()*62|0];return a}function r2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function o1(c){return c.classList?r2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function C4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(C4(c[e]),'" ')},"").trim()}function T2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function t1(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function M3(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function p3(c){var a=c.transform,e=c.width,r=e===void 0?Y2:e,s=c.height,i=s===void 0?Y2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&z4?l+="translate(".concat(a.x/q-r/2,"em, ").concat(a.y/q-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/q,"em), calc(-50% + ").concat(a.y/q,"em)) "):l+="translate(".concat(a.x/q,"em, ").concat(a.y/q,"em) "),l+="scale(".concat(a.size/q*(a.flipX?-1:1),", ").concat(a.size/q*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var C3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function u4(){var c=H4,a=v4,e=z.cssPrefix,r=z.replacementClass,s=C3;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var G1=!1;function W2(){z.autoAddCss&&!G1&&(v3(u4()),G1=!0)}var u3={mixout:function(){return{dom:{css:u4,insertCss:W2}}},hooks:function(){return{beforeDOMElementCreation:function(){W2()},beforeI2svg:function(){W2()}}}},D=O||{};D[B]||(D[B]={});D[B].styles||(D[B].styles={});D[B].hooks||(D[B].hooks={});D[B].shims||(D[B].shims=[]);var k=D[B],L4=[],L3=function c(){M.removeEventListener("DOMContentLoaded",c),P2=1,L4.map(function(a){return a()})},P2=!1;E&&(P2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),P2||M.addEventListener("DOMContentLoaded",L3));function d3(c){E&&(P2?setTimeout(c,0):L4.push(c))}function h2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?C4(c):"<".concat(a," ").concat(h3(r),">").concat(i.map(h2).join(""),"</").concat(a,">")}function j1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var g3=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},G2=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?g3(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function x3(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function K2(c){var a=x3(c);return a.length===1?a[0].toString(16):null}function N3(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function _1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function Q2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=_1(a);typeof k.hooks.addPack=="function"&&!s?k.hooks.addPack(c,_1(a)):k.styles[c]=t(t({},k.styles[c]||{}),i),c==="fas"&&Q2("fa",a)}var b2,S2,k2,Z=k.styles,b3=k.shims,S3=(b2={},C(b2,h,Object.values(m2[h])),C(b2,p,Object.values(m2[p])),b2),m1=null,d4={},g4={},x4={},N4={},b4={},k3=(S2={},C(S2,h,Object.keys(o2[h])),C(S2,p,Object.keys(o2[p])),S2);function w3(c){return~t3.indexOf(c)}function y3(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!w3(s)?s:null}var S4=function(){var a=function(i){return G2(Z,function(n,f,l){return n[l]=G2(f,i,{}),n},{})};d4=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),g4=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),b4=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in Z||z.autoFetchSvg,r=G2(b3,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});x4=r.names,N4=r.unicodes,m1=B2(z.styleDefault,{family:z.familyDefault})};H3(function(c){m1=B2(c.styleDefault,{family:z.familyDefault})});S4();function z1(c,a){return(d4[c]||{})[a]}function A3(c,a){return(g4[c]||{})[a]}function $(c,a){return(b4[c]||{})[a]}function k4(c){return x4[c]||{prefix:null,iconName:null}}function P3(c){var a=N4[c],e=z1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function I(){return m1}var H1=function(){return{prefix:null,iconName:null,rest:[]}};function B2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=o2[r][c],i=t2[r][c]||t2[r][s],n=c in k.styles?c:null;return i||n||null}var X1=(k2={},C(k2,h,Object.keys(m2[h])),C(k2,p,Object.keys(m2[p])),k2);function D2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},C(a,h,"".concat(z.cssPrefix,"-").concat(h)),C(a,p,"".concat(z.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return X1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return X1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var H=y3(z.cssPrefix,o);if(Z[o]?(o=S3[f].includes(o)?s3[f][o]:o,n=o,m.prefix=o):k3[f].indexOf(o)>-1?(n=o,m.prefix=B2(o,{family:f})):H?m.iconName=H:o!==z.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?k4(m.iconName):{},V=$(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!Z.far&&Z.fas&&!z.autoFetchSvg&&(m.prefix="fas")}return m},H1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(Z.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=$(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=I()||"fas"),l}var F3=function(){function c(){_4(this,c),this.definitions={}}return X4(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),Q2(f,n[f]);var l=m2[h][f];l&&Q2(l,n[f]),S4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(H){typeof H=="string"&&(e[f][H]=m)}),e[f][l]=m}),e}}]),c}(),Y1=[],c2={},a2={},T3=Object.keys(a2);function B3(c,a){var e=a.mixoutsTo;return Y1=c,c2={},Object.keys(a2).forEach(function(r){T3.indexOf(r)===-1&&delete a2[r]}),Y1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),A2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){c2[n]||(c2[n]=[]),c2[n].push(i[n])})}r.provides&&r.provides(a2)}),e}function J2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=c2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function Q(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=c2[c]||[];s.forEach(function(i){i.apply(null,e)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return a2[c]?a2[c].apply(null,a):void 0}function Z2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||I();if(a)return a=$(e,a)||a,j1(w4.definitions,e,a)||j1(k.styles,e,a)}var w4=new F3,D3=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Q("noAuto")},R3={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(Q("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,d3(function(){U3({autoReplaceSvgRoot:e}),Q("watch",a)})}},E3={icon:function(a){if(a===null)return null;if(A2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:$(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=B2(a[0]);return{prefix:r,iconName:$(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(i3))){var s=D2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||I(),iconName:$(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=I();return{prefix:i,iconName:$(i,a)||a}}}},x={noAuto:D3,config:z,dom:R3,parse:E3,library:w4,findIconDefinition:Z2,toHtml:h2},U3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(k.styles).length>0||z.autoFetchSvg)&&E&&z.autoReplaceSvg&&x.dom.i2svg({node:r})};function R2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return h2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(E){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function q3(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(t1(n)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=T2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function O3(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:r}]}]}function v1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,H=c.extra,v=c.watchable,V=v===void 0?!1:v,L=r.found?r:e,N=L.width,b=L.height,w=s==="fak",u=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(U){return H.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(H.classes).join(" "),d={children:[],attributes:t(t({},H.attributes),{},{"data-prefix":s,"data-icon":i,class:u,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},y=w&&!~H.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[K]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||H2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:i,main:e,mask:r,maskId:m,transform:n,symbol:f,styles:t(t({},y),H.styles)}),G=r.found&&e.found?R("generateAbstractMask",g)||{children:[],attributes:{}}:R("generateAbstractIcon",g)||{children:[],attributes:{}},j=G.children,E2=G.attributes;return g.children=j,g.attributes=E2,f?O3(g):q3(g)}function $1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[K]="");var o=t({},n.styles);t1(s)&&(o.transform=p3({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var H=T2(o);H.length>0&&(m.style=H);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function I3(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=T2(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var j2=k.styles;function c1(c){var a=c[0],e=c[1],r=c.slice(4),s=s1(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Y.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Y.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Y.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var W3={found:!1,width:512,height:512};function G3(c,a){!V4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function a1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=I()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:R("missingIconAbstract")||{}};if(e==="fa"){var n=k4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&j2[a]&&j2[a][c]){var f=j2[a][c];return r(c1(f))}G3(c,a),r(t(t({},W3),{},{icon:z.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var K1=function(){},e1=z.measurePerformance&&u2&&u2.mark&&u2.measure?u2:{mark:K1,measure:K1},n2='FA "6.5.2"',j3=function(a){return e1.mark("".concat(n2," ").concat(a," begins")),function(){return y4(a)}},y4=function(a){e1.mark("".concat(n2," ").concat(a," ends")),e1.measure("".concat(n2," ").concat(a),"".concat(n2," ").concat(a," begins"),"".concat(n2," ").concat(a," ends"))},V1={begin:j3,end:y4},w2=function(){};function Q1(c){var a=c.getAttribute?c.getAttribute(K):null;return typeof a=="string"}function _3(c){var a=c.getAttribute?c.getAttribute(n1):null,e=c.getAttribute?c.getAttribute(f1):null;return a&&e}function X3(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function Y3(){if(z.autoReplaceSvg===!0)return y2.replace;var c=y2[z.autoReplaceSvg];return c||y2.replace}function $3(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function K3(c){return M.createElement(c)}function A4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?$3:K3:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(A4(n,{ceFn:r}))}),s}function Q3(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var y2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(A4(s),e)}),e.getAttribute(K)===null&&z.keepOriginalSource){var r=M.createComment(Q3(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~o1(e).indexOf(z.replacementClass))return y2.replace(a);var s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===z.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return h2(f)}).join(`
`);e.setAttribute(K,""),e.innerHTML=n}};function J1(c){c()}function P4(c,a){var e=typeof a=="function"?a:w2;if(c.length===0)e();else{var r=J1;z.mutateApproach===e3&&(r=O.requestAnimationFrame||J1),r(function(){var s=Y3(),i=V1.begin("mutate");c.map(s),i(),e()})}}var h1=!1;function F4(){h1=!0}function r1(){h1=!1}var F2=null;function Z1(c){if(O1&&z.observeMutations){var a=c.treeCallback,e=a===void 0?w2:a,r=c.nodeCallback,s=r===void 0?w2:r,i=c.pseudoElementsCallback,n=i===void 0?w2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;F2=new O1(function(m){if(!h1){var o=I();r2(m).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!Q1(H.addedNodes[0])&&(z.searchPseudoElements&&n(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&n(H.target.parentNode),H.type==="attributes"&&Q1(H.target)&&~o3.indexOf(H.attributeName))if(H.attributeName==="class"&&_3(H.target)){var v=D2(o1(H.target)),V=v.prefix,L=v.iconName;H.target.setAttribute(n1,V||o),L&&H.target.setAttribute(f1,L)}else X3(H.target)&&s(H.target)})}}),E&&F2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J3(){F2&&F2.disconnect()}function Z3(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function c6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=D2(o1(c));return s.prefix||(s.prefix=I()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=A3(s.prefix,c.innerText)||z1(s.prefix,K2(c.innerText))),!s.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function a6(c){var a=r2(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||H2()):(a["aria-hidden"]="true",a.focusable="false")),a}function e6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=c6(c),r=e.iconName,s=e.prefix,i=e.rest,n=a6(c),f=J2("parseNodeAttributes",{},c),l=a.styleParser?Z3(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var r6=k.styles;function T4(c){var a=z.autoReplaceSvg==="nest"?c4(c,{styleParser:!1}):c4(c);return~a.extra.classes.indexOf(h4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}var W=new Set;l1.map(function(c){W.add("fa-".concat(c))});Object.keys(o2[h]).map(W.add.bind(W));Object.keys(o2[p]).map(W.add.bind(W));W=v2(W);function a4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var e=M.documentElement.classList,r=function(H){return e.add("".concat(I1,"-").concat(H))},s=function(H){return e.remove("".concat(I1,"-").concat(H))},i=z.autoFetchSvg?W:l1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(r6));i.includes("fa")||i.push("fa");var n=[".".concat(h4,":not([").concat(K,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(K,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=r2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=V1.begin("onTree"),m=f.reduce(function(o,H){try{var v=T4(H);v&&o.push(v)}catch(V){V4||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,H){Promise.all(m).then(function(v){P4(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),H(v)})})}function s6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T4(c).then(function(e){e&&P4([e],a)})}function i6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Z2(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:Z2(s||{})),c(r,t(t({},e),{},{mask:s}))}}var n6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?T:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,H=e.title,v=H===void 0?null:H,V=e.titleId,L=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,w=e.attributes,u=w===void 0?{}:w,d=e.styles,y=d===void 0?{}:d;if(a){var g=a.prefix,G=a.iconName,j=a.icon;return R2(t({type:"icon"},a),function(){return Q("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(v?u["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(L||H2()):(u["aria-hidden"]="true",u.focusable="false")),v1({icons:{main:c1(j),mask:l?c1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:G,transform:t(t({},T),s),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:u,styles:y,classes:b}})})}},f6={mixout:function(){return{icon:i6(n6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=a4,e.nodeCallback=s6,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,i=e.callback,n=i===void 0?function(){}:i;return a4(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,H=r.maskId,v=r.extra;return new Promise(function(V,L){Promise.all([a1(s,f),o.iconName?a1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=s1(N,2),w=b[0],u=b[1];V([e,v1({icons:{main:w,mask:u},prefix:f,iconName:s,transform:l,symbol:m,maskId:H,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=T2(f);l.length>0&&(s.style=l);var m;return t1(n)&&(m=R("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(m||i.icon),{children:r,attributes:s}}}},l6={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return R2({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(v2(i)).join(" ")},children:n}]})}}}},o6={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,m=l===void 0?{}:l,o=r.styles,H=o===void 0?{}:o;return R2({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:r}),I3({content:e.toString(),title:i,extra:{attributes:m,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(v2(f))}})})}}}},t6={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?T:s,n=r.title,f=n===void 0?null:n,l=r.classes,m=l===void 0?[]:l,o=r.attributes,H=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return R2({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:r}),$1({content:e,transform:t(t({},T),i),title:f,extra:{attributes:H,styles:V,classes:["".concat(z.cssPrefix,"-layers-text")].concat(v2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(z4){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,$1({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},m6=new RegExp('"',"ug"),e4=[1105920,1112319];function z6(c){var a=c.replace(m6,""),e=N3(a,0),r=e>=e4[0]&&e<=e4[1],s=a.length===2?a[0]===a[1]:!1;return{value:K2(s?a[0]:a),isSecondary:r||s}}function r4(c,a){var e="".concat(a3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=r2(c.children),n=i.filter(function(j){return j.getAttribute($2)===a})[0],f=O.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(n3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var H=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?t2[v][l[2].toLowerCase()]:f3[v][m],L=z6(H),N=L.value,b=L.isSecondary,w=l[0].startsWith("FontAwesome"),u=z1(V,N),d=u;if(w){var y=P3(N);y.iconName&&y.prefix&&(u=y.iconName,V=y.prefix)}if(u&&!b&&(!n||n.getAttribute(n1)!==V||n.getAttribute(f1)!==d)){c.setAttribute(e,d),n&&c.removeChild(n);var g=e6(),G=g.extra;G.attributes[$2]=a,a1(u,V).then(function(j){var E2=v1(t(t({},g),{},{icons:{main:j,mask:H1()},prefix:V,iconName:d,extra:G,watchable:!0})),U=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=E2.map(function(j4){return h2(j4)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function H6(c){return Promise.all([r4(c,"::before"),r4(c,"::after")])}function v6(c){return c.parentNode!==document.head&&!~r3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute($2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function s4(c){if(E)return new Promise(function(a,e){var r=r2(c.querySelectorAll("*")).filter(v6).map(H6),s=V1.begin("searchPseudoElements");F4(),Promise.all(r).then(function(){s(),r1(),a()}).catch(function(){s(),r1(),e()})})}var V6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=s4,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;z.searchPseudoElements&&s4(s)}}},i4=!1,h6={mixout:function(){return{dom:{unwatch:function(){F4(),i4=!0}}}},hooks:function(){return{bootstrap:function(){Z1(J2("mutationObserverCallbacks",{}))},noAuto:function(){J3()},watch:function(e){var r=e.observeMutationsRoot;i4?r1():Z1(J2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},n4=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},M6={mixout:function(){return{parse:{transform:function(e){return n4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=n4(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:H,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},_2={x:0,y:0,width:"100%",height:"100%"};function f4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function p6(c){return c.tag==="g"?c.children:[c]}var C6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?D2(s.split(" ").map(function(n){return n.trim()})):H1();return i.prefix||(i.prefix=I()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,H=n.width,v=n.icon,V=M3({transform:l,containerWidth:H,iconWidth:m}),L={tag:"rect",attributes:t(t({},_2),{},{fill:"white"})},N=o.children?{children:o.children.map(f4)}:{},b={tag:"g",attributes:t({},V.inner),children:[f4(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},w={tag:"g",attributes:t({},V.outer),children:[b]},u="mask-".concat(f||H2()),d="clip-".concat(f||H2()),y={tag:"mask",attributes:t(t({},_2),{},{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,w]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:p6(v)},y]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")")},_2)}),{children:r,attributes:s}}}},u6={provides:function(a){var e=!1;O.matchMedia&&(e=O.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},L6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},d6=[u3,f6,l6,o6,t6,V6,h6,M6,C6,u6,L6];B3(d6,{mixoutsTo:x});var I6=x.noAuto,W6=x.config,G6=x.library,j6=x.dom,B4=x.parse,_6=x.findIconDefinition,X6=x.toHtml,D4=x.icon,Y6=x.layer,g6=x.text,x6=x.counter;var N6=["*"],b6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},S6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},k6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},w6=c=>c.prefix!==void 0&&c.iconName!==void 0,y6=(c,a)=>w6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},A6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),P6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let s of r){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...r){for(let s of r){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(r,s){return r in this.definitions&&s in this.definitions[r]?this.definitions[r][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),F6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=C1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[M2]});let c=a;return c})(),T6=(()=>{let a=class a{constructor(r,s){this.renderer=r,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(S(N1),S(d1))},a.\u0275cmp=_({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[M2,X],ngContentSelectors:N6,decls:1,vars:0,template:function(s,i){s&1&&(w1(),y1(0))},encapsulation:2});let c=a;return c})(),E4=(()=>{let a=class a{set spin(r){this.animation=r?"spin":void 0}set pulse(r){this.animation=r?"spin-pulse":void 0}constructor(r,s,i,n,f){this.sanitizer=r,this.config=s,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){S6();return}if(r){let s=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(s);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(r){let s=y6(r,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(b6(s),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?B4.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...k6(r),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(r,s){let i=D4(r,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(s){return new(s||a)(S(P1),S(A6),S(P6),S(F6,8),S(T6,8))},a.\u0275cmp=_({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(k1("innerHTML",i.renderedIconHTML,x1),b1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[M2,X],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var U4=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=p1({type:a}),a.\u0275inj=M1({});let c=a;return c})();var q4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var O4={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var I4={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]};var D6={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},W4=D6;var R6={prefix:"far",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},G4=R6;var E6=()=>["/perfil"];function U6(c,a){if(c&1&&(P(0,"div",7)(1,"div",8)(2,"small",9),i2(3),F()()()),c&2){let e=p2();A(3),C2("Email: ",e.currentUser.email,"")}}function q6(c,a){if(c&1){let e=S1();P(0,"div",7)(1,"div",8)(2,"a",10),J(3,"fa-icon",11),F()(),P(4,"div",12)(5,"a",13),I2("click",function(){u1(e);let s=p2();return L1(s.logOut())}),J(6,"fa-icon",11),F()()()}if(c&2){let e=p2();A(2),s2("routerLink",A1(3,E6)),A(),s2("icon",e.faUser),A(3),s2("icon",e.faPowerOff)}}var z0=(()=>{let a=class a{constructor(r,s){this.loginService=r,this.router=s,this.faPowerOff=I4,this.faUser=q4,this.faSearch=W4,this.faPlusSquare=G4,this.faArrowLeft=O4,this.currentRoute="",this.puntajeTotal=0,this.currentUser={email:this.loginService.getLoggedUser(),password:""},this.sendCurrentUser=new g1}ngOnInit(){this.loginService.getLoggedUser()==""?this.logOut():this.sendCurrentUser.emit(this.currentUser)}logOut(){this.loginService.logOut(),this.router.navigateByUrl("/login")}goBack(){this.currentRoute=this.router.url,this.currentRoute.includes("home")?this.router.navigate(["/"]):this.router.navigate(["/home"])}};a.\u0275fac=function(s){return new(s||a)(S(B1),S(F1))},a.\u0275cmp=_({type:a,selectors:[["app-header"]],outputs:{sendCurrentUser:"sendCurrentUser"},standalone:!0,features:[X],decls:10,vars:3,consts:[[1,"app-header","navbar","mian-nav"],[1,"d-flex","align-items-center"],[1,"d-none","d-md-flex","btn-nav-end"],["type","button",1,"navbar-toggler","btn-menu",3,"click"],[1,"icon-arrow-left",3,"icon"],[1,"nav","navbar-nav","ml-auto"],[1,"nav-item"],[1,"d-flex","align-items-center","ml-3"],[1,"mr-3"],[1,"d-block"],["href","#","tooltip","Mi Perfil","placement","bottom","container","body",1,"btn","btn-outline-info","rounded-circle",3,"routerLink"],[1,"font-xs",3,"icon"],[1,"btn-nav-end"],["href","#","tooltip","Cerrar Sesi\xF3n","placement","bottom","container","body",1,"btn","btn-outline-danger","rounded-circle",3,"click"]],template:function(s,i){s&1&&(P(0,"header",0)(1,"div",1)(2,"div",2)(3,"button",3),I2("click",function(){return i.goBack()}),J(4,"fa-icon",4),F()()(),P(5,"ul",5)(6,"li",6),q2(7,U6,4,1,"div",7),F(),P(8,"li",6),q2(9,q6,7,4,"div",7),F()()()),s&2&&(A(4),s2("icon",i.faArrowLeft),A(3),O2(7,i.currentUser?7:-1),A(2),O2(9,i.currentUser?9:-1))},dependencies:[U4,E4,T1],styles:["header[_ngcontent-%COMP%]{background-color:#0c105a;color:#fff}.btn-menu[_ngcontent-%COMP%]{background-color:#fff}.icon-arrow-left[_ngcontent-%COMP%]{font-size:2.5rem;color:#0c105a}.navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.nav-item[_ngcontent-%COMP%]{margin-left:1em}.btn-nav-end[_ngcontent-%COMP%]{margin-left:1em;margin-right:1em}"]});let c=a;return c})();var v0=(()=>{let a=class a{constructor(){this.year=new Date().getFullYear()}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=_({type:a,selectors:[["app-footer"]],standalone:!0,features:[X],decls:7,vars:1,consts:[[1,"app-footer"],[1,"footer-logo"],[1,"footer-data"],[1,"d-none","d-lg-inline"],["href","https://github.com/francisco-allende/LaboIV-Allende-TP-Sala-Juegos/tree/main"]],template:function(s,i){s&1&&(P(0,"footer",0),J(1,"div",1),P(2,"div",2)(3,"span",3)(4,"a",4),i2(5,"Sala de Juegos Allende"),F(),i2(6),F()()()),s&2&&(A(6),C2(" \xA9 ",i.year," - Todos los derechos reservados."))},styles:['.app-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#6d53b7}.footer-logo[_ngcontent-%COMP%]{background:url("./media/logo-joystick-32SEZWEU.png");background-repeat:no-repeat;width:12em;height:8em;background-size:50%;background-position:center}.footer-data[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:#000}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}']});let c=a;return c})();export{z0 as a,v0 as b};
