(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d09325f"],{"05b3":function(e,t,a){"use strict";a("b971")},"24a3":function(e,t,a){"use strict";a.r(t);var n={name:"ArticleManage",components:{TableList:a("ca7f").a},data:function(){return{articles:[],total:0,tableMap:[{label:"索引值",key:"_id"},{label:"文章标题",key:"title"},{label:"发布者",key:"manageId"},{label:"权限码",key:"code"},{label:"标签",key:"tag"},{label:"文章内容",key:"content"},{label:"是否草稿",key:"isDraft"},{label:"封面链接",key:"bannerImg"},{label:"日期",key:"time"}],searchForm:{manageId:"",title:""},searchFormMap:[{label:"文章标题",type:"input",key:"title"},{label:"发布者",type:"input",key:"manageId"}],pageNo:1,pageSize:10}},created:function(){this.queryArticle()},methods:{queryArticle:function(){var e=this,t=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findArticleByPage(t,{notify:!1}).then((function(t){e.articles=t.data.list,e.total=t.data.total}))},updatePagination:function(e,t){this.pageNo=e,this.pageSize=t},paginationChange:function(e,t){this.queryArticle()},editArticle:function(e,t){this.$router.push({name:"Public",params:t})},removeArticle:function(e,t,a,n){var i=this;this.API.removeArticle({_id:t._id}).then((function(e){i.queryArticle()}))}}},i=(a("05b3"),a("2877")),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-manage"},[a("TableList",{attrs:{tableData:e.articles,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},paginationChange:e.paginationChange,updatePagination:e.updatePagination,edit:e.editArticle,remove:e.removeArticle,search:e.queryArticle}})],1)}),[],!1,null,"6ddb7a41",null);t.default=o.exports},"5d2a":function(e,t,a){},b971:function(e,t,a){},ca7f:function(e,t,a){"use strict";var n=a("2909"),i=(a("a9e3"),a("a630"),a("3ca3"),a("99af"),{name:"TableList",props:{formData:{type:Object,default:function(){return{name:"huasen"}}},formMap:{type:Array,default:function(){return[{span:6,label:"姓名",type:"input",key:"name"}]}},tableMap:{type:Array,default:function(){return[{label:"日期",key:"data"}]}},tableData:{type:Array,default:function(){return[{date:"1979-01-01"}]}},total:{type:Number,default:0},showAdd:{type:Boolean,default:!1},showRemove:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showOperate:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1}},computed:{showContent:function(){return 0!==this.tableMap.length},showHeader:function(){return 0!==this.formMap.length}},data:function(){return{pagination:{pageNo:1,pageSize:10}}},watch:{pagination:{handler:function(e){this.$emit("updatePagination",e.pageNo,e.pageSize)},deep:!0,immediate:!0}},methods:{handlePlaceHolder:function(e){return"请输入".concat(e.label)},handlePageSizeChange:function(e){this.pagination.pageSize=e,this.handleEmit("paginationChange",this.pagination.pageNo,e)},handlePageNoChange:function(e){this.pagination.pageNo=e,this.handleEmit("paginationChange",e,this.pagination.pageSize)},add:function(){this.$emit("add")},remove:function(e,t){this.handleEmit("remove",e,t,this.pagination.pageNo,this.pagination.pageSize)},edit:function(e,t){this.$emit("edit",e,t)},operate:function(e,t){this.$emit("operate",e,t)},copy:function(e,t){this.TOOL.copyTextToClip(JSON.stringify(t),"已复制到剪贴板")},search:function(){this.pagination={pageNo:1,pageSize:10},this.handleEmit("search",this.pagination.pageNo,this.pagination.pageSize)},handleEmit:function(e){var t=arguments,a=this;this.$nextTick((function(){var i=Object(n.a)(Array.from(t));i.shift(),a.$emit.apply(a,[e].concat(Object(n.a)(i)))}))}}}),o=(a("e24a"),a("2877")),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-list"},[e.showHeader?a("header",[a("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.formData}},[a("el-row",{attrs:{gutter:10}},[e._l(e.formMap,(function(t,n){return a("el-col",{key:n,attrs:{span:t.span||6}},[a("el-form-item",["input"==t.type?a("el-input",{attrs:{placeholder:e.handlePlaceHolder(t),clearable:""},model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[formItem.key]"}}):e._e(),"select"==t.type?a("el-select",{attrs:{placeholder:e.handlePlaceHolder(t)},model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[formItem.key]"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._l(t.selectOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2):e._e()],1)],1)})),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查 询")]),e.showAdd?a("el-button",{attrs:{type:"success"},on:{click:e.add}},[e._v("添 加")]):e._e()],1)],1)],2)],1)],1):e._e(),e.showContent?a("main",[a("el-table",{attrs:{data:e.tableData,stripe:!0,border:!0,"highlight-current-row":"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._l(e.tableMap,(function(t,n){return a("el-table-column",{key:n,attrs:{label:t.label,width:t.width,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(n){return[a("div",{staticClass:"text"},[e._v(e._s(e._f("emptyTip")(n.row[t.key])))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作",width:240},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showRemove?a("el-popconfirm",{staticClass:"mr-px-10",attrs:{"popper-class":"delete-popcomfirm",title:"确定删除吗？"},on:{confirm:function(a){return e.remove(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删 除")])],1):e._e(),e.showCopy?a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(a){return e.copy(t.$index,t.row)}}},[e._v("复 制")]):e._e(),e.showEdit?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.edit(t.$index,t.row)}}},[e._v("编 辑")]):e._e(),e.showOperate?a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.operate(t.$index,t.row)}}},[e._v("操 作")]):e._e()]}}],null,!1,1171393652)})],2)],1):e._e(),e.showContent?a("footer",[a("el-pagination",{staticClass:"flex mt-px-28",attrs:{"current-page":e.pagination.pageNo,background:"","page-sizes":[10,20,50,100],pageSize:e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,"popper-class":"page-size-popper"},on:{"size-change":e.handlePageSizeChange,"current-change":e.handlePageNoChange}})],1):e._e()])}),[],!1,null,"65dbf61a",null);t.a=l.exports},e24a:function(e,t,a){"use strict";a("5d2a")}}]);