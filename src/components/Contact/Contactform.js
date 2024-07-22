import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tpNumber: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, tpNumber, message } = formData;

    if (!firstName || !lastName || !email || !tpNumber || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    emailjs.send(
      'your_service_id', // replace with your EmailJS service ID
      'your_template_id', // replace with your EmailJS template ID
      formData,
      'your_user_id' // replace with your EmailJS user ID
    ).then((result) => {
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        tpNumber: '',
        message: ''
      });
    }, (error) => {
      alert('An error occurred, please try again.');
    });
  };

  return (
    <FormContainer>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="tpNumber"
            placeholder="TP Number"
            value={formData.tpNumber}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></Textarea>
          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton type="submit">Contact</SubmitButton>
        </Form>
      </FormSection>
      <InfoSection>
        <ContactInfo>
          <Title>Connect us</Title>
          <InfoItem>
            <InfoTitle>Address</InfoTitle>
            <InfoText>Prominent Hire, State Name, Country</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Phone</InfoTitle>
            <InfoText>+123 456 7890<br />+123 654 8709</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Email</InfoTitle>
            <InfoText>prominenthire@mail.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Business Hours</InfoTitle>
            <InfoText>Monday - Friday: 9:00 AM - 5:00 PM</InfoText>
          </InfoItem>
          <SocialIcons>
            <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-whatsapp"></i></SocialIcon>
          </SocialIcons>
        </ContactInfo>
      </InfoSection>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 100px;
  background-color: #fff;
  background-image: url('/mnt/data/Screenshot 2024-07-22 at 2.02.36 PM.png');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  background-color: transparent; /* Transparent by default */
  color: #031B30;
  border: 1px solid #031B30;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */
  margin-top:20px;

  &:hover {
    background-color: #FF0069;
    border-color: #FF0069;
    color:#fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8); /* Add transparency */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ContactInfo = styled.div`
  color: #031b30;
  margin-left:50px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #007bff;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  & > i {
    font-size: inherit;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 20px;
`;
