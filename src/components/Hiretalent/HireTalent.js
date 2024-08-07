// HireTalent.js

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
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FullWidthTextArea = styled(TextArea)`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #FF0069;
  border: none;
  border-radius: 15px;
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
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: #a0a0a0;
  }
`;

const HireTalent = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    jobTitle: '',
    documents: null,
    jobDescription: '',
    candidateRequirements: ''
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
      <Title>Hire Talent</Title>
      <Description>Please fill out the form below to find the perfect candidates for your organization. Our team will review your requirements and get in touch with you soon.</Description>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
        <Input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <Input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
        <FileInputLabel htmlFor="documents-upload">Upload Relevant Documents (if any)</FileInputLabel>
        <FileInput type="file" id="documents-upload" name="documents" onChange={handleChange} />
        <FullWidthTextArea name="jobDescription" placeholder="Job Description" value={formData.jobDescription} onChange={handleChange} />
        <FullWidthTextArea name="candidateRequirements" placeholder="Candidate Requirements" value={formData.candidateRequirements} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default HireTalent;
