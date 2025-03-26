import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import AdoptPage from "./components/AdoptPage";
import LoginSignup from "./components/LoginSignup";
import ContactUs from "./components/ContactUs";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adopt" element={<AdoptPage />} />
        <Route path="/Contribute" element={<Home />} />
        <Route path="/Contact_Us" element={<ContactUs />} />
        <Route path="/auth" element={<LoginSignup />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
