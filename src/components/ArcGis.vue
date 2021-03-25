<template>
  <div id="viewDiv"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
export default Vue.extend({
  mounted() {
    var map = new Map({
      basemap: "hybrid",
      ground: "world-elevation",
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      // zoom: 10,
      scale: 5000000,
      center: [41.5912, 1.5209],
      constraints: {
        // minZoom: 7, // Use this constraint to avoid zooming out too far
      },
    });
  },
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
