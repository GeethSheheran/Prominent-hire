import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      {/* <SectionTitle>ABOUT</SectionTitle>
      <Title>Who We Are</Title>
      <DescriptionContainer>
        <Description>
          We are a dedicated recruiting agency passionate about connecting exceptional talent with outstanding companies. Our mission is to bridge the gap between ambitious professionals and leading businesses, fostering mutual growth and success.
        </Description>
      </DescriptionContainer>
      <Button>Explore About Us</Button>
      <Image src={AboutImage} alt="About Us" /> */}
      <ExtraTextContainer>
        <ExtraText>
        We are committed to providing personalized service and exceptional support. We look forward to hearing from you and assisting you with your recruitment needs.
        </ExtraText>
      </ExtraTextContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #031b30;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
   padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #031b30;
  max-width: 650px;
  margin-bottom: 0;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: transparent;
  color: #031b30;
  border: 2px solid #031b30;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: #FF0069;
    color: white;
    border: 2px solid #FF0069;
  }
`;

const Image = styled.img`
  max-width: 100vw;
  height: auto;
//   border-radius: 10px;
`;

const ExtraTextContainer = styled.div`
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  padding-top:80px;
  padding-bottom:80px;
`;

const ExtraText = styled.p`
  font-size: 16px;
  color: #fff;
  max-width: 800px;
  line-height: 1.5;
  text-align: center;
  padding: 0px;
  @media (max-width: 768px){
  font-size: 1rem;
  margin:0 50px;
  }
`;
