import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import UserImage from './video.png'; // Ensure this path is correct

const Feedback = () => {
  const testimonials = [
    {
      name: 'Alexandra Woodford',
      rating: '★★★★★',
      description: 'Learn how upskilling, reskilling, and preskilling can help healthcare institutions retain and enhance their workforce.',
      image: UserImage
    },
    {
      name: 'John Doe',
      rating: '★★★★★',
      description: 'Upskilling and reskilling have significantly improved our operational efficiency.',
      image: UserImage
    },
    {
      name: 'Jane Smith',
      rating: '★★★★★',
      description: 'Preskilling has prepared our workforce for future challenges.',
      image: UserImage
    },
    {
      name: 'Michael Johnson',
      rating: '★★★★★',
      description: 'Our team’s skills have been greatly enhanced through these programs.',
      image: UserImage
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const next = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
  };

  const prev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - (isMobile ? 1 : 2) + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + (isMobile ? 1 : 2));

  return (
    <FeedbackContainer>
      <Content>
        <Title>Testimonials</Title>
        <TestimonialsContainer>
          <Arrow onClick={prev}>&lt;</Arrow>
          <TestimonialWrapper direction={direction}>
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <UserInfo>
                  <UserImageStyled src={testimonial.image} alt={testimonial.name} />
                  <UserName>{testimonial.name}</UserName>
                  <UserRating>{testimonial.rating}</UserRating>
                </UserInfo>
                <UserDescription>{testimonial.description}</UserDescription>
              </TestimonialCard>
            ))}
          </TestimonialWrapper>
          <Arrow onClick={next}>&gt;</Arrow>
        </TestimonialsContainer>
      </Content>
    </FeedbackContainer>
  );
};

export default Feedback;

const swipeLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const swipeRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Full viewport height to center vertically */
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #031b30;
  margin-bottom: 40px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centering the container horizontally */
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  ${({ direction }) => css`
    ${direction === 'next' && css`
      animation: ${swipeLeft} 0.3s forwards;
    `}
    ${direction === 'prev' && css`
      animation: ${swipeRight} 0.3s forwards;
    `}
  `}
`;

const TestimonialCard = styled.div`
  background-color: #F3F3F3;
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px; /* Fixed height for all cards */

  @media (max-width: 768px) {
    width: 80%;
    height: auto; /* Adjust height for mobile */
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserImageStyled = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const UserRating = styled.div`
  color: #FF0069;
  margin-left: auto;
`;

const UserDescription = styled.p`
  font-size: 1rem;
  color: #666;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  font-size: 2rem;
  color: #031b30;
  cursor: pointer;
  user-select: none;
  margin: 0 10px;
`;
