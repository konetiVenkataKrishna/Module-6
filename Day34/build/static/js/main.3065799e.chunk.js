(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(31),c=n.n(r),a=n(7),o=n(0),s=n(2),b=n(13),i=n(4),u=n.n(i),j=n(8),l=n(9),d=n.n(l),m=n(18),h=n(1);var p=function(){var e=Object(s.f)(),t=Object(s.g)().id,n=Object(m.a)({initialValues:{book:"",number:""},validate:function(e){var t={};return e.book||(t.book="Required"),e.number||(t.number="Required"),t},onSubmit:function(){var n=Object(j.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.put("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/".concat(t),r);case 2:n.sent,e("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});Object(o.useEffect)((function(){r()}),[]);var r=function(){var e=Object(j.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/".concat(t));case 2:r=e.sent,n.setValues(r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:n.handleSubmit,className:"formtag",children:[Object(h.jsx)("input",Object(b.a)({type:"text",placeholder:"Enter Book Name",name:"book"},n.getFieldProps("book"))),n.touched.book&&n.errors.book?Object(h.jsx)("h4",{style:{margin:"0",color:"red"},children:n.errors.book}):null,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(b.a)({type:"number",placeholder:"Enter Number of Books",name:"number"},n.getFieldProps("number"))),n.touched.number&&n.errors.number?Object(h.jsx)("h4",{style:{margin:"0",color:"red"},children:n.errors.number}):null,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})})};var O=function(){var e=Object(s.f)(),t=Object(m.a)({initialValues:{book:"",number:""},validate:function(e){var t={};return e.book||(t.book="Required"),e.number||(t.number="Required"),t},onSubmit:function(){var t=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,d.a.post("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik",n);case 3:t.sent,e("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:t.handleSubmit,className:"formtag",children:[Object(h.jsx)("input",Object(b.a)({type:"text",placeholder:"Enter Book Name",name:"book"},t.getFieldProps("book"))),t.touched.book&&t.errors.book?Object(h.jsx)("h4",{style:{margin:"0",color:"red"},children:t.errors.book}):null,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(b.a)({type:"number",placeholder:"Enter Number of Books",name:"number"},t.getFieldProps("number"))),t.touched.number&&t.errors.number?Object(h.jsx)("h4",{style:{margin:"0",color:"red"},children:t.errors.number}):null,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})})},x=n(11);var f=function(){var e=Object(o.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){c()}),[]);var s=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={book:t.book,number:t.number-1},e.next=3,d.a.put("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/".concat(t.id),n);case 3:e.sent,c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={book:t.book,number:t.number+1},e.next=3,d.a.put("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/".concat(t.id),n);case 3:e.sent,c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/".concat(t));case 2:e.sent,c();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:""==n?Object(h.jsx)("h1",{children:"No Data To Display"}):Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"SL.NO"}),Object(h.jsx)("th",{children:"Book Name"}),Object(h.jsx)("th",{children:"Number of Books"}),Object(h.jsx)("th",{colSpan:"4",children:"Actions"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.id}),Object(h.jsx)("td",{children:e.book}),Object(h.jsx)("td",{children:e.number}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return s(e)},className:"minus",children:" - "})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return b(e)},className:"plus",children:" + "})}),Object(h.jsx)("td",{children:Object(h.jsx)(a.b,{to:"/edit/".concat(e.id),children:Object(h.jsx)("button",{className:"editbtn",children:"Edit"})})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return i(e.id)},className:"deletebtn",children:"Delete"})})]},t)}))})]})})};var k=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(a.b,{to:"/",className:"btn",children:Object(h.jsx)("button",{className:"btnt",children:"Table"})}),Object(h.jsx)(a.b,{to:"/addinput",className:"btn",children:Object(h.jsx)("button",{className:"btna",children:"Add Data"})})]})};var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)("div",{className:"mainbody",children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",element:Object(h.jsx)(f,{})}),Object(h.jsx)(s.a,{path:"/addinput",element:Object(h.jsx)(O,{})}),Object(h.jsx)(s.a,{path:"/edit/:id",element:Object(h.jsx)(p,{})})]})})]})};n(61);c.a.render(Object(h.jsx)(a.a,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3065799e.chunk.js.map