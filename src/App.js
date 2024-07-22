// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './Nav';
import Home from './pages/Home/Home';
import Industry from './pages/Industry/Industry';
import Services from './pages/Services/Services';
import Blogs from './pages/Blog/Blog';
import CareersPage from './components/Services/Careers/CareersPage';
import Recruitment from './components/Services/Recruitment/Recruitment';
import Support from './components/Services/Support/Support';
import './App.css';
import About from './pages/About/About';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
