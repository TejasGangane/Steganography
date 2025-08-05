import { useState } from "react";
//components and styling import
import "./style/homepage.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
//Routing imports
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
