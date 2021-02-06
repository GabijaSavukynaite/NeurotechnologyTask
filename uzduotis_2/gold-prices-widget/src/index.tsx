import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GoldPrices } from "./components/GoldPrices";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GoldPrices />
  </React.StrictMode>,
  document.getElementById("gold-price-chart-widget")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
