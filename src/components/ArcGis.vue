<template>
  <b-container fluid>
    <div
      id="parent"
      class="mx-auto"
    >
      <link
        rel="stylesheet"
        href="https://js.arcgis.com/4.18/esri/css/main.css"
      >
      <b-row>
        <h3>Locations of Cell Coverage in Catalonia</h3>
      </b-row>
      <b-row class="mb-2 ">
        <b-col class="align-self-center">
          <b-form-select
            @change="selectUpdate"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </b-col>
        <b-col>
          <label for="range-2">Select Value of {{selected.value}}</label>
          <b-form-input
            v-model="rangeValue"
            id="rangeSpeed"
            type="range"
            :min='minMaxValues[selected.idx].min'
            @change="updateLayer"
            :max='minMaxValues[selected.idx].max'
          ></b-form-input>
          <div class="mt-2">Value: {{ rangeValue }} min:{{minMaxValues[selected.idx].min}} max:{{minMaxValues[selected.idx].max}}</div>
        </b-col>

      </b-row>
      <b-row>
        <div id="viewDiv"></div>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import CSVLayer from "@arcgis/core/layers/CSVLayer";
import Query from "@arcgis/core/tasks/support/Query";
import csvFile from "!!raw-loader!@/assets/100values.csv";
import Papa from "papaparse";
interface csvItem {
  SHAPE: string;
  activity: string;
  date_hour: string;
  description: string;
  downloadSpeed: number;
  lat: number;
  long: number;
  net: null | string | number;
  network: string;
  operator: string;
  position_geom: string;
  postal_code: number;
  precission: number;
  provider: string;
  satellites: number;
  signal: number;
  speed: number;
  status: number;
  town_name: string;
  uploadSpeed: number;
}
export default Vue.extend({
  data() {
    return {
      selected: { value: "speed", idx: 0 },
      options: [
        { value: { value: "speed", idx: 0 }, text: "Speed" },
        { value: { value: "signal", idx: 1 }, text: "Signal" },
        { value: { value: "satellites", idx: 2 }, text: "Satellites" },
        { value: { value: "precission", idx: 3 }, text: "Precission" },
        { value: { value: "downloadSpeed", idx: 4 }, text: "Download Speeds" },
        { value: { value: "uploadSpeed", idx: 5 }, text: "Upload Speeds" },
      ],
      rangeValue: "0",
      map: new Map({
        basemap: "hybrid",
        ground: "world-elevation",
      }),
      view: new MapView(),
      csvLayer: new CSVLayer(),
      minMaxValues: [
        { value: "speed", min: 999999, max: 0 },
        { value: "signal", min: 999999, max: 0 },
        { value: "satellites", min: 999999, max: 0 },
        { value: "precission", min: 999999, max: 0 },
        { value: "downloadSpeed", min: 999999, max: 0 },
        { value: "uploadSpeed", min: 999999, max: 0 },
      ],
    };
  },
  mounted() {
    var result = Papa.parse(csvFile, { header: true, dynamicTyping: true });
    (result.data as Array<csvItem>).forEach((ele) => {
      if (ele.speed > this.minMaxValues[0].max)
        this.minMaxValues[0].max = ele.speed;
    });
    this.minMaxValues[0].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.speed)
    );
    this.minMaxValues[0].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.speed)
    );
    this.minMaxValues[1].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.signal)
    );
    this.minMaxValues[1].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.signal)
    );
    this.minMaxValues[2].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.satellites)
    );
    this.minMaxValues[2].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.satellites)
    );
    this.minMaxValues[3].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.precission)
    );
    this.minMaxValues[3].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.precission)
    );
    this.minMaxValues[4].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.downloadSpeed)
    );
    this.minMaxValues[4].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.downloadSpeed)
    );
    this.minMaxValues[5].max = Math.max(
      ...(result.data as Array<csvItem>).map((item) => item.uploadSpeed)
    );
    this.minMaxValues[5].min = Math.min(
      ...(result.data as Array<csvItem>).map((item) => item.uploadSpeed)
    );
    this.map = new Map({
      basemap: "hybrid",
      ground: "world-elevation",
    });

    this.view = new MapView({
      container: "viewDiv",
      map: this.map,
      // zoom: 10,
      scale: 1749933.8984067584,
      center: [1.7056684862856024, 41.77040227096264],
      constraints: {
        // minZoom: 7, // Use this constraint to avoid zooming out too far
        minScale: 2311162.217155,
      },
    });
    this.view.ui.add([
      {
        component: "compass",
        position: "top-left",
        index: 0,
      },
    ]);
    this.view.popup.content =
      "Click a feature on the map to view its attributes";
    // this.csvLayer = new CSVLayer({
    //   // URL to the CSV file
    //   url:
    //     "https://gist.githubusercontent.com/kingavatar/6ec884b4168e6ecbb72235ff3fd5b139/raw/a119f7d72f74e7acce6b2b9c7fd6f681c8eab692/100values.csv",
    //   title: "Locations of Cell Coverage in Catalonia",
    //   definitionExpression: "speed >= " + this.rangeValue,
    // });
    this.csvLayer = new CSVLayer({
      // URL to the CSV file
      url:
        "http://localhost:5000/foo",
      title: "Locations of Cell Coverage in Catalonia",
      definitionExpression: "speed >= " + this.rangeValue,
    });
    this.map.add(this.csvLayer);
  },
  methods: {
    updateLayer() {
      this.csvLayer.definitionExpression =
        this.selected.value + " >= " + this.rangeValue;
    },
    selectUpdate() {
      this.rangeValue = "" + this.minMaxValues[this.selected.idx].min;
    },
  },
  computed: {},
});
</script>

<style lang="scss" scoped>
#parent {
  width: 90%;
}
#viewDiv {
  padding: 0;
  margin: 0;
  height: 600px;
  width: 100%;
}
</style>
