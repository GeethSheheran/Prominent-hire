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
      shortDescription: 'Learn how upskilling, reskilling, and preskilling can help healthcare institutions retain and enhance their workforce.',
      longDescription: 'In this article, we explore the importance of upskilling, reskilling, and preskilling in the healthcare sector. With the rapid advancements in medical technology and the growing demand for healthcare services, it is crucial for healthcare institutions to invest in the continuous development of their workforce. Upskilling involves providing current employees with new skills and knowledge to improve their performance and adapt to changing job requirements. Reskilling focuses on training employees to take on different roles within the organization, addressing skill gaps and ensuring a more versatile workforce. Preskilling, on the other hand, is the process of preparing potential employees with the necessary skills before they join the organization. By implementing these strategies, healthcare institutions can not only enhance the quality of patient care but also improve employee satisfaction and retention.'
    },
    {
      image: 'img2.png',
      title: '3 Ways To Boost Employee Retention',
      author: {
        name: 'Alexandra Woodford',
        image: './user.png',
      },
      shortDescription: 'Do you need to solve your IT attrition problem? Learn why attrition in tech is an issue, plus get practical solutions to solve for it.',
      longDescription: 'Employee retention is a significant challenge for many organizations, particularly in the tech industry. High attrition rates can lead to increased recruitment costs, loss of institutional knowledge, and decreased morale among remaining employees. In this article, we discuss three effective strategies to boost employee retention. Firstly, fostering a positive work culture that values diversity, inclusion, and collaboration can significantly enhance employee satisfaction. Secondly, offering competitive compensation packages, including benefits such as health insurance, retirement plans, and bonuses, can help retain top talent. Lastly, providing opportunities for professional growth and development, such as training programs, mentorship, and career advancement paths, can encourage employees to stay with the organization long-term.'
    },
    {
      image: 'img3.png',
      title: 'How to Attract Talent in Boise',
      author: {
        name: 'Alexandra Woodford',
        image: './user.png',
      },
      shortDescription: 'Learn how upskilling, reskilling, and preskilling can help healthcare institutions retain and enhance their workforce.',
      longDescription: 'Boise, Idaho, has become an attractive destination for tech companies and professionals in recent years. However, attracting and retaining top talent in this competitive market requires a strategic approach. In this article, we explore several methods to attract talent to Boise. Firstly, highlighting the city\'s unique advantages, such as a high quality of life, low cost of living, and vibrant community, can attract candidates. Secondly, partnering with local educational institutions to create talent pipelines can ensure a steady supply of skilled workers. Lastly, offering competitive salaries and benefits, along with opportunities for career growth, can make Boise an attractive place to work for top talent.'
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
            shortDescription={blog.shortDescription}
            longDescription={blog.longDescription}
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
