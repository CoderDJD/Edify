import "./index.css";
import App from "./App";
import { hydrate } from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

hydrate(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.querySelector("#root")
);
