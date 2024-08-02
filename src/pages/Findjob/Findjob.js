import React from 'react';
import Hero from '../../components/Findjob/Hero';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';
import Service from '../../components/Home/Service';


const Findjob = () => {
  return (
    <div>
      <Hero />
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Findjob;
