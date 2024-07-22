import React from 'react';
import Hero from '../../components/Contact/Hero';
import Footer from '../../components/Home/Footer';
import Form from '../../components/Home/Form';
import ContactForm from '../../components/Contact/Contactform';
import Service from '../../components/Home/Service';


const Contact = () => {
  return (
    <div>
      <Hero />
      <ContactForm/>
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Contact;
