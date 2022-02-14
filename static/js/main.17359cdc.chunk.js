(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{80:function(e,n,t){"use strict";t.r(n);var i,r=t(22),a=t(0),o=t.n(a),c=t(38),s=t.n(c),d=t(4),l=t(18),p=t(7),b=t(49),m="#3a529c",f="#1ca9f0",x="#ffffff",u="#ededf7",h="#f4f5f9",j="#495576",g="640px",O=t(42),y=t(45),w=t(1),v=d.b.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1bxvhip-0"})(["border-radius:50%;height:",";min-width:",";"],(function(e){return e.size}),(function(e){return e.size})),C=function(e){var n=e.src,t=e.size,i=e.alt,r=t||"2rem";return Object(w.jsx)(v,{src:n,size:r,alt:i})},k=d.b.nav.withConfig({displayName:"Sidebar__Container",componentId:"sc-2cnea-0"})(["grid-area:sidebar;background-color:",";display:flex;flex-direction:column;overflow-y:auto;min-width:250px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);@media (max-width:","){position:absolute;height:100%;transition:transform 0.3s ease-in-out;transform:",";min-width:70%;z-index:2;}"],u,g,(function(e){return!e.isSidebarOpen&&"translateX(-100%)"})),_=d.b.ul.withConfig({displayName:"Sidebar__SidebarList",componentId:"sc-2cnea-1"})(["list-style:none;padding:0;margin-top:0;"]),A=Object(d.b)(l.b).withConfig({displayName:"Sidebar__StyledNavLink",componentId:"sc-2cnea-2"})(["display:flex;flex:1;flex-direction:row;align-items:center;padding:20px;text-transform:capitalize;text-decoration:none;border-left:solid 5px ",";color:",";font-size:1.3rem;font-weight:bold;@media (min-width:","){font-size:1rem;}&.active{background-color:white;border-left:solid 5px ",";}svg{height:1em;width:1em;margin-right:1rem;}"],u,m,g,f),I=d.b.div.withConfig({displayName:"Sidebar__ProfileContainer",componentId:"sc-2cnea-3"})(["display:flex;flex-direction:column;align-items:center;padding:15px;background-color:",";color:",";span{margin-top:10px;font-size:1.2rem;}"],m,u),N=function(e){var n=e.isSidebarOpen,t=e.onLinkClicked;return Object(w.jsxs)(k,{isSidebarOpen:n,children:[Object(w.jsxs)(I,{children:[Object(w.jsx)(C,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC",size:"6rem"}),Object(w.jsx)("span",{children:"Lester Freamon"})]}),Object(w.jsxs)(_,{children:[Object(w.jsx)("li",{children:Object(w.jsxs)(A,{to:"/",exact:!0,onClick:t,children:[Object(w.jsx)(O.a,{}),"Friends"]})}),Object(w.jsx)("li",{children:Object(w.jsxs)(A,{to:"/about",onClick:t,children:[Object(w.jsx)(y.a,{}),"About"]})})]})]})},z=d.b.section.withConfig({displayName:"Page__Container",componentId:"bggh82-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;padding:20px;& h1{margin:0;color:",";}"],j),L=d.b.article.withConfig({displayName:"Page__Content",componentId:"bggh82-1"})(["display:flex;flex:1;flex-direction:column;background-color:white;overflow-y:auto;align-items:center;"]),S=function(e){var n=e.heading,t=e.children;return Object(w.jsxs)(z,{children:[Object(w.jsx)("h1",{children:n}),Object(w.jsx)(L,{children:t})]})},F=d.b.div.withConfig({displayName:"FriendListItem__Container",componentId:"y5n5ob-0"})(["display:flex;flex:1;flex-direction:row;align-items:center;text-decoration:none;background-color:",";margin:10px 0;min-height:4rem;border-radius:5px;padding:15px 15px 15px 25px;"],u),D=d.b.div.withConfig({displayName:"FriendListItem__FriendDetailsContainer",componentId:"y5n5ob-1"})(["display:flex;margin-left:20px;flex-direction:column;"]),B=d.b.span.withConfig({displayName:"FriendListItem__FriendName",componentId:"y5n5ob-2"})(["display:flex;flex-direction:column;color:",";font-size:1.3rem;font-weight:bold;margin-bottom:8px;"],j),M=d.b.span.withConfig({displayName:"FriendListItem__FriendEmail",componentId:"y5n5ob-3"})(["display:flex;flex-direction:column;color:",";font-weight:bold;font-size:0.8rem;"],j),E=function(e){var n=e.friend;return Object(w.jsxs)(F,{children:[Object(w.jsx)(C,{src:n.avatarUrl,size:"5rem"}),Object(w.jsxs)(D,{children:[Object(w.jsx)(B,{children:n.name}),Object(w.jsx)(M,{children:n.email})]})]})},R=d.b.div.withConfig({displayName:"Loader__Container",componentId:"sc-851yaz-0"})(["display:flex;flex-direction:column;justify-content:center;min-width:100px;min-height:100px;"]),H=d.b.div.withConfig({displayName:"Loader__DotsContainer",componentId:"sc-851yaz-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),T=d.b.span.withConfig({displayName:"Loader__Dot",componentId:"sc-851yaz-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],f),Y=d.b.span.withConfig({displayName:"Loader__Text",componentId:"sc-851yaz-3"})([""]),X=function(e){var n=e.text,t=n?Object(w.jsx)(Y,{children:n}):null;return Object(w.jsxs)(R,{children:[Object(w.jsxs)(H,{children:[Object(w.jsx)(T,{}),Object(w.jsx)(T,{}),Object(w.jsx)(T,{})]}),t]})},G=t(16),K=t.n(G),P=t(24),Q=t(46),U=t.n(Q),W={get:function(){var e=Object(P.a)(K.a.mark((function e(n,t){var i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(n,{params:t});case 2:return i=e.sent,e.abrupt("return",null===i||void 0===i?void 0:i.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},V={getFriends:function(){var e=Object(P.a)(K.a.mark((function e(){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("https://my-json-server.typicode.com/cmacdonnacha/mock-rest-endpoints/users");case 2:return n=e.sent,e.abrupt("return",n||[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};!function(e){e.LOADING="loading",e.SUCCESS="success",e.IDLE="idle",e.ERROR="error"}(i||(i={}));var J,q=t(83),Z=d.b.ul.withConfig({displayName:"FriendsList__List",componentId:"sc-1in825q-0"})(["display:flex;flex-direction:column;justify-content:center;flex:1;list-style:none;padding:0;"]),$=function(){var e=Object(q.a)("friendsData",V.getFriends),n=e.status,t=e.data;return Object(w.jsx)(Z,{children:n===i.LOADING?Object(w.jsx)(X,{text:"Making friends..."}):n===i.ERROR?Object(w.jsx)("span",{children:"Something went wrong :-("}):0===(null===t||void 0===t?void 0:t.length)?Object(w.jsx)("span",{children:"No friends found :-("}):null===t||void 0===t?void 0:t.slice(0,10).map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(E,{friend:e})},e.id)}))})},ee=function(){return Object(w.jsx)(S,{heading:"My Friends",children:Object(w.jsx)($,{})})},ne=d.b.p(J||(J=Object(r.a)(["\n  display: flex;\n  flex: 1;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n"]))),te=function(){return Object(w.jsx)(S,{heading:"About",children:Object(w.jsx)(ne,{children:"This is the about page, where I tell you all about myself!"})})},ie=d.b.main.withConfig({displayName:"Routes__Container",componentId:"c4exm-0"})(["grid-area:content;display:flex;flex:1;margin:10px;overflow-y:auto;overflow-x:hidden;"]),re=function(){return Object(w.jsx)(ie,{children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{exact:!0,path:"/",children:Object(w.jsx)(ee,{})}),Object(w.jsx)(p.a,{path:"/about",children:Object(w.jsx)(te,{})})]})})},ae=d.b.button.withConfig({displayName:"MenuButton__StyledMenuButton",componentId:"edzm44-0"})(["@media (min-width:","){display:none;}position:absolute;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:",";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:",";}:nth-child(2){opacity:",";transform:",";}:nth-child(3){transform:",";}}"],g,x,(function(e){return e.isOpen?"rotate(45deg)":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(20px)":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg)":"rotate(0)"})),oe=function(e){var n=e.isOpen,t=e.onClick;return Object(w.jsxs)(ae,{"aria-label":"Toggle menu","aria-expanded":n,isOpen:n,onClick:t,children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]})},ce=d.b.header.withConfig({displayName:"Header__Container",componentId:"sc-1rt5dm9-0"})(["grid-area:header;background-color:#3a529c;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding-left:15px;box-shadow:1px 2px 4px rgba(0,0,0,0.5);"]),se=d.b.h3.withConfig({displayName:"Header__Title",componentId:"sc-1rt5dm9-1"})(["margin-left:2.5em;color:",";@media (min-width:","){margin-left:0.2em;}"],x,g),de=function(e){var n=e.isSidebarOpen,t=e.onMenuButtonClicked;return Object(w.jsxs)(ce,{children:[Object(w.jsx)(oe,{isOpen:n,onClick:t}),Object(w.jsx)(se,{children:"React Boilerplate"})]})},le=d.b.div.withConfig({displayName:"Backdrop__Container",componentId:"sc-1ojd1uv-0"})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1;"]),pe=function(e){var n=e.onClick;return Object(w.jsx)(le,{onClick:n})},be=d.b.div.withConfig({displayName:"App__Layout",componentId:"fw9cl6-0"})(["height:100%;display:grid;grid-template-rows:50px 1fr;grid-template-columns:auto 2fr;grid-template-areas:'header header' 'sidebar content';"]);var me,fe=function(){var e=Object(a.useState)(!1),n=Object(b.a)(e,2),t=n[0],i=n[1],r=function(){i(!t)},o=t?Object(w.jsx)(pe,{onClick:r}):null;return Object(w.jsxs)(be,{children:[Object(w.jsx)(de,{isSidebarOpen:t,onMenuButtonClicked:r}),Object(w.jsx)(N,{isSidebarOpen:t,onLinkClicked:function(){t&&r()}}),o,Object(w.jsx)(re,{})]})},xe=t(82),ue=t(47),he=t(48),je=new xe.a,ge=Object(d.a)(me||(me=Object(r.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ",";\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;\n  }\n"])),h);s.a.render(Object(w.jsxs)(ue.a,{client:je,children:[Object(w.jsxs)(o.a.Fragment,{children:[Object(w.jsx)(l.a,{basename:"/react-boilerplate",children:Object(w.jsx)(p.a,{path:"/",component:fe})}),Object(w.jsx)(ge,{})]}),Object(w.jsx)(he.ReactQueryDevtools,{initialIsOpen:!0})]}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.17359cdc.chunk.js.map