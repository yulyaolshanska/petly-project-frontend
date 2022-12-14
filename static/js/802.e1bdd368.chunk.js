"use strict";(self.webpackChunkpetly_project_frontend=self.webpackChunkpetly_project_frontend||[]).push([[802],{2950:function(n,e,t){t(2791);e.Z=t.p+"static/media/eye-off.e5a32984f0d3123dccd116a852867930.svg"},8284:function(n,e,t){t(2791);e.Z=t.p+"static/media/eye.dd0d0ce95c0a4e0bd8b1169e000e1dda.svg"},4684:function(n,e,t){var i=t(1413),o=t(4165),r=t(5861),a=t(885),d=t(1134),u=t(5048),s=t(2791),c=t(4761),l=t(4148),p=t(3602),m=t(7689),f=t(9008),h=t(9085),g=t(2950),x=t(8284),b=t(3329);e.Z=function(){var n,e,t,v,Z,w,y=(0,p.DW)(),j=(0,a.Z)(y,2),k=j[0],P=j[1].isLoading,z=l.Gb.o4,I=(0,u.I0)(),S=(0,m.s0)(),T=(0,s.useState)(!1),M=(0,a.Z)(T,2),q=M[0],C=M[1],E=(0,s.useState)(!1),A=(0,a.Z)(E,2),W=A[0],$=A[1],B=(0,s.useState)(!1),D=(0,a.Z)(B,2),L=D[0],U=D[1],_=(0,d.cI)({mode:"onBlur"}),N=_.register,G=_.handleSubmit,F=_.formState,K=F.errors,R=F.isValid,V=_.setFocus,Y=_.watch;(0,s.useEffect)((function(){L&&V("name"),V("email")}),[L,V]);var H=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(e){var t,i,r,a,d,u;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,i=e.password,r=e.name,a=e.city,d=e.phone,n.prev=1,a=""===a?a="no info":a,d=""===d?d="no info":d,n.next=6,k({email:t,password:i,name:r,city:a,phone:d});case 6:u=n.sent,I(z(u.data.token)),S("/user"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),(0,f.G)();case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsxs)(c.l0,{onSubmit:G(H),autoComplete:"on",children:[P,!L&&(0,b.jsxs)("div",{children:[(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"Email"},N("email",{required:"This is required",pattern:{value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,message:"Check your email"}})),{},{type:"email",placeholder:"Email"})),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.email)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(n=K.email)||void 0===n?void 0:n.message})}),(0,b.jsxs)(c.W4,{children:[(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"Password"},N("password",{required:"This is required",minLength:{value:7,message:"Min length is 7"},maxLength:{value:32,message:"Min length is 32"},pattern:{value:/^\S*$/,message:"Password should not contain spaces"}})),{},{type:q?"text":"password",placeholder:"Password"})),(0,b.jsx)(c.t7,{name:"showPass",onMouseDown:function(){return C(!0)},onTouchStart:function(){return C(!0)},onMouseUp:function(){return C(!1)},onTouchEnd:function(){return C(!1)},children:(0,b.jsx)("img",{src:q?x.Z:g.Z,alt:"button view/hidden password"})})]}),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.password)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(e=K.password)||void 0===e?void 0:e.message})}),(0,b.jsxs)(c.W4,{children:[(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"Confirm Password"},N("confirmPassword",{required:"This is required",validate:function(n){if(Y("password")!==n)return"Your passwords do not match"}})),{},{type:W?"text":"password",placeholder:"Confirm Password"})),(0,b.jsx)(c.t7,{name:"showConfirmPass",onMouseDown:function(){return $(!0)},onTouchStart:function(){return $(!0)},onMouseUp:function(){return $(!1)},onTouchEnd:function(){return $(!1)},children:(0,b.jsx)("img",{src:W?x.Z:g.Z,alt:"button view/hidden password"})})]}),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.confirmPassword)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(t=K.confirmPassword)||void 0===t?void 0:t.message})})]}),L&&(0,b.jsxs)("div",{children:[(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"Name"},N("name",{required:"This is required",pattern:{value:/[a-zA-Z]+/,message:"Enter only letters"}})),{},{type:"text",placeholder:"Name"})),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.name)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(v=K.name)||void 0===v?void 0:v.message})}),(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"City"},N("city",{pattern:{value:/^(\w+(,)\s*)+\w+$/,message:"Error. Example: Brovary, Kyiv"}})),{},{type:"text",placeholder:"City, region"})),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.city)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(Z=K.city)||void 0===Z?void 0:Z.message})}),(0,b.jsx)(c.II,(0,i.Z)((0,i.Z)({label:"Phone"},N("phone",{minLength:{value:13,message:"Min length is 13"},maxLength:{value:13,message:"Min length is 13"},pattern:{value:/^\+380\d{3}\d{2}\d{2}\d{2}$/,message:"Number must be +3800000000 "}})),{},{type:"tel",placeholder:"Mobile Phone"})),(0,b.jsx)(c.y,{children:(null===K||void 0===K?void 0:K.phone)&&(0,b.jsx)("p",{children:null===K||void 0===K||null===(w=K.phone)||void 0===w?void 0:w.message})})]}),L?(0,b.jsx)(c.qn,{type:"submit",children:"Register"}):(0,b.jsx)(c.EU,{type:"button",onClick:function(){U(!0)},disabled:!R,children:"Next"}),L&&(0,b.jsx)(c.a5,{type:"button",onClick:function(){U(!1)},children:"Back"}),(0,b.jsx)(h.Ix,{})]})}},4761:function(n,e,t){t.d(e,{EU:function(){return x},II:function(){return g},W4:function(){return w},a5:function(){return v},l0:function(){return h},qn:function(){return b},t7:function(){return y},y:function(){return Z}});var i,o,r,a,d,u,s,c,l=t(168),p=t(6444),m=t(8445),f=t(6123),h=p.ZP.form(i||(i=(0,l.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n"]))),g=p.ZP.input(o||(o=(0,l.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  &:not(:last-of-type) {\n    margin-bottom: 2px;\n  }\n\n  padding: 11px 14px 12px;\n\n  width: 280px;\n  height: 40px;\n\n  background-color: ",";\n  border: ",";\n  border-color: ",";\n  border-radius: 40px;\n\n  font-size: ",";\n  line-height: 1.35;\n\n  :focus {\n    outline-color: ",";\n  }\n\n  @media "," {\n    width: 448px;\n    height: 52px;\n\n    font-size: 18px;\n    line-height: 1.38;\n  }\n\n  @media "," {\n    width: 458px;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.borders.inputModal}),(function(n){return n.theme.colors.inputModal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.inputModal}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),x=(0,p.ZP)(m.S)(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: ",";\n  color: ",";\n\n  width: 280px;\n  height: 44px;\n\n  font-size: 20px;\n  line-height: 1.35;\n\n  @media "," {\n    width: 448px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    width: 458px;\n    height: 48px;\n    font-size: 20px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondatyBtnText}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),b=(0,p.ZP)(x)(a||(a=(0,l.Z)(["\n  align-items: center;\n"]))),v=(0,p.ZP)(b)(d||(d=(0,l.Z)(["\n  margin-top: 12px;\n\n  border-color: ",";\n  color: ",";\n  background-color: ",";\n\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondatyBtnText}),(function(n){return n.theme.fontWeights.heading})),Z=p.ZP.div(u||(u=(0,l.Z)(["\n  margin-left: 16px;\n  &:not(:last-of-type) {\n    margin-bottom: 14px;\n  }\n  font-size: 10px;\n  color: red;\n  font-weight: ",";\n  font-style: italic;\n\n  @media "," {\n    margin-left: 97px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontSizes.xs})),w=p.ZP.div(s||(s=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),y=(0,p.ZP)(f.Z)(c||(c=(0,l.Z)(["\n  position: absolute;\n  padding: 0;\n  right: 104px;\n  width: 24px;\n\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  cursor: pointer;\n  background-color: ",";\n  pointer-events: auto;\n"])),(function(n){return n.theme.colors.background}))},4756:function(n,e,t){t.d(e,{W2:function(){return h},vw:function(){return b},$0:function(){return v},xv:function(){return x},Dx:function(){return g},Eq:function(){return f}});var i=t(168),o=t(6444);t(2791);var r=t.p+"static/media/auth-forms-bg.ca7965195ffb5a454534447ac68ce8df.svg";var a=t.p+"static/media/auth-forms-bg-tablet.cc3bcbff51790a5ca9848dffbff71df2.svg";var d,u,s,c,l,p,m=t.p+"static/media/auth-forms-bg-desctop.da58350ebfbddfe6f5292450a91df617.svg",f=o.ZP.div(d||(d=(0,i.Z)(["\n  @media "," {\n    padding-top: ","px;\n    padding-left: 80px;\n    padding-right: 80px;\n  }\n\n  @media "," {\n    padding-top: ","px;\n    padding-left: 331px;\n    padding-right: 331px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.paddingTopTablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.paddingTopDesktop})),h=o.ZP.div(u||(u=(0,i.Z)(["\n  width: 280px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 100px;\n\n  @media "," {\n    padding-top: 60px;\n    padding-bottom: 40px;\n\n    width: 608px;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 40px;\n    background-color: ",";\n  }\n\n  @media "," {\n    padding-bottom: 60px;\n    width: 618px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.desktop})),g=o.ZP.h3(s||(s=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n\n  font-size: 24px;\n  line-height: 1.37;\n  font-weight: ",";\n\n  @media "," {\n    padding-top: 0;\n    font-size: 36px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.media.tablet})),x=o.ZP.p(c||(c=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n\n  font-size: ",";\n  line-height: 1.33;\n"])),(function(n){return n.theme.fontSizes.xs})),b=o.ZP.a(l||(l=(0,i.Z)(["\n  margin-left: 5px;\n  text-decoration: underline;\n  color: blue;\n"]))),v=o.ZP.div(p||(p=(0,i.Z)(["\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100%;\n\n  @media "," {\n    background-image: url(",");\n  }\n\n  @media "," {\n    background-image: url(",");\n  }\n"])),r,(function(n){return n.theme.media.tablet}),a,(function(n){return n.theme.media.desktop}),m)},9008:function(n,e,t){t.d(e,{G:function(){return r},o:function(){return o}});var i=t(9085),o=function(n){return i.Am.error(n)},r=function(){return i.Am.error("User with this email already exists!")}}}]);
//# sourceMappingURL=802.e1bdd368.chunk.js.map