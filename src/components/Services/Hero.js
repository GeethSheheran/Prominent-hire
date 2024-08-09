import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle> Our Services</HeroTitle>
        <HeroDescription>
          we offer a range of comprehensive services designed to support both candidates and employers in achieving their goals.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 70vh;
  background-image: url('./Services.png');
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
  max-width: 90%;
  border-radius: 10px;
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
