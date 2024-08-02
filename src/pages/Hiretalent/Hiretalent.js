import React from 'react';
import Hero from '../../components/Hiretalent/Hero';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';
import Service from '../../components/Home/Service';
import About from '../../components/Hiretalent/About';
import HireTalent from '../../components/Hiretalent/HireTalent';


const Hiretalent = () => {
  return (
    <div>
      <Hero />
      <HireTalent/>
      <About/>
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Hiretalent;
