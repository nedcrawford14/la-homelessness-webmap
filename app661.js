require([
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/Expand"
], function (WebMap, MapView, Legend, LayerList, Expand) {

  const webmap = new WebMap({
    portalItem: {
      id: "YOUR_WEBMAP_ID_HERE"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  const legend = new Legend({
    view: view
  });

  const layerList = new LayerList({
    view: view
  });

  const legendExpand = new Expand({
    view: view,
    content: legend,
    expanded: true
  });

  const layerListExpand = new Expand({
    view: view,
    content: layerList,
    expanded: false
  });

  view.ui.add(legendExpand, "bottom-right");
  view.ui.add(layerListExpand, "top-right");
});