(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c21cd47a"],{"0418":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("el-col",{attrs:{span:8}},[r("div",{staticStyle:{display:"flex"}},[r("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),r("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[r("span",[t._v("Hi, "),r("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),r("el-col",{attrs:{span:8}},[r("div",[r("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),r("el-col",{attrs:{span:8}},[r("div",[r("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[r("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},o=[],i={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},a=i,c=(r("5d19"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,"1d41f76a",null);e["a"]=u.exports},1460:function(t,e,r){"use strict";var n=r("cf23"),o=r.n(n);o.a},"14c3":function(t,e,r){var n=r("c6b6"),o=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(l){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"498a":function(t,e,r){"use strict";var n=r("23e7"),o=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},5319:function(t,e,r){"use strict";var n=r("d784"),o=r("825a"),i=r("7b0b"),a=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,h=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var y=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,m=y?"$":"$0";return[function(r,n){var o=u(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!y&&x||"string"===typeof n&&-1===n.indexOf(m)){var i=r(e,t,this,n);if(i.done)return i.value}var u=o(t),p=String(this),d="function"===typeof n;d||(n=String(n));var v=u.global;if(v){var w=u.unicode;u.lastIndex=0}var b=[];while(1){var _=l(u,p);if(null===_)break;if(b.push(_),!v)break;var S=String(_[0]);""===S&&(u.lastIndex=s(p,a(u.lastIndex),w))}for(var O="",L=0,R=0;R<b.length;R++){_=b[R];for(var A=String(_[0]),C=f(h(c(_.index),p.length),0),I=[],P=1;P<_.length;P++)I.push(g(_[P]));var $=_.groups;if(d){var T=[A].concat(I,C,p);void 0!==$&&T.push($);var k=String(n.apply(void 0,T))}else k=E(A,p,C,I,$,n);C>=L&&(O+=p.slice(L,C)+k,L=C+A.length)}return O+p.slice(L)}];function E(t,r,n,o,a,c){var u=n+t.length,s=o.length,l=v;return void 0!==a&&(a=i(a),l=d),e.call(c,l,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[l-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5d19":function(t,e,r){"use strict";var n=r("a573"),o=r.n(n);o.a},"615a":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return window.innerHeight}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),o=r("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,r,o,c,f=this,h=s&&f.sticky,p=n.call(f),d=f.source,v=0,g=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),r=new RegExp("^(?:"+d+")",p)),l&&(r=new RegExp("^"+d+"$(?!\\s)",p)),u&&(e=f.lastIndex),o=i.call(h?r:f,g),h?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&a.call(o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=E;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y($([])));x&&x!==n&&o.call(x,a)&&(g=x);var m=S.prototype=b.prototype=Object.create(g);_.prototype=m.constructor=S,S.constructor=_,S[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[c]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,r,n){var o=new L(E(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=$,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:$(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function E(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=R(t,r,a),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function b(){}function _(){}function S(){}function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,n,i,a){var c=w(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function R(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=A(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=w(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function A(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,A(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9f7f":function(t,e,r){"use strict";var n=r("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,r){"use strict";var n=r("23e7"),o=r("23cb"),i=r("a691"),a=r("50c4"),c=r("7b0b"),u=r("65f0"),s=r("8418"),l=r("1dde"),f=r("ae40"),h=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,v=Math.min,g=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var r,n,l,f,h,p,x=c(this),m=a(x.length),E=o(t,m),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=m-E):(r=w-2,n=v(d(i(e),0),m-E)),m+r-n>g)throw TypeError(y);for(l=u(x,n),f=0;f<n;f++)h=E+f,h in x&&s(l,f,x[h]);if(l.length=n,r<n){for(f=E;f<m-n;f++)h=f+n,p=f+r,h in x?x[p]=x[h]:delete x[p];for(f=m;f>m-n+r;f--)delete x[f-1]}else if(r>n)for(f=m-n;f>E;f--)h=f+n-1,p=f+r-1,h in x?x[p]=x[h]:delete x[p];for(f=0;f<r;f++)x[f+E]=arguments[f+2];return x.length=m-n+r,l}})},a573:function(t,e,r){},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},c8d2:function(t,e,r){var n=r("d039"),o=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!o[t]()||i[t]()!=i||o[t].name!==t}))}},c975:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").indexOf,i=r("a640"),a=r("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},cf23:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("d039"),i=r("b622"),a=r("9263"),c=r("9112"),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var d=i(t),v=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!v||!g||"replace"===t&&(!s||!l||h)||"split"===t&&!p){var y=/./[d],x=r(d,""[t],(function(t,e,r,n,o){return e.exec===a?v&&!o?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),m=x[0],E=x[1];n(String.prototype,t,m),n(RegExp.prototype,d,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},fd2d:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{staticClass:"footer"},[r("el-col",{staticClass:"left",attrs:{span:8}},[r("span",[t._v("© 2020 HUAWEI SE")])]),r("el-col",{staticClass:"center",attrs:{span:8}},[r("span",[t._v("Made with "),r("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),r("el-col",{staticClass:"right",attrs:{span:8}},[r("div",[r("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),r("span",{staticClass:"pointer"},[r("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},o=[],i={name:"Footer"},a=i,c=(r("1460"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,"bc0631b2",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-c21cd47a.8c423828.js.map