import React from 'react'
import { createRoot } from "react-dom/client";

history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
import "./index.css";
import "./snippet.css";
import "./custom.css";
import "./responsive.css";
import "./custom.js";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
);
