import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Blogs</HeroTitle>
        <HeroDescription>
        Welcome to the Prominent Hire Blog, your go-to resource for insights, tips, and trends in recruitment, career development, and workplace strategies. Explore our latest articles written by industry experts to stay informed and inspired.
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
`;

const HeroContent = styled.div`
  max-width: 70%;
  padding: 0px;
//   background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 90%;
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
  max-width: 70vw;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top:0px;
  }
`;
