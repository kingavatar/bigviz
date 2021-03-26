(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c754bc"],{"2d39":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("c84e"),a=i("3b1a"),r=i("9a02");class n extends r["a"]{prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[a["a"].bitmap],target:()=>this.children,drawPhase:s["c"].MAP});return[...super.prepareRenderPasses(e),t]}}},"365a":function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("e92d")),r=(i("cea0"),i("59b2")),n=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("fc29")),h=i("ce6d"),d=i("a5d8"),c=i("fab3"),l=i("9096");let p=class extends(Object(l["b"])(Object(d["a"])(Object(c["b"])(h["a"].EventedMixin(o["a"]))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw a["a"].getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s["a"])([Object(r["b"])({dependsOn:["layer.opacity","parent.fullOpacity"]})],p.prototype,"fullOpacity",null),Object(s["a"])([Object(r["b"])()],p.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])()],p.prototype,"parent",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],p.prototype,"suspended",null),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],p.prototype,"suspendInfo",null),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],p.prototype,"legendEnabled",null),Object(s["a"])([Object(r["b"])({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],p.prototype,"updating",null),Object(s["a"])([Object(r["b"])({dependsOn:["layer.visible"]})],p.prototype,"visible",null),p=Object(s["a"])([Object(n["a"])("esri.views.layers.LayerView")],p);var u=p;t["a"]=u},"566d":function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var s=i("a4ee"),a=(i("c120"),i("e92d"),i("cea0"),i("59b2")),r=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("2c4f")),o=i("7d7d"),h=i("3795"),d=i("6a0e");let c=class extends d["a"]{};c=Object(s["a"])([Object(r["a"])("esri.views.layers.support.ClipArea")],c);var l,p=c,u=p;let b=l=class extends u{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new l({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(a["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s["a"])([Object(a["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s["a"])([Object(a["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s["a"])([Object(a["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["left","right","top","bottom"]})],b.prototype,"version",null),b=l=Object(s["a"])([Object(r["a"])("esri.views.layers.support.ClipRect")],b);var g,y=b,O=y,v=i("00c0"),j=i("3760"),m=i("3af1"),f=i("1219"),x=i("a9ab");i("e06a");const w={base:j["a"],key:"type",typeMap:{extent:m["a"],polygon:f["a"]}};let _=g=class extends u{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};Object(s["a"])([Object(a["b"])({types:w,json:{read:x["a"],write:!0}})],_.prototype,"geometry",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["geometry"]})],_.prototype,"version",null),_=g=Object(s["a"])([Object(r["a"])("esri.views.layers.support.Geometry")],_);var R=_,M=R;let S=class extends u{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(a["b"])({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["path"]})],S.prototype,"version",null),S=Object(s["a"])([Object(r["a"])("esri.views.layers.support.Path")],S);var q=S,P=q;const B=n["a"].ofType({key:"type",base:u,typeMap:{rect:O,path:P,geometry:M}}),k=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new B,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v["a"]),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(h["a"])(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(h["a"])(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(h["a"])(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(h["a"])(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,a=i.maxScale;if(null!=s&&null!=a){let i=!s,r=!a;!i&&e<=s&&(i=!0),!r&&e>=a&&(r=!0),t=i&&r}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s["a"])([Object(a["b"])({type:B,set(e){const t=Object(o["b"])(e,this._get("clips"),B);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s["a"])([Object(a["b"])()],t.prototype,"moving",void 0),Object(s["a"])([Object(a["b"])()],t.prototype,"attached",void 0),Object(s["a"])([Object(a["b"])()],t.prototype,"container",void 0),Object(s["a"])([Object(a["b"])({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s["a"])([Object(a["b"])()],t.prototype,"updateRequested",void 0),Object(s["a"])([Object(a["b"])({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),Object(s["a"])([Object(a["b"])()],t.prototype,"view",void 0),t=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.LayerView2D")],t),t}},"894c":function(e,t,i){"use strict";t["a"]=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(s),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},b969:function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),a=(i("c120"),i("e92d")),r=(i("cea0"),i("59b2")),n=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("f4cc")),h=i("6c7a"),d=i("365a"),c=i("2d39"),l=i("566d"),p=i("bdb8");const u=a["a"].getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let b=class extends(Object(h["a"])(Object(l["a"])(d["a"]))){hitTest(){return null}update(e){this.strategy.update(e).catch(e=>{Object(o["n"])(e)||u.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new c["a"],this.container.addChild(this._bitmapContainer),this.strategy=new p["a"]({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,t,i){return this.layer.fetchImage(e,t,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};Object(s["a"])([Object(r["b"])()],b.prototype,"strategy",void 0),Object(s["a"])([Object(r["b"])({dependsOn:["strategy.updating"]})],b.prototype,"updating",void 0),b=Object(s["a"])([Object(n["a"])("esri.views.2d.layers.BaseDynamicLayerView2D")],b);var g=b;t["default"]=g},bdb8:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("e92d"),i("cea0"),i("59b2")),r=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("f4cc")),o=i("fc29"),h=i("7f83"),d=i("3af1"),c=i("9180"),l=i("dff3"),p=i("ae54"),u=i("018d");const b=Math.PI/180;function g(e,t){const i=t.rotation*b,s=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[r,n]=t.size;return e[0]=Math.round(n*a+r*s),e[1]=Math.round(n*s+r*a),e}function y(e,t,i,s){const[a,r]=t,[n,o]=s,h=.5*i;return e[0]=a-h*n,e[1]=r-h*o,e[2]=a+h*n,e[3]=r+h*o,e}var O=i("c73a");const v=Object(c["d"])(),j=[0,0],m=new p["a"](0,0,0,0),f=2048,x=2048,w=!1,_=!1,R=!1;let M=class extends o["a"]{constructor(e){super(e),this._imagePromise=null,this.hidpi=R,this.imageMaxWidth=f,this.imageMaxHeight=x,this.imageRotationSupported=w,this.imageNormalizationSupported=_,this.update=Object(n["i"])(async(e,t)=>{const i=e.state,s=Object(h["d"])(i.spatialReference),a=this.hidpi?e.pixelRatio:1;if(!e.stationary||this.destroyed)return;this.imageRotationSupported?(j[0]=i.size[0],j[1]=i.size[1]):g(j,i);const r=Math.floor(j[0]*a)>this.imageMaxWidth||Math.floor(j[1]*a)>this.imageMaxHeight,n=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),o=!this.imageNormalizationSupported&&n,d=!r&&!o,c=this.imageRotationSupported?i.rotation:0;if(d)this._imagePromise=this._singleExport(i,j,c,a,t);else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);o&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,c,a,t)}return this._imagePromise.then(async e=>{this._imagePromise=null,await Promise.all(e.map(e=>(this.container.addChild(e),e.fadeIn())));for(const t of this.container.children)e.includes(t)||t.fadeOut().then(()=>{this.container.removeChild(t)})}).catch(e=>{throw this._imagePromise=null,e})},5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(t.invalidateTexture(),t.requestRender())}}_export(e,t,i,s,a,r){return Object(n["u"])().then(()=>this.fetchSource(e,Math.floor(t*a),Math.floor(i*a),{rotation:s,pixelRatio:a,signal:r})).then(i=>{const r=new O["a"](i);return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/t,r.rotation=s,r.pixelRatio=a,r})}_singleExport(e,t,i,s,a){y(v,e.center,e.resolution,t);const r=new d["a"](v[0],v[1],v[2],v[3],e.spatialReference);return this._export(r,t[0],t[1],i,s,a).then(e=>[e])}_tiledExport(e,t,i,s,a){const r=l["a"].create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new u["a"](r),h=o.getTileCoverage(e);if(!h)return null;const c=[];return h.forEach((r,n,h,l)=>{m.set(r,n,h,l),o.getTileBounds(v,m);const p=new d["a"](v[0],v[1],v[2],v[3],e.spatialReference);c.push(this._export(p,t,t,i,s,a))}),Object(n["b"])(c)}};Object(s["a"])([Object(a["b"])()],M.prototype,"_imagePromise",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"container",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"fetchSource",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"hidpi",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"imageMaxWidth",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"imageMaxHeight",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"imageRotationSupported",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"imageNormalizationSupported",void 0),Object(s["a"])([Object(a["b"])()],M.prototype,"requestUpdate",void 0),Object(s["a"])([Object(a["b"])({dependsOn:["_imagePromise"]})],M.prototype,"updating",null),M=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.support.ExportStrategy")],M);var S=M;t["a"]=S},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i("c120");var s=i("1c92"),a=i("8c71"),r=i("738e"),n=(i("9f8b"),i("a1ff")),o=(i("d267"),i("6df2"),i("7c4b")),h=i("894c");function d(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new n["a"](e,s)}class c extends o["a"]{constructor(e=null,t=!0){super(),this.requestRenderOnSourceChangedEnabled=t,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(a["b"])()},this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=Object(s["d"])(this.transforms.dvs),[i,a]=e.toScreenNoRotation([0,0],this.x,this.y),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,h=n*this.height,d=Math.PI*this.rotation/180;Object(s["a"])(t,t,Object(r["b"])(i,a)),Object(s["a"])(t,t,Object(r["b"])(o/2,h/2)),Object(s["h"])(t,t,-d),Object(s["a"])(t,t,Object(r["b"])(-o/2,-h/2)),Object(s["e"])(t,t,Object(r["b"])(o,h)),Object(s["f"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof h["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}}}]);
//# sourceMappingURL=chunk-36c754bc.a0eed673.js.map