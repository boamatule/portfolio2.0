import{R as _,u as N,r as u,j as p,a as o,E as S}from"./index-541256d7.js";import{s as j}from"./styles-bea25d13.js";import{S as q,s as f}from"./SectionWrapper-de908c20.js";import{m as h}from"./motion-9dbb0517.js";const m={_origin:"https://api.emailjs.com"},T=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},g=(t,e,r)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class x{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const v=(t,e,r={})=>new Promise((i,a)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:s})=>{const l=new x(s);l.status===200||l.text==="OK"?i(l):a(l)}),n.addEventListener("error",({target:s})=>{a(new x(s))}),n.open("POST",m._origin+t,!0),Object.keys(r).forEach(s=>{n.setRequestHeader(s,r[s])}),n.send(e)}),E=(t,e,r,i)=>{const a=i||m._userID;return g(a,t,e),v("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:a,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"})},z=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},C=(t,e,r,i)=>{const a=i||m._userID,n=z(r);g(a,t,e);const s=new FormData(n);return s.append("lib_version","3.11.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",a),v("/api/v1.0/email/send-form",s)},A={init:T,send:E,sendForm:C};var y={},F=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;y.validate=function(t){if(!t||t.length>254)return!1;var e=F.test(t);if(!e)return!1;var r=t.split("@");if(r[0].length>64)return!1;var i=r[1].split(".");return!i.some(function(a){return a.length>63})};const D=()=>{const t=N(),[e,r]=u.useState(!1),i=u.useRef(),[a,n]=u.useState({name:"",email:"",message:""}),s=d=>{const{target:c}=d,{name:b,value:w}=c;n({...a,[b]:w})},l=d=>{if(d.preventDefault(),r(!0),!y.validate(a.email)){alert("Please enter a valid email address."),r(!1);return}A.send("service_h5mfpbm","template_8gqcrzj",{from_name:a.name,to_name:"Boa Matule",from_email:a.email,to_email:"boa.matule@gmail.com",message:a.message},"3zgiftRNu-bm6HAj0").then(c=>{r(!1),t("/Success"),setTimeout(()=>{t("/")},3e3),n({name:"",email:"",message:""})}).catch(c=>{r(!1),console.log(c.text),alert("Ops! Something went terribly wrong, please try again")}),d.target.reset()};return p("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[p(h.div,{variants:f("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[o("h2",{className:`${j.sectionHeadText} dark:text-gray-400`,children:"Get in touch."}),p("form",{ref:i,onSubmit:l,className:"flex flex-col gap-4 mt-12",children:[o("label",{className:"flex flex-col",children:o("input",{className:"bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium",type:"text",name:"name",value:a.name,onChange:s,placeholder:"What's your name",required:!0})}),o("label",{className:"flex flex-col",children:o("input",{className:"bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium",type:"email",name:"email",value:a.email,onChange:s,placeholder:"What's your Email",required:!0})}),o("label",{className:"flex flex-col",children:o("textarea",{className:"bg-tertiary rounded-lg py-4 px-6 text-white outline-none placeholder:text-secondary border-none font-medium",rows:"7",type:"text",name:"message",value:a.message,onChange:s,placeholder:"What are you looking for today?",required:!0})}),o("button",{type:"submit",className:"bg-tertiary rounded-xl py-3 px-8 text-white outline-none border-none font-medium shadow-md shadow-primary w-fit",children:e?"Sending...":"Send Message"})]})]}),o(h.div,{variants:f("right","tween",.2,1),className:"xl:flex-1 xl:h.auto md:h-[550px] h-[350px]",children:o(S,{})})]})},P=_.memo(q(D,"contact"));export{P as default};
//# sourceMappingURL=Contact-bdd873a1.js.map
