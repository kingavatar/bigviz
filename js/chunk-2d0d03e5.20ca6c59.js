(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03e5"],{"66c2":function(e,t,s){"use strict";s.r(t),s.d(t,"execute",(function(){return a}));var r=s("debd"),n=s("ce50");let o;function a(e,t={}){let s=t.responseType;s?"json"!==s&&"text"!==s&&"blob"!==s&&"array-buffer"!==s&&(s="text"):s="json";const a=t&&t.signal;return delete t.signal,r["a"].invokeStaticMessage("request",{url:e,options:t},{signal:a}).then(r=>{const a=r.data;let u,c,l,i;if(a&&!("json"!==s&&"text"!==s&&"blob"!==s||(u=new Blob([a]),"json"!==s&&"text"!==s||(o||(o=new FileReaderSync),c=o.readAsText(u),"json"!==s)))){try{l=JSON.parse(c||null)}catch(r){const s={...r,url:e,requestOptions:t};throw new n["a"]("request:server",r.message,s)}if(l.error){const s={...l.error,url:e,requestOptions:t};throw new n["a"]("request:server",l.error.message,s)}}switch(s){case"json":i=l;break;case"text":i=c;break;case"blob":i=u;break;default:i=a}return{data:i,requestOptions:t,ssl:r.ssl,url:e}})}}}]);
//# sourceMappingURL=chunk-2d0d03e5.20ca6c59.js.map