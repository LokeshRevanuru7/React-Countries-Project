import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroComponent from "./components/HeroComponent";
import Card from "./components/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroComponent />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
