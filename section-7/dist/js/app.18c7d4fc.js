(function(){"use strict";var n={6071:function(n,e,t){var r=t(9242),i=t(3396);const o=(0,i._)("header",null,[(0,i._)("h1",null,"My Friends")],-1);function l(n,e,t,r,l,u){const a=(0,i.up)("friend-contact");return(0,i.wg)(),(0,i.iD)("section",null,[o,(0,i._)("ul",null,[(0,i.Wm)(a),(0,i.Wm)(a)])])}var u={data(){return{friends:[{id:"manuel",name:"Manuel Lorenz",phone:"01234 5678 991",email:"manuel@localhost.com"},{id:"julie",name:"Julie Jones",phone:"09876 543 221",email:"julie@localhost.com"}]}}},a=t(89);const c=(0,a.Z)(u,[["render",l]]);var s=c,f=t(7139);const d={key:0},h=(0,i._)("strong",null,"Phone:",-1),m=(0,i._)("strong",null,"Eamil:",-1);function p(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)("li",null,[(0,i._)("h2",null,(0,f.zw)(o.friend.name),1),(0,i._)("button",{onClick:e[0]||(e[0]=(...n)=>l.toggleDetails&&l.toggleDetails(...n))},(0,f.zw)(o.detailsAreVisible?"Hide":"Show")+" Details ",1),o.detailsAreVisible?((0,i.wg)(),(0,i.iD)("ul",d,[(0,i._)("li",null,[h,(0,i.Uk)(" "+(0,f.zw)(o.friend.phone),1)]),(0,i._)("li",null,[m,(0,i.Uk)(" "+(0,f.zw)(o.friend.email),1)])])):(0,i.kq)("",!0)])}var v={data(){return{detailsAreVisible:!1,friend:{id:"manuel",name:"Manuel Lorenz",phone:"01234 5678 991",email:"manuel@localhost.com"}}},methods:{toggleDetails(){this.detailsAreVisible=!this.detailsAreVisible}}};const b=(0,a.Z)(v,[["render",p]]);var g=b;const w=(0,r.ri)(s);w.component("friend-contact",g),w.mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var l=1/0;for(s=0;s<n.length;s++){r=n[s][0],i=n[s][1],o=n[s][2];for(var u=!0,a=0;a<r.length;a++)(!1&o||l>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(u=!1,o<l&&(l=o));if(u){n.splice(s--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,l=r[0],u=r[1],a=r[2],c=0;if(l.some((function(e){return 0!==n[e]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(a)var s=a(t)}for(e&&e(r);c<l.length;c++)o=l[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(s)},r=self["webpackChunkcomponents2"]=self["webpackChunkcomponents2"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6071)}));r=t.O(r)})();
//# sourceMappingURL=app.18c7d4fc.js.map