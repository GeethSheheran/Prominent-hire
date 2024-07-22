import React from 'react';
import Hero from '../../components/About/Hero';
import Aboutus from '../../components/About/Aboutus';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';
import Vision from '../../components/About/Vision';
import Points from '../../components/About/Points';
import Work from '../../components/About/Work';
import Team from '../../components/About/Team';
import Touch from '../../components/About/Touch';
import Service from '../../components/Home/Service';


const About = () => {
  return (
    <div>
      <Hero />
      <Aboutus/>
      <Vision/>
      <Points />
      <Work/>
      <Team/>
      <Touch/>
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default About;
