// src/pages/Home/Home.js
import React from 'react';
import Hero from '../../components/Home/Hero';
import Points from '../../components/Home/Points';
import About from '../../components/Home/About';
import Industry from '../../components/Home/Industry';
import Careers from '../../components/Home/Careers';
import Feedback from '../../components/Home/Feedback';
import Service from '../../components/Home/Service';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';

const Home = () => {
  return (
    <div>
      <Hero />
      <Points />
      <About />
      <Industry />
      <Careers />
      <Feedback />
      <Service />
      <Form/>
      <Footer />
    </div>
  );
};

export default Home;
