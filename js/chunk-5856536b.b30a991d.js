(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5856536b"],{"0fea":function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i}));var s=a("b775"),r={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function l(t){return Object(s["b"])({url:r.role,method:"get",params:t})}function n(t){return Object(s["b"])({url:r.service,method:"get",params:t})}function o(t){return Object(s["b"])({url:r.permissionNoPager,method:"get",params:t})}function i(t){return Object(s["b"])({url:r.orgTree,method:"get",params:t})}},"8b8b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("a-card",{attrs:{bordered:!1}},[s("div",{staticClass:"table-page-search-wrapper"},[s("a-form",{attrs:{layout:"inline"}},[s("a-row",{attrs:{gutter:48}},[s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"角色ID"}},[s("a-input",{attrs:{placeholder:"请输入"}})],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("a-form-item",{attrs:{label:"状态"}},[s("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[s("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),s("a-select-option",{attrs:{value:"1"}},[e._v("关闭")]),s("a-select-option",{attrs:{value:"2"}},[e._v("运行中")])],1)],1)],1),s("a-col",{attrs:{md:8,sm:24}},[s("span",{staticClass:"table-page-search-submitButtons"},[s("a-button",{attrs:{type:"primary"}},[e._v("查询")]),s("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)])],1)],1)],1),s("s-table",{attrs:{size:"default",columns:e.columns,data:e.loadData},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return s("div",{staticStyle:{margin:"0"}},[s("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},e._l(t.permissions,(function(t,a){return s("a-col",{key:a,style:{marginBottom:"12px"},attrs:{span:12}},[s("a-col",{attrs:{lg:4,md:24}},[s("span",[e._v(e._s(t.permissionName)+"：")])]),t.actionEntitySet.length>0?s("a-col",{attrs:{lg:20,md:24}},e._l(t.actionEntitySet,(function(t,a){return s("a-tag",{key:a,attrs:{color:"cyan"}},[e._v(e._s(t.describe))])})),1):s("a-col",{attrs:{span:20}},[e._v("-")])],1)})),1)],1)}},{key:"action",fn:function(t,a){return s("span",{},[s("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),s("a-divider",{attrs:{type:"vertical"}}),s("a-dropdown",[s("a",{staticClass:"ant-dropdown-link"},[e._v(" 更多 "),s("a-icon",{attrs:{type:"down"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)],1)}}])}),s("a-modal",{staticStyle:{top:"20px"},attrs:{title:"操作",width:800},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("a-form",{attrs:{autoFormCreate:function(e){t.form=e}}},[s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:"",validateStatus:"success"}},[s("a-input",{attrs:{placeholder:"唯一识别码",id:"no",disabled:"disabled"},model:{value:e.mdl.id,callback:function(t){e.$set(e.mdl,"id",t)},expression:"mdl.id"}})],1),s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:"",validateStatus:"success"}},[s("a-input",{attrs:{placeholder:"起一个名字",id:"role_name"},model:{value:e.mdl.name,callback:function(t){e.$set(e.mdl,"name",t)},expression:"mdl.name"}})],1),s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:"",validateStatus:"warning"}},[s("a-select",{model:{value:e.mdl.status,callback:function(t){e.$set(e.mdl,"status",t)},expression:"mdl.status"}},[s("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),s("a-select-option",{attrs:{value:"2"}},[e._v("禁用")])],1)],1),s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[s("a-textarea",{attrs:{rows:5,placeholder:"...",id:"describe"},model:{value:e.mdl.describe,callback:function(t){e.$set(e.mdl,"describe",t)},expression:"mdl.describe"}})],1),s("a-divider"),s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.mdl.permissions,(function(t,a){return s("a-row",{key:a,attrs:{gutter:16}},[s("a-col",{attrs:{span:4}},[e._v(" "+e._s(t.permissionName)+"： ")]),s("a-col",{attrs:{span:20}},[s("a-checkbox-group",{attrs:{options:t.actionsOptions}})],1)],1)})),1)],1)],1)],1)},r=[],l=(a("4160"),a("d81d"),a("159b"),a("2af9")),n=a("0fea"),o={name:"TableList",components:{STable:l["q"]},data:function(){return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(t){return Object(n["c"])(t).then((function(t){return t.result}))},selectedRowKeys:[],selectedRows:[]}},created:function(){Object(n["d"])().then((function(t){})),Object(n["c"])().then((function(t){}))},methods:{handleEdit:function(t){this.mdl=Object.assign({},t),this.mdl.permissions.forEach((function(t){t.actionsOptions=t.actionEntitySet.map((function(t){return{label:t.describe,value:t.action,defaultCheck:t.defaultCheck}}))})),this.visible=!0},handleOk:function(){},onChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},i=o,c=a("2877"),d=Object(c["a"])(i,s,r,!1,null,null,null);e["default"]=d.exports}}]);