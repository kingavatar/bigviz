import React, { Component } from "react";
import { Provider, useDispatch } from "react-redux";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";
import KeplerGl from "kepler.gl";

function Map() {
  const dispatch = useDispatch();
  const { data } = useSwr("CellCoverage", async () => {
    const resp = await fetch("http://127.0.0.1:5000/data");
    const data = await resp.json();
    return data;
  });
  const mapConfig = {
    version: "v1",
    config: {
      visState: {
        filters: [],
        layers: [
          {
            id: "766wkoj",
            type: "point",
            config: {
              dataId: "coverage",
              label: "CellCoverage",
              color: [255, 203, 153],
              columns: {
                lat: "lat",
                lng: "long",
              },
              isVisible: true,
              visConfig: {
                opacity: 0.8,
                colorRange: {
                  name: "Global Warming",
                  type: "sequential",
                  category: "Uber",
                  colors: [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300",
                  ],
                },
                radius: 10,
              },
              hidden: false,
              textLabel: [
                {
                  field: null,
                  color: [255, 255, 255],
                  size: 18,
                  offset: [0, 0],
                  anchor: "start",
                  alignment: "center",
                },
              ],
            },
            visualChannels: {
              weightField: null,
              weightScale: "linear",
            },
          },
        ],
        interactionConfig: {
          tooltip: {
            fieldsToShow: {
              coverage: [
                {
                  name: "date",
                  format: null,
                },
                {
                  name: "hour",
                  format: null,
                },
                {
                  name: "long",
                  format: null,
                },
                {
                  name: "signal",
                  format: null,
                },
                {
                  name: "network",
                  format: null,
                },
              ],
            },
            compareMode: false,
            compareType: "absolute",
            enabled: true,
          },
          brush: {
            size: 0.5,
            enabled: false,
          },
          geocoder: {
            enabled: false,
          },
          coordinate: {
            enabled: false,
          },
        },
        layerBlending: "normal",
        splitMaps: [],
        animationConfig: {
          currentTime: null,
          speed: 1,
        },
      },
      mapState: {
        bearing: 0,
        dragRotate: false,
        latitude: 40.27157668094082,
        longitude: -0.8085124867686474,
        pitch: 0,
        zoom: 4.240327380036824,
        isSplit: false,
      },
      mapStyle: {
        styleType: "satellite",
        topLayerGroups: {},
        visibleLayerGroups: {
          label: true,
          road: true,
          border: false,
          building: true,
          water: true,
          land: true,
          "3d building": false,
        },
        threeDBuildingColor: [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876,
        ],
        mapStyles: {},
      },
    },
  };
  // console.log(data);
  React.useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "CellCoverage",
              id: "coverage",
            },
            data,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: mapConfig,
        })
      );
    }
  }, [dispatch, data]);
  return (
    <div>
      <KeplerGl
        id="keplerMap"
        width={window.innerWidth}
        mapboxApiAccessToken="pk.eyJ1Ijoia2luZ2F2YXRhciIsImEiOiJja25ycjdlZjgwMGQyMnZyMGl2djc2ZjBsIn0.f7ZSGKKyYfSr4cg9krk_Cg"
        height={window.innerHeight}
      />
    </div>
  );
}
// export default MapComponent;

export default Map;
