import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { DataLayer } from "./components/Datalayer";
import reducer, { initialState } from "./components/reducer";

ReactDom.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.querySelector("#root")
);
