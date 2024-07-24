import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './Nav';
import Home from './pages/Home/Home';
import Industry from './pages/Industry/Industry';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Blogtitles from './pages/Blog/Blogs/Blogtitles';
import Bloginfo from './pages/Blog/Blogs/Bloginfo'; 
import CareersPage from './components/Services/Careers/CareersPage';
import Recruitment from './components/Services/Recruitment/Recruitment';
import Support from './components/Services/Support/Support';
import About from './pages/About/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogtitles/:id" element={<Blogtitles />} />
        <Route path="/bloginfo/:id" element={<Bloginfo />} /> 
      </Routes>
    </Router>
  );
};

export default App;
