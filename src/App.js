import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(true);
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <BrowserRouter>
      {openModal ? <Modal closeModal={closeModalHandler} /> : null}
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
