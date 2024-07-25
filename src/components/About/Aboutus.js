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
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
    margin: 50px auto;
  }

  @media (max-width: 480px) {
    width: 100vw;
    margin: 30px auto;
    padding: 10px;
  }
`;

const Header = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: var(--Base, #00283C);
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  color: var(--Base, #00283C);
  text-align: center;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
