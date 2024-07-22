import React from 'react';
import AboutImage from './about.png'; // Ensure this path is correct
import styled from 'styled-components';

const Vision = () => {
  const industries = [
    {
      title: 'Vision',
      description: 'To be the most trusted and innovative recruiting agency, known for our commitment to excellence and personalized approach.'
    },
    {
      title: 'Mission',
      description: 'Our Mission To bridge the gap between ambitious professionals and leading businesses, fostering partnerships that unlock potential and drive innovation'
    }
  ];

  return (
    <>
    <IndustryContainer>
      {industries.map((industry, index) => (
        <Card key={index}>
          <CardTitle>{industry.title}</CardTitle>
          <CardDescription>{industry.description}</CardDescription>
        </Card>
      ))}
    </IndustryContainer>
    <Image src={AboutImage} alt="About Us" />
    </>
    
  );
};

export default Vision;

const IndustryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 20px;
    justify-items: center;
  }
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #031b30;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Image = styled.img`
  max-width: 100vw;
  height: auto;
//   border-radius: 10px;
`;