(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MenuBar"),a("ItemList"),t.$store.state.isShow?a("MemoEditor"):t._e()],1)},s=[],r=a("d4ec"),o=a("2caf"),c=a("262e"),l=a("9ab4"),u=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"navbar-brand",attrs:{href:"https://github.com/Majichao0530/WebSticky"}},[a("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"40",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])]),t._m(0)]),a("div",{staticClass:"collapse navbar-collapse navbar-right"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"add dropdown"},[a("a",{staticClass:"create-new dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("新建")]),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{on:{click:t.showAdd}},[t._v("文本便签")])])])]),a("li",{staticClass:"categories dropdown"},[a("a",{staticClass:"current-category dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])]),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"total",on:{click:function(e){return t.changeFilterId(-1)}}},[a("a",[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])])]),a("li",{staticClass:"divider"}),a("li",{on:{click:function(e){return t.changeFilterId(0)}}},[a("a",[t._v(" 工作 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(0)))])])]),a("li",{on:{click:function(e){return t.changeFilterId(1)}}},[a("a",[t._v(" 生活 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(1)))])])]),a("li",{on:{click:function(e){return t.changeFilterId(2)}}},[a("a",[t._v(" 学习 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(2)))])])])])])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false"}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])}],v=(a("4de4"),a("bee2")),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(r["a"])(this,t),this.id=e,this.cateid=a,this.title=i,this.content=n,this.createTime=this.toFormatDate(Date.now())}return Object(v["a"])(t,[{key:"toFormatDate",value:function(t){var e=new Date(t),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes();return a}}]),t}(),p=h,f=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"showAdd",value:function(){this.$store.state.transMemo=new p(-1,0),this.$store.state.isShow=!0}},{key:"doFilter",value:function(t){return-1==t?this.$store.state.aHelper.memoList.length:this.$store.state.aHelper.memoList.filter((function(e){return e.cateid==t})).length}},{key:"changeFilterId",value:function(t){this.$store.state.filterCateId=t}}]),a}(u["c"]);f=Object(l["a"])([u["a"]],f);var b=f,g=b,y=a("2877"),C=Object(y["a"])(g,d,m,!1,null,null,null),w=C.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"memos"}},t._l(t.filterMemo(),(function(t){return a("MemoItem",{key:t.id,attrs:{memo:t}})})),1)},_=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"memo-container"},[a("div",{staticClass:"memo"},[a("div",{staticClass:"mark"}),a("div",{staticClass:"memo-heading"},[a("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"edit",on:{click:t.showEdit}}),a("li",{staticClass:"delete",on:{click:t.doDel}})])]),a("h6",{staticClass:"memo-info"},[a("span",{staticClass:"timeStamp"},[t._v(t._s(t.memo.createTime))]),a("span",{staticClass:"category"},[t._v("分类:"+t._s(t.$store.state.aHelper.getCategoryName(t.memo.cateid)))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[t._v(t._s(t.memo.content))])])])])},k=[],$=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"doDel",value:function(){window.confirm("确认要删除[".concat(this.memo.title,"]这篇笔记吗？"))&&this.$store.state.aHelper.remove(this.memo.id)}},{key:"showEdit",value:function(){var t=JSON.parse(JSON.stringify(this.memo));this.$store.commit("showEditMemo",t)}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])()],$.prototype,"memo",void 0),$=Object(l["a"])([u["a"]],$);var D=$,x=D,M=Object(y["a"])(x,j,k,!1,null,null,null),S=M.exports,I=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memoArr=t.$store.state.aHelper.memoList,t}return Object(v["a"])(a,[{key:"filterMemo",value:function(){var t=this;return-1==this.$store.state.filterCateId?this.memoArr:this.memoArr.filter((function(e){return e.cateid==t.$store.state.filterCateId}))}}]),a}(u["c"]);I=Object(l["a"])([Object(u["a"])({components:{MemoItem:S}})],I);var H=I,F=H,L=Object(y["a"])(F,O,_,!1,null,null,null),E=L.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cover-layer"}),a("div",{staticClass:"editor-layer",attrs:{id:"new-markdown"}},[a("div",{staticClass:"editor-top"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.memo.title,expression:"memo.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.memo.title},on:{input:function(e){e.target.composing||t.$set(t.memo,"title",e.target.value)}}}),a("div",{staticClass:"dropdown select-category"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[a("span",{staticClass:"category"},[t._v(t._s(this.$store.state.aHelper.getCategoryName(t.memo.cateid)))]),a("span",{staticClass:"caret"})]),a("ul",{staticClass:"dropdown-menu"},[a("li",{on:{click:function(e){t.memo.cateid=0}}},[a("a",[t._v("工作")])]),a("li",{on:{click:function(e){t.memo.cateid=1}}},[a("a",[t._v("生活")])]),a("li",{on:{click:function(e){t.memo.cateid=2}}},[a("a",[t._v("学习")])])])]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"save",on:{click:t.saveNew}}),a("li",{staticClass:"cancel",on:{click:t.closeWin}})])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo.content,expression:"memo.content"}],staticClass:"text-content form-control",attrs:{placeholder:"内容"},domProps:{value:t.memo.content},on:{input:function(e){e.target.composing||t.$set(t.memo,"content",e.target.value)}}})])])},N=[],P=(a("498a"),function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memo=new p(void 0,0),t}return Object(v["a"])(a,[{key:"created",value:function(){this.memo=this.$store.state.transMemo}},{key:"closeWin",value:function(){this.$store.state.isShow=!1}},{key:"saveNew",value:function(){this.memo&&this.memo.cateid>-1&&this.memo.title.trim().length>0&&this.memo.content.trim().length>0?(-1==this.memo.id?this.$store.state.aHelper.add(this.memo):this.$store.state.aHelper.edit(this.memo),this.$store.state.isShow=!1):window.alert("您创建的笔记有误，请改正后重试")}}]),a}(u["c"]));P=Object(l["a"])([Object(u["a"])({components:{}})],P);var K=P,A=K,J=Object(y["a"])(A,T,N,!1,null,null,null),B=J.exports,W=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);W=Object(l["a"])([Object(u["a"])({components:{MenuBar:w,ItemList:E,MemoEditor:B}})],W);var z=W,V=z,Y=Object(y["a"])(V,n,s,!1,null,null,null),q=Y.exports,G=a("2f62"),Q=(a("7db0"),a("c740"),a("d81d"),a("a434"),function(){function t(e,a){Object(r["a"])(this,t),this.dataKey=e,this.primaryKey=a}return Object(v["a"])(t,[{key:"readData",value:function(){var t=[{id:1,cateid:2,title:"Vue 3.0 更新计划",content:"更快，更小，更易维护，更易于原生，让开发者更轻松。",createTime:"2020-5-5 17:48"},{id:2,cateid:1,title:"英雄联盟官宣季中赛取消",content:"2020年季中赛取消了，拳头方面开始为今年的全球总决赛开始进行准备，这或许是今年《英雄联盟》将举行的唯一赛事。由于季中赛的取消，今年S赛也做出了一些细微的调整。今年S赛的种子名额分配也发生了变化，中国及欧洲赛区将拥有四个种子队伍名额。北美和韩国仍然是三个种子队伍。",createTime:"2020-5-5 17:49"},{id:3,cateid:1,title:"信用卡还款",content:"5月9日 113元\n5月20日 530元",createTime:"2020-5-5 17:52"},{id:4,cateid:1,title:"五月读书挑战",content:"微博朋友圈睡前无所事事时间读书。精读1本，泛读2本。",createTime:"2020-5-5 17:56"},{id:5,cateid:1,title:"说谎42句歌词 只有4句真话",content:"爱到深处，说谎最痛",createTime:"2020-5-5 17:58"}],e=localStorage.getItem(this.dataKey),a=[];return null!=e&&(a=JSON.parse(e)),0==a.length&&(a=t),a}},{key:"saveData",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"addData",value:function(t){var e=this.readData();null==e&&(e=[]);var a=e.length>0?e[e.length-1][this.primaryKey]+1:1;return t[this.primaryKey]=a,e.push(t),this.saveData(e),a}},{key:"removeDataById",value:function(t){var e=this,a=this.readData(),i=a.findIndex((function(a){return a[e.primaryKey]==t}));return i>-1&&(a.splice(i,1),this.saveData(a),!0)}}]),t}()),R=Q,U=function(){function t(){Object(r["a"])(this,t),this.dataHelper=new R("memoData","id"),this.memoList=this.readData()}return Object(v["a"])(t,[{key:"add",value:function(t){return t.id=this.dataHelper.addData(t),this.memoList.push(t),this.dataHelper.saveData(this.memoList),t.id}},{key:"edit",value:function(t){var e=this.memoList.find((function(e){return e.id==t.id}));e&&(e.cateid=t.cateid,e.title=t.title,e.content=t.content),this.dataHelper.saveData(this.memoList)}},{key:"remove",value:function(t){var e=this.memoList.findIndex((function(e){return e.id==t}));e>-1&&(this.memoList.splice(e,1),this.dataHelper.saveData(this.memoList))}},{key:"getCategoryName",value:function(t){var e=["工作","生活","学习"];return e[t]}},{key:"readData",value:function(){var t=this.dataHelper.readData(),e=t.map((function(t){var e=new p;return e.id=t.id,e.cateid=t.cateid,e.title=t.title,e.content=t.content,e.createTime=t.createTime,e}));return e}}]),t}(),X=U;i["a"].use(G["a"]);var Z=new G["a"].Store({state:{aHelper:new X,isShow:!1,transMemo:null,filterCateId:-1},mutations:{showEditMemo:function(t,e){t.transMemo=e,t.isShow=!0}}}),tt=Z;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(q)},store:tt}).$mount("#app")}});
//# sourceMappingURL=app.81bd9921.js.map