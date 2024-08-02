import React from 'react';
import Hero from '../../components/Findjob/Hero';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';
import Service from '../../components/Home/Service';
import Findyourjob from '../../components/Findjob/FindYourJob';
import About from '../../components/Findjob/About';


const Findjob = () => {
  return (
    <div>
      <Hero />
      <Findyourjob/>
      <About/>
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Findjob;
