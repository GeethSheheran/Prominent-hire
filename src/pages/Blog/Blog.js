import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Blog/Hero';
import BlogCard from '../../components/Blog/BlogCard';
import Service from '../../components/Home/Service';
import Footer from '../../components/Home/Footer';

const Blogs = () => {
  const blogCategories = [
    "Career Advice", "Recruitment Strategies", "Industry Trends", 
    "Workplace Culture", "Interview Tips", "Employee Retention", 
    "Recruiting and Hiring", "Tech", "Job Search", "The Workplace", 
    "Leadership", "DEIB", "Healthcare", "Finance", "Culture", 
    "Insight Global Gets Local", "Business", "Chips and Semiconductors", 
    "Legal", "Creative", "Energy", "Manufacturing", "Thought Leadership", 
    "Industry Insights"
  ];

  return (
    <div>
      <Hero />
      <BlogContainer>
        {blogCategories.map((category, index) => (
          <BlogCard key={index} title={category} />
        ))}
      </BlogContainer>
      <Service />
      <Footer />
    </div>
  );
};

export default Blogs;

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
