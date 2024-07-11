import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Industries We Serve</HeroTitle>
        <HeroDescription>
        we pride ourselves on our extensive industry expertise and our ability to connect top talent with leading companies across a wide range of sectors. Our dedicated team of recruiters has a deep understanding of the unique challenges and opportunities within each industry, ensuring that we find the perfect fit for both candidates and employers. Explore the industries we serve
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
  margin-top:-50px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top:0px;
  }
`;
