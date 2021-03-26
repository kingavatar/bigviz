(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdf78"],{"2df6":function(e,t,i){"use strict";i.r(t),i.d(t,"ElevationQuery",(function(){return q})),i.d(t,"GeometryDescriptor",(function(){return O})),i.d(t,"getFinestLodIndex",(function(){return D}));var n=i("b2b2"),s=i("ce50"),o=i("f4cc"),a=i("4ae5"),l=i("57dc"),r=i("521c"),c=i("792b"),u=i("8048"),h=i("9180"),p=i("8188"),f=(i("c120"),i("e92d")),m=i("9786"),d=i("2172");i("e06a");const y=f["a"].getLogger("esri.layers.support.ElevationSampler");class x{queryElevation(e){return w(e.clone(),this)}on(){return _}projectIfRequired(e,t){return g(e,t)}}class v extends x{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=Object(h["n"])(e.tile.extent,t.spatialReference);const n=Object(u["c"])(t.spatialReference),s=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:s,max:s}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return Object(d["e"])(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`)}return this.tile.sample(t.x,t.y)}}class T extends x{constructor(e,t,i){let n;super(),"number"==typeof t?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map(e=>new v(e,n,this.noDataValue)):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:e,max:t}=s.demResolution;this.demResolution={min:e,max:t};for(let i=1;i<this.samplers.length;i++){const e=this.samplers[i];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=Object(h["n"])(Object(h["d"])(),n.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const i of this.samplers)if(i.contains(t))return i.elevationAt(t);return y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null}}function w(e,t){const i=g(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=i.elevationAt(t)||0}(e,i,t);break;case"polyline":!function(e,t,i){R.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let s=0;s<e.paths.length;s++){const o=e.paths[s],a=t.paths[s];for(let e=0;e<o.length;e++){const t=o[e],s=a[e];R.x=s[0],R.y=s[1];const l=i.elevationAt(R)||0;n&&(t[3]=t[2]),t[2]=l}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){R.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let s=0;s<e.points.length;s++){const o=e.points[s],a=t.points[s];R.x=a[0],R.y=a[1];const l=i.elevationAt(R)||0;n&&(o[3]=o[2]),o[2]=l}e.hasZ=!0}(e,i,t)}return e}function g(e,t){const i=e.spatialReference;return i.equals(t)?e:Object(m["a"])(i,t)?Object(m["d"])(e,t):(y.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const R=new a["a"],_={remove(){}};class b{constructor(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}sample(e,t){if(this.samplerData)return function(e,t,i){const{safeWidth:n,width:s,pixelData:o,noDataValue:a}=e,l=E(e.dy*(e.y1-i),0,n),r=E(e.dx*(t-e.x0),0,n),c=Math.floor(l),u=Math.floor(r),h=c*s+u,p=h+s,f=o[h],m=o[p],d=o[h+1],y=o[p+1];if(f!==a&&m!==a&&d!==a&&y!==a){const e=r-u,t=f+(d-f)*e;return t+(m+(y-m)*e-t)*(l-c)}}(this.samplerData,e,t)}}function E(e,t,i){return e<t?t:e>i?i:e}class q{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(e=>e.visible):e.slice()).length)throw new s["a"]("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=O.fromGeometry(t);let o=!1;i&&i.returnSampleInfo||(o=!0);const a={...C,...i,returnSampleInfo:!0},l=await this.query(e[e.length-1],n,a),r=await this._queryAllContinue(e,l,a);return r.geometry=r.geometry.export(),o&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new s["a"]("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof O)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s["a"]("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...C,...i},o=new j(e,t.spatialReference,n),a=n.signal;return await e.load({signal:a}),await this._createGeometryDescriptor(o,t,a),await this._selectTiles(o,a),await this._populateElevationTiles(o,a),this._sampleGeometryWithElevation(o),this._createQueryResult(o,a)}async createSampler(e,t,i){if(!e)throw new s["a"]("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s["a"]("elevation-query:invalid-extent","Invalid or undefined extent");const n={...C,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(e=>e.visible):e.slice()).length)throw new s["a"]("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s["a"]("elevation-query:invalid-extent","Invalid or undefined extent");const n={...C,...i,returnSampleInfo:!0},o=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,o,n)}async _createSampler(e,t,i,n){const s=i.signal;await e.load({signal:s});const o=t.spatialReference,a=e.tileInfo.spatialReference;o.equals(a)||(await Object(p["b"])([{source:o,dest:a}],{signal:s}),t=Object(p["f"])(t,a));const l=new I(e,t,i,n);return await this._selectTiles(l,s),await this._populateElevationTiles(l,s),new T(l.elevationTiles,l.layer.tileInfo,l.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const s=i.samplers.map(e=>Object(h["h"])(e.extent)),o=await this._createSampler(e[e.length-1],t,n,s);if(0===o.samplers.length)return i;const a=i.samplers.concat(o.samplers),l=new T(a,n.noDataValue);return this._createSamplerAllContinue(e,t,l,n)}async _queryAllContinue(e,t,i){const n=e.pop(),s=t.geometry.coordinates,o=[],a=[];for(let c=0;c<s.length;c++){const i=t.sampleInfo[c];i.demResolution>=0?i.source||(i.source=n):e.length&&(o.push(s[c]),a.push(c))}if(!e.length||0===o.length)return t;const l=t.geometry.clone(o),r=await this.query(e[e.length-1],l,i);return a.forEach((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution}),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(e=>{e.tile=null,e.elevationTile=null}),i}async _createGeometryDescriptor(e,t,i){let n;const o=e.layer.tileInfo.spatialReference;if(t instanceof O?n=await t.project(o,i):(await Object(p["b"])([{source:t.spatialReference,dest:o}],{signal:i}),n=Object(p["f"])(t,o)),!n)throw new s["a"]("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);e.geometry=O.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new s["a"]("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new b(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach(e=>{const n=e.x,s=e.y;(n<i.xmin||n>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/Object(u["c"])(e.spatialReference);let n=e.lods[0],s=0;for(let o=1;o<e.lods.length;o++){const t=e.lods[o];Math.abs(t.resolution-i)<Math.abs(n.resolution-i)&&(n=t,s=o)}return s}async _selectTilesFinestContiguous(e,t){const i=D(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const a=n.tilemapCache,l=e.getTilesToFetch();try{if(a)await Object(o["z"])(Object(o["b"])(l.map(e=>a.fetchAvailability(e.level,e.row,e.col,{signal:i}))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s["a"]("elevation-query:has-unavailable-tiles")}catch(r){Object(o["v"])(r),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},a=e.options.cache,l=e.options.noDataValue,r=i.map(async i=>{const o=`${e.layer.uid}:${i.id}:${l}`,r=Object(n["h"])(a)?a.get(o):null,c=Object(n["h"])(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:l,signal:t});Object(n["h"])(a)&&a.put(o,c),s[i.id]=new b(i,c)});await Object(o["z"])(Object(o["j"])(r),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),s={},a=n.map(async e=>{const n={id:null,level:0,row:0,col:0,extent:Object(h["d"])()},a=await Object(c["c"])(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===a.ok?Object(o["v"])(a.error):s[e.id]=n});await Object(o["z"])(Object(o["b"])(a),t),e.remapTiles(s)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},s=e=>{e.id in n?n[e.id]++:(n[e.id]=1,i++)},o=e=>{const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(s,o);let a=!0;for(;a&&(a=!1,e.forEachTileToFetch(n=>{i<=e.options.maximumAutoTileRequests||(o(n),t.upsampleTile(n)&&(a=!0),s(n))},o),a););}_selectTilesAutoFinest(e){const t=D(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch((e,t)=>{i.upsampleTile(e)?n=!0:t()}),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?n=e:t.elevationTile=null}t.z=n})}_extractSampleInfo(e){const t=e.layer.tileInfo,i=Object(u["c"])(t.spatialReference);return e.geometry.coordinates.map(n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}})}}class O{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new O;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(e=>this._cloneCoordinate(e)),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await Object(p["b"])([{source:this.spatialReference,dest:e}],{signal:t});const i=new l["a"]({spatialReference:this.spatialReference,points:this.coordinates.map(e=>[e.x,e.y])}),n=Object(p["f"])(i,e);if(!n)return null;const s=this.coordinates.map((e,t)=>{const i=this._cloneCoordinate(e),s=n.points[t];return i.x=s[0],i.y=s[1],i}),o=this.clone(s);return o.spatialReference=e,o}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new O;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof O)t.coordinates=e.coordinates.map(e=>t._cloneCoordinate(e)),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:n?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new a["a"](t[0].x,t[0].y,t[0].z,t[0].m,i):new a["a"](t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map(e=>({x:e[0],y:e[1],z:e[2],m:e[3]})):n?i.points.map(e=>({x:e[0],y:e[1],z:e[2]})):s?i.points.map(e=>({x:e[0],y:e[1],m:e[2]})):i.points.map(e=>({x:e[0],y:e[1]})),t._exporter=(t,i)=>e.hasM?new l["a"]({points:t.map(e=>[e.x,e.y,e.z,e.m]),hasZ:!0,hasM:!0,spatiaReference:i}):new l["a"](t.map(e=>[e.x,e.y,e.z]),i);break}case"polyline":{const i=e,n=[],s=[],{hasZ:o,hasM:a}=e;let l=0;for(const e of i.paths)if(s.push([l,l+e.length]),l+=e.length,o&&a)for(const t of e)n.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(o)for(const t of e)n.push({x:t[0],y:t[1],z:t[2]});else if(a)for(const t of e)n.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)n.push({x:t[0],y:t[1]});t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map(e=>[e.x,e.y,e.z,e.m]):t.map(e=>[e.x,e.y,e.z]),o=s.map(e=>n.slice(e[0],e[1]));return new r["a"]({paths:o,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class A{constructor(e,t){this.layer=e,this.options=t}}class j extends A{constructor(e,t,i){super(e,i),this.type="geometry",this.outSpatialReference=t}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(e=>e.tile=null);else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach(e=>{e.tile=t.tileAt(i,e.x,e.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;i.elevationTile||!i.tile||e[n.id]||(e[n.id]=n,t.push(n))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>t.tile=null)}}class I extends A{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let n=t.lods.length-1;n>=0;n--){const s=t.lods[n],o=s.resolution*t.size[0],a=s.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/a)<=e)return n}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach(i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,()=>n=!0),n?t&&t(i):this.candidateTiles.push(i)}),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const o of e)i[o.id]?t&&t(o):(i[o.id]=o,n.push(o));const s=n.sort((e,t)=>e.level-t.level);return s.filter((e,i)=>{for(let n=0;n<i;n++)if(Object(h["c"])(s[n].extent,e.extent))return t&&t(e),!1;return!0})}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],n=this.extent,s=t.tileAt(i.level,n.xmin,n.ymin),o=i.resolution*t.size[0],a=i.resolution*t.size[1],l=Math.ceil((n.xmax-s.extent[0])/o),r=Math.ceil((n.ymax-s.extent[1])/a);for(let c=0;c<r;c++)for(let e=0;e<l;e++){const i={id:null,level:s.level,row:s.row-c,col:s.col+e};t.updateTileInfo(i),this._tileIsMasked(i)||this.candidateTiles.push(i)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>Object(h["c"])(t,e.extent))}}function D(e,t){let i=e.lods.length-1;if(t>0){const n=e.lods.findIndex(e=>e.resolution<t);0===n?i=0:n>0&&(i=n-1)}return i}const C={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};t["default"]=q}}]);
//# sourceMappingURL=chunk-2d0bdf78.5af6442a.js.map