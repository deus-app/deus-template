(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7931)}])},7931:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return index_page}});var s=t(5893),n=t(8583),l=t(7294),i=t(6221),c=t(8998),r=t.n(c);let ElapsedTime=e=>{let[a,t]=(0,l.useState)("");return(0,l.useEffect)(()=>{let a;let s=Date.now(),n=(s-e.createdTime)/1e3;if(n<60)a="".concat(Math.round(n),"s");else if(n<3600)a="".concat(Math.round(n/60),"m");else if(n<=86400)a="".concat(Math.round(n/3600),"h");else{let t=new Date(e.createdTime),s=t.getDate(),n=t.toLocaleString("en-US",{month:"short"}),l=t.getFullYear()===new Date().getFullYear()?"":" ".concat(t.getFullYear());a="".concat(n," ").concat(s).concat(l)}t(a)},[e.createdTime]),(0,s.jsx)("span",{className:r().date,children:a})};var u=t(2557),d=t(6819),o=t(9488),p=t.n(o);let PrivateTask=e=>{let{task:a}=e,[t,n]=(0,l.useState)(),[i,c]=(0,l.useState)(""),r=t===a.id,toggleDone=async()=>{await u.x.private.tasks.patch({body:{taskId:a.id,done:!a.done,label:a.label}}).catch(d.F),await e.fetchTasks()},deleteTask=async()=>{await u.x.private.tasks.delete({body:{taskId:a.id}}).catch(d.F),await e.fetchTasks()},updateTaskLabel=async()=>{await u.x.private.tasks.patch({body:{taskId:a.id,done:a.done,label:i}}).catch(d.F),n(void 0),c(""),await e.fetchTasks()};return(0,s.jsxs)("label",{children:[(0,s.jsxs)("div",{className:p().editGroup,children:[(0,s.jsx)("input",{type:"checkbox",checked:a.done,onChange:toggleDone}),r?(0,s.jsx)("input",{type:"text",value:i,className:p().labelInput,onChange:e=>{c(e.target.value)}}):(0,s.jsx)("span",{children:a.label})]}),(0,s.jsxs)("div",{className:p().btnGroup,children:[(0,s.jsx)("input",{type:"button",value:"DELETE",className:p().btn,onClick:deleteTask}),r?(0,s.jsx)("input",{type:"button",value:"SAVE",className:p().btn,onClick:updateTaskLabel}):(0,s.jsx)("input",{type:"button",value:"EDIT",className:p().btn,onClick:()=>{n(a.id),c(a.label)}})]})]})};var _=t(8535),k=t.n(_),index_page=()=>{let[e]=(0,n.KO)(i.L),a=(0,l.useRef)(null),[t,c]=(0,l.useState)(),[r,o]=(0,l.useState)(""),[p,_]=(0,l.useState)(),[h,x]=(0,l.useState)(""),isPrivateTask=a=>(null==e?void 0:e.id)===a.author.userId,fetchTasks=async()=>{let e=await u.x.public.tasks.$get().catch(d.F);null!==e&&c(e)},createTask=async e=>{e.preventDefault(),r&&a.current&&(await u.x.private.tasks.post({body:{label:r,image:p}}).catch(d.F),o(""),_(void 0),x(""),a.current.value="",await fetchTasks())};return(0,l.useEffect)(()=>{fetchTasks()},[null==e?void 0:e.id]),(0,l.useEffect)(()=>{if(!p)return;let e=URL.createObjectURL(p);return x(e),()=>{URL.revokeObjectURL(e)}},[p]),(0,s.jsx)("div",{className:k().container,children:(0,s.jsxs)("ul",{className:k().tasks,children:[null!==e&&(0,s.jsxs)("li",{className:k().createTask,children:[(0,s.jsx)("input",{type:"text",placeholder:"What is happening?!",value:r,onChange:e=>{o(e.target.value)},className:k().createTaskInput}),p&&(0,s.jsx)("img",{src:h,className:k().taskImage}),(0,s.jsx)("input",{type:"file",ref:a,accept:".png,.jpg,.jpeg,.gif,.webp,.svg",onChange:e=>{var a;_(null===(a=e.target.files)||void 0===a?void 0:a[0])}}),(0,s.jsx)("button",{onClick:createTask,className:k().postBtn,children:"POST"})]}),null==t?void 0:t.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("li",{className:k().taskHeader,children:[(0,s.jsx)("div",{className:k().authorName,children:e.author.name}),(0,s.jsx)(ElapsedTime,{createdTime:e.createdTime})]}),(0,s.jsxs)("li",{className:k().label,children:[isPrivateTask(e)?(0,s.jsx)(PrivateTask,{task:e,fetchTasks:fetchTasks}):(0,s.jsx)("span",{children:e.label}),e.image&&(0,s.jsx)("img",{src:e.image.url,alt:e.label,className:k().taskImage})]})]},e.id))]})})}},8998:function(e){e.exports={date:"ElapsedTime_date__egZuC"}},9488:function(e){e.exports={editGroup:"PrivateTask_editGroup__H9y2v",btnGroup:"PrivateTask_btnGroup__MCo2M",labelInput:"PrivateTask_labelInput__cNF7s",btn:"PrivateTask_btn__KuR8l"}},8535:function(e){e.exports={container:"index_container___q52_",tasks:"index_tasks__ExTXY",createTask:"index_createTask__NMC14",createTaskInput:"index_createTaskInput__3gEMd",taskHeader:"index_taskHeader__8Y33Y",authorName:"index_authorName__oQHVu",label:"index_label__4mSN7",postBtn:"index_postBtn__obOzR",taskImage:"index_taskImage__ShrIs",labelInput:"index_labelInput__lFqLc"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);