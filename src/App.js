import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navthing from "./components/Navbar";
import Home from "./pages/Home";
import Classical from "./pages/Classical";
import MovieScores from "./pages/MovieScores";
import ContemporaryChristian from "./pages/ContemporaryChristian";
import Jazz from "./pages/Jazz";


function App() {
  return (
    <div className="myContainer">
      <Navthing />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classical" element={<Classical />} />
        <Route path="/moviescores" element={<MovieScores />} />
        <Route
          path="/contemporarychristian" element={<ContemporaryChristian />}
         
        />
        <Route path="/jazz" element={<Jazz />} />
      </Routes>
    </div>
  );
}

export default App;
