import React from 'react';
import styled from 'styled-components';

const Aboutus = () => {
    return (
        <AboutContainer>
            <Header>About Us</Header>
            <Paragraph>
                Welcome to our company! We are committed to delivering the best services and solutions to our clients. Our team of professionals works tirelessly to ensure customer satisfaction and success in every project we undertake. Thank you for choosing us.
            </Paragraph>
        </AboutContainer>
    );
};

export default Aboutus;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 100px auto;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
    margin: 50px auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 30px auto;
    padding: 10px;
  }
`;

const Header = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  color: #00283C;
  line-height: 1.2;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  color: #00283C;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0 5px;
  }
`;
