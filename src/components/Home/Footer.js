import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from './logo.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <LogoLink href="/">
            <LogoImage src={Logo} alt="Prominent Hire Logo" />
          </LogoLink>
        </LogoContainer>
        <ContactInformation>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactLink href="tel:+6125586221">+(612) 558 6221</ContactLink>
          <ContactLink href="mailto:contact@prominenthire.com">contact@prominenthire.com</ContactLink>
          <ContactLink href="https://www.google.com/maps/place/Minneapolis,+MN" target="_blank" rel="noopener noreferrer">
            Prominent Hire, Minneapolis, MN
          </ContactLink>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialLink>
          </SocialIcons>
        </ContactInformation>
        <Pages>
          <PagesTitle>Pages</PagesTitle>
          <PageLink href="/">Home</PageLink>
          <PageLink href="/industries">Industries</PageLink>
          <PageLink href="/services">Services</PageLink>
          <PageLink href="/blogs">Blogs</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/contact">Contact</PageLink>
        </Pages>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 150px;
  margin: 30px 50px;
`;

const ContactInformation = styled.div`
  text-align: left;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: white;
  display: block;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #FF0069;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Pages = styled.div`
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const PagesTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const PageLink = styled.a`
  color: white;
  display: block;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
