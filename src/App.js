import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Points from './Points';
import About from './About';
import Industry from './Industry';
import Careers from './Careers';
import Feedback from './Feedback';
import Service from './Service';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Points />
      <About />
      <Industry />
      <Careers />
      <Feedback />
      <Service />
      <Footer />
      {/* Other components */}
    </div>
  );
};

export default App;
