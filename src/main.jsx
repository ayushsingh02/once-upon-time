import React from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import "./snippet.css";
import "./custom.css";
import "./responsive.css";
import "./custom.js";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>,
);
