import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>We’re a Company That Values Your Success</HeroTitle>
        <HeroDescription>
        We are dedicated to connecting exceptional talent with outstanding companies. With a proven track record and a commitment to integrity, we strive to make meaningful connections that drive mutual success and growth.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 60vh;
  //background-image: url('./hero2.png');
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
  margin-top:30px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    line-height: 1;
    margin-top:50px;
    font-size: 28px;
  }
`;

const HeroDescription = styled.p`
  max-width: 70vw;
  font-size: 1rem;
  margin-top:0px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top:0px;
  }
`;
