import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
    color: white;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: ${props => (props.variant === 'success' ? '#d4edda' : '#f8d7da')};
  color: ${props => (props.variant === 'success' ? '#155724' : '#721c24')};
  border-radius: 5px;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ModalTitle = styled.h4`
  margin-bottom: 10px;
  color: inherit;
`;

const HireTalent = () => {
  const { register, handleSubmit } = useForm();
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const onSubmit = async (data) => {
    try {
      // Upload file to file.io
      const file = data.resume[0];
      const fileData = new FormData();
      fileData.append("file", file);

      const fileUploadResponse = await fetch("https://file.io", {
        method: "POST",
        body: fileData,
      });

      if (!fileUploadResponse.ok) {
        throw new Error("Failed to upload file");
      }

      const fileResult = await fileUploadResponse.json();

      if (!fileResult.success) {
        throw new Error("File upload unsuccessful");
      }

      // Add file URL to form data
      const formData = new FormData();
      formData.append("access_key", "e13da831-05aa-4e60-bad0-b710d982b7c6");
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("industry", data.industry);
      formData.append("resume", fileResult.link);
      formData.append("objectives", data.objectives);
      formData.append("jobDescription", data.jobDescription);
      formData.append("candidateRequirements", data.candidateRequirements);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await res.json();

      if (result.success) {
        setAlert({ show: true, message: 'Message sent successfully!', variant: 'success' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setAlert({ show: true, message: error.message || 'An error occurred, please try again.', variant: 'danger' });
    }
  };

  return (
    <FormContainer>
      {alert.show && (
        <ModalBackground>
          <Modal variant={alert.variant}>
            <ModalContent>
              <ModalTitle>{alert.variant === 'success' ? 'Success' : 'Error'}</ModalTitle>
              <p>{alert.message}</p>
            </ModalContent>
          </Modal>
        </ModalBackground>
      )}
      <Title>Hire Talent</Title>
      <Description>Please fill out the form below to get started on your talent search journey. Our team will review your information and get in touch with you soon.</Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" name="firstName" placeholder="First Name" {...register("firstName")} required />
        <Input type="text" name="lastName" placeholder="Last Name" {...register("lastName")} required />
        <Input type="email" name="email" placeholder="Email" {...register("email")} required />
        <Input type="tel" name="phone" placeholder="Phone" {...register("phone")} required />
        <Input type="text" name="industry" placeholder="Interested Industry" {...register("industry")} required />
        <Input type="file" id="resume-upload" name="resume" {...register("resume")} required />
        <TextArea name="jobDescription" placeholder="Job Description" {...register("jobDescription")} required />
        <TextArea name="candidateRequirements" placeholder="Candidate Requirements" {...register("candidateRequirements")} required />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default HireTalent;
