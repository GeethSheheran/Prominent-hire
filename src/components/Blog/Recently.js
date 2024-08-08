import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Recently = () => {
  return (
    <Container>
      <Title>Recent Articles</Title>
      <Card>
        <Link >
          <CardContent>
            <Image src="/soon.png" alt="Navigating Career Changes" />
            <TextContent>
              <CardTitle>Navigating Career Changes: Tips for Transitioning Smoothly</CardTitle>
              <Description>
                Explore strategies and practical advice for successfully navigating career changes, whether switching industries or advancing within your current field.
              </Description>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link >
          <CardContent>
            <Image src="/soon.png" alt="The Future of Remote Work" />
            <TextContent>
              <CardTitle>The Future of Remote Work: Trends and Best Practices</CardTitle>
              <Description>
                Delve into the evolving landscape of remote work, including trends, tools, and best practices for employers and employees alike.
              </Description>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link >
          <CardContent>
            <Image src="/soon.png" alt="Virtual Interviews Tips" />
            <TextContent>
              <CardTitle>Mastering the Art of Virtual Interviews: Tips for Success</CardTitle>
              <Description>
                Learn essential tips and techniques to excel in virtual interviews, from preparation to follow-up, ensuring you make a lasting impression.
              </Description>
            </TextContent>
          </CardContent>
        </Link>
      </Card>
      <Card>
        <Link >
          <CardContent>
            <Image src="/soon.png" alt="Employer Brand Strategies" />
            <TextContent>
              <CardTitle>Building a Strong Employer Brand: Strategies for Attracting Top Talent</CardTitle>
              <Description>
                Discover effective strategies and case studies on enhancing your employer brand to attract and retain top talent in competitive markets.
              </Description>
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
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;
  @media (max-width: 768px) {
  padding: 0 0px;
    
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
      width: 200px;
      heght: 200px;

    height: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
`;

const Description = styled.p`
  margin: 0;
  color: #666;
`;

export default Recently;
