import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import LogoImageSrc from './mainLogo.png'; // Ensure this path is correct

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Logo>
        <LogoImage src={LogoImageSrc} alt="Logo" />
      </Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <StyledLink to="/" isActive={location.pathname === '/'}>
            Home
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/industries" isActive={location.pathname === '/industries'}>
            Industries
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/services" isActive={location.pathname === '/services'}>
            Services
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/blogs" isActive={location.pathname === '/blogs'}>
            Blogs
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about-us" isActive={location.pathname === '/about-us'}>
            About Us
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact-us" isActive={location.pathname === '/contact-us'}>
            Contact Us
          </StyledLink>
        </NavItem>
      </NavMenu>
      <NavButtons>
        <NavButton>Find a Job</NavButton>
        <NavButton1>Hire Talent</NavButton1>
      </NavButtons>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #031B30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1000; /* Ensure the navbar is on top */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  margin-left: 50px;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #031B30;
    flex-direction: column;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100vh)')};
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#FFD700' : 'white')};
  &:hover {
    color: #FFD700;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background-color: #031B30;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const NavButton1 = styled.button`
  background-color: #FFD700;
  color: black;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #FF0069;
    color: white;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
    margin-right: 50px;
  }
`;
