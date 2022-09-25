import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
