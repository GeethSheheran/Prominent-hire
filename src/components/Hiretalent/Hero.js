import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Find the Perfect Candidate</HeroTitle>
        <HeroDescription>
        Our extensive database and advanced matching system ensure that you find the best candidates who fit your organizational needs. Whether you are looking for seasoned professionals or fresh graduates, we have the right people for you.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 70vh;
  background-image: url('./hire.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background-color: #031B30;
`;

const HeroContent = styled.div`
  max-width: 70%;
  padding: 0px;
//   background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top:50px;
  @media (max-width: 768px) {
  max-width: 90%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    line-height: 1;
    font-size: 28px;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top:0px;
  }
`;
