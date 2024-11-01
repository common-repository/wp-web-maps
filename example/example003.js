mymap.setView([44.59046,8.78906], 10);
         
//https://gis.stackexchange.com/questions/68489/loading-external-geojson-file-into-leaflet-map
//https://leafletjs.com/examples/geojson/
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.cityplanner.biz/webmaps/geojson-one-point/');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
  if (xhr.status !== 200) return
  L.geoJSON(xhr.response).addTo(mymap);
};
xhr.send();