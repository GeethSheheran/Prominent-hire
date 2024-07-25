import React from 'react';
import styled from 'styled-components';
import IndustryIcon from './icon (1).png';
import CareerIcon from './icon (2).png';
import SupportIcon from './icon (3).png';
import TechnologyIcon from './icon (4).png';

const Points = () => {
  const cardData = [
    {
      icon: IndustryIcon,
      title: 'Industry Expertise',
      description: 'Supportive advice and resources to navigate career decisions and opportunities',
      buttonLabel: 'Get Career Advice'
    },
    {
      icon: CareerIcon,
      title: 'Career Guidance',
      description: 'Supportive advice and resources to navigate career decisions and opportunities',
      buttonLabel: 'Get Career Advice'
    },
    {
      icon: SupportIcon,
      title: 'Continuous Support',
      description: 'Ongoing assistance throughout the job search and beyond, ensuring long-term success',
      buttonLabel: 'Access Ongoing Support'
    },
    {
      icon: TechnologyIcon,
      title: 'Innovative Technology',
      description: 'Leveraging cutting-edge tools to streamline the recruitment process for both candidates and companies',
      buttonLabel: 'Experience Technology'
    },
  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Icon src={card.icon} alt={`${card.title} icon`} />
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
          <CardButton>{card.buttonLabel}</CardButton>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Points;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color:#000;
`;

const Card = styled.div`
  background-color: #ooo;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  margin-top: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const Icon = styled.img`
  height: 30px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: #000;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #FF0069;
    color:white;
  border: 1px solid #FF0069;
  transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
