// src/components/Blog/BlogCard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const BlogCard = ({ image, title, author, shortDescription, longDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardLinkClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardAuthor>
            <AuthorImage src={author.image} alt={author.name} />
            <AuthorName>By {author.name}</AuthorName>
          </CardAuthor>
          <CardDescription>{shortDescription}</CardDescription>
          <CardLink href="#" onClick={handleCardLinkClick}>
            See more ›
          </CardLink>
        </CardContent>
      </CardContainer>

      {isOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <ModalMain>
              <ModalImage src={image} alt={title} />
              <ModalInfo>
                <ModalTitle>{title}</ModalTitle>
                <ModalAuthor>
                  <AuthorImage src={author.image} alt={author.name} />
                  <AuthorName>By {author.name}</AuthorName>
                </ModalAuthor>
              </ModalInfo>
              </ModalMain>
            <ModalDescription>{longDescription}</ModalDescription>
          </ModalContent>
          
        </ModalOverlay>
      )}
    </>
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
    width: 160%;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 80%;
  height: 90%;
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ModalMain = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 30%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  color: #031b30;
  margin-bottom: 10px;
`;

const ModalAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  color: #666;
  overflow-y: auto;
  max-height: 100vh;
  padding-right: 10px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
