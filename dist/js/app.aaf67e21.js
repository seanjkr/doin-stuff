(function(e){function t(t){for(var n,r,s=t[0],a=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(d,r)&&d[r]&&f.push(d[r][0]),d[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var a=o[s];0!==d[a]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},d={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=a;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("md-toolbar",{staticClass:"main-nav"},[o("div",{staticClass:"md-toolbar-section-start"},[o("h3",{staticClass:"md-display-1"},[e._v("Doin Stuff!")])]),o("h3",{staticClass:"md-caption"},[e._v(" The one stop shop for all your To-Do needs ")])]),e._m(0),o("div",{staticClass:"todo-main md-layout"},[e._l(e.todoLists,(function(t){return o("md-card",{key:t.id,staticClass:"todoList-card md-layout-item md-size-45"},[o("md-card-header",[o("md-field",[o("md-input",{staticClass:"add-todo",attrs:{placeholder:"Add a todo"},on:{keydown:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.addTodo(t)}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1)],1),o("md-card-content",[o("md-list",e._l(t.todos,(function(n){return o("md-list-item",{key:n.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.completed)?e._i(n.completed,null)>-1:n.completed},on:{change:function(t){var o=n.completed,d=t.target,i=!!d.checked;if(Array.isArray(o)){var r=null,s=e._i(o,r);d.checked?s<0&&e.$set(n,"completed",o.concat([r])):s>-1&&e.$set(n,"completed",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(n,"completed",i)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.editedTodo!==n,expression:"editedTodo !== todo"}],staticClass:"todo-label md-list-item-text",class:{editing:e.editedTodo===n},on:{click:function(t){return e.editTodo(n)}}},[o("p",[e._v(" "+e._s(n.label)+" ")])]),o("input",{directives:[{name:"model",rawName:"v-model",value:n.label,expression:"todo.label"},{name:"show",rawName:"v-show",value:e.editedTodo==n,expression:"editedTodo == todo"}],staticClass:"editing",domProps:{value:n.label},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.noEdit(n)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.completeEdit(n)}],input:function(t){t.target.composing||e.$set(n,"label",t.target.value)}}}),o("md-button",{on:{click:function(o){return e.removeTodo(t,n)}}},[e._v(" Delete ")])],1)})),1)],1),o("md-card-actions",[o("md-button",{on:{click:function(o){return e.removeTodoList(t)}}},[e._v(" Delete List ")])],1)],1)})),o("md-button",{staticClass:"md-icon-button md-layout-item",on:{click:function(t){return e.addTodoList()}}},[o("md-icon",[e._v("add")])],1)],2)],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"todos-header"},[o("h1",{staticClass:"md-display-1"},[e._v(" To-Do Lists! ")])])}],r=(o("c975"),o("a434"),{data:function(){return{todoLists:[{todos:[],currentTodo:""}],currentTodoList:"",editedTodo:null,originalTodoLabel:""}},methods:{addTodoList:function(){this.todoLists.push({id:this.todoLists.length,todos:[]}),this.currentTodoList=this.todoList},removeTodoList:function(e){var t=this.todoLists.indexOf(e);this.todoLists.splice(t,1)},addTodo:function(e){var t=e.todos,o=e.todos.length;t.push({id:o,label:this.currentTodo,completed:!1}),this.currentTodo=""},removeTodo:function(e,t){var o=e.todos,n=o.indexOf(t);o.splice(n,1)},editTodo:function(e){this.editedTodo=e,this.originalTodoLabel=e.label},completeEdit:function(e){this.editedTodo=null,e.label||this.removeTodo(e)},noEdit:function(e){this.editedTodo&&(this.editedTodo=null,e.label=this.originalTodoLabel)}}}),s=r,a=(o("034f"),o("2877")),l=Object(a["a"])(s,d,i,!1,null,null,null),c=l.exports,u=o("9c30");o("51de");n["default"].use(u["MdField"]),n["default"].use(u["MdList"]),n["default"].use(u["MdButton"]),n["default"].use(u["MdCard"]),n["default"].use(u["MdIcon"]),n["default"].use(u["MdToolbar"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.aaf67e21.js.map