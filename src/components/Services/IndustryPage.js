import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IndustryPage = () => {
  return (
    <Container>
      <Card>
        <Link to="/careers">
          <CardContent>
            <Image src="/career.png" alt="Career Advancement" />
            <TextContent>
              <Title>Career Advancement Services</Title>
              <List>
                <Item>Career Guidance</Item>
                <Item>Resume and Cover Letter Assistance</Item>
                <Item>Interview Coaching</Item>
                <Item>Salary Negotiation Advice</Item>
                <Item>Job Alerts</Item>
                <Item>Workshops and Webinars</Item>
              </List>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link to="/recruitment">
          <CardContent>
            <Image src="/recruitment.png" alt="Recruitment Solutions" />
            <TextContent>
              <Title>Recruitment Solutions</Title>
              <List>
                <Item>Industry Expertise</Item>
                <Item>Continuous Support</Item>
                <Item>Innovative Technology</Item>
                <Item>Employer Branding Services</Item>
                <Item>Market Insights</Item>
                <Item>Talent Pool Access</Item>
                <Item>Candidate Assessments</Item>
                <Item>Onboarding Support</Item>
                <Item>Employee Retention Strategies</Item>
                <Item>Diversity and Inclusion Programs</Item>
              </List>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link to="/support">
          <CardContent>
            <Image src="/support.png" alt="Support and Transition" />
            <TextContent>
              <Title>Support and Transition</Title>
              <List>
                <Item>Outplacement Services</Item>
                <Item>Reference Checks</Item>
              </List>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 70%;
  max-width: 80vw;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  margin: 10px 0;
`;

export default IndustryPage;
