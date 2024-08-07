import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 50px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    margin: 10px 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  width: 40vw;
  margin: 40px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 15px;
  height: 100px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px;
  font-size: 16px;
  color: #031B30;
  background-color: #fff;
  border: 1px solid #031B30;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #FF0069;
  border: 1px solid #FF0069;
    color:white;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #b0b0b0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: #a0a0a0;
  }
`;

const Findyourjob = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: '',
    objectives: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, industry, objectives } = formData;

    if (!firstName || !lastName || !email || !phone || !industry || !objectives) {
      alert('All fields are required.');
      return;
    }

    emailjs.send(
      'service_5cgbnl5', // replace with your EmailJS service ID
      'template_u77csbb', // replace with your EmailJS template ID
      {
        to_name: 'Job Coordinator', // Replace with the actual recipient name if needed
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        objectives: formData.objectives
      },
      'Kniwrt7R204tb9yHV' // replace with your EmailJS user ID
    ).then((result) => {
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        industry: '',
        objectives: ''
      });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert('An error occurred, please try again.');
    });
  };

  return (
    <FormContainer>
      <Title>Find Your Job</Title>
      <Description>Please fill out the form below to get started on your job search journey. Our team will review your information and get in touch with you soon.</Description>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <Input type="text" name="industry" placeholder="Interested Industry" value={formData.industry} onChange={handleChange} />
        <FileInputLabel htmlFor="resume-upload">Upload Your Resume</FileInputLabel>
        <FileInput type="file" id="resume-upload" name="resume" onChange={handleChange} />
        <TextArea name="objectives" placeholder="Your Objectives" value={formData.objectives} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default Findyourjob;
