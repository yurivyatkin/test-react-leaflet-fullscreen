import React from "react";
import { render } from "react-dom";
import MyMap from "./MyMap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Testing react-leaflet-fullscreen</h2>
    <MyMap />
  </div>
);

render(<App />, document.getElementById("root"));
