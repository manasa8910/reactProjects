import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Resturants from "./Pages/Resturants";
import Contact from "./Pages/Contact";
import Foods from "./Pages/Foods";
import Quote from "./Pages/Quote";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/foods" element={<Foods />} />
          <Route exact path="/quote" element={<Quote />} />
          <Route exact path="/resturants" element={<Resturants />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
