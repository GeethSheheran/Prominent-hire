// src/pages/Blogs/Blogs.js
import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Blog/Hero';
import BlogCard from '../../components/Blog/BlogCard';
import Service from '../../components/Home/Service';
import Footer from '../../components/Home/Footer';

const Blogs = () => {
  const blogs = [
    {
      image: 'img1.png',
      title: 'Upskilling, Reskilling, And Preskilling In Healthcare',
      author: {
        name: 'Alexandra Woodford',
        image: './user.png',
      },
      description: 'Learn how upskilling, reskilling, and preskilling can help healthcare institutions retain and enhance their workforce.'
    },
    {
      image: 'img2.png',
      title: '3 Ways To Boost Employee Retention',
      author: {
        name: 'Alexandra Woodford',
        image: './user.png',
      },
      description: 'Do you need to solve your IT attrition problem? Learn why attrition in tech is an issue, plus get practical solutions to solve for it.'
    },
    {
      image: 'img3.png',
      title: 'How to Attract Talent in Boise',
      author: {
        name: 'Alexandra Woodford',
        image: './user.png',
      },
      description: 'Learn how upskilling, reskilling, and preskilling can help healthcare institutions retain and enhance their workforce.'
    }
  ];

  return (
    <div>
      <Hero />
      <BlogContainer>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            description={blog.description}
          />
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
