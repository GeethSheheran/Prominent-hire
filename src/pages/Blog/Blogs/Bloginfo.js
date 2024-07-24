import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Bloginfo = () => {
  const { id } = useParams();

  const blogDetails = {
    1: {
      title: 'Blog Post 1',
      img: 'https://via.placeholder.com/150',
      content: 'Detailed content for Blog Post 1.'
    },
    2: {
      title: 'Blog Post 2',
      img: 'https://via.placeholder.com/150',
      content: 'Detailed content for Blog Post 2.'
    },
    3: {
      title: 'Blog Post 3',
      img: 'https://via.placeholder.com/150',
      content: 'Detailed content for Blog Post 3.'
    }
  };

  const blog = blogDetails[id];

  return (
    <PageWrapper>
      <ContentWrapper>
        {blog ? (
          <>
            <Image src={blog.img} alt={blog.title} />
            <TextWrapper>
              <Title>{blog.title}</Title>
              <Content>{blog.content}</Content>
            </TextWrapper>
          </>
        ) : (
          <p>Blog post not found.</p>
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Bloginfo;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top:150px;
  margin-bottom:150px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 80vw;
  padding: 20px;
  text-align: left;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 1020px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  @media (max-width: 1020px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #666;
`;
