import React from 'react';
import Hero from '../../components/Services/Hero';
import IndustryPage from '../../components/Services/IndustryPage';
import Service from '../../components/Home/Service';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';

const Services = () => {
  return (
    <div>
      <Hero />
      <IndustryPage />
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Services;
