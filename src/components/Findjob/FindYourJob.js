// Findyourjob.js

import React, { useState } from 'react';
import styled from 'styled-components';

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
  margin:40px;
  
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
  border-radius: 4px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  color: #fff;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e6b800;
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
  border-radius: 4px;
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
    resume: null,
    objectives: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (e.g., send to API)
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
