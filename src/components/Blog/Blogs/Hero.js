import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Category Name</HeroTitle>
        <HeroDescription>
        Blog Categories
        </HeroDescription>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 40vh;
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
  max-width: 50%;
  padding: 0px;
//   background-color: rgba(0, 0, 0, 0.5);
  
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-top:50px;;
  @media (max-width: 1020px) {
    line-height: 1;
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  opacity:70%;
  @media (max-width: 1020px) {
    font-size: 1rem;
    margin-top:0px;
  }
`;
