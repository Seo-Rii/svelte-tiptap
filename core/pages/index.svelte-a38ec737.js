import{S as O,i as U,s as D,l as le,g as v,q as H,o as B,d,L as ne,M as me,v as oe,E as _e,C as M,N as ve,O as se,F as re,e as g,c as w,a as k,P as L,Q as x,R as j,H as ae,I as ie,J as ue,z as ce,T as K,U as E,w as z,x as F,y as G,B as J,t as y,k as A,h as S,m as C,b as h,G as p,j as ge,V as de,W as be,X as we,K as ke,Y as Ee,Z as Te}from"../chunks/vendor-eb0bebae.js";import{T as Ne,S as fe,E as ye,c as Se}from"../chunks/EditorContent-336534df.js";const Ae=n=>{n.setAttribute("data-node-view-content",""),n.style.whiteSpace="pre-wrap"},Ce=n=>{n.setAttribute("data-drag-handle","")},$e=()=>{};function Pe(n){let e,l,o,s;const i=n[6].default,r=re(i,n,n[5],null);let u=[{"data-node-view-wrapper":""},n[4]],a={};for(let t=0;t<u.length;t+=1)a=M(a,u[t]);return{c(){e=g("div"),r&&r.c(),this.h()},l(t){e=w(t,"DIV",{"data-node-view-wrapper":!0});var c=k(e);r&&r.l(c),c.forEach(d),this.h()},h(){L(e,a)},m(t,c){v(t,e,c),r&&r.m(e,null),n[8](e),l=!0,o||(s=[x(e,"dragstart",n[2]),j(n[0].call(null,e))],o=!0)},p(t,c){r&&r.p&&(!l||c&32)&&ae(r,i,t,t[5],l?ue(i,t[5],c,null):ie(t[5]),null),L(e,a=ce(u,[{"data-node-view-wrapper":""},c&16&&t[4]]))},i(t){l||(H(r,t),l=!0)},o(t){B(r,t),l=!1},d(t){t&&d(e),r&&r.d(t),n[8](null),o=!1,K(s)}}}function xe(n){let e,l,o,s;const i=n[6].default,r=re(i,n,n[5],null);let u=[{"data-node-view-wrapper":""},n[4]],a={};for(let t=0;t<u.length;t+=1)a=M(a,u[t]);return{c(){e=g("span"),r&&r.c(),this.h()},l(t){e=w(t,"SPAN",{"data-node-view-wrapper":!0});var c=k(e);r&&r.l(c),c.forEach(d),this.h()},h(){L(e,a)},m(t,c){v(t,e,c),r&&r.m(e,null),n[7](e),l=!0,o||(s=[x(e,"dragstart",n[2]),j(n[0].call(null,e))],o=!0)},p(t,c){r&&r.p&&(!l||c&32)&&ae(r,i,t,t[5],l?ue(i,t[5],c,null):ie(t[5]),null),L(e,a=ce(u,[{"data-node-view-wrapper":""},c&16&&t[4]]))},i(t){l||(H(r,t),l=!0)},o(t){B(r,t),l=!1},d(t){t&&d(e),r&&r.d(t),n[7](null),o=!1,K(s)}}}function He(n){let e,l,o,s;const i=[xe,Pe],r=[];function u(a,t){return a[3]?0:1}return e=u(n),l=r[e]=i[e](n),{c(){l.c(),o=le()},l(a){l.l(a),o=le()},m(a,t){r[e].m(a,t),v(a,o,t),s=!0},p(a,[t]){l.p(a,t)},i(a){s||(H(l),s=!0)},o(a){B(l),s=!1},d(a){r[e].d(a),a&&d(o)}}}function Be(n,e,l){const o=["action"];let s=ne(e,o),{$$slots:i={},$$scope:r}=e;const{onDragStart:u,isInline:a}=me(Ne);let t,{action:c=$e}=e;oe(async()=>{await _e(),l(1,t.style.whiteSpace="normal",t)});function _(f){se[f?"unshift":"push"](()=>{t=f,l(1,t)})}function b(f){se[f?"unshift":"push"](()=>{t=f,l(1,t)})}return n.$$set=f=>{e=M(M({},e),ve(f)),l(4,s=ne(e,o)),"action"in f&&l(0,c=f.action),"$$scope"in f&&l(5,r=f.$$scope)},[c,t,u,a,s,r,i,_,b]}class pe extends O{constructor(e){super();U(this,e,Be,He,D,{action:0})}}function Ie(n){let e,l,o,s,i,r,u=n[0].attrs.count+"",a,t,c,_;return{c(){e=g("span"),l=y("Svelte Component"),o=A(),s=g("div"),i=g("button"),r=y("This button has been clicked "),a=y(u),t=y(" times."),this.h()},l(b){e=w(b,"SPAN",{class:!0});var f=k(e);l=S(f,"Svelte Component"),f.forEach(d),o=C(b),s=w(b,"DIV",{class:!0});var T=k(s);i=w(T,"BUTTON",{id:!0,class:!0,type:!0});var $=k(i);r=S($,"This button has been clicked "),a=S($,u),t=S($," times."),$.forEach(d),T.forEach(d),this.h()},h(){h(e,"class","bg-black py-1 px-3 text-white rounded-b-md uppercase text-[0.6rem] font-bold w-max"),h(i,"id","counter-component"),h(i,"class","bg-gray-200 border-black border rounded px-1"),h(i,"type","button"),h(s,"class","mt-4")},m(b,f){v(b,e,f),p(e,l),v(b,o,f),v(b,s,f),p(s,i),p(i,r),p(i,a),p(i,t),c||(_=x(i,"click",n[2]),c=!0)},p(b,f){f&1&&u!==(u=b[0].attrs.count+"")&&ge(a,u)},d(b){b&&d(e),b&&d(o),b&&d(s),c=!1,_()}}}function Ve(n){let e,l;return e=new pe({props:{id:"svelte-component",class:E("bg-yellow-200/90 border-black border-2 px-4 pb-4 rounded-md flex flex-col my-4",{"border-green-500":n[1]}),action:Ce,$$slots:{default:[Ie]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,s){G(e,o,s),l=!0},p(o,[s]){const i={};s&2&&(i.class=E("bg-yellow-200/90 border-black border-2 px-4 pb-4 rounded-md flex flex-col my-4",{"border-green-500":o[1]})),s&17&&(i.$$scope={dirty:s,ctx:o}),e.$set(i)},i(o){l||(H(e.$$.fragment,o),l=!0)},o(o){B(e.$$.fragment,o),l=!1},d(o){J(e,o)}}}function Oe(n,e,l){let{node:o}=e,{updateAttributes:s}=e,{selected:i=!1}=e;const r=()=>{s({count:o.attrs.count+1})};return n.$$set=u=>{"node"in u&&l(0,o=u.node),"updateAttributes"in u&&l(3,s=u.updateAttributes),"selected"in u&&l(1,i=u.selected)},[o,i,r,s]}class Ue extends O{constructor(e){super();U(this,e,Oe,Ve,D,{node:0,updateAttributes:3,selected:1})}}function De(n){let e,l,o,s,i,r;return{c(){e=g("span"),l=y("Svelte Editable Component"),o=A(),s=g("p"),this.h()},l(u){e=w(u,"SPAN",{class:!0});var a=k(e);l=S(a,"Svelte Editable Component"),a.forEach(d),o=C(u),s=w(u,"P",{id:!0,class:!0}),k(s).forEach(d),this.h()},h(){h(e,"class","bg-black py-1 px-3 text-white rounded-b-md uppercase text-[0.6rem] font-bold w-max"),h(s,"id","editable-component"),h(s,"class","mt-4 border-dashed border-gray-900/20 border-2 p-2 rounded-md")},m(u,a){v(u,e,a),p(e,l),v(u,o,a),v(u,s,a),i||(r=j(Ae.call(null,s)),i=!0)},d(u){u&&d(e),u&&d(o),u&&d(s),i=!1,r()}}}function Me(n){let e,l;return e=new pe({props:{id:"svelte-component",class:"bg-yellow-200/90 border-black border-2 px-4 pb-4 my-4 rounded-md flex flex-col",$$slots:{default:[De]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,s){G(e,o,s),l=!0},p(o,[s]){const i={};s&1&&(i.$$scope={dirty:s,ctx:o}),e.$set(i)},i(o){l||(H(e.$$.fragment,o),l=!0)},o(o){B(e.$$.fragment,o),l=!1},d(o){J(e,o)}}}class Le extends O{constructor(e){super();U(this,e,null,Me,D,{})}}const Re=de.create({name:"svelteCounterComponent",group:"block",atom:!0,draggable:!0,inline:!1,addAttributes(){return{count:{default:0}}},parseHTML(){return[{tag:"svelte-counter-component"}]},renderHTML({HTMLAttributes:n}){return["svelte-counter-component",be(n)]},addNodeView(){return fe(Ue)}}),qe=de.create({name:"svelteEditableComponent",group:"block",content:"inline*",parseHTML(){return[{tag:"svelte-editable-component"}]},renderHTML({HTMLAttributes:n}){return["svelte-editable-component",be(n),0]},addNodeView(){return fe(Le)}});function he(n){let e,l,o,s,i,r,u,a,t,c,_,b,f,T,$,I,R,P,q,V,W,Q;return{c(){e=g("div"),l=g("button"),o=y("H1"),i=A(),r=g("button"),u=y("H2"),t=A(),c=g("button"),_=y("B"),f=A(),T=g("button"),$=y("I"),R=A(),P=g("button"),q=y("P"),this.h()},l(N){e=w(N,"DIV",{class:!0});var m=k(e);l=w(m,"BUTTON",{class:!0});var X=k(l);o=S(X,"H1"),X.forEach(d),i=C(m),r=w(m,"BUTTON",{class:!0});var Y=k(r);u=S(Y,"H2"),Y.forEach(d),t=C(m),c=w(m,"BUTTON",{class:!0});var Z=k(c);_=S(Z,"B"),Z.forEach(d),f=C(m),T=w(m,"BUTTON",{class:!0});var ee=k(T);$=S(ee,"I"),ee.forEach(d),R=C(m),P=w(m,"BUTTON",{class:!0});var te=k(P);q=S(te,"P"),te.forEach(d),m.forEach(d),this.h()},h(){h(l,"class",s=E("hover:bg-black hover:text-white w-7 h-7 rounded",{"bg-black text-white":n[2]("heading",{level:1})})),h(r,"class",a=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":n[2]("heading",{level:2})})),h(c,"class",b=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":n[2]("bold")})),h(T,"class",I=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":n[2]("italic")})),h(P,"class",V=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":n[2]("paragraph")})),h(e,"class","border-black border-2 border-b-0 rounded-t-md p-2 flex")},m(N,m){v(N,e,m),p(e,l),p(l,o),p(e,i),p(e,r),p(r,u),p(e,t),p(e,c),p(c,_),p(e,f),p(e,T),p(T,$),p(e,R),p(e,P),p(P,q),W||(Q=[x(l,"click",n[3](1)),x(r,"click",n[3](2)),x(c,"click",n[4]),x(T,"click",n[5]),x(P,"click",n[6])],W=!0)},p(N,m){m&4&&s!==(s=E("hover:bg-black hover:text-white w-7 h-7 rounded",{"bg-black text-white":N[2]("heading",{level:1})}))&&h(l,"class",s),m&4&&a!==(a=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":N[2]("heading",{level:2})}))&&h(r,"class",a),m&4&&b!==(b=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":N[2]("bold")}))&&h(c,"class",b),m&4&&I!==(I=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":N[2]("italic")}))&&h(T,"class",I),m&4&&V!==(V=E("hover:bg-black hover:text-white w-7 h-7 rounded ml-1",{"bg-black text-white":N[2]("paragraph")}))&&h(P,"class",V)},d(N){N&&d(e),W=!1,K(Q)}}}function We(n){let e,l,o,s,i,r,u,a=n[1]&&he(n);return r=new ye({props:{editor:n[0]}}),{c(){e=A(),l=g("h1"),o=y("Editor with Nodeview Renderer"),s=A(),a&&a.c(),i=A(),z(r.$$.fragment),this.h()},l(t){we('[data-svelte="svelte-1drq7vc"]',document.head).forEach(d),e=C(t),l=w(t,"H1",{class:!0});var _=k(l);o=S(_,"Editor with Nodeview Renderer"),_.forEach(d),s=C(t),a&&a.l(t),i=C(t),F(r.$$.fragment,t),this.h()},h(){document.title="Tiptap Svelte",h(l,"class","mb-2")},m(t,c){v(t,e,c),v(t,l,c),p(l,o),v(t,s,c),a&&a.m(t,c),v(t,i,c),G(r,t,c),u=!0},p(t,[c]){t[1]?a?a.p(t,c):(a=he(t),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null);const _={};c&1&&(_.editor=t[0]),r.$set(_)},i(t){u||(H(r.$$.fragment,t),u=!0)},o(t){B(r.$$.fragment,t),u=!1},d(t){t&&d(e),t&&d(l),t&&d(s),a&&a.d(t),t&&d(i),J(r,t)}}}function je(n,e,l){let o,s,i=ke,r=()=>(i(),i=Ee(u,b=>l(0,s=b)),u);n.$$.on_destroy.push(()=>i());let u;oe(()=>{r(l(1,u=Se({extensions:[Te,Re,qe],content:`
        <p>This is still the text editor you're used to, but enriched with node views.</p>
        <svelte-counter-component count="0"></svelte-counter-component>
        <p>This is an editable component</p>
        <svelte-editable-component>This is editable</svelte-editable-component>
        <p>Did you see that? That's a Svelte component. We are really living in the future.</p>
      `,editorProps:{attributes:{class:"border-2 border-black rounded-b-md p-3 outline-none "}}})))});const a=b=>()=>{s.chain().focus().toggleHeading({level:b}).run()},t=()=>{s.chain().focus().toggleBold().run()},c=()=>{s.chain().focus().toggleItalic().run()},_=()=>{s.chain().focus().setParagraph().run()};return n.$$.update=()=>{n.$$.dirty&1&&l(2,o=(b,f={})=>s.isActive(b,f))},[s,u,o,a,t,c,_]}class Fe extends O{constructor(e){super();U(this,e,je,We,D,{})}}export{Fe as default};
