(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9e1de0c"],{1276:function(e,t,o){"use strict";var r=o("d784"),n=o("44e7"),i=o("825a"),s=o("1d80"),a=o("4840"),l=o("8aa5"),c=o("50c4"),u=o("14c3"),d=o("9263"),g=o("d039"),f=[].push,m=Math.min,h=4294967295,p=!g((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,o){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,o){var r=String(s(this)),i=void 0===o?h:o>>>0;if(0===i)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,i);var a,l,c,u=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=new RegExp(e.source,g+"g");while(a=d.call(p,r)){if(l=p.lastIndex,l>m&&(u.push(r.slice(m,a.index)),a.length>1&&a.index<r.length&&f.apply(u,a.slice(1)),c=a[0].length,m=l,u.length>=i))break;p.lastIndex===a.index&&p.lastIndex++}return m===r.length?!c&&p.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,o){return void 0===e&&0===o?[]:t.call(this,e,o)}:t,[function(t,o){var n=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,n,o):r.call(String(n),t,o)},function(e,n){var s=o(r,e,this,n,r!==t);if(s.done)return s.value;var d=i(e),g=String(this),f=a(d,RegExp),v=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),b=new f(p?d:"^(?:"+d.source+")",y),_=void 0===n?h:n>>>0;if(0===_)return[];if(0===g.length)return null===u(b,g)?[g]:[];var F=0,k=0,$=[];while(k<g.length){b.lastIndex=p?k:0;var O,C=u(b,p?g:g.slice(k));if(null===C||(O=m(c(b.lastIndex+(p?0:k)),g.length))===F)k=l(g,k,v);else{if($.push(g.slice(F,k)),$.length===_)return $;for(var x=1;x<=C.length-1;x++)if($.push(C[x]),$.length===_)return $;k=F=O}}return $.push(g.slice(F)),$}]}),!p)},"25f0":function(e,t,o){"use strict";var r=o("6eeb"),n=o("825a"),i=o("d039"),s=o("ad6d"),a="toString",l=RegExp.prototype,c=l[a],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=a;(u||d)&&r(RegExp.prototype,a,(function(){var e=n(this),t=String(e.source),o=e.flags,r=String(void 0===o&&e instanceof RegExp&&!("flags"in l)?s.call(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"3ca3":function(e,t,o){"use strict";var r=o("6547").charAt,n=o("69f3"),i=o("7dd0"),s="String Iterator",a=n.set,l=n.getterFor(s);i(String,"String",(function(e){a(this,{type:s,string:String(e),index:0})}),(function(){var e,t=l(this),o=t.string,n=t.index;return n>=o.length?{value:void 0,done:!0}:(e=r(o,n),t.index+=e.length,{value:e,done:!1})}))},"44e7":function(e,t,o){var r=o("861d"),n=o("c6b6"),i=o("b622"),s=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"4df4":function(e,t,o){"use strict";var r=o("0366"),n=o("7b0b"),i=o("9bdd"),s=o("e95a"),a=o("50c4"),l=o("8418"),c=o("35a1");e.exports=function(e){var t,o,u,d,g,f,m=n(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,b=c(m),_=0;if(y&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==b||h==Array&&s(b))for(t=a(m.length),o=new h(t);t>_;_++)f=y?v(m[_],_):m[_],l(o,_,f);else for(d=b.call(m),g=d.next,o=new h;!(u=g.call(d)).done;_++)f=y?i(d,v,[u.value,_],!0):u.value,l(o,_,f);return o.length=_,o}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,o){var r=o("1d80"),n=o("5899"),i="["+n+"]",s=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),l=function(e){return function(t){var o=String(r(t));return 1&e&&(o=o.replace(s,"")),2&e&&(o=o.replace(a,"")),o}};e.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(e,t,o){var r=o("861d"),n=o("d2bb");e.exports=function(e,t,o){var i,s;return n&&"function"==typeof(i=t.constructor)&&i!==o&&r(s=i.prototype)&&s!==o.prototype&&n(e,s),e}},a630:function(e,t,o){var r=o("23e7"),n=o("4df4"),i=o("1c7e"),s=!i((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:n})},a9e3:function(e,t,o){"use strict";var r=o("83ab"),n=o("da84"),i=o("94ca"),s=o("6eeb"),a=o("5135"),l=o("c6b6"),c=o("7156"),u=o("c04e"),d=o("d039"),g=o("7c73"),f=o("241c").f,m=o("06cf").f,h=o("9bf2").f,p=o("58a8").trim,v="Number",y=n[v],b=y.prototype,_=l(g(b))==v,F=function(e){var t,o,r,n,i,s,a,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=p(c),t=c.charCodeAt(0),43===t||45===t){if(o=c.charCodeAt(2),88===o||120===o)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(i=c.slice(2),s=i.length,a=0;a<s;a++)if(l=i.charCodeAt(a),l<48||l>n)return NaN;return parseInt(i,r)}return+c};if(i(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var k,$=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof $&&(_?d((function(){b.valueOf.call(o)})):l(o)!=v)?c(new y(F(t)),o,$):F(t)},O=r?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;O.length>C;C++)a(y,k=O[C])&&!a($,k)&&h($,k,m(y,k));$.prototype=b,b.constructor=$,s(n,v,$)}},abc5:function(e,t,o){"use strict";var r=o("d650"),n=o.n(r);n.a},d28b:function(e,t,o){var r=o("746f");r("iterator")},d650:function(e,t,o){},e01a:function(e,t,o){"use strict";var r=o("23e7"),n=o("83ab"),i=o("da84"),s=o("5135"),a=o("861d"),l=o("9bf2").f,c=o("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof g?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(g,u);var f=g.prototype=u.prototype;f.constructor=g;var m=f.toString,h="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=m.call(e);if(s(d,e))return"";var o=h?t.slice(7,-1):t.replace(p,"$1");return""===o?void 0:o}}),r({global:!0,forced:!0},{Symbol:g})}},ea3a:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",{style:e.checkCLAClass,attrs:{id:"checkCLA"}},[o("Header"),o("el-row",{attrs:{id:"section"}},[e.isSendCode?e._e():o("el-row",{staticClass:"content"},[o("el-col",{attrs:{offset:4,span:16}},[o("p",{staticClass:"contentTitle"},[e._v('"'),o("span",[e._v(e._s(e.org))]),e.repo?o("span",[e._v("/"+e._s(e.repo))]):e._e(),o("span",[e._v('" '+e._s(e.apply_to)+" ")]),e._v("Contributor License Agreement")]),o("el-row",{staticClass:"marginTop3rem",attrs:{id:"claBox"}}),o("el-row",{staticClass:"marginTop3rem form"},[o("el-col",[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"25%"}},[e._l(e.fields,(function(t,r){return o("el-form-item",{attrs:{label:t.title,required:t.required,prop:t.id}},["email"===t.type?o("el-input",{attrs:{readonly:"corporation"!==e.loginType,size:"small"},on:{blur:function(o){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(o){e.$set(e.ruleForm,t.id,o)},expression:"ruleForm[item.id]"}}):"date"===t.type?o("el-input",{attrs:{readonly:"",size:"small"},on:{blur:function(o){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(o){e.$set(e.ruleForm,t.id,o)},expression:"ruleForm[item.id]"}}):o("el-input",{attrs:{size:"small"},on:{blur:function(o){return e.setMyForm(t.type,e.ruleForm[t.id])}},model:{value:e.ruleForm[t.id],callback:function(o){e.$set(e.ruleForm,t.id,o)},expression:"ruleForm[item.id]"}})],1)})),"corporation"===e.loginType&&e.rules.code?o("el-form-item",{attrs:{label:"Verify Code",required:e.rules.code[0].required,prop:"code"}},[o("el-input",{attrs:{size:"small"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}},[o("el-button",{attrs:{slot:"append",disabled:"send code"!==e.sendBtText},on:{click:function(t){return e.sendCode()}},slot:"append"},[e._v(e._s(e.sendBtText)+" ")])],1)],1):e._e(),o("div",{staticClass:"borderClass fontSize12"},[o("span",{staticStyle:{color:"#F56C6C"}},[e._v("*")]),e._v(e._s(e.desc.metadataDesc)+" ")]),o("div",{staticClass:"marginTop1rem fontSize12"},[o("el-checkbox",{model:{value:e.isRead,callback:function(t){e.isRead=t},expression:"isRead"}},[o("span",[e._v("I have read the "),o("span",{staticClass:"privacy",on:{click:e.viewPrivacy}},[e._v("Privacy Policy")]),e._v(' and hereby consent to the processing of my data by "'+e._s(e.repo)+'"')])])],1),o("el-form-item",{staticClass:"marginTop1rem signBtBox",attrs:{"label-width":"0"}},[o("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(" "+e._s(e.desc.sign)+" ")])])],2)],1)],1)],1)],1)],1),o("Footer"),o("el-dialog",{attrs:{title:"",top:"5vh","close-on-press-escape":!1,"show-close":!1,"close-on-click-modal":!1,visible:e.tipsDialogVisible,width:"30%"},on:{"update:visible":function(t){e.tipsDialogVisible=t}}},[o("el-row",[o("el-col",{attrs:{align:"center"}},[o("p",[e._v(e._s(e.tipsMessage))]),o("button",{staticClass:"dialogBt",on:{click:function(t){return e.clickOk()}}},[e._v("OK")])])],1)],1)],1)},n=[],i=(o("99af"),o("4160"),o("b0c0"),o("a9e3"),o("b64b"),o("d3b7"),o("ac1f"),o("1276"),o("159b"),o("ade3"));o("a4d3"),o("e01a"),o("d28b"),o("e260"),o("3ca3"),o("ddb0"),o("a630"),o("fb6a"),o("25f0");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function a(e,t){if(e){if("string"===typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(e,t):void 0}}function l(e,t){var o;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=a(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==o["return"]||o["return"]()}finally{if(l)throw i}}}}o("96cf");var c=o("1da1"),u=o("5530"),d=o("6543"),g=o("84ef"),f=o("615a"),m=o("221d"),h=o("2f62"),p={name:"CheckCLA",computed:{loginType:function(){return this.$store.state.loginType},platform_token:function(){return this.$store.state.platform_token},access_token:function(){return this.$store.state.access_token},refresh_token:function(){return this.$store.state.refresh_token},apply_to:function(){return"individual"===this.$store.state.loginType||"employee"===this.$store.state.loginType?"individual":"corporation"===this.$store.state.loginType?"corporation":void 0}},components:{Header:d["a"],Footer:g["a"]},data:function(){return{tipsMessage:"Signed successfully.We have sent a notification email to your email address. Please check it",tipsDialogVisible:!1,signPageData:"",cla_org_id:"",sendBtText:"send code",claOrgIdArr:[],fields:[],claIdArr:[],desc:"",enDesc:{personalContributor:"Individual Contributor",comContributor:"Legal Entity Contributor",metadataDesc:" require field. ",sign:"SIGN",reset:"RESET"},cnDesc:{personalContributor:"个人贡献者",comContributor:"企业贡献者",metadataDesc:"为必填项",sign:"签署",reset:"重置"},isVerify:!1,isSendCode:!1,verifyCode:"",platform:this.$store.state.platform,dialogVisible:!1,repositoryOptions:[],role:"0",org:this.$store.state.repoInfo.org_id,repo:this.$store.state.repoInfo.repo_id,ruleForm:{},myForm:{},rules:{},isRead:!1,value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],metadataArr:[],checkCLAClass:{height:""}}},methods:Object(u["a"])(Object(u["a"])({},Object(h["b"])(["setTokenAct","setRepoInfoAct","viewPrivacy"])),{},{clickOk:function(){var e="/sign/".concat(this.$store.state.repoInfo.platform,"/").concat(this.$store.state.repoInfo.org_id,"/").concat(this.$store.state.repoInfo.repo_id);this.$router.push(e),this.tipsDialogVisible=!1},verifyTel:function(e,t,o){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t?(r=/^1[3456789]\d{9}$/,r.test(t)?o():o(new Error("telephone format error")),o()):o();case 1:case"end":return e.stop()}}),e)})))()},verifyAddr:function(e,t,o){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t||o(new Error("please input address")),o();case 2:case"end":return e.stop()}}),e)})))()},verifyFormEmail:function(e,t,o){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,n.test(r)?o():o(new Error("Email format error"));case 3:case"end":return e.stop()}}),e)})))()},setMyForm:function(e,t){this.myForm[e]=t,console.log(this.myForm[e])},sendCode:function(){var e=this;console.log("sendcode"),this.$axios({url:"/api"+m["sendVerifyCode"],method:"post",data:{cla_org_id:this.cla_org_id,email:this.myForm.adminEmail}}).then((function(t){console.log(t);var o=60,r=setInterval((function(){0!==o?(o--,e.sendBtText=o+"s"):(e.sendBtText="send code",clearInterval(r))}),1e3)})).catch((function(t){console.log(t),e.$message.closeAll(),e.$message.error(t.response.data)}))},getNowDate:function(){var e,t,o,r=new Date;e=r.getFullYear(),console.log(r.getFullYear(),r.getMonth()+1,r.getDate()),t=r.getMonth()<9?"0".concat(r.getMonth()+1):r.getMonth()+1,o=r.getDate()<10?"0".concat(r.getDate()):r.getDate(),console.log(this.fields),console.log(this.ruleForm);var n,s=l(this.fields);try{for(s.s();!(n=s.n()).done;){var a=n.value;if(console.log(a),"date"===a.type){this.myForm.date=e+"-"+t+"-"+o,Object.assign(this.ruleForm,Object(i["a"])({},a.id,e+"-"+t+"-"+o));break}}}catch(c){s.e(c)}finally{s.f()}console.log(this.ruleForm),"corporation"!==this.loginType&&(this.getEmail(this.platform_token,this.refresh_token),this.getUserInfo(this.platform_token))},getEmail:function(e,t){var o=this;this.$axios({url:m["getEmail"],params:{access_token:e}}).then((function(e){console.log(e);var t,r=l(e.data);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(console.log(n),n.scope&&"primary"===n.scope[0]){o.myForm.email=n.email,console.log(o.myForm.email);break}}}catch(u){r.e(u)}finally{r.f()}var s,a=l(o.fields);try{for(a.s();!(s=a.n()).done;){var c=s.value;if("email"===c.type){Object.assign(o.ruleForm,Object(i["a"])({},c.id,o.myForm.email));break}}}catch(u){a.e(u)}finally{a.f()}console.log(o.ruleForm)})).catch((function(e){console.log(e),o.$message.closeAll(),o.$message.error(e.response.data)}))},getCookieData:function(){if(""!==document.cookie){var e,t,o=document.cookie.split("; "),r="";o.forEach((function(o,n){var i=o.split("=");"access_token"===i[0]?e=i[1]:"refresh_token"===i[0]?t=i[1]:r="platform_token"===i[0]?i[1]:""}));var n={access_token:e,refresh_token:t,platform_token:r};this.setTokenAct(n)}},getSignPage:function(e){var t=this;console.log("getSignPage"),this.changeDesc("english");var o="";o="individual"===this.$store.state.loginType||"employee"===this.$store.state.loginType?"individual":"corporation",this.$axios({url:"/api".concat(m["getSignPage"],"/").concat(this.$store.state.repoInfo.platform,"/").concat(this.$store.state.repoInfo.org_id,"/").concat(o),params:{repo_id:this.$store.state.repoInfo.repo_id},headers:{Token:this.$store.state.access_token}}).then((function(o){if(console.log(o),t.signPageData=o.data,console.log(Object.keys(o.data).length),Object.keys(o.data).length)for(var r in t.languageOptions=[],o.data)console.log(r),"english"===o.data[r].language&&(t.value=r,t.cla_org_id=r,console.log(t.cla_org_id),console.log("find claText"),t.setClaText(r),e("complete")),t.languageOptions.push({value:r,label:o.data[r].language})})).catch((function(e){console.log(e.response),t.$message.closeAll(),t.$message.error(e.response.data)}))},changeLanguage:function(e){console.log(e),this.changeDesc(this.languageOptions[e].label),this.setClaText(e),this.cla_org_id=e},changeDesc:function(e){"english"===e?this.desc=this.enDesc:"chinese"===e&&(this.desc=this.cnDesc)},getUserInfo:function(e){var t=this,o={access_token:e};console.log(o),this.$axios({url:m["getUserInfo"],params:o}).then((function(e){console.log(e),t.myForm.name=e.data.login,console.log(t.myForm);var o,r=l(t.fields);try{for(r.s();!(o=r.n()).done;){var n=o.value;if("name"===n.type){Object.assign(t.ruleForm,Object(i["a"])({},n.id,t.myForm.name));break}}}catch(s){r.e(s)}finally{r.f()}console.log(t.ruleForm)})).catch((function(e){console.log(e)}))},setClaText:function(e){var t=this,o={},r={};document.getElementById("claBox").innerHTML=this.signPageData[e].text;for(var n=0;n<this.signPageData[e].fields.length;n++)for(var s=n+1;s<this.signPageData[e].fields.length;s++)if(Number(this.signPageData[e].fields[n].id)>Number(this.signPageData[e].fields[s].id)){var a=this.signPageData[e].fields[n];this.signPageData[e].fields[n]=this.signPageData[e].fields[s],this.signPageData[e].fields[s]=a}console.log(this.signPageData[e].fields),this.fields=this.signPageData[e].fields,this.fields.forEach((function(e){Object.assign(o,Object(i["a"])({},e.id,"")),"name"===e.type?(Object.assign(t.myForm,{name:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,message:"please input name",trigger:"blur"}]))):"corporationName"===e.type?(Object.assign(t.myForm,{corporationName:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,message:"please input corporationName",trigger:"blur"}]))):"adminEmail"===e.type?(Object.assign(t.myForm,{adminEmail:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,message:"please input adminEmail",trigger:"blur"}]))):"date"===e.type?(Object.assign(t.myForm,{date:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,message:"please input date",trigger:"blur"}]))):"email"===e.type?(Object.assign(t.myForm,{email:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,validator:t.verifyFormEmail,trigger:"blur"}]))):"telephone"===e.type?(Object.assign(t.myForm,{telephone:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,validator:t.verifyTel,trigger:"blur"}]))):"address"===e.type&&(Object.assign(t.myForm,{address:""}),Object.assign(r,Object(i["a"])({},e.id,[{required:!0,validator:t.verifyAddr(),trigger:"blur"}])))})),Object.assign(o,{code:""}),Object.assign(this.myForm,{code:""}),Object.assign(r,{code:[{required:!0,message:"Please enter the verification code",trigger:["blur","change"]}]}),this.ruleForm=o,this.rules=r,console.log(this.ruleForm),console.log(this.rules)},toHome:function(){this.$router.push("/home")},signCla:function(){console.log("signCla");var e={},t="",o={};for(var r in this.ruleForm)console.log(r),""!==this.ruleForm[r]&&Object.assign(e,Object(i["a"])({},r,this.ruleForm[r]+""));console.log(e),"individual"===this.$store.state.loginType?(t="".concat(m["individual_signing"],"/").concat(this.cla_org_id),o={name:this.myForm.name,email:this.myForm.email,info:e}):"corporation"===this.$store.state.loginType?(t=m["corporation_signing"],o={cla_org_id:this.cla_org_id,corporation_name:this.myForm.corporationName,admin_name:this.myForm.name,admin_email:this.myForm.adminEmail,enabled:!0,info:e,verifi_code:this.ruleForm.code}):"employee"===this.$store.state.loginType&&(t="".concat(m["employee_signing"],"/").concat(this.cla_org_id),o={name:this.myForm.name,email:this.myForm.email,info:e}),this.sign(t,o)},sign:function(e,t){var o=this;console.log(e,t),this.$axios({url:"/api"+e,method:"post",data:t,headers:{Token:this.$store.state.access_token,"Access-Token":this.$store.state.platform_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e),"corporation"===o.$store.state.loginType?o.tipsMessage="We have sent a notification email to your email address. Please check it.And please complete the signature according to the prompt in the email":"employee"===o.$store.state.loginType&&(o.tipsMessage="We have sent a notification email to your email address. Please check it,And email the administrator of your company to audit"),o.tipsDialogVisible=!0})).catch((function(e){console.log(e),o.$message.closeAll(),o.$message.error(e.response.data)}))},clearForm:function(){if("employee"===this.$store.state.loginType||"individual"===this.$store.state.loginType)for(var e in this.ruleForm)"1"!==e&&"2"!==e&&(this.ruleForm[e]="");else for(var t in this.ruleForm)"3"!==t&&(this.ruleForm[t]="")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.signCla()}))},getRepositoriesOfOrg:function(e,t){var o=this,r={access_token:this.$store.state.access_token,org:e,page:1,per_page:10};console.log("getRepositoriesOfOrg",r),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:r,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(r){console.log(r),200===r.status&&(o.repositoryOptions=[],r.data.forEach((function(r,n){o.repositoryOptions.push({value:n,org:e,org_id:t,repoName:r.name,label:"".concat(e,"/").concat(r.name),id:r.id})})))})).catch((function(e){console.log(e),o.$message.closeAll(),o.$message.error(e.response.data)}))},resetForm:function(e){this.$refs[e].resetFields()},setClientHeight:function(){var e=this;this.$nextTick((function(){f["a"]()>document.getElementById("checkCLA").offsetHeight?e.checkCLAClass.height=f["a"]()+"px":e.checkCLAClass.height=document.getElementById("checkCLA").offsetHeight})),console.log(document.getElementById("checkCLA").offsetHeight)}}),created:function(){var e=this;this.getCookieData(),new Promise((function(t){e.getSignPage(t)}),(function(e){})).then((function(t){console.log(t),e.getNowDate()}),(function(e){}))},mounted:function(){this.setClientHeight()}};window.onresize=function(){f["a"]()>document.getElementById("checkCLA").offsetHeight&&(document.getElementById("checkCLA").style.height=f["a"]()+"px")};var v=p,y=(o("abc5"),o("2877")),b=Object(y["a"])(v,r,n,!1,null,null,null);t["default"]=b.exports},fb6a:function(e,t,o){"use strict";var r=o("23e7"),n=o("861d"),i=o("e8b5"),s=o("23cb"),a=o("50c4"),l=o("fc6a"),c=o("8418"),u=o("b622"),d=o("1dde"),g=o("ae40"),f=d("slice"),m=g("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var o,r,u,d=l(this),g=a(d.length),f=s(e,g),m=s(void 0===t?g:t,g);if(i(d)&&(o=d.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?n(o)&&(o=o[h],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return p.call(d,f,m);for(r=new(void 0===o?Array:o)(v(m-f,0)),u=0;f<m;f++,u++)f in d&&c(r,u,d[f]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-b9e1de0c.91b7ed19.js.map