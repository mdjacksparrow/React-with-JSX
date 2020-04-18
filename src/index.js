import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const date = new Date(2020, 1, 1, 10);

ReactDOM.render(<App date={date} />, document.getElementById("root"));
