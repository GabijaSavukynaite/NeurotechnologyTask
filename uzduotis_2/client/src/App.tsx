import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const scriptRuntime = document.createElement("script");
    const scriptChunk = document.createElement("script");
    const scriptMain = document.createElement("script");

    scriptRuntime.src =
      "http://localhost:5000/static/js/gold-prices-chart-widget.js";
    scriptChunk.src =
      "http://localhost:5000/static/js/gold-prices-chart-widget.2.js";
    scriptMain.src =
      "http://localhost:5000/static/js/gold-prices-chart-widget.main.js";

    const container = document.getElementById(
      "gold-price-chart-widget"
    ) as HTMLElement;

    container.appendChild(scriptRuntime);
    container.appendChild(scriptChunk);
    container.appendChild(scriptMain);
  });
  return (
    <div className="App">
      <h1>Gold prices chart widget</h1>
      <div id="gold-price-chart-widget" style={{ width: "80%" }}></div>
    </div>
  );
};

export default App;
