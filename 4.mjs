import{M as S,Q as ge,S as y,V as O,W as E,Y as U,Z as X,aa as j,d as l,ea as
    g,h as C,k as R,l as Fe,m as V,o as k,oa as Re,p as I,q as ze,r as M,ra as L,s
    as e,sa as ae,t as q,ta as Ve,u as x,ua as K,w as a,wa as Q,x as F,xa as D,ya as
    W,za as ne}from"./chunk-GFNRJZX2.mjs";var
    Me={width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};var
    Be={...Me,borderRadius:6,background:"rgba(149, 149, 149, 0.1)",border:"1px
    dashed rgba(149, 149, 149,
    0.15)",color:"#a5a5a5",flexDirection:"column"},Se=C((r,t)=>e("div",{style:Be,ref:t}));var
    xe,Ee=r=>{if(!xe){let
    t=r.forwardRef(({color:o="currentColor",size:n=24,...i},m)=>r.createElement("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0
    0 24
    24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i},r.createElement("path",{d:"M3
    9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0
    1-2-2z"}),r.createElement("polyline",{points:"9 22 9 12 15 12 15
    22"})));t.displayName="Home",xe=t}return xe};var
    Ue={onClick:{type:y.EventHandler},onMouseDown:{type:y.EventHandler},onMouseUp:{type:y.EventHandler},onMouseEnter:{type:y.EventHandler},onMouseLeave:{type:y.EventHandler}},Ge=(r,t)=>r.find(o=>o.toLowerCase().includes(t));function
    je(r,t,o="",n,i){let m=k(()=>{if(o==null||o?.length===0)return null;let
    d=o.toLowerCase().replace(/-|\s/g,"");var p;return(p=i[d])!==null&&p!==void
    0?p:Ge(r,d)},[n,o]);return t?n:m}var
    oe=["activity","airplay","alert-circle","alert-octagon","alert-triangle","align-center","align-justify","align-left","align-right","anchor","aperture","archive","arrow-down","arrow-down-circle","arrow-down-left","arrow-down-right","arrow-left","arrow-left-circle","arrow-right","arrow-right-circle","arrow-up","arrow-up-circle","arrow-up-left","arrow-up-right","at-sign","award","bar-chart","bar-chart-2","battery","battery-charging","bell","bell-off","bluetooth","bold","book","book-open","bookmark","box","briefcase","calendar","camera","camera-off","cast","check","check-circle","check-square","chevron-down","chevron-left","chevron-right","chevron-up","chevrons-down","chevrons-left","chevrons-right","chevrons-up","chrome","circle","clipboard","clock","cloud","cloud-drizzle","cloud-lightning","cloud-off","cloud-rain","cloud-snow","code","codepen","codesandbox","coffee","columns","command","compass","copy","corner-down-left","corner-down-right","corner-left-down","corner-left-up","corner-right-down","corner-right-up","corner-up-left","corner-up-right","cpu","credit-card","crop","crosshair","database","delete","disc","divide","divide-circle","divide-square","dollar-sign","download","download-cloud","dribbble","droplet","edit","edit-2","edit-3","external-link","eye","eye-off","facebook","fast-forward","feather","figma","file","file-minus","file-plus","file-text","film","filter","flag","folder","folder-minus","folder-plus","framer","frown","gift","git-branch","git-commit","git-merge","git-pull-request","github","gitlab","globe","grid","hard-drive","hash","headphones","heart","help-circle","hexagon","home","image","inbox","info","instagram","italic","key","layers","layout","life-buoy","link","link-2","linkedin","list","loader","lock","log-in","log-out","mail","map","map-pin","maximize","maximize-2","meh","menu","message-circle","message-square","mic","mic-off","minimize","minimize-2","minus","minus-circle","minus-square","monitor","moon","more-horizontal","more-vertical","mouse-pointer","move","music","navigation","navigation-2","octagon","package","paperclip","pause","pause-circle","pen-tool","percent","phone","phone-call","phone-forwarded","phone-incoming","phone-missed","phone-off","phone-outgoing","pie-chart","play","play-circle","plus","plus-circle","plus-square","pocket","power","printer","radio","refresh-ccw","refresh-cw","repeat","rewind","rotate-ccw","rotate-cw","rss","save","scissors","search","send","server","settings","share","share-2","shield","shield-off","shopping-bag","shopping-cart","shuffle","sidebar","skip-back","skip-forward","slack","slash","sliders","smartphone","smile","speaker","square","star","stop-circle","sun","sunrise","sunset","tablet","tag","target","terminal","thermometer","thumbs-down","thumbs-up","toggle-left","toggle-right","tool","trash","trash-2","trello","trending-down","trending-up","triangle","truck","tv","twitch","twitter","type","umbrella","underline","unlock","upload","upload-cloud","user","user-check","user-minus","user-plus","user-x","users","video","video-off","voicemail","volume","volume-1","volume-2","volume-x","watch","wifi","wifi-off","wind","x","x-circle","x-octagon","x-square","youtube","zap","zap-off","zoom-in","zoom-out"],Ze="https://framer.com/m/feather-icons/",Ke=oe.map(r=>r.charAt(0).toUpperCase()+r.slice(1)),He=oe.reduce((r,t)=>(r[t.toLowerCase()]=t,r),{});function
    H(r){let{color:t,selectByList:o,iconSearch:n,iconSelection:i,onClick:m,onMouseDown:c,onMouseUp:d,onMouseEnter:p,onMouseLeave:f,mirrored:v}=r,T=I(!1),w=je(oe,o,n,i,He),[u,B]=ze(w==="Home"?Ee(M):null);async
    function Y(){let s=!0;try{let N=await
    import(`${Ze}${w}.js@0.0.29`);s&&B(N.default(M))}catch(b){console.log(b),s&&B(null)}return()=>{s=!1}}Fe(()=>{Y()},[w]);let
    h=ge.current()===ge.canvas?e(Se,{}):null;return
    e("div",{style:{display:"contents"},onClick:m,onMouseEnter:p,onMouseLeave:f,onMouseDown:c,onMouseUp:d,children:u?e(u,{style:{width:"100%",height:"100%",transform:v?"scale(-1,
    1)":void
    0},color:t}):h})}H.displayName="Feather";H.defaultProps={width:24,height:24,iconSelection:"home",iconSearch:"Home",color:"#66F",selectByList:!0,mirrored:!1};O(H,{selectByList:{type:y.Boolean,title:"Select",enabledTitle:"List",disabledTitle:"Search",defaultValue:H.defaultProps.selectByList},iconSelection:{type:y.Enum,options:oe,optionTitles:Ke,defaultValue:H.defaultProps.iconSelection,title:"Name",hidden:({selectByList:r})=>!r,description:"Find
    every icon name on the [Feather
    site](https://feathericons.com/)"},iconSearch:{type:y.String,title:"Name",placeholder:"Menu,
    Wifi,
    Box\u2026",hidden:({selectByList:r})=>r},mirrored:{type:y.Boolean,enabledTitle:"Yes",disabledTitle:"No",defaultValue:H.defaultProps.mirrored},color:{type:y.Color,title:"Color",defaultValue:H.defaultProps.color},...Ue});ae.loadFonts([]);var
    Le=[{explicitInter:!0,fonts:[]}],De=[".framer-T5yi9
    .framer-styles-preset-1hzqi1v:not(.rich-text-wrapper), .framer-T5yi9
    .framer-styles-preset-1hzqi1v.rich-text-wrapper a {
    --framer-link-current-text-color: #ffffff;
    --framer-link-current-text-decoration: none; --framer-link-hover-text-color:
    rgba(255, 255, 255, 0.4); --framer-link-hover-text-decoration: none;
    --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.12,
    0.23, 0.5, 1) 0s; }"],Ne="framer-T5yi9";var
    We=["IorBehVTp"],Ye="framer-xUVKx",Oe={IorBehVTp:"framer-v-8lzmrw"};var
    Qe={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Je=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},$e=a(l),er=({height:r,id:t,width:o,...n})=>({...n}),rr=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),tr=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=er(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:We,defaultVariant:"IorBehVTp",variant:d,variantClassNames:Oe}),s=rr(r,h),b=I(null),N=V(),z=[],Z=U();return
    e(F,{id:c??N,children:e($e,{animate:h,initial:!1,children:e(Je,{value:Qe,children:e(g,{href:"https://www.youtube.com/@HarryChhoteff",children:e(a.a,{...p,...w,className:`${E(Ye,...z,"framer-8lzmrw",m,v)}
    framer-1jkn7mg`,"data-framer-name":"Variant
    1",layoutDependency:s,layoutId:"IorBehVTp",ref:t??b,style:{...i},children:e(Q,{className:"framer-16s7x52","data-framer-name":"graphic",description:"A
    link to HarryChhote's YouTube
    channel",layout:"position",layoutDependency:s,layoutId:"AuAo2_pCE",opacity:1,svg:'<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
    >
      <path
        d="M 19.8 6 C 19.8 6 19.605 4.621 19.004 4.016 C 18.242 3.219 17.391 3.215 17 3.168 C 14.203 2.965 10.004 2.965 10.004 2.965 L 9.996 2.965 C 9.996 2.965 5.796 2.965 3 3.168 C 2.61 3.215 1.758 3.218 0.996 4.016 C 0.395 4.62 0.203 6 0.203 6 C 0.203 6 0 7.621 0 9.238 L 0 10.754 C 0 12.371 0.2 13.992 0.2 13.992 C 0.2 13.992 0.395 15.372 0.992 15.977 C 1.754 16.773 2.754 16.747 3.199 16.832 C 4.801 16.984 10 17.032 10 17.032 C 10 17.032 14.203 17.023 17 16.824 C 17.39 16.777 18.242 16.774 19.004 15.977 C 19.605 15.371 19.801 13.992 19.801 13.992 C 19.801 13.992 20 12.375 20 10.754 L 20 9.238 C 20 7.621 19.8 6 19.8 6 Z M 7.935 12.594 L 7.935 6.973 L 13.337 9.793 L 7.935 12.593 Z"
        fill="rgba(255, 255, 255, 0.4)"
      ></path></svg
    >',svgContentId:11277647552,title:"HarryChhote's
    YouTube",withExternalLayout:!0})})})})})})}),ar=["@supports (aspect-ratio: 1) {
    body { --framer-aspect-ratio-supported: auto; }
    }",".framer-xUVKx.framer-1jkn7mg, .framer-xUVKx .framer-1jkn7mg { display:
    block; }",".framer-xUVKx.framer-8lzmrw { height: 20px; overflow: visible;
    position: relative; text-decoration: none; width: 20px; }",".framer-xUVKx
    .framer-16s7x52 { flex: none; height: 20px; left: 0px; position: absolute; top:
    0px; width: 20px;
    }"],ie=j(tr,ar,"framer-xUVKx"),ye=ie;ie.displayName="YouTube";ie.defaultProps={height:20,width:20};D(ie,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var
    nr=["pmSLIus0l"],or="framer-UKyS6",ir={pmSLIus0l:"framer-v-j2l76g"};var
    sr={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},lr=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},mr=a(l),cr=({height:r,id:t,width:o,...n})=>({...n}),fr=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),dr=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=cr(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:nr,defaultVariant:"pmSLIus0l",variant:d,variantClassNames:ir}),s=fr(r,h),b=I(null),N=V(),z=[],Z=U();return
    e(F,{id:c??N,children:e(mr,{animate:h,initial:!1,children:e(lr,{value:sr,children:e(g,{href:"https://www.instagram.com/harryy.exe/",children:e(a.a,{...p,...w,className:`${E(or,...z,"framer-j2l76g",m,v)}
    framer-z8bgt7`,"data-framer-name":"Variant
    1","data-reset":"button",layoutDependency:s,layoutId:"pmSLIus0l",ref:t??b,style:{...i},children:e(Q,{className:"framer-17wo097","data-framer-name":"graphic",description:"A
    link to Harryy.exe IG
    page",layout:"position",layoutDependency:s,layoutId:"d0fokZs7X",opacity:1,svg:'<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
    >
      <path
        d="M 14.225 0 L 10.854 0 L 10.854 13.623 C 10.854 15.246 9.558 16.58 7.944 16.58 C 6.331 16.58 5.034 15.246 5.034 13.623 C 5.034 12.029 6.302 10.725 7.858 10.667 L 7.858 7.247 C 4.43 7.304 1.664 10.116 1.664 13.623 C 1.664 17.16 4.487 20 7.974 20 C 11.459 20 14.282 17.13 14.282 13.623 L 14.282 6.638 C 15.58 7.588 17.139 8.115 18.747 8.145 L 18.747 4.725 C 16.212 4.638 14.225 2.55 14.225 0 Z"
        fill="rgba(255, 255, 255, 0.4)"
      ></path></svg
    >',svgContentId:11097083899,title:"Harry Chhote's
    TIktok",withExternalLayout:!0})})})})})})}),pr=["@supports (aspect-ratio: 1) {
    body { --framer-aspect-ratio-supported: auto; } }",".framer-UKyS6.framer-z8bgt7,
    .framer-UKyS6 .framer-z8bgt7 { display: block; }",".framer-UKyS6.framer-j2l76g {
    height: 20px; overflow: visible; position: relative; text-decoration: none;
    width: 20px; }",".framer-UKyS6 .framer-17wo097 { flex: none; height: 20px; left:
    0px; position: absolute; top: 0px; width: 20px;
    }"],se=j(dr,pr,"framer-UKyS6"),ve=se;se.displayName="TikTok";se.defaultProps={height:20,width:20};D(se,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var
    ur=["hMZ7rAU5B"],hr="framer-mzOjG",gr={hMZ7rAU5B:"framer-v-4zw328"};var
    xr={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},yr=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},vr=a(l),wr=({height:r,id:t,width:o,...n})=>({...n}),br=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),Cr=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=wr(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:ur,defaultVariant:"hMZ7rAU5B",variant:d,variantClassNames:gr}),s=br(r,h),b=I(null),N=V(),z=[],Z=U();return
    e(F,{id:c??N,children:e(vr,{animate:h,initial:!1,children:e(yr,{value:xr,children:e(g,{href:"https://discord.gg/7KjcwRjpw6",openInNewTab:!0,children:e(a.a,{...p,...w,className:`${E(hr,...z,"framer-4zw328",m,v)}
    framer-184zypq`,"data-framer-name":"Variant
    1",layoutDependency:s,layoutId:"hMZ7rAU5B",ref:t??b,style:{...i},children:e(Q,{className:"framer-1oat60e","data-framer-name":"graphic",description:"A
    link to Harry Chhote's Discord
    server",layout:"position",layoutDependency:s,layoutId:"qOyjVDWCj",opacity:1,svg:'<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
    >
      <path
        d="M 16.93 3.463 C 15.634 2.868 14.266 2.443 12.86 2.2 C 12.834 2.195 12.807 2.207 12.794 2.231 C 12.619 2.544 12.424 2.951 12.288 3.272 C 10.772 3.042 9.231 3.042 7.715 3.272 C 7.563 2.916 7.391 2.569 7.2 2.232 C 7.187 2.209 7.161 2.196 7.135 2.2 C 5.729 2.443 4.361 2.867 3.065 3.463 C 3.053 3.467 3.044 3.476 3.037 3.486 C 0.444 7.36 -0.266 11.138 0.083 14.869 C 0.085 14.888 0.094 14.904 0.109 14.916 C 1.619 16.034 3.307 16.888 5.103 17.441 C 5.129 17.449 5.157 17.44 5.173 17.418 C 5.558 16.892 5.901 16.338 6.195 15.756 C 6.203 15.74 6.204 15.721 6.197 15.704 C 6.191 15.687 6.177 15.674 6.16 15.668 C 5.621 15.462 5.1 15.213 4.6 14.924 C 4.582 14.913 4.57 14.894 4.568 14.873 C 4.567 14.852 4.576 14.831 4.593 14.818 C 4.698 14.739 4.803 14.658 4.903 14.575 C 4.921 14.56 4.946 14.556 4.968 14.566 C 8.241 16.061 11.785 16.061 15.019 14.566 C 15.041 14.556 15.066 14.559 15.085 14.574 C 15.185 14.657 15.289 14.739 15.395 14.818 C 15.412 14.831 15.422 14.851 15.421 14.872 C 15.42 14.894 15.408 14.913 15.39 14.924 C 14.891 15.216 14.373 15.462 13.829 15.667 C 13.812 15.674 13.799 15.687 13.792 15.704 C 13.786 15.721 13.787 15.74 13.795 15.756 C 14.094 16.334 14.435 16.889 14.815 17.417 C 14.831 17.439 14.859 17.449 14.885 17.441 C 16.684 16.89 18.376 16.036 19.888 14.916 C 19.903 14.905 19.912 14.888 19.914 14.87 C 20.331 10.556 19.215 6.809 16.957 3.487 C 16.952 3.476 16.942 3.468 16.931 3.463 Z M 6.684 12.597 C 5.699 12.597 4.887 11.693 4.887 10.582 C 4.887 9.471 5.683 8.566 6.684 8.566 C 7.694 8.566 8.498 9.478 8.482 10.582 C 8.482 11.692 7.686 12.597 6.684 12.597 Z M 13.33 12.597 C 12.344 12.597 11.533 11.693 11.533 10.582 C 11.533 9.471 12.329 8.566 13.33 8.566 C 14.339 8.566 15.143 9.478 15.127 10.582 C 15.127 11.692 14.339 12.597 13.33 12.597 Z"
        fill="rgba(255, 255, 255, 0.4)"
      ></path></svg
    >',svgContentId:12609733514,title:"Harry Chhote's
    Discord",withExternalLayout:!0})})})})})})}),kr=["@supports (aspect-ratio: 1) {
    body { --framer-aspect-ratio-supported: auto; }
    }",".framer-mzOjG.framer-184zypq, .framer-mzOjG .framer-184zypq { display:
    block; }",".framer-mzOjG.framer-4zw328 { height: 20px; overflow: visible;
    position: relative; text-decoration: none; width: 20px; }",".framer-mzOjG
    .framer-1oat60e { flex: none; height: 20px; left: 0px; position: absolute; top:
    0px; width: 20px;
    }"],le=j(Cr,kr,"framer-mzOjG"),we=le;le.displayName="Discord";le.defaultProps={height:20,width:20};D(le,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var
    Ir=["m_cUK3731"],Fr="framer-2qSe2",zr={m_cUK3731:"framer-v-bozl43"};var
    Rr={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Vr=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},Sr=a(l),Er=({height:r,id:t,width:o,...n})=>({...n}),Ur=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),jr=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=Er(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:Ir,defaultVariant:"m_cUK3731",variant:d,variantClassNames:zr}),s=Ur(r,h),b=I(null),N=V(),z=[],Z=U();return
    e(F,{id:c??N,children:e(Sr,{animate:h,initial:!1,children:e(Vr,{value:Rr,children:e(g,{href:"https://teamlimiter.github.io/Limiterx-lite/",children:e(a.a,{...p,...w,className:`${E(Fr,...z,"framer-bozl43",m,v)}
    framer-1k5jqm1`,"data-framer-name":"Variant
    1",layoutDependency:s,layoutId:"m_cUK3731",ref:t??b,style:{...i},children:e(Q,{className:"framer-1meu9s3","data-framer-name":"graphic",description:"A
    link to TeamLimiter's Site
    profile",layout:"position",layoutDependency:s,layoutId:"ifzLUYm5o",opacity:1,svg:'<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
    >
      <path
        d="M 15.274 1.586 L 18.086 1.586 L 11.944 8.606 L 19.169 18.158 L 13.512 18.158 L 9.081 12.365 L 4.011 18.158 L 1.198 18.158 L 7.768 10.65 L 0.835 1.586 L 6.635 1.586 L 10.641 6.882 Z M 14.288 16.476 L 15.846 16.476 L 5.79 3.18 L 4.12 3.18 L 14.289 16.474 Z"
        fill="rgba(255, 255, 255, 0.4)"
      ></path></svg
    >',svgContentId:9934001183,title:"Harry Chhote's
    Twitter",withExternalLayout:!0})})})})})})}),Lr=["@supports (aspect-ratio: 1) {
    body { --framer-aspect-ratio-supported: auto; }
    }",".framer-2qSe2.framer-1k5jqm1, .framer-2qSe2 .framer-1k5jqm1 { display:
    block; }",".framer-2qSe2.framer-bozl43 { height: 20px; overflow: visible;
    position: relative; text-decoration: none; width: 20px; }",".framer-2qSe2
    .framer-1meu9s3 { flex: none; height: 20px; left: 0px; position: absolute; top:
    0px; width: 20px;
    }"],me=j(jr,Lr,"framer-2qSe2"),be=me;me.displayName="X";me.defaultProps={height:20,width:20};D(me,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var
    Dr=W(be),Nr=W(ve),Ar=W(we),Pr=W(ye),_r=["iA5Q520qn","Gl3BxNQd7","RCX7D5cWa"],Tr="framer-ZFF9n",qr={Gl3BxNQd7:"framer-v-vklauf",iA5Q520qn:"framer-v-10xzg7a",RCX7D5cWa:"framer-v-ojf24k"};function
    ce(r,...t){let o={};return t?.forEach(n=>n&&Object.assign(o,r[n])),o}var
    Mr={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},Ae={damping:30,delay:0,mass:1,stiffness:400,type:"spring"},fe={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.1,skewX:0,skewY:0,transition:Ae,y:-4},Ce={opacity:.5,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:Ae},Br=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},Gr=a(l),Zr={Desktop:"iA5Q520qn",Phone:"RCX7D5cWa",Tablet:"Gl3BxNQd7"},Kr=({height:r,id:t,width:o,...n})=>{var
    i,m;return{...n,variant:(m=(i=Zr[n.variant])!==null&&i!==void
    0?i:n.variant)!==null&&m!==void
    0?m:"iA5Q520qn"}},Hr=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),Xr=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=Kr(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:_r,defaultVariant:"iA5Q520qn",variant:d,variantClassNames:qr}),s=Hr(r,h),b=I(null),N=V(),z=[Ne],Z=U();return
    e(F,{id:c??N,children:e(Gr,{animate:h,initial:!1,children:e(Br,{value:Mr,children:q(a.footer,{...p,...w,className:E(Tr,...z,"framer-10xzg7a",m,v),"data-framer-name":"Desktop",layoutDependency:s,layoutId:"iA5Q520qn",ref:t??b,style:{...i},...ce({Gl3BxNQd7:{"data-framer-name":"Tablet"},RCX7D5cWa:{"data-framer-name":"Phone"}},f,u),children:[q(a.div,{className:"framer-1cdtjjt",layoutDependency:s,layoutId:"Ld9CKDhki",children:[e(X,{width:"20px",children:e(a.div,{className:"framer-2fsiny-container",layoutDependency:s,layoutId:"v0befffJ8-container",whileHover:fe,children:e(be,{height:"100%",id:"v0befffJ8",layoutId:"v0befffJ8",style:{height:"100%",width:"100%"},width:"100%"})})}),e(X,{width:"20px",children:e(a.div,{className:"framer-1s6faz4-container",layoutDependency:s,layoutId:"Z0ieMH_h2-container",whileHover:fe,children:e(ve,{height:"100%",id:"Z0ieMH_h2",layoutId:"Z0ieMH_h2",style:{height:"100%",width:"100%"},width:"100%"})})}),e(X,{width:"20px",children:e(a.div,{className:"framer-13yn1hn-container",layoutDependency:s,layoutId:"Y0NWvzJuS-container",whileHover:fe,children:e(we,{height:"100%",id:"Y0NWvzJuS",layoutId:"Y0NWvzJuS",style:{height:"100%",width:"100%"},width:"100%"})})}),e(X,{width:"20px",children:e(a.div,{className:"framer-14drvaz-container",layoutDependency:s,layoutId:"U6sqKkL9e-container",whileHover:fe,children:e(ye,{height:"100%",id:"U6sqKkL9e",layoutId:"U6sqKkL9e",style:{height:"100%",width:"100%"},width:"100%"})})})]}),e(a.div,{className:"framer-lu2a7h","data-border":!0,layoutDependency:s,layoutId:"RpEkFPMJ8",style:{"--border-bottom-width":"0px","--border-color":"rgba(255,
    255, 255,
    0.05)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"1px"},children:q(a.div,{className:"framer-10vp3rz",layoutDependency:s,layoutId:"XsMI0YoKN",children:[e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255, 0.5))"},children:"\xA92024
    Harry Chhote"})}),className:"framer-zta1o","data-framer-name":"Terms and
    Conditions",fonts:["GF;Space
    Grotesk-300"],layoutDependency:s,layoutId:"QhFrsvCUL",style:{"--extracted-r6o4lv":"rgba(255,
    255, 255,
    0.5)","--framer-paragraph-spacing":"0px"},verticalAlignment:"center",whileHover:Ce,withExternalLayout:!0,...ce({RCX7D5cWa:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255, 0.5))"},children:"\xA92024
    Harry Chhote"})})}},f,u)}),e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255, 0.5))"},children:"2024 All rights
    reserved"})}),className:"framer-gkowgb","data-framer-name":"Terms and
    Conditions",fonts:["GF;Space
    Grotesk-300"],layoutDependency:s,layoutId:"cikHDkBkb",style:{"--extracted-r6o4lv":"rgba(255,
    255, 255,
    0.5)","--framer-paragraph-spacing":"0px"},verticalAlignment:"center",whileHover:Ce,withExternalLayout:!0,...ce({RCX7D5cWa:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255, 0.5))"},children:"2024 All rights
    reserved"})})}},f,u)}),e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255,
    0.5))"},children:e(g,{href:{webPageId:"t5IjWLj16"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Terms
    of Service"})})})}),className:"framer-a21e7s","data-framer-name":"Privacy
    Policy",fonts:["GF;Space
    Grotesk-300"],layoutDependency:s,layoutId:"fypbvG8YM",style:{"--extracted-r6o4lv":"rgba(255,
    255, 255,
    0.5)","--framer-paragraph-spacing":"0px"},verticalAlignment:"center",whileHover:Ce,withExternalLayout:!0,...ce({RCX7D5cWa:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7U3BhY2UgR3JvdGVzay0zMDA=","--framer-font-family":'"Space
    Grotesk", "Space Grotesk Placeholder",
    sans-serif',"--framer-font-size":"12px","--framer-font-weight":"300","--framer-line-height":"20px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgba(255, 255, 255,
    0.5))"},children:e(g,{href:{webPageId:"t5IjWLj16"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Terms
    of Service"})})})})}},f,u)})]})})]})})})})}),Wr=["@supports (aspect-ratio: 1) {
    body { --framer-aspect-ratio-supported: auto; }
    }",".framer-ZFF9n.framer-17uumpk, .framer-ZFF9n .framer-17uumpk { display:
    block; }",".framer-ZFF9n.framer-10xzg7a { align-content: center; align-items:
    center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 25px;
    height: min-content; justify-content: flex-start; overflow: visible; padding:
    60px 0px 20px 0px; position: relative; width: 1080px; }",".framer-ZFF9n
    .framer-1cdtjjt { align-content: center; align-items: center; display: flex;
    flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height:
    min-content; justify-content: center; overflow: visible; padding: 0px; position:
    relative; width: min-content; }",".framer-ZFF9n .framer-2fsiny-container,
    .framer-ZFF9n .framer-1s6faz4-container, .framer-ZFF9n
    .framer-13yn1hn-container, .framer-ZFF9n .framer-14drvaz-container { flex: none;
    height: 20px; position: relative; width: 20px; }",".framer-ZFF9n .framer-lu2a7h
    { align-content: center; align-items: center; display: flex; flex: none;
    flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content:
    space-between; overflow: visible; padding: 16px 0px 16px 0px; position:
    relative; width: 100%; }",".framer-ZFF9n .framer-10vp3rz { align-content:
    center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row;
    flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center;
    overflow: visible; padding: 0px; position: relative; width: 1px;
    }",".framer-ZFF9n .framer-zta1o, .framer-ZFF9n .framer-gkowgb, .framer-ZFF9n
    .framer-a21e7s { flex: none; height: auto; position: relative; white-space: pre;
    width: auto; }","@supports (background: -webkit-named-image(i)) and (not
    (font-palette:dark)) { .framer-ZFF9n.framer-10xzg7a, .framer-ZFF9n
    .framer-1cdtjjt, .framer-ZFF9n .framer-10vp3rz { gap: 0px; }
    .framer-ZFF9n.framer-10xzg7a > * { margin: 0px; margin-bottom: calc(25px / 2);
    margin-top: calc(25px / 2); } .framer-ZFF9n.framer-10xzg7a > :first-child {
    margin-top: 0px; } .framer-ZFF9n.framer-10xzg7a > :last-child { margin-bottom:
    0px; } .framer-ZFF9n .framer-1cdtjjt > * { margin: 0px; margin-left: calc(30px /
    2); margin-right: calc(30px / 2); } .framer-ZFF9n .framer-1cdtjjt >
    :first-child, .framer-ZFF9n .framer-10vp3rz > :first-child { margin-left: 0px; }
    .framer-ZFF9n .framer-1cdtjjt > :last-child, .framer-ZFF9n .framer-10vp3rz >
    :last-child { margin-right: 0px; } .framer-ZFF9n .framer-10vp3rz > * { margin:
    0px; margin-left: calc(34px / 2); margin-right: calc(34px / 2); }
    }",".framer-ZFF9n.framer-v-vklauf.framer-10xzg7a { padding: 60px 24px 20px 24px;
    width: 810px; }",".framer-ZFF9n.framer-v-ojf24k.framer-10xzg7a { gap: 24px;
    padding: 40px 20px 16px 20px; width: 390px; }",".framer-ZFF9n.framer-v-ojf24k
    .framer-lu2a7h { flex-direction: column; gap: 0px; justify-content: center;
    }",".framer-ZFF9n.framer-v-ojf24k .framer-10vp3rz { flex: none; gap: unset;
    justify-content: space-between; width: 100%; }",".framer-ZFF9n.framer-v-ojf24k
    .framer-zta1o, .framer-ZFF9n.framer-v-ojf24k .framer-gkowgb,
    .framer-ZFF9n.framer-v-ojf24k .framer-a21e7s { flex: 1 0 0px; white-space:
    pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word;
    }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark))
    { .framer-ZFF9n.framer-v-ojf24k.framer-10xzg7a, .framer-ZFF9n.framer-v-ojf24k
    .framer-lu2a7h, .framer-ZFF9n.framer-v-ojf24k .framer-10vp3rz { gap: 0px; }
    .framer-ZFF9n.framer-v-ojf24k.framer-10xzg7a > * { margin: 0px; margin-bottom:
    calc(24px / 2); margin-top: calc(24px / 2); }
    .framer-ZFF9n.framer-v-ojf24k.framer-10xzg7a > :first-child,
    .framer-ZFF9n.framer-v-ojf24k .framer-lu2a7h > :first-child { margin-top: 0px; }
    .framer-ZFF9n.framer-v-ojf24k.framer-10xzg7a > :last-child,
    .framer-ZFF9n.framer-v-ojf24k .framer-lu2a7h > :last-child { margin-bottom: 0px;
    } .framer-ZFF9n.framer-v-ojf24k .framer-lu2a7h > * { margin: 0px; margin-bottom:
    calc(0px / 2); margin-top: calc(0px / 2); } .framer-ZFF9n.framer-v-ojf24k
    .framer-10vp3rz > *, .framer-ZFF9n.framer-v-ojf24k .framer-10vp3rz >
    :first-child, .framer-ZFF9n.framer-v-ojf24k .framer-10vp3rz > :last-child {
    margin: 0px; } }",...De,'.framer-ZFF9n[data-border="true"]::after, .framer-ZFF9n
    [data-border="true"]::after { content: ""; border-width: var(--border-top-width,
    0) var(--border-right-width, 0) var(--border-bottom-width, 0)
    var(--border-left-width, 0); border-color: var(--border-color, none);
    border-style: var(--border-style, none); width: 100%; height: 100%; position:
    absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit;
    pointer-events: none;
    }'],$=j(Xr,Wr,"framer-ZFF9n"),Vo=$;$.displayName="Footer";$.defaultProps={height:177,width:1080};O($,{variant:{options:["iA5Q520qn","Gl3BxNQd7","RCX7D5cWa"],optionTitles:["Desktop","Tablet","Phone"],title:"Variant",type:y.Enum}});D($,[{explicitInter:!0,fonts:[{family:"Space
    Grotesk",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj62UUsmNsFjTDJK.woff2",weight:"300"}]},...Dr,...Nr,...Ar,...Pr,...ne(Le)],{supportsExplicitInterCodegen:!0});var
    Yr=W(H),Or={DED2jbRhx:{hover:!0},IzuqIK3S7:{hover:!0},PAVVL1bfE:{hover:!0},rEJPjweMr:{hover:!0},Z9iNZSCt8:{hover:!0},zv2jL2iaB:{hover:!0}},Qr=["Z9iNZSCt8","IzuqIK3S7","rEJPjweMr","PAVVL1bfE","DED2jbRhx","zv2jL2iaB","mpIxmrGp0"],Jr="framer-8KkRA",$r={DED2jbRhx:"framer-v-gcyus6",IzuqIK3S7:"framer-v-1vksugm",mpIxmrGp0:"framer-v-zydary",PAVVL1bfE:"framer-v-1qfvx9s",rEJPjweMr:"framer-v-11m2zjh",Z9iNZSCt8:"framer-v-1bxgkgy",zv2jL2iaB:"framer-v-33apgd"};function
    ke(r,...t){let o={};return t?.forEach(n=>n&&Object.assign(o,r[n])),o}var
    et={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},rt=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},tt=a(l),at={"General
    Services":"PAVVL1bfE","Go Back":"zv2jL2iaB","Navbar ":"rEJPjweMr","Overclocking
    Services":"DED2jbRhx",Discord:"mpIxmrGp0",Primary:"Z9iNZSCt8",Secondary:"IzuqIK3S7"},nt=({background:r,height:t,id:o,link:n,link2:i,title:m,width:c,...d})=>{var
    p,f,v,T;return{...d,jzi3u07T6:n??d.jzi3u07T6,KudNHn3WL:i??d.KudNHn3WL,rWe7PaIdB:(p=m??d.rWe7PaIdB)!==null&&p!==void
    0?p:"Book Now",variant:(v=(f=at[d.variant])!==null&&f!==void
    0?f:d.variant)!==null&&v!==void
    0?v:"Z9iNZSCt8",vdxbIB53g:(T=r??d.vdxbIB53g)!==null&&T!==void 0?T:"rgba(255,
    255, 255,
    0)"}},ot=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),it=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,vdxbIB53g:p,rWe7PaIdB:f,jzi3u07T6:v,KudNHn3WL:T,...w}=nt(r),{baseVariant:u,classNames:B,clearLoadingGesture:Y,gestureHandlers:G,gestureVariant:h,isLoading:s,setGestureState:b,setVariant:N,variants:z}=L({cycleOrder:Qr,defaultVariant:"Z9iNZSCt8",enabledGestures:Or,variant:d,variantClassNames:$r}),Z=ot(r,z),de=I(null),pe=()=>!(h==="IzuqIK3S7-hover"||u==="IzuqIK3S7"),ue=V(),he=[],te=U();return
    e(F,{id:c??ue,children:e(tt,{animate:z,initial:!1,children:e(rt,{value:et,children:e(g,{href:{webPageId:"xq8eJr6XL"},...ke({DED2jbRhx:{href:{hash:":l2hSxKtF8",webPageId:"xq8eJr6XL"},openInNewTab:!1,smoothScroll:!0},IzuqIK3S7:{href:{webPageId:"mzYqOgQ2w"},openInNewTab:!1},mpIxmrGp0:{href:T,openInNewTab:!0,smoothScroll:!0},PAVVL1bfE:{href:{hash:":G0QTp71lY",webPageId:"xq8eJr6XL"},openInNewTab:!1,smoothScroll:!0},zv2jL2iaB:{href:v,openInNewTab:!1,smoothScroll:!0}},u,h),children:q(a.a,{...w,...G,className:`${E(Jr,...he,"framer-1bxgkgy",m,B)}
    framer-1dc4p6j`,"data-framer-name":"Primary",layoutDependency:Z,layoutId:"Z9iNZSCt8",ref:t??de,style:{"--border-bottom-width":"0px","--border-color":"rgba(0,
    0, 0,
    0)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",background:"linear-gradient(90deg,
    rgb(0, 117, 253) 0%, rgb(155, 196, 254) 100%)",backgroundColor:"rgba(0, 0, 0,
    0)",borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopLeftRadius:6,borderTopRightRadius:6,...i},variants:{"IzuqIK3S7-hover":{background:"linear-gradient(90deg,
    rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04)
    100%)",backgroundColor:"rgba(255, 255, 255,
    0.04)"},DED2jbRhx:{"--border-bottom-width":"2px","--border-color":"rgba(255,
    255, 255,
    0.4)","--border-left-width":"2px","--border-right-width":"2px","--border-style":"solid","--border-top-width":"2px",background:"linear-gradient(90deg,
    rgba(156, 197, 255, 0) 0%, rgba(156, 197, 255, 0)
    100%)",backgroundColor:"rgba(156, 197, 255,
    0)"},IzuqIK3S7:{"--border-bottom-width":"2.2px","--border-color":"rgba(255, 255,
    255,
    0.4)","--border-left-width":"2.2px","--border-right-width":"2.2px","--border-style":"solid","--border-top-width":"2.2px",background:`linear-gradient(90deg,
    ${p} 0%, ${p}
    100%)`,backgroundColor:p},zv2jL2iaB:{"--border-bottom-width":"2px","--border-color":"rgba(255,
    255, 255,
    0.4)","--border-left-width":"2px","--border-right-width":"2px","--border-style":"solid","--border-top-width":"2px",background:"linear-gradient(90deg,
    rgba(156, 197, 255, 0) 0%, rgba(156, 197, 255, 0)
    100%)",backgroundColor:"rgba(156, 197, 255,
    0)"}},...ke({"DED2jbRhx-hover":{"data-framer-name":void
    0},"IzuqIK3S7-hover":{"data-framer-name":void
    0},"PAVVL1bfE-hover":{"data-framer-name":void
    0},"rEJPjweMr-hover":{"data-framer-name":void
    0},"Z9iNZSCt8-hover":{"data-framer-name":void
    0},"zv2jL2iaB-hover":{"data-framer-name":void
    0},DED2jbRhx:{"data-border":!0,"data-framer-name":"Overclocking
    Services"},IzuqIK3S7:{"data-border":!0,"data-framer-name":"Secondary"},mpIxmrGp0:{"data-framer-name":"Discord"},PAVVL1bfE:{"data-framer-name":"General
    Services"},rEJPjweMr:{"data-framer-name":"Navbar
    "},zv2jL2iaB:{"data-border":!0,"data-framer-name":"Go
    Back"}},u,h),children:[e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItU2VtaUJvbGQ=","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"14px","--framer-font-weight":"600","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255, 255))"},children:"Book
    Now"})}),className:"framer-1xvy5om","data-framer-name":"Label",fonts:["Inter-SemiBold"],layoutDependency:Z,layoutId:"SiuFDPpuU",style:{"--extracted-r6o4lv":"rgb(255,
    255, 255)","--framer-link-text-color":"rgb(0, 153,
    255)","--framer-link-text-decoration":"underline"},text:f,verticalAlignment:"top",withExternalLayout:!0,...ke({"zv2jL2iaB-hover":{text:void
    0},IzuqIK3S7:{children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"14px","--framer-font-weight":"500","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255, 255))"},children:"Book
    Now"})}),fonts:["Inter-Medium"]},zv2jL2iaB:{children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItU2VtaUJvbGQ=","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"14px","--framer-font-weight":"600","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255, 255))"},children:"Go Back"})}),text:void
    0}},u,h)}),pe()&&e(X,{children:e(a.div,{className:"framer-hmzso9-container",layoutDependency:Z,layoutId:"LJwSVpsDq-container",children:e(H,{color:"rgb(255,
    255,
    255)",height:"100%",iconSearch:"Home",iconSelection:"chevron-right",id:"LJwSVpsDq",layoutId:"LJwSVpsDq",mirrored:!1,selectByList:!0,style:{height:"100%",width:"100%"},width:"100%"})})})]})})})})})}),st=["@supports
    (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; }
    }",".framer-8KkRA.framer-1dc4p6j, .framer-8KkRA .framer-1dc4p6j { display:
    block; }",".framer-8KkRA.framer-1bxgkgy { align-content: center; align-items:
    center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap;
    gap: 10px; height: min-content; justify-content: center; overflow: hidden;
    padding: 14px 41px 14px 41px; position: relative; text-decoration: none; width:
    min-content; will-change: var(--framer-will-change-override, transform);
    }",".framer-8KkRA .framer-1xvy5om { -webkit-user-select: none; flex: none;
    height: auto; position: relative; user-select: none; white-space: pre; width:
    auto; }",".framer-8KkRA .framer-hmzso9-container { flex: none; height: 16px;
    position: relative; width: 16px; }","@supports (background:
    -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-8KkRA.framer-1bxgkgy { gap: 0px; } .framer-8KkRA.framer-1bxgkgy > * {
    margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); }
    .framer-8KkRA.framer-1bxgkgy > :first-child { margin-left: 0px; }
    .framer-8KkRA.framer-1bxgkgy > :last-child { margin-right: 0px; }
    }",".framer-8KkRA.framer-v-1vksugm.framer-1bxgkgy { padding: 14px 22px 14px
    22px; }",".framer-8KkRA.framer-v-11m2zjh.framer-1bxgkgy { padding: 14px 24px
    14px 24px; }",".framer-8KkRA.framer-v-1bxgkgy.hover.framer-1bxgkgy,
    .framer-8KkRA.framer-v-1qfvx9s.hover.framer-1bxgkgy,
    .framer-8KkRA.framer-v-gcyus6.hover.framer-1bxgkgy,
    .framer-8KkRA.framer-v-33apgd.hover.framer-1bxgkgy { gap: 16px; padding: 14px
    38px 14px 38px; }","@supports (background: -webkit-named-image(i)) and (not
    (font-palette:dark)) { .framer-8KkRA.framer-v-1bxgkgy.hover.framer-1bxgkgy {
    gap: 0px; } .framer-8KkRA.framer-v-1bxgkgy.hover.framer-1bxgkgy > * { margin:
    0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); }
    .framer-8KkRA.framer-v-1bxgkgy.hover.framer-1bxgkgy > :first-child {
    margin-left: 0px; } .framer-8KkRA.framer-v-1bxgkgy.hover.framer-1bxgkgy >
    :last-child { margin-right: 0px; }
    }",".framer-8KkRA.framer-v-11m2zjh.hover.framer-1bxgkgy { gap: 16px; padding:
    14px 21px 14px 21px; }","@supports (background: -webkit-named-image(i)) and (not
    (font-palette:dark)) { .framer-8KkRA.framer-v-11m2zjh.hover.framer-1bxgkgy {
    gap: 0px; } .framer-8KkRA.framer-v-11m2zjh.hover.framer-1bxgkgy > * { margin:
    0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); }
    .framer-8KkRA.framer-v-11m2zjh.hover.framer-1bxgkgy > :first-child {
    margin-left: 0px; } .framer-8KkRA.framer-v-11m2zjh.hover.framer-1bxgkgy >
    :last-child { margin-right: 0px; } }","@supports (background:
    -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-8KkRA.framer-v-1qfvx9s.hover.framer-1bxgkgy { gap: 0px; }
    .framer-8KkRA.framer-v-1qfvx9s.hover.framer-1bxgkgy > * { margin: 0px;
    margin-left: calc(16px / 2); margin-right: calc(16px / 2); }
    .framer-8KkRA.framer-v-1qfvx9s.hover.framer-1bxgkgy > :first-child {
    margin-left: 0px; } .framer-8KkRA.framer-v-1qfvx9s.hover.framer-1bxgkgy >
    :last-child { margin-right: 0px; } }","@supports (background:
    -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-8KkRA.framer-v-gcyus6.hover.framer-1bxgkgy { gap: 0px; }
    .framer-8KkRA.framer-v-gcyus6.hover.framer-1bxgkgy > * { margin: 0px;
    margin-left: calc(16px / 2); margin-right: calc(16px / 2); }
    .framer-8KkRA.framer-v-gcyus6.hover.framer-1bxgkgy > :first-child { margin-left:
    0px; } .framer-8KkRA.framer-v-gcyus6.hover.framer-1bxgkgy > :last-child {
    margin-right: 0px; } }","@supports (background: -webkit-named-image(i)) and (not
    (font-palette:dark)) { .framer-8KkRA.framer-v-33apgd.hover.framer-1bxgkgy { gap:
    0px; } .framer-8KkRA.framer-v-33apgd.hover.framer-1bxgkgy > * { margin: 0px;
    margin-left: calc(16px / 2); margin-right: calc(16px / 2); }
    .framer-8KkRA.framer-v-33apgd.hover.framer-1bxgkgy > :first-child { margin-left:
    0px; } .framer-8KkRA.framer-v-33apgd.hover.framer-1bxgkgy > :last-child {
    margin-right: 0px; } }",'.framer-8KkRA[data-border="true"]::after, .framer-8KkRA
    [data-border="true"]::after { content: ""; border-width: var(--border-top-width,
    0) var(--border-right-width, 0) var(--border-bottom-width, 0)
    var(--border-left-width, 0); border-color: var(--border-color, none);
    border-style: var(--border-style, none); width: 100%; height: 100%; position:
    absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit;
    pointer-events: none;
    }'],ee=j(it,st,"framer-8KkRA"),Ie=ee;ee.displayName="Buttons";ee.defaultProps={height:45,width:176};O(ee,{variant:{options:["Z9iNZSCt8","IzuqIK3S7","rEJPjweMr","PAVVL1bfE","DED2jbRhx","zv2jL2iaB","mpIxmrGp0"],optionTitles:["Primary","Secondary","Navbar
    ","General Services","Overclocking Services","Go
    Back","Discord"],title:"Variant",type:y.Enum},vdxbIB53g:{defaultValue:"rgba(255,
    255, 255, 0)",title:"Background",type:y.Color},rWe7PaIdB:{defaultValue:"Book
    Now",displayTextArea:!1,title:"Title",type:y.String},jzi3u07T6:{title:"Link",type:y.Link},KudNHn3WL:{title:"Link
    2",type:y.Link}});D(ee,[{explicitInter:!0,fonts:[{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F,
    U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F",url:"https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301,
    U+0400-045F, U+0490-0491, U+04B0-04B1,
    U+2116",url:"https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F,
    U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
    U+A720-A7FF",url:"https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF,
    U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
    U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD",url:"https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103,
    U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
    U+20AB",url:"https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",weight:"600"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F,
    U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F",url:"https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301,
    U+0400-045F, U+0490-0491, U+04B0-04B1,
    U+2116",url:"https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F,
    U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
    U+A720-A7FF",url:"https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF,
    U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
    U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD",url:"https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103,
    U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
    U+20AB",url:"https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",weight:"500"}]},...Yr],{supportsExplicitInterCodegen:!0});ae.loadFonts([]);var
    Pe=[{explicitInter:!0,fonts:[]}],_e=[".framer-T5yi9
    .framer-styles-preset-1hzqi1v:not(.rich-text-wrapper), .framer-T5yi9
    .framer-styles-preset-1hzqi1v.rich-text-wrapper a {
    --framer-link-current-text-color: #ffffff;
    --framer-link-current-text-decoration: none; --framer-link-hover-text-color:
    rgba(255, 255, 255, 0.4); --framer-link-hover-text-decoration: none;
    --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.12,
    0.23, 0.5, 1) 0s; }"],Te="framer-T5yi9";var
    mt=W(Ie),ct=["c0pCPiNKf","zRMZxwEzq","mun_s8Xzx"],ft="framer-tuEsz",dt={c0pCPiNKf:"framer-v-1olgus9",mun_s8Xzx:"framer-v-8pg2p0",zRMZxwEzq:"framer-v-kusyem"};function
    J(r,...t){let o={};return t?.forEach(n=>n&&Object.assign(o,r[n])),o}var
    pt={damping:40,delay:0,mass:1,stiffness:400,type:"spring"},ut=({value:r,children:t})=>{let
    o=R(x),n=r??o.transition,i=k(()=>({...o,transition:n}),[JSON.stringify(n)]);return
    e(x.Provider,{value:i,children:t})},ht=a(l),gt={"Phone
    Open":"mun_s8Xzx",Desktop:"c0pCPiNKf",Phone:"zRMZxwEzq"},xt=({height:r,id:t,width:o,...n})=>{var
    i,m;return{...n,variant:(m=(i=gt[n.variant])!==null&&i!==void
    0?i:n.variant)!==null&&m!==void
    0?m:"c0pCPiNKf"}},yt=(r,t)=>r.layoutDependency?t.join("-")+r.layoutDependency:t.join("-"),vt=C(function(r,t){let{activeLocale:o,setLocale:n}=S(),{style:i,className:m,layoutId:c,variant:d,...p}=xt(r),{baseVariant:f,classNames:v,clearLoadingGesture:T,gestureHandlers:w,gestureVariant:u,isLoading:B,setGestureState:Y,setVariant:G,variants:h}=L({cycleOrder:ct,defaultVariant:"c0pCPiNKf",variant:d,variantClassNames:dt}),s=yt(r,h),{activeVariantCallback:b,delay:N}=Re(f),z=b(async(...qe)=>{G("mun_s8Xzx")}),Z=b(async(...qe)=>{G("zRMZxwEzq")}),de=I(null),pe=()=>!!["zRMZxwEzq","mun_s8Xzx"].includes(f),ue=V(),he=[Te],te=U();return
    e(F,{id:c??ue,children:e(ht,{animate:h,initial:!1,children:e(ut,{value:pt,children:q(a.nav,{...p,...w,className:E(ft,...he,"framer-1olgus9",m,v),"data-framer-name":"Desktop",layoutDependency:s,layoutId:"c0pCPiNKf",ref:t??de,style:{backgroundColor:"rgb(28,
    28, 30)",...i},...J({mun_s8Xzx:{"data-framer-name":"Phone
    Open"},zRMZxwEzq:{"data-framer-name":"Phone"}},f,u),children:[q(a.div,{className:"framer-1q26vw8",layoutDependency:s,layoutId:"ecnfxaMAL",children:[q(a.div,{className:"framer-nccxd1","data-framer-name":"Top",layoutDependency:s,layoutId:"ybRpGhVYh",children:[e(g,{href:{webPageId:"augiA20Il"},children:e(Ve,{as:"a",background:{alt:"Harry Chhote
    Logo",fit:"fill",intrinsicHeight:300,intrinsicWidth:340,pixelHeight:300,pixelWidth:340,src:"https://framerusercontent.com/images/If2NThTlS95Ts5GmEaLuUgaZ2Q.png"},className:"framer-5kz5pq
    framer-urigm1","data-framer-name":"Vector",layoutDependency:s,layoutId:"qFr8ABMZG"})}),pe()&&q(a.div,{className:"framer-110tqsh","data-framer-name":"Icon",layoutDependency:s,layoutId:"nbrPaN5DT",...J({mun_s8Xzx:{"data-highlight":!0,onTap:Z},zRMZxwEzq:{"data-highlight":!0,onTap:z}},f,u),children:[e(a.div,{className:"framer-vm60my","data-framer-name":"Bottom",layoutDependency:s,layoutId:"GEa2hHzwk",style:{backgroundColor:"rgb(153,
    153,
    153)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,rotate:0},variants:{mun_s8Xzx:{rotate:-45}}}),e(a.div,{className:"framer-30phsw","data-framer-name":"Top",layoutDependency:s,layoutId:"HgwY7Htd7",style:{backgroundColor:"rgb(153,
    153,
    153)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,rotate:0},variants:{mun_s8Xzx:{rotate:45}}})]})]}),q(a.div,{className:"framer-1qfs58j","data-framer-name":"Links",layoutDependency:s,layoutId:"jLzVnvRwd",style:{opacity:1},variants:{zRMZxwEzq:{opacity:0}},children:[e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"15px","--framer-font-weight":"500","--framer-letter-spacing":"-0.2px","--framer-line-height":"2em","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"augiA20Il"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Home"})})})}),className:"framer-1buohz5",fonts:["Inter-Medium"],layoutDependency:s,layoutId:"u7EIJJVy7",style:{"--extracted-r6o4lv":"rgb(255,
    255,
    255)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...J({mun_s8Xzx:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"augiA20Il"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Home"})})})}),fonts:["GF;Inter
    Tight-600"]},zRMZxwEzq:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"augiA20Il"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Home"})})})}),fonts:["GF;Inter
    Tight-600"]}},f,u)}),e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"15px","--framer-font-weight":"500","--framer-letter-spacing":"-0.2px","--framer-line-height":"2em","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"xq8eJr6XL"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Pricing"})})})}),className:"framer-11lr36i",fonts:["Inter-Medium"],layoutDependency:s,layoutId:"qDtrb4vKG",style:{"--extracted-r6o4lv":"rgb(255,
    255,
    255)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...J({mun_s8Xzx:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"xq8eJr6XL"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Pricing"})})})}),fonts:["GF;Inter
    Tight-600"]},zRMZxwEzq:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"xq8eJr6XL"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"Pricing"})})})}),fonts:["GF;Inter
    Tight-600"]}},f,u)}),e(K,{__fromCanvasComponent:!0,children:e(l,{children:e(a.p,{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter",
    "Inter Placeholder",
    sans-serif',"--framer-font-size":"15px","--framer-font-weight":"500","--framer-letter-spacing":"-0.2px","--framer-line-height":"2em","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"mzYqOgQ2w"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"About"})})})}),className:"framer-28l22g",fonts:["Inter-Medium"],layoutDependency:s,layoutId:"V0sFRHuLR",style:{"--extracted-r6o4lv":"rgb(255,
    255,
    255)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0,...J({mun_s8Xzx:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"mzYqOgQ2w"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"About"})})})}),fonts:["GF;Inter
    Tight-600"]},zRMZxwEzq:{children:e(l,{children:e(a.p,{style:{"--font-selector":"R0Y7SW50ZXIgVGlnaHQtNjAw","--framer-font-family":'"Inter
    Tight", "Inter Tight Placeholder",
    sans-serif',"--framer-font-size":"32px","--framer-font-weight":"600","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv,
    rgb(255, 255,
    255))"},children:e(g,{href:{webPageId:"mzYqOgQ2w"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-1hzqi1v","data-styles-preset":"V7Pfx83Yn",children:"About"})})})}),fonts:["GF;Inter
    Tight-600"]}},f,u)})]}),e(X,{...J({mun_s8Xzx:{width:`min(${te?.width||"100vw"} -
    48px,
    1440px)`}},f,u),children:e(a.div,{className:"framer-8tjlw1-container",layoutDependency:s,layoutId:"lSiy_ioUq-container",children:e(Ie,{height:"100%",id:"lSiy_ioUq",layoutId:"lSiy_ioUq",rWe7PaIdB:"Book
    Now",variant:"rEJPjweMr",vdxbIB53g:"rgba(255, 255, 255,
    0)",width:"100%",...J({mun_s8Xzx:{style:{height:"100%",width:"100%"}}},f,u)})})})]}),e(a.div,{className:"framer-v0ciqd","data-framer-name":"Bottom
    Line",layoutDependency:s,layoutId:"bn8Dr_H1p",style:{backgroundColor:"rgba(255,
    255, 255, 0.08)"}})]})})})})}),wt=["@supports (aspect-ratio: 1) { body {
    --framer-aspect-ratio-supported: auto; } }",".framer-tuEsz.framer-urigm1,
    .framer-tuEsz .framer-urigm1 { display: block; }",".framer-tuEsz.framer-1olgus9
    { align-content: center; align-items: center; display: flex; flex-direction:
    row; flex-wrap: nowrap; gap: 20px; height: 64px; justify-content: center;
    overflow: hidden; padding: 12px 24px 12px 24px; position: relative; width:
    1200px; }",".framer-tuEsz .framer-1q26vw8 { align-content: center; align-items:
    center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap;
    gap: 10px; height: 56px; justify-content: center; max-width: 1440px; overflow:
    visible; padding: 0px; position: relative; width: 1px; }",".framer-tuEsz
    .framer-nccxd1 { align-content: center; align-items: center; display: flex;
    flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height:
    min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px
    0px; position: relative; width: min-content; }",".framer-tuEsz .framer-5kz5pq {
    aspect-ratio: 1.1333333333333333 / 1; flex: none; height:
    var(--framer-aspect-ratio-supported, 36px); overflow: visible; position:
    relative; text-decoration: none; width: 40px; }",".framer-tuEsz .framer-110tqsh
    { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px;
    }",".framer-tuEsz .framer-vm60my { flex: none; height: 2px; left:
    calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top:
    calc(62.50000000000002% - 2px / 2); width: 20px; will-change:
    var(--framer-will-change-override, transform); }",".framer-tuEsz .framer-30phsw
    { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow:
    hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width:
    20px; will-change: var(--framer-will-change-override, transform);
    }",".framer-tuEsz .framer-1qfs58j { align-content: center; align-items: center;
    display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px;
    height: min-content; justify-content: center; overflow: visible; padding: 0px;
    position: relative; width: 1px; }",".framer-tuEsz .framer-1buohz5, .framer-tuEsz
    .framer-11lr36i, .framer-tuEsz .framer-28l22g { -webkit-user-select: none; flex:
    none; height: auto; position: relative; user-select: none; white-space: pre;
    width: auto; }",".framer-tuEsz .framer-8tjlw1-container { flex: none; height:
    auto; position: relative; width: auto; }",".framer-tuEsz .framer-v0ciqd {
    bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position:
    absolute; right: 0px; z-index: 1; }","@supports (background:
    -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-tuEsz.framer-1olgus9, .framer-tuEsz .framer-1q26vw8, .framer-tuEsz
    .framer-nccxd1, .framer-tuEsz .framer-1qfs58j { gap: 0px; }
    .framer-tuEsz.framer-1olgus9 > *, .framer-tuEsz .framer-1qfs58j > * { margin:
    0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); }
    .framer-tuEsz.framer-1olgus9 > :first-child, .framer-tuEsz .framer-1q26vw8 >
    :first-child, .framer-tuEsz .framer-nccxd1 > :first-child, .framer-tuEsz
    .framer-1qfs58j > :first-child { margin-left: 0px; }
    .framer-tuEsz.framer-1olgus9 > :last-child, .framer-tuEsz .framer-1q26vw8 >
    :last-child, .framer-tuEsz .framer-nccxd1 > :last-child, .framer-tuEsz
    .framer-1qfs58j > :last-child { margin-right: 0px; } .framer-tuEsz
    .framer-1q26vw8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right:
    calc(10px / 2); } .framer-tuEsz .framer-nccxd1 > * { margin: 0px; margin-left:
    calc(0px / 2); margin-right: calc(0px / 2); }
    }",".framer-tuEsz.framer-v-kusyem.framer-1olgus9 { flex-direction: column; gap:
    0px; width: 390px; }",".framer-tuEsz.framer-v-kusyem .framer-1q26vw8 {
    flex-direction: column; gap: 0px; height: 1px; justify-content: flex-start;
    order: 0; width: 100%; }",".framer-tuEsz.framer-v-kusyem .framer-nccxd1,
    .framer-tuEsz.framer-v-8pg2p0 .framer-nccxd1 { gap: unset; justify-content:
    space-between; padding: 0px; width: 100%; }",".framer-tuEsz.framer-v-kusyem
    .framer-110tqsh, .framer-tuEsz.framer-v-8pg2p0 .framer-110tqsh { cursor:
    pointer; height: 44px; width: 44px; }",".framer-tuEsz.framer-v-kusyem
    .framer-1qfs58j { align-content: flex-start; align-items: flex-start; flex:
    none; flex-direction: column; gap: 0px; padding: 20px 20px 120px 20px; width:
    100%; }",".framer-tuEsz.framer-v-kusyem .framer-v0ciqd { order: 1; }","@supports
    (background: -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-tuEsz.framer-v-kusyem.framer-1olgus9, .framer-tuEsz.framer-v-kusyem
    .framer-1q26vw8, .framer-tuEsz.framer-v-kusyem .framer-nccxd1,
    .framer-tuEsz.framer-v-kusyem .framer-1qfs58j { gap: 0px; }
    .framer-tuEsz.framer-v-kusyem.framer-1olgus9 > *, .framer-tuEsz.framer-v-kusyem
    .framer-1q26vw8 > *, .framer-tuEsz.framer-v-kusyem .framer-1qfs58j > * { margin:
    0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); }
    .framer-tuEsz.framer-v-kusyem.framer-1olgus9 > :first-child,
    .framer-tuEsz.framer-v-kusyem .framer-1q26vw8 > :first-child,
    .framer-tuEsz.framer-v-kusyem .framer-1qfs58j > :first-child { margin-top: 0px;
    } .framer-tuEsz.framer-v-kusyem.framer-1olgus9 > :last-child,
    .framer-tuEsz.framer-v-kusyem .framer-1q26vw8 > :last-child,
    .framer-tuEsz.framer-v-kusyem .framer-1qfs58j > :last-child { margin-bottom:
    0px; } .framer-tuEsz.framer-v-kusyem .framer-nccxd1 > *,
    .framer-tuEsz.framer-v-kusyem .framer-nccxd1 > :first-child,
    .framer-tuEsz.framer-v-kusyem .framer-nccxd1 > :last-child { margin: 0px; }
    }",".framer-tuEsz.framer-v-8pg2p0.framer-1olgus9 { flex-direction: column; gap:
    0px; height: min-content; max-height: calc(var(--framer-viewport-height, 100vh)
    * 1); width: 390px; }",".framer-tuEsz.framer-v-8pg2p0 .framer-1q26vw8 { flex:
    none; flex-direction: column; height: min-content; justify-content: flex-start;
    width: 100%; }",".framer-tuEsz.framer-v-8pg2p0 .framer-vm60my,
    .framer-tuEsz.framer-v-8pg2p0 .framer-30phsw { top: calc(50.00000000000002% -
    2px / 2); }",".framer-tuEsz.framer-v-8pg2p0 .framer-1qfs58j { align-content:
    flex-start; align-items: flex-start; flex: none; flex-direction: column; gap:
    0px; padding: 20px; width: 100%; }",".framer-tuEsz.framer-v-8pg2p0
    .framer-8tjlw1-container { height: 46px; width: 100%; }","@supports (background:
    -webkit-named-image(i)) and (not (font-palette:dark)) {
    .framer-tuEsz.framer-v-8pg2p0.framer-1olgus9, .framer-tuEsz.framer-v-8pg2p0
    .framer-1q26vw8, .framer-tuEsz.framer-v-8pg2p0 .framer-nccxd1,
    .framer-tuEsz.framer-v-8pg2p0 .framer-1qfs58j { gap: 0px; }
    .framer-tuEsz.framer-v-8pg2p0.framer-1olgus9 > *, .framer-tuEsz.framer-v-8pg2p0
    .framer-1qfs58j > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top:
    calc(0px / 2); } .framer-tuEsz.framer-v-8pg2p0.framer-1olgus9 > :first-child,
    .framer-tuEsz.framer-v-8pg2p0 .framer-1q26vw8 > :first-child,
    .framer-tuEsz.framer-v-8pg2p0 .framer-1qfs58j > :first-child { margin-top: 0px;
    } .framer-tuEsz.framer-v-8pg2p0.framer-1olgus9 > :last-child,
    .framer-tuEsz.framer-v-8pg2p0 .framer-1q26vw8 > :last-child,
    .framer-tuEsz.framer-v-8pg2p0 .framer-1qfs58j > :last-child { margin-bottom:
    0px; } .framer-tuEsz.framer-v-8pg2p0 .framer-1q26vw8 > * { margin: 0px;
    margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); }
    .framer-tuEsz.framer-v-8pg2p0 .framer-nccxd1 > *, .framer-tuEsz.framer-v-8pg2p0
    .framer-nccxd1 > :first-child, .framer-tuEsz.framer-v-8pg2p0 .framer-nccxd1 >
    :last-child { margin: 0px; }
    }",..._e],re=j(vt,wt,"framer-tuEsz"),Go=re;re.displayName="Navbar";re.defaultProps={height:64,width:1200};O(re,{variant:{options:["c0pCPiNKf","zRMZxwEzq","mun_s8Xzx"],optionTitles:["Desktop","Phone","Phone
    Open"],title:"Variant",type:y.Enum}});D(re,[{explicitInter:!0,fonts:[{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F,
    U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F",url:"https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301,
    U+0400-045F, U+0490-0491, U+04B0-04B1,
    U+2116",url:"https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F,
    U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
    U+A720-A7FF",url:"https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF,
    U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
    U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD",url:"https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103,
    U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
    U+20AB",url:"https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",weight:"500"},{family:"Inter
    Tight",source:"google",style:"normal",url:"https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj0QiqWSRToK8EPg.woff2",weight:"600"}]},...mt,...ne(Pe)],{supportsExplicitInterCodegen:!0});export{Se
    as a,Ue as b,je as c,H as d,Vo as e,Ie as f,Go as g}; //#
    sourceMappingURL=chunk-NUWFSD74.mjs.map
    