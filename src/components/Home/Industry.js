import React from 'react';
import styled from 'styled-components';

const Industry = () => {
  const industries = [
    "Technology", "Finance and Banking", "Healthcare", "Engineering", "Marketing and Advertising",
    "Legal Services", "Pharmaceuticals","Education",  "Hospitality and Tourism", "Construction", "Information Technology",
    "Real Estate", "Logistics and Supply Chain", "Energy and Utilities", 
    "Manufacturing", "Education", "Creative Arts and Design", "Telecommunications","Non-Profit and Social Services", "Human Resources"
  ];

  return (
    <IndustryContainer>
      <Title>Our Industries</Title>
      <IndustryList>
        {industries.map((industry, index) => (
          <IndustryItem key={index}>{industry}</IndustryItem>
        ))}
      </IndustryList>
    </IndustryContainer>
  );
};

export default Industry;

const IndustryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
  margin-bottom:80px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: #031b30;
  margin-bottom: 40px;
`;

const IndustryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align:left;
  max-width: 1200px;
`;

const IndustryItem = styled.div`
  flex: 1 1 200px; 
  margin: 10px 20px;
  font-size: 1rem;
  color: #031b30;
`;
