import React from 'react';
import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, id }) => {
  return (
    <StyledLink to={`/blogtitles/${id}`}>
      <CardContainer>
        <FolderIcon />
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </StyledLink>
  );
};

export default BlogCard;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
  width: 90%;

  &:hover {
    transform: translateY(-5px);
    background-color: #031b30;

    & > h3 {
      color: white;
    }

    & > svg {
      color: white;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const FolderIcon = styled(FaFolder)`
  font-size: 24px;
  color: #031b30;
  margin-right: 10px;
  transition: color 0.2s;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #031b30;
  margin: 0;
  transition: color 0.2s;
`;
