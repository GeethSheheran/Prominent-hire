import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>We’re Here For You</HeroTitle>
        <HeroDescription>
        Thank you for considering Prominent Hire. Whether you’re looking to explore career opportunities, seeking exceptional talent, or simply want to learn more about our services, we’re here to help. Reach out to us using the contact information below or fill out the form, and one of our dedicated team members will get back to you promptly
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
  margin-top:0px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top:0px;
  }
`;
