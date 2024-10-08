import React from 'react';
import styled from 'styled-components';
import vectorIcon from './Vector.png'; 

const Work = () => {
  return (
    <WorkContainer>
      <IconContainer>
        <Icon src={vectorIcon} alt="work Icon" /> 
      </IconContainer>
      <Content>
        <Title>These are the essence of our company. They define us, guide us, and influence every aspect of our work.</Title>
        <List>
          <ListItem>Rest assured, we're here for you</ListItem>
          <ListItem>We strive for excellence in all we do</ListItem>
          <ListItem>Driven by passion, we innovate for you</ListItem>
          <ListItem>We treat everyone with respect and care</ListItem>
        </List>
      </Content>
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #00283C;
  padding-left: 150px;
  padding-right: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
    height: auto;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20rem; // Adjust size as needed
  color: rgba(255, 255, 255, 0.1); // Semi-transparent white color
  margin-right: 150px; // Space between icons and text

  @media (max-width: 1020px) {
    font-size: 10rem;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 720px) {
    font-size: 8rem;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 720px) {
    width: 60%;
  }
`;

const Content = styled.div`
  max-width: 800px;
  color: #ffffff;
  text-align: left;

  @media (max-width: 1020px) {
    margin-left: 5%;
  }

  @media (max-width: 720px) {
    text-align: center;
    margin-left: 0;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;

  @media (max-width: 1020px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: 200;
  margin-bottom: 10px;

  @media (max-width: 1020px) {
    font-size: 1rem;
  }
`;
