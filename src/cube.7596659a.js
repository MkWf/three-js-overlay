var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire269f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){let o=n[e];delete n[e];let a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire269f=o);var a=o("7J8MZ"),r=o("1AtD0"),l=o("2ZjD0");const i={center:{lat:53.5,lng:10},tilt:67.5,heading:60,zoom:19};(async function(){const{mapId:e}=l.getMapsApiOptions();await l.loadMapsApi();const t=new google.maps.Map(document.querySelector("#map"),{mapId:e,...i}),n=new r.default({...i.center,altitude:0});n.setMap(t);const o=n.getScene(),d=new a.Mesh(new a.BoxGeometry(20,20,20),new a.MeshStandardMaterial({color:16711680}));n.latLngAltToVector3({lat:53.5,lng:10,altitude:30},d.position),o.add(d)})().catch((e=>{console.error("uncaught error in main: ",e)}));
//# sourceMappingURL=cube.7596659a.js.map