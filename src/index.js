import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Home from "./main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
serviceWorker.unregister();
