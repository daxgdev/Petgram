if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let c={};const l=e=>i(e,s),u={module:{uri:s},exports:c,require:l};a[s]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-72a6a5e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/./index.html",revision:"fcd8b8cbfe9aa6544ed399705ca5bbf0"},{url:"/1fb68dfc4601b4328e47.ico",revision:null},{url:"/3.app.bundle.js",revision:"b5e41a55c2de552a8f8291e522d3a297"},{url:"/308.app.bundle.js",revision:"df856ba180d6cfa3bfbf327ec91c767c"},{url:"/324.app.bundle.js",revision:"381765caf2a7efe7eca530e2fe299f07"},{url:"/337.app.bundle.js",revision:"650996bf3540df31ecdb29785e8949b7"},{url:"/355.app.bundle.js",revision:"a741a1fb5c308562b26408bba2092fc8"},{url:"/430.app.bundle.js",revision:"77db6d39ee9d90a1479a01897f52ec8d"},{url:"/593.app.bundle.js",revision:"ba51883820ba9211588bb63386179060"},{url:"/83.app.bundle.js",revision:"e25b2788eeb700160029295258fa5cf5"},{url:"/880.app.bundle.js",revision:"748a98945c61cd6e9c49e1fbeaa41921"},{url:"/929.app.bundle.js",revision:"ebae74ecd5605a6403a5b74eadfb2aa3"},{url:"/9c921a82f6ff942f7424.png",revision:null},{url:"/app.bundle.js",revision:"e91eac4ffdc40b99d8749cadeb5fca79"},{url:"/app.bundle.js.LICENSE.txt",revision:"c712c49b7c9586f737374405449fc85f"}],{}),e.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/petgram-server-daxter.vercel.app/,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map