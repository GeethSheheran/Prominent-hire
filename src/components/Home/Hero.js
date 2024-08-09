import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>With You on Your Journey to Success</HeroTitle>
        <HeroDescription>
        Partnering with Top Talent and Leading Companies to Create a Future of Excellence Together.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 70vh;
  background-image: url('./hero2.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background-color: #031B30;
  @media (max-width: 768px) {
    hight:50vh;
`;

const HeroContent = styled.div`
  max-width: 70%;
  padding: 0px;
//   background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  // margin-top:-50px;
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
  margin-top:0px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top:0px;
  }
`;
