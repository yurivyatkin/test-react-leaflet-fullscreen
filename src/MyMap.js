import React from "react";
import { Map, TileLayer } from "react-leaflet";
import FullscreenControl from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";

// https://github.com/Leaflet/Leaflet/issues/3186
const MAP_BASE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

class MyMap extends React.Component {
  state = {
    lat: -41.2448,
    lng: 172,
    zoom: 6
  };
  render() {
    const viewportCenter = [this.state.lat, this.state.lng];
    const viewportZoom = this.state.zoom;
    console.log("Hello from MyMap!");
    return (
      <Map
        center={viewportCenter}
        style={{
          width: "100vw",
          height: "80vh",
          zIndex: "0"
        }}
        zoom={viewportZoom}
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url={MAP_BASE_URL}
        />
        <FullscreenControl position="topright" />
      </Map>
    );
  }
}

export default MyMap;
