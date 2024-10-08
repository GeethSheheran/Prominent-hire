import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tpNumber: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhoneNumber = (tpNumber) => {
    return /^\d{10}$/.test(tpNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, tpNumber, message } = formData;

    if (!firstName || !lastName || !email || !tpNumber || !message) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email address.');
      return;
    }

    if (!validatePhoneNumber(tpNumber)) {
      setError('Invalid phone number. It should contain 10 digits.');
      return;
    }

    setError('');

    const payload = {
      access_key: 'e13da831-05aa-4e60-bad0-b710d982b7c6', // replace with your Web3Forms access key
      subject: `${firstName} ${lastName}`,
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: `${message}\n\nTP Number: ${tpNumber}`
    };

    try {
      await axios.post('https://api.web3forms.com/submit', payload);
      setAlert({ show: true, message: 'Message sent successfully!', variant: 'success' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        tpNumber: '',
        message: ''
      });
    } catch (error) {
      setAlert({ show: true, message: 'An error occurred, please try again.', variant: 'danger' });
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
          <Title>Connect with us</Title>
          <InfoItem>
            <InfoTitle>Address</InfoTitle>
            <InfoText>
              <a href="https://www.google.com/maps/search/?api=1&query=Prominent+Hire,+Minneapolis,+MN" target="_blank" rel="noopener noreferrer">
                Prominent Hire, Minneapolis, MN
              </a>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Phone</InfoTitle>
            <InfoText>
              <a href="tel:+16125586221">+(612) 558 6221</a>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Email</InfoTitle>
            <InfoText>
              <a href="mailto:contact@prominenthire.com">contact@prominenthire.com</a>
            </InfoText>
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
  background-size: cover;
  background-position: center;

  @media (max-width: 1020px) {
    flex-direction: column;
    padding: 40px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 1020px) {
    margin-bottom: 150px;
    margin-right: 0px;
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
  padding: 15px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */
  margin-top: 20px;

  &:hover {
    background-color: #FF0069;
    border-color: #FF0069;
    color: #fff;
  }

  @media (max-width: 1020px) {
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

  @media (max-width: 1020px) {
    margin-top: 20px;
  }
`;

const ContactInfo = styled.div`
  color: #031b30;
  margin-left: 50px;

  @media (max-width: 1020px) {
    margin-left: 10px;
  }
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

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
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
