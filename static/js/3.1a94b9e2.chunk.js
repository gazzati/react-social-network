(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[3],{398:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1iKbW",dialogsItems:"Dialogs_dialogsItems__3Q0RQ",item:"Dialogs_item__2DVCQ",activeDialogItem:"Dialogs_activeDialogItem__2-nEP",userName:"Dialogs_userName__91Hcm",messages:"Dialogs_messages__3dwf2",noMessages:"Dialogs_noMessages__2T3gb",messagesBlock:"Dialogs_messagesBlock__cP_-T",message:"Dialogs_message__1LrPy",myMessage:"Dialogs_myMessage__qugb6",form:"Dialogs_form__3pkEW",button:"Dialogs_button__1m-Z1"}},399:function(e,a,s){"use strict";s.r(a);var t=s(24),g=s(0),o=s.n(g),l=s(398),i=s.n(l),m=s(14),n=s(30),c=s.n(n);var r=e=>{let a=e.currentDialog===e.id?"".concat(i.a.item," ").concat(i.a.activeDialogItem):i.a.item;return o.a.createElement(m.b,{to:"/dialogs/"+e.id,className:a},o.a.createElement("img",{src:e.photo||c.a,alt:""}),o.a.createElement("div",{className:i.a.userName},e.name))};var d=e=>{let a=e.isItMe?"".concat(i.a.message," ").concat(i.a.myMessage):i.a.message;return o.a.createElement("li",{className:a},e.message)},u=s(16),_=s(162),b=s(71);Object(b.a)(50);var M=Object(_.a)({form:"dialog-add-message-form"})(e=>o.a.createElement("form",{className:i.a.form,onSubmit:e.handleSubmit,onKeyDown:a=>((e,a)=>{"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),a())})(a,e.handleSubmit)},Object(u.c)("Enter your message","newMessageBody",[],u.b,{},{className:"sendMessageArea"}),o.a.createElement("button",{className:i.a.button},"Send"))),E=s(26);var D=e=>{let a=Object(g.useState)(0),s=Object(t.a)(a,2),l=s[0],m=s[1];Object(g.useEffect)(()=>{e.getAllDialogs()},[e.dialogsPage.messages]);let n=e.dialogsPage.dialogs.map(e=>o.a.createElement("span",{onClick:()=>u(e.id),key:e.id},o.a.createElement(r,{name:e.userName,key:e.id,id:e.id,photo:e.photos.large,currentDialog:l,hasNewMessage:e.hasNewMessages,newMessagesCount:e.newMessagesCount}))),c=e.dialogsPage.messages.map(a=>o.a.createElement(d,{isItMe:e.authorizedUserId===a.senderId,message:a.body,key:a.id}));Object(g.useEffect)(()=>{n=e.dialogsPage.dialogs.map(e=>o.a.createElement("span",{onClick:()=>u(e.id)},o.a.createElement(r,{name:e.userName,key:e.id,id:e.id,photo:e.photos.large,currentDialog:l,hasNewMessage:e.hasNewMessages,newMessagesCount:e.newMessagesCount}))),c=e.dialogsPage.messages.map(a=>o.a.createElement(d,{isItMe:e.authorizedUserId===a.senderId,message:a.body,key:a.id}))},[e.dialogsPage.messages,e.dialogsPage.dialogs]);const u=a=>{e.getMessages(a),m(a)};return o.a.createElement("div",{className:i.a.dialogs},e.isFetching?o.a.createElement(E.a,null):null,o.a.createElement("div",{className:i.a.dialogsItems},n),0!==l&&o.a.createElement("div",{className:i.a.messages},o.a.createElement("ul",{className:i.a.messagesBlock},c.length?c:o.a.createElement("div",{className:i.a.noMessages},"No messages")),o.a.createElement(M,{onSubmit:a=>{e.sendMessage(l,a.newMessageBody),e.getMessages(l),a.newMessageBody=""}})))},h=s(60),N=s(11),p=s(87),y=s(9);a.default=Object(y.d)(Object(N.b)(e=>({dialogsPage:e.dialogsPage,authorizedUserId:e.auth.id,isFetching:e.dialogsPage.isFetching}),{getDialogs:h.e,sendMessage:h.d,getAllDialogs:h.b,getMessages:h.c}),p.a)(D)}}]);
//# sourceMappingURL=3.1a94b9e2.chunk.js.map