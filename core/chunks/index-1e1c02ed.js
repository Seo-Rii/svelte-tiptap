function w(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(T)}function P(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function ot(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e,i){if(t){const c=q(t,n,e,i);return t[0](c)}}function q(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)u[l]=n.dirty[l]|c[l];return u}return n.dirty|c}return n.dirty}function ut(t,n,e,i,c,u){if(c){const o=q(n,e,i,u);t.p(o,c)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function at(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function _t(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function dt(t){return t&&P(t.destroy)?t.destroy:w}let v=!1;function I(){v=!0}function U(){v=!1}function W(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function G(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:W(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const u=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);u.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<u.length&&o[r].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(o[r],a)}}function J(t,n){if(v){for(G(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){v&&!e?J(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function K(t){t.parentNode.removeChild(t)}function Q(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function mt(){return j(" ")}function pt(){return j("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function R(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function gt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:R(t,i,n[i])}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){X(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Y(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const u=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||u.push(l.name)}u.forEach(o=>c.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return Y(t,n,e,Q)}function Z(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function bt(t){return Z(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Et(t){d().$$.before_update.push(t)}function kt(t){d().$$.on_mount.push(t)}function At(t){d().$$.after_update.push(t)}function jt(t){d().$$.on_destroy.push(t)}function St(t,n){d().$$.context.set(t,n)}function Nt(t){return d().$$.context.get(t)}const h=[],M=[],b=[],O=[],D=Promise.resolve();let k=!1;function L(){k||(k=!0,D.then(z))}function Ct(){return L(),D}function A(t){b.push(t)}const E=new Set;let x=0;function z(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),tt(n.$$)}for(m(null),h.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(h.length);for(;O.length;)O.pop()();k=!1,E.clear(),m(t)}function tt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Ot(){_.r||y(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Pt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=n[u];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[u]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||A(()=>{const r=u.map(T).filter(P);o?o.push(...r):y(r),t.$$.on_mount=[]}),l.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(h.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,c,u,o,l=[-1]){const r=p;m(t);const s=t.$$={fragment:null,ctx:null,props:u,update:w,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...S)=>{const N=S.length?S[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=N)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](N),a&&rt(t,f)),g}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){I();const f=V(n.target);s.fragment&&s.fragment.l(f),f.forEach(K)}else s.fragment&&s.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),U(),z()}m(r)}class zt{$destroy(){it(this,1),this.$destroy=w}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,it as B,F as C,Ct as D,w as E,lt as F,J as G,ut as H,ft as I,st as J,_t as K,Nt as L,at as M,M as N,gt as O,yt as P,dt as Q,y as R,zt as S,vt as T,ot as U,Et as V,jt as W,V as a,R as b,xt as c,K as d,Q as e,wt as f,ht as g,Z as h,Lt as i,$t as j,mt as k,pt as l,bt as m,Mt as n,Tt as o,Ot as p,nt as q,St as r,ct as s,j as t,At as u,kt as v,Bt as w,Dt as x,et as y,Pt as z};
