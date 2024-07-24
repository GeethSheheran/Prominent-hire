import React from 'react';
import styled from 'styled-components';

const Touch = () => {
  return (
    <TouchContainer>
      <Content>
        <Title>Get in Touch</Title>
        <Description>Discover how we can help you achieve your career goals or find the perfect talent for your team. Contact us today to get started.</Description>
        <Button>See more</Button>
      </Content>
    </TouchContainer>
  );
};

export default Touch;

const TouchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background-image: url('/touch.jpeg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(3, 27, 48, 0.7); /* Semi-transparent overlay */
    z-index: 1;
  }

  @media (max-width: 1020px) {
    height: auto;
    padding: 20px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 1020px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 1020px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  background-color: transparent; /* Transparent by default */
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #FF0069;
    border-color: #FF0069;
  }

  @media (max-width: 1020px) {
    font-size: 0.9rem;
  }
`;
