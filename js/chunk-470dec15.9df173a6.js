(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-470dec15"],{"04f0":function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f}));var r=n("0b2d"),o=n("4212"),i=n("e431"),a=n("dae5"),c=n("b139"),s=n("7577");function l(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function u(e,t,n){n*=.5;const r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function f(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>o["a"]?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function d(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3],c=n[0],s=n[1],l=n[2],u=n[3];return e[0]=r*u+a*c+o*l-i*s,e[1]=o*u+a*s+i*c-r*l,e[2]=i*u+a*l+r*s-o*c,e[3]=a*u-r*c-o*s-i*l,e}function b(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],c=Math.sin(n),s=Math.cos(n);return e[0]=r*s+a*c,e[1]=o*s+i*c,e[2]=i*s-o*c,e[3]=a*s-r*c,e}function p(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],c=Math.sin(n),s=Math.cos(n);return e[0]=r*s-i*c,e[1]=o*s+a*c,e[2]=i*s+r*c,e[3]=a*s-o*c,e}function h(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],a=t[3],c=Math.sin(n),s=Math.cos(n);return e[0]=r*s+o*c,e[1]=o*s-r*c,e[2]=i*s+a*c,e[3]=a*s-i*c,e}function y(e,t){const n=t[0],r=t[1],o=t[2];return e[0]=n,e[1]=r,e[2]=o,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),e}function j(e,t,n,r){const i=t[0],a=t[1],c=t[2],s=t[3];let l,u,f,d,b,p=n[0],h=n[1],y=n[2],j=n[3];return u=i*p+a*h+c*y+s*j,u<0&&(u=-u,p=-p,h=-h,y=-y,j=-j),1-u>o["a"]?(l=Math.acos(u),f=Math.sin(l),d=Math.sin((1-r)*l)/f,b=Math.sin(r*l)/f):(d=1-r,b=r),e[0]=d*i+b*p,e[1]=d*a+b*h,e[2]=d*c+b*y,e[3]=d*s+b*j,e}function O(e){const t=Object(o["b"])(),n=Object(o["b"])(),r=Object(o["b"])(),i=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=a*Math.sin(2*Math.PI*r),e[3]=a*Math.cos(2*Math.PI*r),e}function w(e,t){const n=t[0],r=t[1],o=t[2],i=t[3],a=n*n+r*r+o*o+i*i,c=a?1/a:0;return e[0]=-n*c,e[1]=-r*c,e[2]=-o*c,e[3]=i*c,e}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const n=t[0]+t[4]+t[8];let r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(t[3*n+n]-t[3*o+o]-t[3*i+i]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*o+i]-t[3*i+o])*r,e[o]=(t[3*o+n]+t[3*n+o])*r,e[i]=(t[3*i+n]+t[3*n+i])*r}return e}function v(e,t,n,r){const o=.5*Math.PI/180;t*=o,n*=o,r*=o;const i=Math.sin(t),a=Math.cos(t),c=Math.sin(n),s=Math.cos(n),l=Math.sin(r),u=Math.cos(r);return e[0]=i*s*u-a*c*l,e[1]=a*c*u+i*s*l,e[2]=a*s*l-i*c*u,e[3]=a*s*u+i*c*l,e}function M(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const C=s["c"],T=s["k"],A=s["a"],U=d,I=s["b"],S=s["d"],x=s["i"],V=s["e"],z=V,F=s["f"],B=F,D=s["j"],k=s["g"],q=s["h"];function P(e,t,n){const r=Object(i["e"])(t,n);return r<-.999999?(Object(i["d"])(_,R,t),Object(i["k"])(_)<1e-6&&Object(i["d"])(_,N,t),Object(i["o"])(_,_),u(e,_,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(i["d"])(_,t,n),e[0]=_[0],e[1]=_[1],e[2]=_[2],e[3]=1+r,D(e,e))}const _=Object(r["e"])(),R=Object(r["g"])(1,0,0),N=Object(r["g"])(0,1,0);function L(e,t,n,r,o,i){return j(E,t,o,i),j(Y,n,r,i),j(e,E,Y,2*i*(1-i)),e}const E=Object(c["a"])(),Y=Object(c["a"])();function Z(e,t,n,r){const o=K;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],D(e,m(e,o))}const K=Object(a["a"])();Object.freeze({__proto__:null,identity:l,setAxisAngle:u,getAxisAngle:f,multiply:d,rotateX:b,rotateY:p,rotateZ:h,calculateW:y,slerp:j,random:O,invert:w,conjugate:g,fromMat3:m,fromEuler:v,str:M,copy:C,set:T,add:A,mul:U,scale:I,dot:S,lerp:x,length:V,len:z,squaredLength:F,sqrLen:B,normalize:D,exactEquals:k,equals:q,rotationTo:P,sqlerp:L,setAxes:Z})},"47f8":function(e,t,n){"use strict";function r(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function a(e,t){return new Float32Array(e,t,3)}function c(){return r()}function s(){return i(1,1,1)}function l(){return i(1,0,0)}function u(){return i(0,1,0)}function f(){return i(0,0,1)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const d=c(),b=s(),p=l(),h=u(),y=f();Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a,zeros:c,ones:s,unitX:l,unitY:u,unitZ:f,ZEROS:d,ONES:b,UNIT_X:p,UNIT_Y:h,UNIT_Z:y})},"4e0d":function(e,t,n){"use strict";var r,o=n("a4ee"),i=(n("c120"),n("7ffa")),a=(n("e92d"),n("cea0")),c=n("59b2"),s=n("448d"),l=n("d386"),u=(n("e041"),n("8eed"),n("f402"),n("7731")),f=n("d611"),d=n("6a0e"),b=n("9ef0");let p=r=class extends d["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(i["a"])(this.color)})}};Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o["a"])([Object(c["b"])({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),Object(o["a"])([Object(c["b"])({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),Object(o["a"])([Object(c["b"])({type:b["a"],json:{type:[a["a"]],write:!0}})],p.prototype,"color",void 0),p=r=Object(o["a"])([Object(l["a"])("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);var h,y=p,j=y;let O=h=class extends u["a"]{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(i["a"])(this.colorClassBreakInfos),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(s["a"])({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(o["a"])([Object(c["b"])({type:f["a"],json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(o["a"])([Object(c["b"])({type:u["a"].fieldTransformTypeKebabDict.apiValues,json:{type:u["a"].fieldTransformTypeKebabDict.jsonValues,read:u["a"].fieldTransformTypeKebabDict.read,write:u["a"].fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(c["b"])({type:[j],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(o["a"])([Object(l["a"])("esri.renderers.PointCloudClassBreaksRenderer")],O);var w=O;t["a"]=w},"578b":function(e,t,n){"use strict";var r,o=n("a4ee"),i=(n("c120"),n("7ffa")),a=(n("e92d"),n("cea0")),c=n("59b2"),s=n("448d"),l=n("d386"),u=(n("e041"),n("8eed"),n("f402"),n("7731")),f=n("d611"),d=n("6a0e"),b=n("9ef0");let p=r=class extends d["a"]{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new r({label:this.label,value:this.value,color:Object(i["a"])(this.color)})}};Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o["a"])([Object(c["b"])({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"value",void 0),Object(o["a"])([Object(c["b"])({type:b["a"],json:{type:[a["a"]],write:!0}})],p.prototype,"color",void 0),p=r=Object(o["a"])([Object(l["a"])("esri.renderers.support.pointCloud.StopInfo")],p);var h,y=p,j=y;let O=h=class extends u["a"]{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new h({...this.cloneProperties(),field:Object(i["a"])(this.field),fieldTransformType:Object(i["a"])(this.fieldTransformType),stops:Object(i["a"])(this.stops),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(s["a"])({pointCloudStretchRenderer:"point-cloud-stretch"})],O.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(o["a"])([Object(c["b"])({type:f["a"],json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(o["a"])([Object(c["b"])({type:u["a"].fieldTransformTypeKebabDict.apiValues,json:{type:u["a"].fieldTransformTypeKebabDict.jsonValues,read:u["a"].fieldTransformTypeKebabDict.read,write:u["a"].fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(c["b"])({type:[j],json:{write:!0}})],O.prototype,"stops",void 0),O=h=Object(o["a"])([Object(l["a"])("esri.renderers.PointCloudStretchRenderer")],O);var w=O;t["a"]=w},7577:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return V})),n.d(t,"i",(function(){return T})),n.d(t,"j",(function(){return M})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return U}));var r=n("4212");function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,n,r,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=o,e}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function c(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function s(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function l(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function u(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function f(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function d(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e}function b(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e}function p(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function h(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function y(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function j(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(n*n+r*r+o*o+i*i)}function O(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+o*o+i*i}function w(e){const t=e[0],n=e[1],r=e[2],o=e[3];return Math.sqrt(t*t+n*n+r*r+o*o)}function g(e){const t=e[0],n=e[1],r=e[2],o=e[3];return t*t+n*n+r*r+o*o}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function v(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function M(e,t){const n=t[0],r=t[1],o=t[2],i=t[3];let a=n*n+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=n*a,e[1]=r*a,e[2]=o*a,e[3]=i*a),e}function C(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function T(e,t,n,r){const o=t[0],i=t[1],a=t[2],c=t[3];return e[0]=o+r*(n[0]-o),e[1]=i+r*(n[1]-i),e[2]=a+r*(n[2]-a),e[3]=c+r*(n[3]-c),e}function A(e,t){let n,o,i,a,c,s;t=t||1;do{n=2*Object(r["b"])()-1,o=2*Object(r["b"])()-1,c=n*n+o*o}while(c>=1);do{i=2*Object(r["b"])()-1,a=2*Object(r["b"])()-1,s=i*i+a*a}while(s>=1);const l=Math.sqrt((1-c)/s);return e[0]=t*n,e[1]=t*o,e[2]=t*i*l,e[3]=t*a*l,e}function U(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3];return e[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*a,e[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*a,e[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*a,e[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*a,e}function I(e,t,n){const r=t[0],o=t[1],i=t[2],a=n[0],c=n[1],s=n[2],l=n[3],u=l*r+c*i-s*o,f=l*o+s*r-a*i,d=l*i+a*o-c*r,b=-a*r-c*o-s*i;return e[0]=u*l+b*-a+f*-s-d*-c,e[1]=f*l+b*-c+d*-a-u*-s,e[2]=d*l+b*-s+u*-c-f*-a,e[3]=t[3],e}function S(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function x(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function V(e,t){const n=e[0],o=e[1],i=e[2],a=e[3],c=t[0],s=t[1],l=t[2],u=t[3];return Math.abs(n-c)<=r["a"]*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(o-s)<=r["a"]*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(i-l)<=r["a"]*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(a-u)<=r["a"]*Math.max(1,Math.abs(a),Math.abs(u))}let z=c,F=s,B=l,D=j,k=O,q=w,P=g;Object.freeze({__proto__:null,copy:o,set:i,add:a,subtract:c,multiply:s,divide:l,ceil:u,floor:f,min:d,max:b,round:p,scale:h,scaleAndAdd:y,distance:j,squaredDistance:O,length:w,squaredLength:g,negate:m,inverse:v,normalize:M,dot:C,lerp:T,random:A,transformMat4:U,transformQuat:I,str:S,exactEquals:x,equals:V,sub:z,mul:F,div:B,dist:D,sqrDist:k,len:q,sqrLen:P})},7731:function(e,t,n){"use strict";var r,o=n("a4ee"),i=(n("c120"),n("7ffa")),a=(n("e92d"),n("cea0"),n("59b2")),c=n("fa8a"),s=n("d386"),l=(n("e041"),n("8eed"),n("f402"),n("6a0e"));let u=r=class extends l["a"]{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(o["a"])([Object(a["b"])({type:String,json:{write:!0}})],u.prototype,"field",void 0),Object(o["a"])([Object(a["b"])({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),Object(o["a"])([Object(a["b"])({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=r=Object(o["a"])([Object(s["a"])("esri.renderers.support.pointCloud.ColorModulation")],u);var f=u,d=f;const b=new c["a"]({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends l["a"]{};Object(o["a"])([Object(a["b"])({type:b.apiValues,readOnly:!0,nonNullable:!0,json:{type:b.jsonValues,read:!1,write:b.write}})],p.prototype,"type",void 0),p=Object(o["a"])([Object(s["a"])("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);var h,y=p,j=y,O=n("448d");let w=h=class extends j{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(o["a"])([Object(O["a"])({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),Object(o["a"])([Object(a["b"])({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0),w=h=Object(o["a"])([Object(s["a"])("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w);var g,m=w,v=m;let M=g=class extends j{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new g({scaleFactor:this.scaleFactor})}};Object(o["a"])([Object(O["a"])({pointCloudSplatAlgorithm:"splat"})],M.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({type:Number,value:1,nonNullable:!0,json:{write:!0}})],M.prototype,"scaleFactor",void 0),M=g=Object(o["a"])([Object(s["a"])("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],M);var C=M,T=C;const A={key:"type",base:j,typeMap:{"fixed-size":v,splat:T}},U=Object(c["b"])()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let I=class extends l["a"]{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(i["a"])(this.pointSizeAlgorithm),colorModulation:Object(i["a"])(this.colorModulation),pointsPerInch:Object(i["a"])(this.pointsPerInch)}}};Object(o["a"])([Object(a["b"])({type:U.apiValues,readOnly:!0,nonNullable:!0,json:{type:U.jsonValues,read:!1,write:U.write}})],I.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({types:A,json:{write:!0}})],I.prototype,"pointSizeAlgorithm",void 0),Object(o["a"])([Object(a["b"])({type:d,json:{write:!0}})],I.prototype,"colorModulation",void 0),Object(o["a"])([Object(a["b"])({json:{write:!0},nonNullable:!0,type:Number})],I.prototype,"pointsPerInch",void 0),I=Object(o["a"])([Object(s["a"])("esri.renderers.PointCloudRenderer")],I),function(e){e.fieldTransformTypeKebabDict=new c["a"]({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(I||(I={}));var S=I;t["a"]=S},a1f7:function(e,t,n){"use strict";var r,o=n("a4ee"),i=(n("c120"),n("7ffa")),a=(n("e92d"),n("cea0")),c=n("59b2"),s=n("448d"),l=n("d386"),u=(n("e041"),n("8eed"),n("f402"),n("7731")),f=n("d611"),d=n("6a0e"),b=n("9ef0");let p=r=class extends d["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:Object(i["a"])(this.values),color:Object(i["a"])(this.color)})}};Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(o["a"])([Object(c["b"])({type:[String],json:{write:!0}})],p.prototype,"values",void 0),Object(o["a"])([Object(c["b"])({type:b["a"],json:{type:[a["a"]],write:!0}})],p.prototype,"color",void 0),p=r=Object(o["a"])([Object(l["a"])("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],p);var h,y=p,j=y;let O=h=class extends u["a"]{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(i["a"])(this.field),fieldTransformType:Object(i["a"])(this.fieldTransformType),colorUniqueValueInfos:Object(i["a"])(this.colorUniqueValueInfos),legendOptions:Object(i["a"])(this.legendOptions)})}};Object(o["a"])([Object(s["a"])({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(o["a"])([Object(c["b"])({type:u["a"].fieldTransformTypeKebabDict.apiValues,json:{type:u["a"].fieldTransformTypeKebabDict.jsonValues,read:u["a"].fieldTransformTypeKebabDict.read,write:u["a"].fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(o["a"])([Object(c["b"])({type:[j],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(o["a"])([Object(c["b"])({type:f["a"],json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(o["a"])([Object(l["a"])("esri.renderers.PointCloudUniqueValueRenderer")],O);var w=O;t["a"]=w},aebe:function(e,t,n){"use strict";n.r(t);var r=n("a21b"),o=n("b2b2"),i=n("f4cc"),a=n("5996"),c=n("e431"),s=n("8188"),l=n("04f0"),u=n("47f8");function f(){const e=new Float32Array(4);return e[3]=1,e}function d(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function b(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o}function p(e,t){return new Float32Array(e,t,4)}Object.freeze({__proto__:null,create:f,clone:d,fromValues:b,createView:p});var h=n("4e0d"),y=n("578b"),j=n("a1f7"),O=n("ce50");const w=0,g=10,m=10,v=12,M=16;function C(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+w,g)),version:t.getUint16(n+m,!0),checksum:t.getUint32(n+v,!0)}}const T=0,A=4,U=8,I=16,S=24,x=32,V=40,z=48,F=56,B=64,D=72,k=80,q=84,P=88;function _(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=C(e,t,n);if(n+=M,"LEPCC     "!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+T,!0),sizeHi:e.getUint32(t+A,!0),minX:e.getFloat64(t+U,!0),minY:e.getFloat64(t+I,!0),minZ:e.getFloat64(t+S,!0),maxX:e.getFloat64(t+x,!0),maxY:e.getFloat64(t+V,!0),maxZ:e.getFloat64(t+z,!0),errorX:e.getFloat64(t+F,!0),errorY:e.getFloat64(t+B,!0),errorZ:e.getFloat64(t+D,!0),count:e.getUint32(t+k,!0),reserved:e.getUint32(t+q,!0)}}(t,n);if(n+=P,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const a=new Float64Array(3*i.count),c=[],s=[],l=[],u=[];if(n=R(e,n,c),n=R(e,n,s),n=R(e,n,l),n=R(e,n,u),n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad length");let f=0,d=0;for(let b=0;b<c.length;b++){d+=c[b];let e=0;for(let t=0;t<s[b];t++){e+=l[f];const t=u[f];a[3*f]=Math.min(i.maxX,i.minX+2*i.errorX*e),a[3*f+1]=Math.min(i.maxY,i.minY+2*i.errorY*d),a[3*f+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),f++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:a}}function R(e,t,n){const r=[];t=N(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=N(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function N(e,t,n){const r=new DataView(e,t),o=r.getUint8(0),i=31&o,a=!!(32&o),c=(192&o)>>6;let s=0;if(0===c)s=r.getUint32(1,!0),t+=5;else if(1===c)s=r.getUint16(1,!0),t+=3;else{if(2!==c)throw new O["a"]("lepcc-decode-error","Bad count type");s=r.getUint8(1),t+=2}if(a)throw new O["a"]("lepcc-decode-error","LUT not implemented");const l=Math.ceil(s*i/8),u=new Uint8Array(e,t,l);let f=0,d=0,b=0;const p=-1>>>32-i;for(let h=0;h<s;h++){for(;d<i;)f|=u[b]<<d,d+=8,b+=1;n[h]=f&p,f>>>=i,d-=i,d+i>32&&(f|=u[b-1]>>8-d)}return t+b}const L=0,E=4,Y=8,Z=12,K=14,X=15,J=16;function W(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=C(e,t,n);if(n+=M,"ClusterRGB"!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+L,!0),sizeHi:e.getUint32(t+E,!0),count:e.getUint32(t+Y,!0),colorMapCount:e.getUint16(t+Z,!0),lookupMethod:e.getUint8(t+K),compressionMethod:e.getUint8(t+X)}}(t,n);if(n+=J,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new O["a"]("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),r=new Uint8Array(e,n+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=r[e];o[3*e]=t[3*n],o[3*e+1]=t[3*n+1],o[3*e+2]=t[3*n+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new O["a"]("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new O["a"]("lepcc-decode-error","Bad count");const r=t.getUint8(n),o=t.getUint8(n+1),a=t.getUint8(n+2),c=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)c[3*e]=r,c[3*e+1]=o,c[3*e+2]=a;return c}throw new O["a"]("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const H=0,G=4,$=8,Q=12,ee=14,te=15,ne=16;function re(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=C(e,t,n);if(n+=M,"Intensity "!==r)throw new O["a"]("lepcc-decode-error","Bad identifier");if(o>1)throw new O["a"]("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+H,!0),sizeHi:e.getUint32(t+G,!0),count:e.getUint32(t+$,!0),scaleFactor:e.getUint16(t+Q,!0),bitsPerPoint:e.getUint8(t+ee),reserved:e.getUint8(t+te)}}(t,n);if(n+=ne,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const a=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}else{const t=[];if(N(e,n,t)!==e.byteLength)throw new O["a"]("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)a[e]=t[e]*i.scaleFactor}return a}var oe=n("7ffa"),ie=n("e92d");const ae=ie["a"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function ce(e,t,n){let r="",o=0;for(;o<n;){const i=e[t+o];if(i<128)r+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&e[t+o+1];r+=String.fromCharCode(a),o+=2}else if(i>=224&&i<240){if(o+2>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];r+=String.fromCharCode(a),o+=3}else{if(!(i>=240&&i<248))throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new O["a"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);o+=4}}}return r}function se(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,c=Oe[a];n.fields[i.property]=c(e,r),r+=je[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function le(e,t,n){const r=[];let o,i,a=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(r.push(ce(n,a,o-1)),0!==n[a+o-1])throw new O["a"]("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=o}return r}function ue(e,t){return new(0,je[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function fe(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function de(e,t,n){const r=null!=t.header?se(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let a=0;a<t.ordering.length;a++){const e=t.ordering[a],n=Object(oe["a"])(t[e]);if(n.count=r.fields.count,"String"===n.valueType){if(n.byteOffset=i,n.byteCount=r.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new O["a"]("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!we(n.valueType))throw new O["a"]("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=ge(n.valueType);i+=i%e!=0?e-i%e:0,n.byteOffset=i,n.byteCount=e*n.valuesPerElement*n.count}}i+=n.byteCount,o.entries[e]=n}return o.byteCount=i-o.byteOffset,o}function be(e,t,n){if(t!==e&&ae.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new O["a"]("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function pe(e,t){const n=se(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const l of t.ordering){if(!t.vertexAttributes[l])continue;const e={...t.vertexAttributes[l],byteOffset:r,count:a},n=he[l]?he[l]:"_"+l;o.vertexAttributes[n]=e,r+=ge(e.valueType)*e.valuesPerElement*a}const c=i.faceCount;if(t.faces&&c){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:c};o.faces[e]=n,r+=ge(n.valueType)*n.valuesPerElement*c}}const s=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:s};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:ge(n.valueType))*n.valuesPerElement*s}}return be(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const he={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function ye(e,t,n){if("lepcc-rgb"===e.encoding)return W(t);if("lepcc-intensity"===e.encoding)return re(t);if(null!=e.encoding&&""!==e.encoding)throw new O["a"]("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(ae.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(ae.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=de(t,e,n);be(r.byteOffset+r.byteCount,t.byteLength,"attribute");const o=r.entries.attributeValues||r.entries.objectIds;if(o){if("String"===o.valueType){const e=r.entries.attributeByteCounts,n=ue(t,e),i=fe(t,o);return le(e.count,n,i)}return ue(t,o)}throw new O["a"]("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const je={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},Oe={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function we(e){return je.hasOwnProperty(e)}function ge(e){return we(e)?je[e].BYTES_PER_ELEMENT:0}function me(e,t,n,r){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,c=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){c=j["a"].fromJSON(o);const e=c.colorUniqueValueInfos;a=new Uint8Array(3*r);const n=Ae(c.fieldTransformType);for(let o=0;o<r;o++){const r=(n?n(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(r)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){c=y["a"].fromJSON(o);const e=c.stops;a=new Uint8Array(3*r);const n=Ae(c.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o],i=e.length-1;if(r<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(r>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const n=(r-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*n+e[t-1].color.r*(1-n),a[3*o+1]=e[t].color.g*n+e[t-1].color.g*(1-n),a[3*o+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){c=h["a"].fromJSON(o);const e=c.colorClassBreakInfos;a=new Uint8Array(3*r);const n=Ae(c.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*r);for(let e=0;e<a.length;e++)a[e]=255}if(n&&c&&c.colorModulation){const e=c.colorModulation.minValue,t=c.colorModulation.maxValue,o=.3;for(let i=0;i<r;i++){const r=n[i],c=r>=t?1:r<=e?o:o+(1-o)*(r-e)/(t-e);a[3*i]=c*a[3*i],a[3*i+1]=c*a[3*i+1],a[3*i+2]=c*a[3*i+2]}}return a}function ve(e,t){if(null==e.encoding||""===e.encoding){const n=pe(t,e);if(Object(o["g"])(n.vertexAttributes.position))return;const r=ue(t,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],c=[i.scaleX,i.scaleY,i.scaleZ],s=r.length/3,l=new Float64Array(3*s);for(let e=0;e<s;e++)l[3*e]=r[3*e]*c[0]+a[0],l[3*e+1]=r[3*e+1]*c[1]+a[1],l[3*e+2]=r[3*e+2]*c[2]+a[2];return l}if("lepcc-xyz"===e.encoding)return _(t).result}function Me(e,t,n){return Object(o["h"])(e)&&e.attributeInfo.useElevation?Ce(t,n):Object(o["h"])(e)?ye(e.attributeInfo.storageInfo,e.buffer,n):null}function Ce(e,t){const n=new Float64Array(t);for(let r=0;r<t;r++)n[r]=e[3*r+2];return n}function Te(e,t,n,r,o){const i=e.length/3;let a=0;for(let c=0;c<i;c++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],n=o[e].values[c];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=Ue(t.requiredSetBits),r=Ue(t.requiredClearBits);(n&e)===e&&0==(n&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,r=n>>>4&15,o=r>1,a=1===e,c=e===r;let s=!1;for(const n of t.includedReturns)if("last"===n&&c||"firstOfMany"===n&&a&&o||"lastOfMany"===n&&c&&o||"single"===n&&!o){s=!0;break}s||(i=!1);break}}}i&&(n[a]=c,e[3*a]=e[3*c],e[3*a+1]=e[3*c+1],e[3*a+2]=e[3*c+2],t[3*a]=t[3*c],t[3*a+1]=t[3*c+1],t[3*a+2]=t[3*c+2],a++)}return a}function Ae(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function Ue(e){let t=0;for(const n of e||[])t|=1<<n;return t}class Ie{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];Object(o["h"])(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const o of t.attributes)"buffer"in o.values&&Object(r["c"])(o.values.buffer)&&o.values.buffer!==t.rgb.buffer&&n.push(o.values.buffer);return Object(i["u"])({result:t,transferList:n})}_transform(e){const t=ve(e.schema,e.geometryBuffer);let n=t.length/3,r=null;const i=[],c=Me(e.primaryAttributeData,t,n);Object(o["h"])(e.primaryAttributeData)&&c&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:c});const s=Me(e.modulationAttributeData,t,n);Object(o["h"])(e.modulationAttributeData)&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let l=me(e.rendererInfo,c,s,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(o["h"])(e.filterAttributesData)){const o=e.filterAttributesData.map(e=>{const r=Me(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return i.push(o),o});r=new Uint32Array(n),n=Te(t,l,r,e.filterInfo,o)}for(const o of e.userAttributesData){const e=Me(o,t,n);i.push({attributeInfo:o.attributeInfo,values:e})}3*n<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const u=this._transformCoordinates(t,n,e.obb,a["a"].fromJSON(e.inSR),a["a"].fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:l,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,n,r,o){if(!Object(s["g"])(e,r,0,e,o,0,t))throw Error("Can't reproject");const i=Object(u["b"])(n.center[0],n.center[1],n.center[2]),a=Object(u["a"])(),f=Object(u["a"])();Object(l["a"])(Se,n.quaternion);const d=new Float32Array(3*t);for(let s=0;s<t;s++)a[0]=e[3*s]-i[0],a[1]=e[3*s+1]-i[1],a[2]=e[3*s+2]-i[2],Object(c["q"])(f,a,Se),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(f[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(f[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(f[2])),d[3*s]=a[0],d[3*s+1]=a[1],d[3*s+2]=a[2];return d}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let r=0;r<t;r++)e[3*r+2]+=n}}const Se=f();function xe(){return new Ie}t["default"]=xe},b139:function(e,t,n){"use strict";function r(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function i(e,t,n,r){return[e,t,n,r]}function a(e,t){return new Float64Array(e,t,4)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));const c=[0,0,0,1];Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a,IDENTITY:c})},dae5:function(e,t,n){"use strict";function r(){return[1,0,0,0,1,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function i(e,t,n,r,o,i,a,c,s){return[e,t,n,r,o,i,a,c,s]}function a(e,t){return new Float64Array(e,t,9)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,createView:a})}}]);
//# sourceMappingURL=chunk-470dec15.9df173a6.js.map