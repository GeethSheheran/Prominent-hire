import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
      buttonLabel: 'Get Career Advice',
      route: '/services'
    },
    {
      icon: CareerIcon,
      title: 'Career Guidance',
      description: 'Supportive advice and resources to navigate career decisions and opportunities',
      buttonLabel: 'Get Career Advice',
      route: '/services'
    },
    {
      icon: SupportIcon,
      title: 'Continuous Support',
      description: 'Ongoing assistance throughout the job search and beyond, ensuring long-term success',
      buttonLabel: 'Access Ongoing Support',
      route: '/contact'
    },
    {
      icon: TechnologyIcon,
      title: 'Innovative Technology',
      description: 'Leveraging cutting-edge tools to streamline the recruitment process for both candidates and companies',
      buttonLabel: 'Experience Technology',
      route: '/contact'
    },
  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index}>
          <Icon src={card.icon} alt={`${card.title} icon`} />
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
          <StyledLink to={card.route}>
            <CardButton>{card.buttonLabel}</CardButton>
          </StyledLink>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Points;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #031B30;
`;

const Card = styled.div`
  background-color: #031B30;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 250px; /* Adjust the height as necessary */
`;

const Icon = styled.img`
  height: 30px;
  margin-bottom: 0px;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 0px;
`;

const CardButton = styled.button`
  background-color: #031B30;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #FF0069;
    color: white;
    border: 1px solid #FF0069;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;
