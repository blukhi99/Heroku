(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{364:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("6ef77a2f",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n(364)},374:function(t,e,n){var l=n(34)(!1);l.push([t.i,".alarm-tabs[data-v-d1d0095a],.alarm-tabs[data-v-d1d0095a] .tab-content,.alarm-tabs[data-v-d1d0095a] .tab-pane{display:contents}",""]),t.exports=l},395:function(t,e,n){"use strict";n.r(e);var l,o=n(0),d=(l={watchQuery:["page"],asyncData:function(t){return{}},data:function(){return{tabIndex:0}},mounted:function(){}},Object(o.a)(l,"watchQuery",(function(t,e){})),Object(o.a)(l,"watch",{}),Object(o.a)(l,"computed",{}),Object(o.a)(l,"methods",{}),l),r=(n(373),n(14)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"mx-2 full-screen",attrs:{"no-body":""}},[n("b-row",{staticClass:"mx-0 bg-default"},[n("b-col",{staticClass:"text-left"},[n("span",{staticClass:"h3"},[t._v("Alarms")]),t._v(" "),n("span",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-help",modifiers:{"modal-help":!0}}],staticClass:"h3 text-primary click-able"},[n("font-awesome-icon",{attrs:{icon:["fas","question-circle"]}})],1)]),t._v(" "),n("b-col",{staticClass:"text-right"})],1),t._v(" "),n("b-tabs",{staticClass:"alarm-tabs",model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{attrs:{title:"Active Alarms",active:""}},[n("keep-alive",[n("alarmActive",{directives:[{name:"show",rawName:"v-show",value:0===t.tabIndex,expression:"tabIndex === 0"}]})],1)],1),t._v(" "),n("b-tab",{attrs:{title:"InActive Alarms"}},[n("keep-alive",[n("alarmInActive",{directives:[{name:"show",rawName:"v-show",value:1===t.tabIndex,expression:"tabIndex === 1"}]})],1)],1)],1)],1),t._v(" "),n("b-modal",{ref:"modal-help",attrs:{id:"modal-help",size:"md",title:"Help","hide-footer":""}},[n("div",[n("p",[t._v("The PACE alarm system design is based on the, “ANSI/ISA-18.2-2016 Management of Alarm Systems for the Process Industries” specification. The foundation of this design is the 4 states of an Alarm\n      ")]),t._v(" "),n("dl",[n("dt",{staticStyle:{color:"#008000"}},[t._v("Normal")]),t._v(" "),n("dd",[t._v("Normal running condition, all previous alarms have been acknowledged")]),t._v(" "),n("dt",{staticStyle:{color:"#FF0000"}},[t._v("Alarm")]),t._v(" "),n("dd",[t._v("Abnormal condition, not yet acknowledged")]),t._v(" "),n("dt",{staticStyle:{color:"#c1c105"}},[t._v("Return-to-Normal")]),t._v(" "),n("dd",[t._v("Normal running condition, but previous alarm has not been acknowledged. A new alarm will\n              return to the Alarm state.")]),t._v(" "),n("dt",{staticStyle:{color:"#FF360B"}},[t._v("Acknowledged")]),t._v(" "),n("dd",[t._v("Abnormal condition still exists, but it has been acknowledged.")])])])])],1)}),[],!1,null,"d1d0095a",null);e.default=component.exports}}]);