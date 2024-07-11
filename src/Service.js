import React from 'react';
import styled from 'styled-components';

const Service = () => {
  const locations = [
    "Atlanta", "Boston", "Chicago", "Dallas",
    "Houston", "Las Vegas", "Los Angeles", "Milwaukee",
    "New York City", "Orlando", "Philadelphia", "Sacramento",
    "San Francisco", "Toronto", "Vancouver", "Washington, DC"
  ];

  return (
    <ServiceContainer>
      <Title>Service Locations</Title>
      <LocationList>
        {locations.map((location, index) => (
          <LocationItem key={index}>{location}</LocationItem>
        ))}
      </LocationList>
    </ServiceContainer>
  );
};

export default Service;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #031b30;
  color: white;
  text-align: center;
  padding-bottom:100px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 40px;
`;

const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

const LocationItem = styled.div`
  flex: 1 1 200px; /* Adjust the basis to control the number of columns */
  margin: 10px 20px;
  font-size: 1rem;
  color: white;
`;
