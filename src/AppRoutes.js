import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Individual from "./Components/Individual";
// import other pages here, e.g. FormPage, SearchPage

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/individual/:id" element={<Individual />} />
      
      </Routes>
    </Router>
  );
}
