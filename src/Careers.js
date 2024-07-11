import React from 'react';
import styled from 'styled-components';
import VideoPlaceholder from './video.png'; // Ensure this path is correct

const Careers = () => {
  return (
    <CareersContainer>
      <TextContainer>
        <Title>We Are with You, Every Step of the Way</Title>
        <Description>
          At Prominent Hire, we understand that finding the right career opportunity or the perfect candidate can be daunting. 
          That’s why we are committed to being your trusted partner throughout the journey. With a focus on integrity and personalized service, 
          we ensure transparency and reliability in every interaction. Whether you’re a talented professional seeking your next challenge or a 
          company searching for top-tier talent, rest assured—we’re here to support you with expertise, empathy, and a dedication to your success.
        </Description>
        <Button>Explore Careers</Button>
      </TextContainer>
      <VideoContainer>
        <Video src={VideoPlaceholder} alt="Video placeholder" />
      </VideoContainer>
    </CareersContainer>
  );
};

export default Careers;

const CareersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background-color: #031b30;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #FF0069;
    border: 2px solid #FF0069;
  }
`;

const VideoContainer = styled.div`
  flex-shrink: 0;
  max-width: 100%;
`;

const Video = styled.img`
  max-width: 40vw;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;
