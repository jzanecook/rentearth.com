(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{943:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[id]",function(){return r(3527)}])},3527:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return Y}});var n=r(2322),o=r(8939),i=r(309),t=r(6790),l=r(939),a=r(3030),c=r(3535),d=r(2784),_=r(1189),x=r(8413);let u=new _.KU().setEndpoint("https://ap.kbve.com/v1").setProject("6436a6dc9a6b48db802f"),h=new _.mR(u),m=(0,x.c)(void 0);h.getSession("current").then(function(e){m.set(e)},function(e){m.set(void 0)});let p=(0,x.c)(void 0);(0,x.c)(void 0),(0,x.c)(!1),(0,x.c)(void 0),(0,x.c)(void 0),m.subscribe(async e=>{(null==e?void 0:e.userId)&&p.set(await f())});let b=async(e,s,r)=>{try{await h.create(_.ID.unique(),e,s,r);let n=await h.createEmailSession(e,s);m.set(n)}catch(e){throw e.message}},f=async()=>{try{return h.get()}catch(e){throw e.message}};var g=r(4189);(0,x.c)(void 0);let w=(0,x.c)(void 0),j=(0,x.c)(void 0);(0,x.c)(void 0),(0,x.c)(void 0),(0,x.c)(void 0);let v=(0,x.c)(void 0),$=(0,x.c)(void 0),I=(0,x.c)(void 0),k=async(e,s)=>{(0,g.oE)(async()=>{console.log("[TASK] : Setting ".concat(s)),e.set(s)})};var z=r(4419);let C=()=>{let[e,s]=(0,d.useState)(""),[r,_]=(0,d.useState)(!0),x=(0,z.o)(j),u=(0,z.o)(I),h=(0,z.o)(v),m=(0,z.o)($);return(0,z.o)(w),(0,d.useEffect)(()=>{console.log("Current Status: ".concat(x));let e=async()=>{try{await b(String(h),String(m),String(u)),k(j,void 0)}catch(e){k(w,e),k(j,e)}};"submitting"===x&&e()},[x]),(0,n.jsxs)(o.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,n.jsx)(i.zx,{children:(0,n.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Welcome on board!"})}),(0,n.jsx)(o.sL,{space:!0,children:(0,n.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>k(j,"submitting"),borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[(0,n.jsxs)("span",{className:"  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-20px _lh-222976573 ",children:[" ","Lets create an account!"]}),(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsxs)(l.__,{htmlFor:"registerUsername",width:80,size:"$1",children:["Username:"," "]}),(0,n.jsx)(a.II,{id:"registerUsername",flex:1,size:"$4",onChangeText:e=>k(I,e),value:null!=u?u:"",placeholder:"Your Username!"})]}),(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsxs)(l.__,{htmlFor:"registerEmail",width:80,size:"$1",children:["Email:"," "]}),(0,n.jsx)(a.II,{id:"registerEmail",flex:1,size:"$4",onChangeText:e=>k(v,e),value:null!=h?h:"",placeholder:"Your Email!"})]}),(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsxs)(l.__,{htmlFor:"registerPassword",width:80,size:"$1",children:["Password:"," "]}),(0,n.jsx)(a.II,{id:"registerPassword",flex:1,size:"$4",onChangeText:e=>k($,e),value:null!=m?m:"",secureTextEntry:!0})]}),(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsxs)(l.__,{htmlFor:"confirm",width:80,size:"$1",children:["Confirm:"," "]}),(0,n.jsx)(a.II,{id:"confirm",flex:1,size:"$4",onChangeText:s,value:null!=e?e:"",secureTextEntry:!!r})]}),(0,n.jsx)(t.l0.Trigger,{asChild:!0,disabled:"submitting"===x,children:(0,n.jsx)(i.zx,{icon:"submitting"===x?()=>(0,n.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Register"})}),(0,n.jsx)("span",{className:"  is_SizableText font_body  _ff-299667014 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _col-E879F935 _fow-233016140 _ls-167744059 _fos-15px _lh-222976573 ",children:null!=x?x:""}),(0,n.jsx)("span",{className:"  is_SizableText font_body  _ff-299667014 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _col-E879F935 _fow-233016140 _ls-167744059 _fos-10px _lh-222976573 ",children:"Shadow Wizard Money Gang - v0.1"})]})})]})};r(9392);var E=r(6321);let T=e=>(0,n.jsx)(o.sL,{alignItems:"center",space:"$1",children:(0,n.jsx)(i.zx,{...(0,E.n)({href:e.link}),children:(0,n.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:e.data})})}),y=e=>{var s,r,i,t;return(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsx)(l.__,{htmlFor:e.data.concat(null!==(s=e.formId)&&void 0!==s?s:""),width:80,size:"$1",children:"".concat(e.data,":")}),(0,n.jsx)(a.II,{id:e.data.concat(null!==(r=e.formId)&&void 0!==r?r:""),flex:1,size:"$4",onChangeText:s=>k(e.storage,s),value:null!==(i=(0,z.o)(e.storage))&&void 0!==i?i:"",placeholder:"Your ".concat(e.data,"!"),secureTextEntry:null!==(t=e.secure)&&void 0!==t&&t})]})},S=e=>{let s=(0,z.o)(j);return(0,n.jsx)(o.sL,{space:!0,children:(0,n.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>k(j,"submitting"),borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[e.data&&(0,n.jsxs)("span",{className:"  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-12px _lh-222976573 ",children:[" ",e.data]}),e.children,(0,n.jsx)(t.l0.Trigger,{asChild:!0,disabled:void 0!==s,children:(0,n.jsx)(i.zx,{icon:"submitting"===s?()=>(0,n.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Log In"})}),(0,n.jsx)("h4",{className:"  is_H4 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632953 _fow-233016233 _ls-167744152 _fos-229441313 _lh-222976666 _ussel-auto ",children:null!=s?s:""})]})})};r(2166);let N=()=>{let e=(0,z.o)(j);return(0,d.useEffect)(()=>{if("submitting"===e){let e=setTimeout(()=>k(j,void 0),4e3);return()=>{clearTimeout(e)}}},[e]),(0,n.jsxs)(o.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,n.jsx)(i.zx,{children:(0,n.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Hi! Welcome"})}),(0,n.jsx)(o.sL,{space:!0,children:(0,n.jsxs)(S,{data:"A more productive you is waiting inside this app. Please enter your details!",children:[(0,n.jsx)(y,{formId:"login",data:"Email",storage:v}),(0,n.jsx)(y,{formId:"login",data:"Password",storage:$,secure:!0})]})}),(0,n.jsx)(T,{data:"Forgot Password?",link:"/account/recover"}),(0,n.jsx)(T,{data:"Don't have an account? Sign Up!",link:"/account/register"})]})};r(4017);let F=()=>{let e=(0,z.o)(j),s=(0,z.o)(v);return(0,d.useEffect)(()=>{if(console.log("Current Status: ".concat(e)),"submitting"===e){let s=setTimeout(()=>k(j,void 0),4e3);return()=>{clearTimeout(s),console.log("[DEBUG] : Status: ".concat(e))}}},[e]),(0,n.jsxs)(o.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,n.jsx)(i.zx,{children:(0,n.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Oh, no! You forgot?"})}),(0,n.jsx)(o.sL,{space:!0,children:(0,n.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>k(j,"submitting"),borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[(0,n.jsxs)("span",{className:"  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-12px _lh-222976573 ",children:[" ","Enter your email and we'll send you a link to change a new password!"]}),(0,n.jsxs)(o.sL,{alignItems:"center",space:"$1",children:[(0,n.jsxs)(l.__,{htmlFor:"recover",width:80,size:"$1",children:["Recover:"," "]}),(0,n.jsx)(a.II,{id:"recover",flex:1,size:"$4",onChangeText:e=>k(v,e),value:null!=s?s:"",placeholder:"Your Email!"})]}),(0,n.jsx)(t.l0.Trigger,{asChild:!0,disabled:void 0!==e,children:(0,n.jsx)(i.zx,{icon:"submitting"===e?()=>(0,n.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Request Password"})}),(0,n.jsx)("h4",{className:"  is_H4 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632953 _fow-233016233 _ls-167744152 _fos-229441313 _lh-222976666 _ussel-auto ",children:null!=e?e:""})]})})]})};r(4429);var L=r(641),P=r(4818);let{useParam:W}=(0,P.X)(),A=e=>{switch(e.id){case"register":return(0,n.jsx)(C,{});case"login":return(0,n.jsx)(N,{});case"recover":return(0,n.jsx)(F,{});default:return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{className:"  is_Paragraph font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-700 _ls-167744059 _fos-229441220 _lh-222976573 _ussel-auto _ta-center ",children:"Auth ID: ".concat(e.id)})})}};function H(){let[e]=W("id"),s=(0,E.n)({href:"/"});return(0,n.jsxs)(o.FA,{f:1,jc:"center",ai:"center",backgroundColor:"#000",space:!0,children:[(0,n.jsx)(A,{id:e}),(0,n.jsx)(i.zx,{...s,icon:L.s,children:"Go Home"})]})}r(8023);var R=r(7729),U=r.n(R);function Y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U(),{children:(0,n.jsx)("title",{children:" Account "})}),(0,n.jsx)(H,{})]})}},8023:function(){},4017:function(){},4429:function(){},9392:function(){},2166:function(){}},function(e){e.O(0,[932,746,774,888,179],function(){return e(e.s=943)}),_N_E=e.O()}]);