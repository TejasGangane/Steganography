import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//components and styling import
import "../src/style/homepage.css";
import App from "./App.jsx";
//Routing imports
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
