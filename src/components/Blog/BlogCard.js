import React from 'react';
import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';

const BlogCard = ({ title }) => {
  return (
    <CardContainer>
      <FolderIcon />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default BlogCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
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
  }
`;

const FolderIcon = styled(FaFolder)`
  font-size: 24px;
  color: #031b30;
  margin-right: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #031b30;
  margin: 0;
`;
