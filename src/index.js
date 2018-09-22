import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";

import Card from "./components/Card";

ReactDOM.render(<Card />, document.getElementById("root"));
registerServiceWorker();
