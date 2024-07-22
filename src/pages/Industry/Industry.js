import React from 'react';
import Hero from '../../components/Industry/Hero';
import IndustryPage from '../../components/Industry/IndustryPage';
import Service from '../../components/Home/Service';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';


const Industry = () => {
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

export default Industry;
