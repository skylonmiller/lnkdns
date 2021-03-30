import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./Providers";
import reportWebVitals from "./reportWebVitals";

// function sendToAnalytics(metric) {
//   const body = JSON.stringify(metric);
//   const url = "https://skylonmiller.github.io/skylon/";

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body);
//   } else {
//     fetch(url, { body, method: "POST", keepalive: true });
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(sendToAnalytics);
