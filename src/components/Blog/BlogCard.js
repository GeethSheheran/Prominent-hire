// src/components/Blog/BlogCard.js
import React from 'react';
import styled from 'styled-components';

const BlogCard = ({ image, title, author, description }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardAuthor>
          <AuthorImage src={author.image} alt={author.name} />
          <AuthorName>By {author.name}</AuthorName>
        </CardAuthor>
        <CardDescription>{description}</CardDescription>
        <CardLink href="#">See more ›</CardLink>
      </CardContent>
    </CardContainer>
  );
};

export default BlogCard;

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 120%;
    margin-bottom: 20px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #031b30;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.p`
  font-size: 0.875rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CardLink = styled.a`
  color: #1e90ff;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
