import React from 'react';
import styled from 'styled-components';
import IndustryIcon from './icon (2).png';
import CareerIcon from './icon (2).png';
import SupportIcon from './icon (3).png';
import TechnologyIcon from './icon (4).png';

const Points = () => {
  const cardData = [
    {
      icon: IndustryIcon,
      title: 'Industry',
      description: 'Information about various industries.',
      buttonLabel: 'Learn More'
    },
    {
      icon: CareerIcon,
      title: 'Career Guidance',
      description: 'Guidance for your career path.',
      buttonLabel: 'Explore'
    },
    {
      icon: SupportIcon,
      title: 'Support',
      description: 'We are here to support you.',
      buttonLabel: 'Get Help'
    },
    {
      icon: TechnologyIcon,
      title: 'Technology',
      description: 'Latest technology trends.',
      buttonLabel: 'Discover'
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
  background-color:#031B30;
`;

const Card = styled.div`
  background-color: #031B30;
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
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: #031B30;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #FF0069;
    color:white;
  border: 1px solid #FF0069;
  }
`;
