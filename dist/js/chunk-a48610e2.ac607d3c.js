(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a48610e2"],{"01a5":function(t,e,n){"use strict";var i=n("373e"),o=n.n(i);o.a},"373e":function(t,e,n){},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){return window.innerHeight}},6543:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"headerBox",staticStyle:{"border-bottom":"2px solid #F2F2F2"}},[n("el-col",{staticClass:"header",attrs:{offset:4,span:16}},[n("div",{staticClass:"box"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"icon"}})],1),n("div")])],1)},o=[],a={name:"NewHeader",data:function(){return{language:"English",value:0,options:[{value:0,label:"English"},{value:1,label:"中文"},{value:2,label:"日语"}]}},methods:{clickSelect:function(){console.log("clickSelect"),document.getElementById("my_option").style.visibility="hidden"}}},c=a,s=(n("771f"),n("2877")),r=Object(s["a"])(c,i,o,!1,null,"11a85556",null);e["a"]=r.exports},"6f9f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{style:t.privacyBox,attrs:{id:"privacyBox"}},[n("Header"),n("el-row",{attrs:{id:"textBox"}},[n("el-col",{attrs:{offset:4,span:16}},[n("div",{staticClass:"marginTop3rem",attrs:{id:"contentBox"}},[t._v(" "+t._s(t.privacyText)+" ")])])],1),n("Footer")],1)],1)},o=[],a=n("84ef"),c=n("6543"),s=n("221d"),r=n("615a");window.onresize=function(){console.log(r["a"]()),r["a"]()>document.getElementById("privacyBox").offsetHeight&&(document.getElementById("privacyBox").style.height=r["a"]()+"px")};var l={name:"Privacy",components:{Header:c["a"],Footer:a["a"]},data:function(){return{privacyText:"",privacyBox:{height:""}}},methods:{setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(r["a"](),document.getElementById("privacyBox").offsetHeight),r["a"]()>document.getElementById("privacyBox").offsetHeight&&(t.privacyBox.height=r["a"]()+"px")}))},getPrivacy:function(){var t=this;this.$axios({url:"/api"+s["getPrivacy"]}).then((function(e){console.log(e),t.privacyText=e.data})).catch((function(t){console.log(t)}))},init:function(){this.getPrivacy()}},created:function(){this.init()},mounted:function(){this.setClientHeight()}},u=l,f=(n("82f2"),n("2877")),d=Object(f["a"])(u,i,o,!1,null,"685b9046",null);e["default"]=d.exports},"771f":function(t,e,n){"use strict";var i=n("db96"),o=n.n(i);o.a},"82f2":function(t,e,n){"use strict";var i=n("e158"),o=n.n(i);o.a},"84ef":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"border-top":"2px solid #F2F2F2"},attrs:{align:"middle"}},[n("el-col",{staticClass:"footer",attrs:{offset:4,span:16}},[n("div",{staticClass:"box"},[n("span",{staticClass:"join_us",on:{click:t.join}},[t._v("JOIN US")])]),n("div",{staticClass:"box"},[n("span",{staticClass:"copyright",on:{click:t.viewPrivacy}},[t._v("©2020 Draven.Designed by LA-Studio")])])])],1)},o=[],a={name:"NewFooter",data:function(){return{}},methods:{join:function(){window.open("https://github.com/opensourceways/app-cla-server")},viewPrivacy:function(){window.open("/privacy")}}},c=a,s=(n("01a5"),n("2877")),r=Object(s["a"])(c,i,o,!1,null,"0e660124",null);e["a"]=r.exports},db96:function(t,e,n){},e158:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a48610e2.ac607d3c.js.map