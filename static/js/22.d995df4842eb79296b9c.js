webpackJsonp([22],{"1ujQ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",{staticClass:"fl-ex al-it"},[e("router-link",{attrs:{to:"/system",tag:"img",src:"../../../static/img/29.png",alt:"图"}}),this._v(" "),e("p",[this._v("单位管理")])],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"select"},[e("a",{staticClass:"fl-ex al-it"},[e("img",{attrs:{src:s("jXz2"),alt:"搜索"}}),this._v(" "),e("p",[this._v("|")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"请输入工会名称"}})])])}]};var n={name:"NavItemHeader",data:function(){return{show:!1,currentIndex:0,itemList:[{name:"企业管理",path:"/firm"},{name:"企业注册",path:"/company"}]}},methods:{changeSelect:function(t){console.log(this.$router.push),this.currentIndex=t;this.$router.push({path:this.itemList[t].path})}},components:{Head:s("VU/8")({},i,!1,function(t){s("StKg")},null,null).exports}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("Head"),t._v(" "),this.show?t._e():s("section",{staticClass:"nav-items"},[s("ul",{staticClass:"item-list fl-ex al-it ju-ar"},t._l(t.itemList,function(e,i){return s("li",{key:i,staticClass:"item",class:{active:t.currentIndex==i},staticStyle:{"font-weight":"bold","font-size":"1rem"},attrs:{to:e.path},on:{click:function(e){return t.changeSelect(i)}}},[t._v(t._s(e.name))])}),0),t._v(" "),s("router-view")],1)],1)},staticRenderFns:[]};var r=s("VU/8")(n,a,!1,function(t){s("ucLQ")},"data-v-0379685d",null);e.default=r.exports},StKg:function(t,e){},ucLQ:function(t,e){}});
//# sourceMappingURL=22.d995df4842eb79296b9c.js.map