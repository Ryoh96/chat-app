if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next/app-build-manifest.json",revision:"51bdf30e339e151237e5f9c83da1e842"},{url:"/_next/static/7M3HKBwR-F5O8D6ykusyv/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/7M3HKBwR-F5O8D6ykusyv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/178-fb38ae19c5f10f92.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/457b8330-6d54214f358f1a21.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/691-2f896bad82c0a3fe.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/724-e1dacae80595c0f4.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/809-80cb0c1c48dcc6ed.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/82deed28-53c42d132cc1ecb2.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/864-a62e5d6cd986ea2f.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/_not-found-07fcda89946a5baf.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/layout-ffc6ec5631226fde.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/loading-4b451b978cfd29c1.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/page-09b6baacbe4be7df.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/signIn/page-5a279b2676a6bc86.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/app/signUp/page-38b07ea668343adb.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/fd9d1056-9d3ec6b778d2f776.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/main-75a89440855c735a.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/main-app-fd0b50e20473fb64.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-64faeba66c33e655.js",revision:"7M3HKBwR-F5O8D6ykusyv"},{url:"/_next/static/css/c500896442c8d8b8.css",revision:"c500896442c8d8b8"},{url:"/_next/static/css/f0f41f7bc6000d8d.css",revision:"f0f41f7bc6000d8d"},{url:"/_next/static/media/359316181103ffc3-s.woff2",revision:"43d01c3a691ffc297adac5e5cc699220"},{url:"/_next/static/media/3ce00292e737ec8d-s.woff2",revision:"52f177e7f875579807335395d2e522d5"},{url:"/_next/static/media/6a103d049e77fb0a-s.woff2",revision:"7bee9b5ea950c05e413804f2bd28bc24"},{url:"/_next/static/media/96d9326e69cb2802-s.woff2",revision:"212f4fea53e269ef8367f2bb0550e86c"},{url:"/_next/static/media/b2b1f866f4efff78-s.woff2",revision:"d425a44288a7de4cbcab033fa4c2454d"},{url:"/_next/static/media/c098c406e081b7cf-s.woff2",revision:"28ed8c78c47dfc6bf6c19b9a2c84fd19"},{url:"/_next/static/media/f14f14f3bec127db-s.woff2",revision:"abb94c9e5933838eb9d319279f70c432"},{url:"/icon-192x192.png",revision:"3641ddebb5be9f40a210ecb09865aaca"},{url:"/icon-256x256.png",revision:"4bdd46e2ae1477e881bac34aacadabd8"},{url:"/icon-384x384.png",revision:"4fff0b05fbb909180988ae5a1780294d"},{url:"/icon-512x512.png",revision:"01f5ddd055980be5c1b6a95280053556"},{url:"/index.html",revision:"e1d94fac323bda846363e654582cb726"},{url:"/manifest.json",revision:"1a5e4d41a6ae881359bc7115a45db579"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
