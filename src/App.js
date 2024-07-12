// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home/Home';
import Industry from './pages/Industry/Industry';
import Services from './pages/Services/Services';
import Blogs from './pages/Blog/Blog';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
