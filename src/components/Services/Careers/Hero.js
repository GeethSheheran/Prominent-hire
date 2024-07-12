import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
      <HeroDescription>
        Our Services
        </HeroDescription>
        <HeroTitle>Career Advancement Services </HeroTitle>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 50vh;
  width:100vw;
  background-size: cover;
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
  
  // margin-top:-50px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    line-height: 1;
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-top:120px;
  opacity:70%;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top:0px;
  }
`;
