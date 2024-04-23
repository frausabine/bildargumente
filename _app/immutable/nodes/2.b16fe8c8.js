import{e as J}from"../chunks/singletons.f4fb3936.js";import{S as D,i as N,s as j,k as g,l as d,m as A,h,n as u,b as M,H as L,J as re,e as C,q as z,a as T,r as V,c as H,p as K,G as _,u as q,K as Q,L as F,M as W,N as ce,O as ue,g as I,d as P,f as fe,I as me,o as he,w as _e,P as ge,y as O,z as G,A as R,Q as de,B as U,v as pe}from"../chunks/index.7c5e5199.js";import{p as ve}from"../chunks/stores.3c4cfec7.js";import{c as X,t as S,l as oe,d as be,a as B,i as Y}from"../chunks/setup.158a0fb1.js";const ke=async({fetch:s})=>({posts:await(await s(`${J}/api/posts`)).json()}),ze=Object.freeze(Object.defineProperty({__proto__:null,load:ke},Symbol.toStringTag,{value:"Module"}));function Z(s,e,t){const l=s.slice();return l[2]=e[t],l}function $(s){let e,t,l,n=s[2].meta.title+"",a,i,c,r,p,m=s[2].meta.cover&&x(s),o=s[2].meta.description&&ee(s);return{c(){e=g("a"),t=g("div"),l=g("h2"),a=z(n),i=T(),m&&m.c(),c=T(),o&&o.c(),r=T(),this.h()},l(f){e=d(f,"A",{href:!0,target:!0,class:!0});var v=A(e);t=d(v,"DIV",{class:!0,style:!0});var E=A(t);l=d(E,"H2",{class:!0});var y=A(l);a=V(y,n),y.forEach(h),i=H(E),m&&m.l(E),c=H(E),o&&o.l(E),E.forEach(h),r=H(v),v.forEach(h),this.h()},h(){u(l,"class","svelte-mhwrab"),u(t,"class","column svelte-mhwrab"),K(t,"--meta-color",s[2].meta.color),u(e,"href",p=""+(J+s[2].path)),u(e,"target","_self"),u(e,"class","svelte-mhwrab")},m(f,v){M(f,e,v),_(e,t),_(t,l),_(l,a),_(t,i),m&&m.m(t,null),_(t,c),o&&o.m(t,null),_(e,r)},p(f,v){v&1&&n!==(n=f[2].meta.title+"")&&q(a,n),f[2].meta.cover?m?m.p(f,v):(m=x(f),m.c(),m.m(t,c)):m&&(m.d(1),m=null),f[2].meta.description?o?o.p(f,v):(o=ee(f),o.c(),o.m(t,null)):o&&(o.d(1),o=null),v&1&&K(t,"--meta-color",f[2].meta.color),v&1&&p!==(p=""+(J+f[2].path))&&u(e,"href",p)},d(f){f&&h(e),m&&m.d(),o&&o.d()}}}function x(s){let e,t,l;return{c(){e=g("img"),this.h()},l(n){e=d(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,t=s[2].meta.cover)||u(e,"src",t),u(e,"alt",l=s[2].meta.title),u(e,"class","svelte-mhwrab")},m(n,a){M(n,e,a)},p(n,a){a&1&&!Q(e.src,t=n[2].meta.cover)&&u(e,"src",t),a&1&&l!==(l=n[2].meta.title)&&u(e,"alt",l)},d(n){n&&h(e)}}}function ee(s){let e,t=s[2].meta.description+"";return{c(){e=g("div"),this.h()},l(l){e=d(l,"DIV",{class:!0});var n=A(e);n.forEach(h),this.h()},h(){u(e,"class","text svelte-mhwrab")},m(l,n){M(l,e,n),e.innerHTML=t},p(l,n){n&1&&t!==(t=l[2].meta.description+"")&&(e.innerHTML=t)},d(l){l&&h(e)}}}function te(s){let e,t=s[2].meta.isPublic&&s[2].meta.lang==s[1]&&$(s);return{c(){t&&t.c(),e=C()},l(l){t&&t.l(l),e=C()},m(l,n){t&&t.m(l,n),M(l,e,n)},p(l,n){l[2].meta.isPublic&&l[2].meta.lang==l[1]?t?t.p(l,n):(t=$(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&h(e)}}}function Ee(s){let e,t=s[0].posts,l=[];for(let n=0;n<t.length;n+=1)l[n]=te(Z(s,t,n));return{c(){e=g("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=d(n,"DIV",{class:!0});var a=A(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(h),this.h()},h(){u(e,"class","columns svelte-mhwrab")},m(n,a){M(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,[a]){if(a&3){t=n[0].posts;let i;for(i=0;i<t.length;i+=1){const c=Z(n,t,i);l[i]?l[i].p(c,a):(l[i]=te(c),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:L,o:L,d(n){n&&h(e),re(l,n)}}}function we(s,e,t){let{data:l}=e,{lang:n}=e;return s.$$set=a=>{"data"in a&&t(0,l=a.data),"lang"in a&&t(1,n=a.lang)},[l,n]}class ye extends D{constructor(e){super(),N(this,e,we,Ee,j,{data:0,lang:1})}}function le(s){let e,t=s[2][s[1]]+"",l;return{c(){e=g("h3"),l=z(t),this.h()},l(n){e=d(n,"H3",{class:!0});var a=A(e);l=V(a,t),a.forEach(h),this.h()},h(){u(e,"class","svelte-hlg6w7")},m(n,a){M(n,e,a),_(e,l)},p(n,a){a&6&&t!==(t=n[2][n[1]]+"")&&q(l,t)},d(n){n&&h(e)}}}function Me(s){let e,t,l,n,a=s[2][s[1]]&&le(s);return{c(){e=g("header"),t=g("h1"),l=z(s[0]),n=T(),a&&a.c(),this.h()},l(i){e=d(i,"HEADER",{class:!0});var c=A(e);t=d(c,"H1",{});var r=A(t);l=V(r,s[0]),r.forEach(h),n=H(c),a&&a.l(c),c.forEach(h),this.h()},h(){u(e,"class","svelte-hlg6w7")},m(i,c){M(i,e,c),_(e,t),_(t,l),_(e,n),a&&a.m(e,null)},p(i,[c]){c&1&&q(l,i[0]),i[2][i[1]]?a?a.p(i,c):(a=le(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:L,o:L,d(i){i&&h(e),a&&a.d()}}}function Ae(s,e,t){let{title:l}=e,{lang:n}=e,{description:a}=e;return s.$$set=i=>{"title"in i&&t(0,l=i.title),"lang"in i&&t(1,n=i.lang),"description"in i&&t(2,a=i.description)},[l,n,a]}class Te extends D{constructor(e){super(),N(this,e,Ae,Me,j,{title:0,lang:1,description:2})}}function ne(s,e,t){const l=s.slice();return l[5]=e[t],l}function ae(s){let e,t=s[1],l=[];for(let n=0;n<t.length;n+=1)l[n]=se(ne(s,t,n));return{c(){e=g("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=d(n,"DIV",{class:!0});var a=A(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(h),this.h()},h(){u(e,"class","svelte-3a7y0z")},m(n,a){M(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,a){if(a&7){t=n[1];let i;for(i=0;i<t.length;i+=1){const c=ne(n,t,i);l[i]?l[i].p(c,a):(l[i]=se(c),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(n){n&&h(e),re(l,n)}}}function se(s){let e,t=s[5].toUpperCase()+"",l,n,a,i;function c(){return s[3](s[5])}function r(){return s[4](s[5])}return{c(){e=g("span"),l=z(t),this.h()},l(p){e=d(p,"SPAN",{disabled:!0,class:!0});var m=A(e);l=V(m,t),m.forEach(h),this.h()},h(){u(e,"disabled",n=s[0]===s[5]),u(e,"class","svelte-3a7y0z"),F(e,"selected",s[0]===s[5])},m(p,m){M(p,e,m),_(e,l),a||(i=[W(e,"click",c),W(e,"keydown",r)],a=!0)},p(p,m){s=p,m&2&&t!==(t=s[5].toUpperCase()+"")&&q(l,t),m&3&&n!==(n=s[0]===s[5])&&u(e,"disabled",n),m&3&&F(e,"selected",s[0]===s[5])},d(p){p&&h(e),a=!1,ce(i)}}}function He(s){let e,t=s[1].length>1&&ae(s);return{c(){t&&t.c(),e=C()},l(l){t&&t.l(l),e=C()},m(l,n){t&&t.m(l,n),M(l,e,n)},p(l,[n]){l[1].length>1?t?t.p(l,n):(t=ae(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:L,o:L,d(l){t&&t.d(l),l&&h(e)}}}function Ie(s,e,t){let{lang:l}=e,{languages:n}=e;function a(r){t(0,l=r),localStorage.setItem("selectedLanguage",r)}const i=r=>a(r),c=r=>a(r);return s.$$set=r=>{"lang"in r&&t(0,l=r.lang),"languages"in r&&t(1,n=r.languages)},[l,n,a,i,c]}class Le extends D{constructor(e){super(),N(this,e,Ie,He,j,{lang:0,languages:1})}}function ie(s){let e,t,l,n,a,i,c,r;function p(o){s[3](o)}let m={languages:oe};return s[1]!==void 0&&(m.lang=s[1]),t=new Le({props:m}),_e.push(()=>ge(t,"lang",p)),a=new Te({props:{essays:s[0].posts.filter(s[4]).length,lang:s[1],description:be,title:S}}),c=new ye({props:{data:s[0],lang:s[1]}}),{c(){e=g("article"),O(t.$$.fragment),n=T(),O(a.$$.fragment),i=T(),O(c.$$.fragment),this.h()},l(o){e=d(o,"ARTICLE",{style:!0});var f=A(e);G(t.$$.fragment,f),n=H(f),G(a.$$.fragment,f),i=H(f),G(c.$$.fragment,f),f.forEach(h),this.h()},h(){K(e,"--theme-color","blue")},m(o,f){M(o,e,f),R(t,e,null),_(e,n),R(a,e,null),_(e,i),R(c,e,null),r=!0},p(o,f){const v={};!l&&f&2&&(l=!0,v.lang=o[1],de(()=>l=!1)),t.$set(v);const E={};f&3&&(E.essays=o[0].posts.filter(o[4]).length),f&2&&(E.lang=o[1]),a.$set(E);const y={};f&1&&(y.data=o[0]),f&2&&(y.lang=o[1]),c.$set(y)},i(o){r||(I(t.$$.fragment,o),I(a.$$.fragment,o),I(c.$$.fragment,o),r=!0)},o(o){P(t.$$.fragment,o),P(a.$$.fragment,o),P(c.$$.fragment,o),r=!1},d(o){o&&h(e),U(t),U(a),U(c)}}}function Se(s){let e,t,l,n,a,i,c,r,p,m,o,f,v,E,y,b=X&&s[1]&&s[0]!=null&&ie(s);return document.title=t=S,{c(){b&&b.c(),e=T(),l=g("meta"),n=g("meta"),i=g("meta"),c=g("meta"),r=g("meta"),p=g("meta"),m=g("meta"),f=g("meta"),v=g("meta"),E=g("meta"),this.h()},l(w){b&&b.l(w),e=H(w);const k=ue("svelte-151sjl4",document.head);l=d(k,"META",{name:!0,content:!0}),n=d(k,"META",{property:!0,content:!0}),i=d(k,"META",{property:!0,content:!0}),c=d(k,"META",{property:!0,content:!0}),r=d(k,"META",{property:!0,content:!0}),p=d(k,"META",{name:!0,content:!0}),m=d(k,"META",{property:!0,content:!0}),f=d(k,"META",{name:!0,content:!0}),v=d(k,"META",{name:!0,content:!0}),E=d(k,"META",{name:!0,content:!0}),k.forEach(h),this.h()},h(){u(l,"name","description"),u(l,"content",B),u(n,"property","og:url"),u(n,"content",a=s[2].url.origin),u(i,"property","og:title"),u(i,"content",S),u(c,"property","og:description"),u(c,"content",B),u(r,"property","og:image"),u(r,"content",Y),u(p,"name","twitter:card"),u(p,"content","summary_large_image"),u(m,"property","twitter:url"),u(m,"content",o=s[2].url.origin),u(f,"name","twitter:title"),u(f,"content",S),u(v,"name","twitter:description"),u(v,"content",B),u(E,"name","twitter:image"),u(E,"content",Y)},m(w,k){b&&b.m(w,k),M(w,e,k),_(document.head,l),_(document.head,n),_(document.head,i),_(document.head,c),_(document.head,r),_(document.head,p),_(document.head,m),_(document.head,f),_(document.head,v),_(document.head,E),y=!0},p(w,[k]){X&&w[1]&&w[0]!=null?b?(b.p(w,k),k&3&&I(b,1)):(b=ie(w),b.c(),I(b,1),b.m(e.parentNode,e)):b&&(pe(),P(b,1,1,()=>{b=null}),fe()),(!y||k&0)&&t!==(t=S)&&(document.title=t),(!y||k&4&&a!==(a=w[2].url.origin))&&u(n,"content",a),(!y||k&4&&o!==(o=w[2].url.origin))&&u(m,"content",o)},i(w){y||(I(b),y=!0)},o(w){P(b),y=!1},d(w){b&&b.d(w),w&&h(e),h(l),h(n),h(i),h(c),h(r),h(p),h(m),h(f),h(v),h(E)}}}function Pe(s,e,t){let l;me(s,ve,r=>t(2,l=r));let{data:n}=e,a="";he(async()=>{const r=localStorage.getItem("selectedLanguage");r?t(1,a=r):t(1,a=oe[0])});function i(r){a=r,t(1,a)}const c=r=>r.meta.isPublic&r.meta.lang==a;return s.$$set=r=>{"data"in r&&t(0,n=r.data)},[n,a,l,i,c]}class Ve extends D{constructor(e){super(),N(this,e,Pe,Se,j,{data:0})}}export{Ve as component,ze as universal};
