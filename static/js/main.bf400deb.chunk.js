(this["webpackJsonppit-screen"]=this["webpackJsonppit-screen"]||[]).push([[0],{164:function(e,t){},166:function(e,t){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),i=n(242),o=n(241),l=n(21),j=n(230),u=c.a.createContext(),b=n(91),h=n(234),d=n(243),O=n(245),m=n(115),x=n(116),g=n.n(x),p=n(12),f=new m.API("u8L8Gd05IPCUmwjradkV0NbM7Y5Z7hx1fQc0SPx4vj6oPqKFCNGDiwZmlAhJ6SO8"),C=Object(j.a)((function(e){return{gridPad:{paddingTop:e.spacing(4),justifyContent:"space-evenly"},urlSizing:{width:"100%",minWidth:"300px",maxWidth:"460px"}}}));function v(){var e=C(),t=Object(a.useContext)(u),n=Object(a.useState)(t.eventCode),c=Object(l.a)(n,2),r=c[0],s=c[1],i=g()((function(e){f.Event(e.target.value).then((function(n){t.setEventCode(e.target.value),t.setEventChannel(n.webcasts[0].channel)}))}),2e3);return Object(p.jsxs)(h.a,{container:!0,spacing:1,className:e.gridPad,children:[Object(p.jsxs)(h.a,{item:!0,children:[Object(p.jsx)(O.a,{shrink:!0,children:"Background Color"}),Object(p.jsx)(b.a,{name:"accentColor",defaultValue:"#fff",label:"Accent",disablePlainColor:!0,value:t.accentColor,onChange:function(e){console.log(theme.palette.background.default),t.setAccentColor(e)}})]}),Object(p.jsxs)(h.a,{item:!0,className:e.basicSizing,children:[Object(p.jsx)(O.a,{shrink:!0,children:"Primary Color"}),Object(p.jsx)(b.a,{name:"primaryColor",defaultValue:"#d35401",label:"Primary",value:t.primaryColor,onChange:function(e){t.setPrimaryColor(e)}})]}),Object(p.jsx)(h.a,{item:!0,className:e.basicSizing,children:Object(p.jsx)(d.a,{label:"Event Code",InputLabelProps:{shrink:!0},onChange:function(e){s(e.target.value),i(e)},value:r})}),Object(p.jsx)(h.a,{item:!0,className:e.basicSizing,children:Object(p.jsx)(d.a,{label:"Team Number",type:"number",onChange:function(e){t.setTeamNumber(e.value)}})}),Object(p.jsx)(h.a,{item:!0,className:e.urlSizing,children:Object(p.jsx)(d.a,{fullWidth:!0,InputLabelProps:{shrink:!0},label:"Awards Slideshow URL",type:"url",value:t.outreachUrl,onChange:function(e){t.setOutreachUrl(e.value)}})}),Object(p.jsx)(h.a,{item:!0,className:e.urlSizing,children:Object(p.jsx)(d.a,{fullWidth:!0,InputLabelProps:{shrink:!0},label:"Robot Slideshow URL",type:"url",value:t.robotUrl,onChange:function(e){t.setRobotUrl(e.value)}})}),Object(p.jsx)(h.a,{item:!0,className:e.urlSizing,children:Object(p.jsx)(d.a,{fullWidth:!0,InputLabelProps:{shrink:!0},label:"Team Logo URL",type:"url",value:t.logoUrl,onChange:function(e){t.setLogoUrl(e.target.value)}})})]})}var y=n(233),w=n(238),S=n(240),P=n(239),U=n(237),k=n(231),L=n(236),N=n(84),A=n(235),B=n(125),R=n.n(B),T=n(117),E=n.n(T),F=n(120),I=n.n(F),z=n(119),D=n.n(z),W=n(121),M=n.n(W),X=n(122),G=n.n(X),H=n(123),Q=n.n(H),J=n(118),V=n.n(J),q=n(124),Z=n.n(q),K=n(244),Y=Object(j.a)((function(e){return{list:{width:300}}}));function $(){var e=Object(a.useContext)(u),t=Y(),n=["Settings","Match Preview","Match Schedule","Outreach Slides","Robot Slides","Event Stream","Logo Screen","CAD"],c=[Object(p.jsx)(E.a,{}),Object(p.jsx)(V.a,{}),Object(p.jsx)(D.a,{}),Object(p.jsx)(I.a,{}),Object(p.jsx)(M.a,{}),Object(p.jsx)(G.a,{}),Object(p.jsx)(Q.a,{}),Object(p.jsx)(Z.a,{})],r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(p.jsx)(A.a,{position:"relative",children:Object(p.jsxs)(L.a,{children:[Object(p.jsx)(U.a,{onClick:function(){return o(!0)},children:Object(p.jsx)(R.a,{})}),Object(p.jsx)(K.a,{anchor:"left",open:i,onClose:function(){return o(!1)},children:Object(p.jsxs)(y.a,{className:t.list,children:[Object(p.jsx)(w.a,{children:Object(p.jsx)(P.a,{primary:Object(p.jsx)(N.a,{variant:"h5",children:"PitScreen"})})}),Object(p.jsx)(k.a,{}),["settings","prematch","schedule","outreach","robot","stream","logo","cad"].map((function(t,a){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(w.a,{selected:e.currentPage==t,onClick:function(){return n=t,o(!1),void e.setCurrentPage(n);var n},button:!0,children:[Object(p.jsx)(S.a,{children:c[a]}),Object(p.jsx)(P.a,{primary:n[a]})]}),Object(p.jsx)(k.a,{})]},t)}))]})}),Object(p.jsx)(N.a,{variant:"h5",color:"inherit",noWrap:!0,children:"PitScreen"})]})})}var _=n(126);function ee(){var e=Object(a.useContext)(u);return Object(p.jsx)(_.a,{id:"player",allowFullscreen:!1,channel:e.eventChannel,fontSize:"small",height:"100%",withChat:!1,theme:"light",width:"100%",autoplay:!0,muted:!0})}var te=n(81),ne=n.n(te);function ae(){return Object(p.jsx)(ne.a,{width:"100%",height:"100%",slidesLink:"https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM",slideDuration:5,showControls:!0,loop:!0})}function ce(){var e=Object(a.useContext)(u);return Object(p.jsx)(ne.a,{width:"100%",height:"100%",slidesLink:e.robotUrl,slideDuration:5,showControls:!0,loop:!0})}n(183);function re(){Object(a.useContext)(u);return Object(p.jsx)("model-viewer",{autoplay:!0,"auto-rotate":!0,"camera-controls":!0,exposure:"0.25","interaction-prompt":"none","shadow-intensity":"1",src:"./Intake.gltf",style:{width:"100%",height:"100%"}})}function se(){var e=Object(a.useContext)(u);return Object(p.jsx)("div",{style:{maxWidth:"100%",maxHeight:"100%",height:"calc(100% - 64px)",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",paddingBottom:"1em",paddingTop:"1em",margin:"0"},children:Object(p.jsx)("img",{src:e.logoUrl,style:{maxWidth:"100%",maxHeight:"100%",height:"auto",width:"auto"}})})}var ie=Object(j.a)((function(e){return{icon:{marginRight:e.spacing(2)},main:{paddingTop:e.spacing(0),display:"flex",flexDirection:"column",height:"100vh",alignItems:"flex-start",alignContent:"flex-start",justifyContent:"flex-start",overflow:"hidden"},slide:{flex:1},contentPage:{display:"flex",width:"100vw",height:"100%"}}}));function oe(){var e=ie(),t=Object(a.useState)("settings"),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)("https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"),i=Object(l.a)(s,2),o=i[0],j=i[1],b=Object(a.useState)("https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"),h=Object(l.a)(b,2),d=h[0],O=h[1],m=Object(a.useState)("https://raw.githubusercontent.com/team401/resources/master/Team/Final.png"),x=Object(l.a)(m,2),g=x[0],f=x[1],C=Object(a.useState)(401),y=Object(l.a)(C,2),w=y[0],S=y[1],P=Object(a.useState)("2019chcmp"),U=Object(l.a)(P,2),k=U[0],L=U[1],N=Object(a.useState)("firstchesapeake2blue"),A=Object(l.a)(N,2),B=A[0],R=A[1],T=Object(a.useState)("#d35401"),E=Object(l.a)(T,2),F=E[0],I=E[1],z=Object(a.useState)("#fff"),D=Object(l.a)(z,2),W={currentPage:c,outreachUrl:o,robotUrl:d,logoUrl:g,teamNumber:w,eventCode:k,eventChannel:B,primaryColor:F,accentColor:D[0],setCurrentPage:r,setOutreachUrl:j,setRobotUrl:O,setLogoUrl:f,setTeamNumber:S,setEventCode:L,setEventChannel:R,setPrimaryColor:I,setAccentColor:D[1]};return Object(p.jsx)(u.Provider,{value:W,children:Object(p.jsxs)("main",{className:e.main,children:[Object(p.jsx)($,{}),"settings"==c&&Object(p.jsx)(v,{}),"stream"==c&&Object(p.jsx)(ee,{}),"outreach"==c&&Object(p.jsx)(ae,{}),"robot"==c&&Object(p.jsx)(ce,{}),"cad"==c&&Object(p.jsx)(re,{}),"logo"==c&&Object(p.jsx)(se,{})]})})}var le=n(83),je=n(127),ue=Object(je.a)({palette:{primary:{main:"#d35401"},secondary:{main:"#19857b"},error:{main:le.a.A400},background:{default:"#fff"}}});s.a.render(Object(p.jsxs)(o.a,{theme:ue,children:[Object(p.jsx)(i.a,{}),Object(p.jsx)(oe,{})]}),document.querySelector("#root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.bf400deb.chunk.js.map