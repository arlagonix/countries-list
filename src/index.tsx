import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
const loader = document.querySelector(".loader") ?? document.body;
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App hideLoader={hideLoader} />
  </React.StrictMode>
);
