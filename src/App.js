// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home/Home';
import Industry from './pages/Industry/Industry';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industry />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
