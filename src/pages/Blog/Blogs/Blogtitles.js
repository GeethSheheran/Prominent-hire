import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import Hero from '../../../components/Blog/Blogs/Hero';
import Footer from '../../../components/Home/Footer';
import Service from '../../../components/Home/Service';

const Blogtitles = () => {
  const blogDetails = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150',
      title: 'Blog Post 1',
      description: 'This is a description of Blog Post 1.'
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150',
      title: 'Blog Post 2',
      description: 'This is a description of Blog Post 2.'
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150',
      title: 'Blog Post 3',
      description: 'This is a description of Blog Post 3.'
    },
  ];

  return (
    <>
    <PageWrapper>
      <Hero />
      <ContentWrapper>
        {blogDetails.map(blog => (
          <StyledLink key={blog.id} to={`/bloginfo/${blog.id}`}>
            <Card>
              <CardContent>
                <Image src={blog.img} alt={blog.title} />
                <TextContent>
                  <CardTitle>{blog.title}</CardTitle>
                  <Description>{blog.description}</Description>
                </TextContent>
              </CardContent>
            </Card>
          </StyledLink>
        ))}
      </ContentWrapper>
    </PageWrapper>
    <Service />
    <Footer />
    </>
  );
};

export default Blogtitles;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  margin-bottom: 150px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 30%; /* Same width as Card for proper spacing */
  max-width: 300px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%; /* Adjusted to fit within StyledLink */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  margin: 0 10px;
  margin-top: 100px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
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
