import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage";
import AdoptPage from "./components/AdoptPage";

function App() {

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:3000");
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Adopt" element={<AdoptPage />} />
        <Route path="/Contribute" element={<LandingPage />} />
        <Route path="/Contact_Us" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
