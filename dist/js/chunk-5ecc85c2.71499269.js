(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ecc85c2"],{"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:t.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{attrs:{id:"svg_logo","icon-class":"logo_b"}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},r=[],i={name:"Header",data:function(){return{user:{userImg:this.$store.state.user.loginUserImg,userName:this.$store.state.user.loginUser,isAuthorize:!1}}},methods:{loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},c=i,o=(n("6b6b"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"3214636f",null);e["a"]=s.exports},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},2083:function(t,e,n){"use strict";var a=n("420d"),r=n.n(a);r.a},"221d":function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return d}));var a="/v1/cla",r="/v1/getClaInfo",i="/v1/getRepositoriesInfo",c="/v1/linkRepository",o="/v1/unLinkRepository",s="/v1/signCla",l="/v1/getLinkedRepositories",u="/v1/getPersonalRepositories",f="/v1/getCompanyRepositories",d="/v1/getCompanyPersonRepositories"},"2e3f":function(t,e,n){},"420d":function(t,e,n){},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("7b0b"),c=n("50c4"),o=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var x=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,y=x?"$":"$0";return[function(n,a){var r=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!x&&m||"string"===typeof a&&-1===a.indexOf(y)){var i=n(e,t,this,a);if(i.done)return i.value}var s=r(t),v=String(this),p="function"===typeof a;p||(a=String(a));var g=s.global;if(g){var C=s.unicode;s.lastIndex=0}var b=[];while(1){var A=u(s,v);if(null===A)break;if(b.push(A),!g)break;var _=String(A[0]);""===_&&(s.lastIndex=l(v,c(s.lastIndex),C))}for(var S="",R=0,w=0;w<b.length;w++){A=b[w];for(var I=String(A[0]),T=f(d(o(A.index),v.length),0),$=[],k=1;k<A.length;k++)$.push(h(A[k]));var P=A.groups;if(p){var L=[I].concat($,T,v);void 0!==P&&L.push(P);var O=String(a.apply(void 0,L))}else O=E(I,v,T,$,P,a);T>=R&&(S+=v.slice(R,T)+O,R=T+I.length)}return S+v.slice(R)}];function E(t,n,a,r,c,o){var s=a+t.length,l=r.length,u=g;return void 0!==c&&(c=i(c),u=p),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":o=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=v(u/10);return 0===f?e:f<=l?void 0===r[f-1]?i.charAt(1):r[f-1]+i.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(){return window.innerHeight}},6547:function(t,e,n){var a=n("a691"),r=n("1d80"),i=function(t){return function(e,n){var i,c,o=String(r(e)),s=a(n),l=o.length;return s<0||s>=l?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6b6b":function(t,e,n){"use strict";var a=n("2e3f"),r=n.n(a);r.a},8996:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.createCLAClass,attrs:{id:"createCLA"}},[n("v-header"),n("div",{attrs:{id:"section"}},[n("el-col",{attrs:{offset:6,span:12}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[n("span",[t._v("Edit your CLA")]),n("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.claText,callback:function(e){t.claText=e},expression:"claText"}}),n("p",[t._v("Edit your metaData")]),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.metaData,callback:function(e){t.metaData=e},expression:"metaData"}}),n("div",{staticStyle:{"margin-top":"1rem","text-align":"right"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.uploadCla()}}},[t._v("create CLA")])],1)],1)],1),n("v-footer")],1)},r=[],i=(n("b0c0"),n("ac1f"),n("5319"),n("0418")),c=n("fd2d"),o=n("615a"),s=n("221d"),l={name:"CreateCLA",components:{"v-header":i["a"],"v-footer":c["a"]},data:function(){return{value:"0",languageOptions:[{value:"0",label:"english"},{value:"1",label:"chinese"}],name:"test",claText:"test",metaData:"test",createCLAClass:{height:""}}},methods:{uploadCla:function(){var t={name:this.name,claText:this.claText,metaData:this.metaData,language:"EN"};this.verifyClaAndMeta()&&this.$axios({url:"/api"+s["j"],method:"post",data:t}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},verifyClaAndMeta:function(){return""!==this.claText&&""!==this.metaData},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(o["a"]()),console.log(document.getElementById("createCLA").offsetHeight),o["a"]()>document.getElementById("createCLA").offsetHeight?t.createCLAClass.height=o["a"]()+"px":t.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var t=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(t),this.metaData=t}},created:function(){},mounted:function(){this.setClientHeight()}};window.onresize=function(){o["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=o["a"]()+"px")};var u=l,f=(n("2083"),n("2877")),d=Object(f["a"])(u,a,r,!1,null,"1aad548a",null);e["default"]=d.exports},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(o=function(t){var e,n,r,o,f=this,d=l&&f.sticky,v=a.call(f),p=f.source,g=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),n=new RegExp("^(?:"+p+")",v)),u&&(n=new RegExp("^"+p+"$(?!\\s)",v)),s&&(e=f.lastIndex),r=i.call(d?n:f,h),d?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:s&&r&&(f.lastIndex=f.global?r.index+r[0].length:e),u&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a431:function(t,e,n){},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&r(i,s,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})},ce2b:function(t,e,n){"use strict";var a=n("a431"),r=n.n(a);r.a},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),c=n("9263"),o=n("9112"),s=i("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=i(t),g=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=g&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!g||!h||"replace"===t&&(!l||!u||d)||"split"===t&&!v){var x=/./[p],m=n(p,""[t],(function(t,e,n,a,r){return e.exec===c?g&&!r?{done:!0,value:x.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=m[0],E=m[1];a(String.prototype,t,y),a(RegExp.prototype,p,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&o(RegExp.prototype[p],"sham",!0)}},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2015 SAP SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at SAP ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},r=[],i={name:"Footer"},c=i,o=(n("ce2b"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"fc237f52",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-5ecc85c2.71499269.js.map