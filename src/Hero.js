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
  background-image: url('./hero.png');
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
  // margin-top:-50px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-top:-50px;
`;
