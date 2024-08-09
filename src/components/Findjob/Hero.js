import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Find Your Dream Job with Prominent Hire</HeroTitle>
        <HeroDescription>
        We understand that finding the right job can be a daunting task, and we are here to make the process as smooth and efficient as possible. Our extensive network of top employers and our commitment to your success ensure that you are just a step away from your dream job.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 70vh;
  background-image: url('./find.png');
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
  // max-width: 70%;
  padding: 0px;
//   background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 90%;
  margin-top:50px;
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
    font-size: 14px;
    margin-top:0px;
  }
`;
