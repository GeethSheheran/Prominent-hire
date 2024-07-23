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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Navbar>
      <LeftSection>
        <Logo>
          <LogoImage src={LogoImageSrc} alt="Logo" />
        </Logo>
        <NavMenu isOpen={isOpen}>
          <CloseButton onClick={closeMenu}><FaTimes /></CloseButton>
          <NavItem>
            <StyledLink to="/" isActive={location.pathname === '/'} onClick={closeMenu}>
              Home
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/industries" isActive={location.pathname === '/industries'} onClick={closeMenu}>
              Industries
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/services" isActive={location.pathname === '/services'} onClick={closeMenu}>
              Services
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/blogs" isActive={location.pathname === '/blogs'} onClick={closeMenu}>
              Blogs
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about" isActive={location.pathname === '/about'} onClick={closeMenu}>
              About Us
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact" isActive={location.pathname === '/contact'} onClick={closeMenu}>
              Contact Us
            </StyledLink>
          </NavItem>
          <NavButtonsMobile>
            <NavButton>Find a Job</NavButton>
            <NavButton1>Hire Talent</NavButton1>
          </NavButtonsMobile>
        </NavMenu>
      </LeftSection>
      <NavButtonsDesktop>
        <NavButton>Find a Job</NavButton>
        <NavButton1>Hire Talent</NavButton1>
      </NavButtonsDesktop>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
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
  padding: 15px 5%;
  z-index: 1000; /* Ensure the navbar is on top */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-left: 10px;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #031B30;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999; /* Ensure the menu is above other content */
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  color: white;
  cursor: pointer;

  @media (max-width: 1024px) {
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

const NavButtonsDesktop = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavButtonsMobile = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    margin-top: 20px;
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
  margin-top: 10px;

  &:hover {
    background-color: #fff;
    color: black;
  }

  @media (max-width: 1024px) {
    margin: 10px 0;
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
  margin-top: 10px;

  &:hover {
    background-color: #FF0069;
    color: white;
  }

  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  margin-right: 80px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;
