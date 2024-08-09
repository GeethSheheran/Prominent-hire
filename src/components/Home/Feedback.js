import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialList = [
  {
    author: {
      fullName: "David Nguyen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
      designation: "Marketing Specialist",
    },
    rating: 5.0,
    description:
      "My experience with Prominent Hire was outstanding. They went above and beyond to ensure I was well-prepared and confident for every interview. Their personalized approach and genuine care for my success made all the difference. I found a job that I love and that aligns perfectly with my career goals.",
  },
  {
    author: {
      fullName: "Alex Johnson",
      picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
      designation: "HR Manager",
    },
    rating: 4.8,
    description:
      "Partnering with Prominent Hire was a game-changer for our hiring process. Their team truly understood our needs and delivered top-tier candidates that perfectly matched our company culture. Their professionalism and dedication made all the difference. We couldn't be happier with the results.",
  },
  {
    author: {
      fullName: "Jessica Brown",
      picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
      designation: "Project Manager",
    },
    rating: 4.5,
    description:
      "I was impressed by the level of dedication and professionalism at Prominent Hire. From our initial conversation to the moment I accepted the job offer, their team was supportive and attentive. They provided invaluable advice and resources that helped me stand out to potential employers. I couldn't be happier with the outcome",
  },
  // Add more testimonials as needed
];

const Section = styled.section`
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  padding: 60px 0;
  margin: 0 15vw;
  text-align: center;

  @media (max-width: 600px) {
    margin: 0 8vw;
    padding: 40px 0;
  }

  &.gray {
    background-color: rgb(246, 246, 246);
  }

  &.dark-gray {
    background-color: rgb(30, 39, 53);
    color: #ffffff;
  }

  &.dark {
    background-color: rgb(11, 23, 39);
    color: #ffffff;
  }
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  color: #212529;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 45px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const SubHeading = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #212529;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const TestimonialItemWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(159, 190, 218, 0.37);
  transition: transform 0.25s ease-in-out;
  padding: 20px;
  margin: 20px;
  height: 220px;
  font-size:12px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    height: 270px;
    margin: 10px;
    padding: 15px;
  }
`;

const TestimonialContent = styled.div`
  margin-top: 15px;
  color: #212529;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 1.25rem;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  p {
    margin: 0;
    font-size: 0.875rem;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  border: 1px solid #dee2e6;
  width: 47px;
  height: 47px;
  margin-right: 10px;
`;

const RatingWrapper = styled.div`
    width: 40%;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 40%;
  }

  .fa-star:not(.active) {
    color: #031B30;
  }

  .fa-star.active {
    color: #FF0069;
  }
`;

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <RatingWrapper className={className} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />
          );
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="me-1" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </RatingWrapper>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <TestimonialItemWrapper>
    <TopSection>
      <AuthorInfo>
        <AuthorImage
          src={testimonial.author.picture}
          alt={testimonial.author.fullName}
        />
        <div>
          <h4>{testimonial.author.fullName}</h4>
          <p><i>{testimonial.author.designation}</i></p>
        </div>
      </AuthorInfo>
      <Rating rating={testimonial.rating} showLabel={false} />
    </TopSection>
    <TestimonialContent>
      <p className="opacity-50 mb-4">{testimonial.description}</p>
    </TestimonialContent>
  </TestimonialItemWrapper>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Heading>Testimonials</Heading>
      <SubHeading>
        {/* It’s easier to reach your savings goals when you have the right savings
        account. Take a look and find the right one for you! */}
      </SubHeading>
      <Slider {...settings}>
        {testimonialList.map((testimonial, i) => (
          <TestimonialItem key={i} testimonial={testimonial} />
        ))}
      </Slider>
    </Section>
  );
};

export default Feedback;
