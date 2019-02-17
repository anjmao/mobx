import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configure } from "mobx";

configure({
  enforceActions: "observed"
});

ReactDOM.render(<App />, document.getElementById("root"));
