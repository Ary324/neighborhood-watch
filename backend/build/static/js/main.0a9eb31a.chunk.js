(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),c=s(26),n=s.n(c),i=(s(33),s(34),s(35),s(9)),o=s(0);var l=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsx)("h3",{children:"Logo"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(i.b,{style:e,to:"/about",children:Object(o.jsx)("li",{children:"About"})}),Object(o.jsx)(i.b,{style:e,to:"/login",children:Object(o.jsx)("li",{children:"Login"})}),Object(o.jsx)(i.b,{style:e,to:"/register",children:Object(o.jsx)("li",{children:"Register"})})]})]})};s(45);var j=function(){return Object(o.jsx)("h3",{children:"Home Page"})};var d=function(){return Object(o.jsx)("h3",{children:"About"})};s(65);var m=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"header",children:"Login"}),Object(o.jsx)("div",{className:"form-container",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Email:"}),Object(o.jsx)("input",{type:"email",name:"email",placeholder:"email",required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password:"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"password",required:!0})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("button",{type:"submit",className:"btn",children:"Login"})})]})})]})})},b=s(11),u=(s(66),s(12)),h=s(17);function p(e){var t={};return e.first_name.trim()||(t.first_name="First Name is Required"),e.last_name.trim()||(t.last_name="Last Name is Required"),e.country.trim()||(t.country="Country is Required"),e.province_or_state.trim()||(t.province_or_state="Province/State is Required"),e.city.trim()||(t.city="City is Required"),e.street.trim()||(t.street="Street is Required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email Required",e.password?e.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password Required",e.password_confirm?e.password_confirm!==e.password&&(t.password_confirm="Passwords do not match"):t.password_confirm="Confirm your Password",t}var x=function(){var e=function(e){var t=Object(r.useState)({first_name:"",last_name:"",country:"",province_or_state:"",city:"",street:"",email:"",password:"",password_confirm:","}),s=Object(b.a)(t,2),a=s[0],c=s[1],n=Object(r.useState)({}),i=Object(b.a)(n,2),o=i[0],l=i[1];return{handleChange:function(e){var t=e.target,s=t.name,r=t.value;console.log("values --\x3e",a),c(Object(h.a)(Object(h.a)({},a),{},Object(u.a)({},s,r)))},values:a,handleSubmit:function(e){e.preventDefault(),l(p(a))},errors:o}}(),t=e.handleChange,s=e.values,a=e.handleSubmit,c=e.errors,n=Object(r.useState)({disabled:"true"}),i=Object(b.a)(n,2);return i[0],i[1],Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"header",children:"Register a New Account!"}),Object(o.jsx)("div",{className:"form-container",children:Object(o.jsxs)("form",{onSubmit:a,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"First Name:"}),Object(o.jsx)("input",{type:"text",name:"first_name",placeholder:"first name",value:s.first_name,onChange:t}),c.first_name&&Object(o.jsx)("p",{className:"error-message",children:c.first_name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Last Name:"}),Object(o.jsx)("input",{type:"text",name:"last_name",placeholder:"last name",value:s.last_name,onChange:t}),c.last_name&&Object(o.jsx)("p",{className:"error-message",children:c.last_name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Country:"}),Object(o.jsx)("input",{type:"text",name:"country",placeholder:"country",value:s.country,onChange:t}),c.country&&Object(o.jsx)("p",{className:"error-message",children:c.country})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Province/State:"}),Object(o.jsx)("input",{type:"text",name:"province_or_state",placeholder:"province/state",value:s.province_or_state,onChange:t}),c.province_or_state&&Object(o.jsx)("p",{className:"error-message",children:c.province_or_state})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"City:"}),Object(o.jsx)("input",{type:"text",name:"city",placeholder:"city",value:s.city,onChange:t}),c.city&&Object(o.jsx)("p",{className:"error-message",children:c.city})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Street:"}),Object(o.jsx)("input",{type:"text",name:"street",value:s.street,onChange:t,placeholder:"street"}),c.street&&Object(o.jsx)("p",{className:"error-message",children:c.street})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Email:"}),Object(o.jsx)("input",{type:"email",name:"email",placeholder:"email",value:s.email,onChange:t}),c.email&&Object(o.jsx)("p",{className:"error-message",children:c.email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password:"}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"password",value:s.password,onChange:t}),c.password&&Object(o.jsx)("p",{className:"error-message",children:c.password})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Confirm Password:"}),Object(o.jsx)("input",{type:"password",name:"password_confirm",placeholder:"password",value:s.password_confirm,onChange:t}),c.password_confirm&&Object(o.jsx)("p",{className:"error-message",children:c.password_confirm})]}),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsx)("button",{type:"submit",className:"btn",disabled:"true",onChange:this.handleButton,children:"Register"}),Object(o.jsxs)("p",{children:["Already have an account? ",Object(o.jsx)("a",{href:"/login",children:"Login here"})]})]})]})})]})})},O=(s(67),s.p+"static/media/vote.e5176f4e.jpeg");s(68);var v=function(e){return Object(o.jsxs)("div",{className:"Button-Group",children:[Object(o.jsx)("img",{className:"upvote",onClick:function(){return console.log("click")},src:O,alt:"UpVote"}),Object(o.jsx)("img",{className:"downvote",onClick:function(){return console.log("click")},src:O,alt:"DownVote"})]})};s(69);var f=function(e){return Object(o.jsxs)("div",{className:"post-footer",children:[Object(o.jsx)("p",{children:"Likes: 50 "}),Object(o.jsx)("p",{children:"Expand Comments"}),Object(o.jsx)(v,{})]})};var g=function(e){return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)("h3",{children:"Title"}),Object(o.jsx)("p",{children:"Description"}),Object(o.jsx)(f,{})]})},N=s(2);var w=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{className:"nav"}),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{path:"/",exact:!0,component:j}),Object(o.jsx)(N.a,{path:"/about",component:d}),Object(o.jsx)(N.a,{path:"/login",component:m}),Object(o.jsx)(N.a,{path:"/register",component:x}),Object(o.jsx)(N.a,{path:"/posts",component:g})]})})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),r(e),a(e),c(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),y()}},[[70,1,2]]]);
//# sourceMappingURL=main.0a9eb31a.chunk.js.map