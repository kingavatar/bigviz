(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88f92b30","chunk-06ad9dad"],{3981:function(e,t,a){"use strict";var r,l=a("a4ee"),o=(a("c120"),a("7ffa")),i=(a("e92d"),a("cea0"),a("59b2")),s=a("d386"),n=(a("e041"),a("8eed"),a("f402"),a("6a0e"));let c=r=class extends n["a"]{constructor(e){super(e)}clone(){return new r({customLayerParameters:Object(o["a"])(this.customLayerParameters),customParameters:Object(o["a"])(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(l["a"])([Object(i["b"])({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(l["a"])([Object(i["b"])({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(l["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(l["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(l["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=r=Object(l["a"])([Object(s["a"])("esri.layer.support.WMTSLayerInfo")],c);var p=c;t["a"]=p},"8c58":function(e,t,a){"use strict";a.r(t);var r=a("a4ee"),l=(a("c120"),a("e92d"),a("cea0"),a("59b2")),o=a("d386"),i=(a("e041"),a("8eed"),a("f402"),a("5996")),s=a("3af1"),n=(a("e06a"),a("a7e1")),c=a("dff3"),p=a("9dc3");let b=class extends p["default"]{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new s["a"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i["a"].WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};Object(r["a"])([Object(l["b"])({type:n["default"],json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",void 0),Object(r["a"])([Object(l["b"])({type:Boolean,json:{read:!1,write:!1}})],b.prototype,"isReference",void 0),Object(r["a"])([Object(l["b"])({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"refreshInterval",null),Object(r["a"])([Object(l["b"])({type:c["a"],json:{write:!1}})],b.prototype,"tileInfo",void 0),Object(r["a"])([Object(l["b"])({type:["show","hide"]})],b.prototype,"listMode",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"subDomains",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"fullExtent",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"urlTemplate",void 0),Object(r["a"])([Object(l["b"])({type:["OpenStreetMap"]})],b.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(l["b"])({json:{read:!1}})],b.prototype,"type",void 0),Object(r["a"])([Object(l["b"])({json:{read:!1,write:!1}})],b.prototype,"copyright",void 0),Object(r["a"])([Object(l["b"])({json:{read:!1,write:!1}})],b.prototype,"wmtsInfo",void 0),b=Object(r["a"])([Object(o["a"])("esri.layers.OpenStreetMapLayer")],b);var u=b;t["default"]=u},"9dc3":function(e,t,a){"use strict";a.r(t);var r=a("a4ee"),l=(a("c120"),a("7ffa")),o=a("b3b6"),i=(a("e92d"),a("cea0"),a("59b2")),s=a("afcf"),n=a("d386"),c=a("09db"),p=a("ce50"),b=a("e041"),u=(a("8eed"),a("f402"),a("f4cc")),d=a("5996"),j=a("4ae5"),y=a("3af1"),O=(a("e06a"),a("2eab")),h=a("a6a3"),f=a("e694"),m=a("b911"),v=a("997b"),w=a("0db5"),g=a("8e17"),T=a("5a62"),S=a("50e6"),R=a("dff3"),x=a("3981");let I=class extends(Object(v["a"])(Object(g["a"])(Object(T["a"])(Object(m["a"])(Object(w["a"])(Object(f["a"])(h["a"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new y["a"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d["a"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=d["a"].WebMercator,this.subDomains=null,this.tileInfo=new R["a"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new j["a"]({x:-20037508.342787,y:20037508.342787,spatialReference:d["a"].WebMercator}),spatialReference:d["a"].WebMercator,lods:[new S["a"]({level:0,scale:591657527.591555,resolution:156543.033928}),new S["a"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S["a"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S["a"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S["a"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S["a"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S["a"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S["a"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S["a"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new S["a"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new S["a"]({level:10,scale:577790.554289,resolution:152.874056570411}),new S["a"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new S["a"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new S["a"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new S["a"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new S["a"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new S["a"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new S["a"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new S["a"]({level:18,scale:2256.994353,resolution:.597164283559817}),new S["a"]({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?Object(l["d"])({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new b["a"](this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p["a"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Object(u["u"])(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&d["a"].fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:a}=this,r=new b["a"](t),l=r.scheme?r.scheme+"://":"//",o=l+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(o);else if(a&&a.length>0&&r.authority.split(".").length>1)for(const i of a)e.push(l+r.authority.replace(/\{subDomain\}/gi,i)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new b["a"](e),a=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(a.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(b["v"])(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(b["B"])(e)),t.templateUrl=e}fetchTile(e,t,a,r={}){const{signal:l,timestamp:o}=r,i=this.getTileUrl(e,t,a),s={responseType:"image",signal:l};return null!=o&&(s.query={_ts:r.timestamp}),Object(O["default"])(i,s).then(e=>e.data)}getTileUrl(e,t,a){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(o["c"])(this.urlPath,{level:r,z:r,col:a,x:a,row:t,y:t})}};Object(r["a"])([Object(i["b"])({type:String,value:"",json:{write:!0}})],I.prototype,"copyright",void 0),Object(r["a"])([Object(i["b"])({type:y["a"],json:{write:!0}})],I.prototype,"fullExtent",void 0),Object(r["a"])([Object(i["b"])({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),Object(r["a"])([Object(i["b"])({type:["show","hide"]})],I.prototype,"listMode",void 0),Object(r["a"])([Object(i["b"])({dependsOn:["tileInfo"]})],I.prototype,"levelValues",null),Object(r["a"])([Object(i["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),Object(r["a"])([Object(i["b"])({type:["WebTiledLayer"],value:"WebTiledLayer"})],I.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(i["b"])({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),Object(r["a"])([Object(i["b"])({type:d["a"]})],I.prototype,"spatialReference",void 0),Object(r["a"])([Object(s["a"])("spatialReference",["spatialReference","fullExtent.spatialReference"])],I.prototype,"readSpatialReference",null),Object(r["a"])([Object(i["b"])({type:[String],json:{write:!0}})],I.prototype,"subDomains",void 0),Object(r["a"])([Object(i["b"])({type:R["a"],json:{write:!0}})],I.prototype,"tileInfo",void 0),Object(r["a"])([Object(i["b"])({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],I.prototype,"tileServers",null),Object(r["a"])([Object(i["b"])({json:{read:!1}})],I.prototype,"type",void 0),Object(r["a"])([Object(i["b"])({dependsOn:["urlTemplate"]})],I.prototype,"urlPath",null),Object(r["a"])([Object(i["b"])({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],I.prototype,"urlTemplate",void 0),Object(r["a"])([Object(s["a"])("urlTemplate",["urlTemplate","templateUrl"])],I.prototype,"readUrlTemplate",null),Object(r["a"])([Object(c["a"])("urlTemplate",{templateUrl:{type:String}})],I.prototype,"writeUrlTemplate",null),Object(r["a"])([Object(i["b"])({type:x["a"],json:{write:!0}})],I.prototype,"wmtsInfo",void 0),I=Object(r["a"])([Object(n["a"])("esri.layers.WebTileLayer")],I);var M=I;t["default"]=M}}]);
//# sourceMappingURL=chunk-88f92b30.d6f28e2f.js.map