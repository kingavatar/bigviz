<template>
  <div id="viewDiv"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
export default Vue.extend({
  data(){
    return{
      map:new Map({
      basemap: "hybrid",
      ground: "world-elevation",
    }),
      view: new MapView()
    }
  },
  mounted() {
    this.map = new Map({
      basemap: "hybrid",
      ground: "world-elevation",
    });

    this.view = new MapView({
      container: "viewDiv",
      map: this.map,
      // zoom: 10,
      scale: 1749933.8984067584,
      center:[1.7056684862856024,41.77040227096264],
      constraints: {
        // minZoom: 7, // Use this constraint to avoid zooming out too far
        minScale:1749933.8984067584
      },
    });
   this.view.popup.content = "Click a feature on the map to view its attributes";
  },
  methods:{
    
  }
});
</script>

<style lang="scss" scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>
