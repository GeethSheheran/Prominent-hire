// src/pages/Industry/Form.js
import React from 'react';
import styled from 'styled-components';

const Form = () => {
  const industries = [
    {
      title: 'Resume Assistance',
      description: 'Receive professional help with crafting and optimizing resumes and cover letters'
    },
    {
      title: 'Employer Branding Services',
      description: 'Enhance your employer brand to attract top talent and improve retention rates.'
    },
    {
      title: 'Workshops and Webinars',
      description: 'Attend workshops and webinars on career development, industry trends, and recruitment strategies.'
    }
  ];

  return (
    <IndustryContainer>
      {industries.map((industry, index) => (
        <Card key={index}>
          <CardIcon>$</CardIcon>
          <CardTitle>{industry.title}</CardTitle>
          <CardDescription>{industry.description}</CardDescription>
        </Card>
      ))}
    </IndustryContainer>
  );
};

export default Form;

const IndustryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  // background-color: #f9f9f9;
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
    background-color: #031b30;

    & > p, & > h3 {
      color: white;
    }

    & > div {
      color: white;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #031b30;
  margin-bottom: 10px;
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
