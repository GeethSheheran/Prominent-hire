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
        <LogoLink to="/" onClick={closeMenu}>
          <Logo>
            <LogoImage src={LogoImageSrc} alt="Logo" />
          </Logo>
        </LogoLink>
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
            <NavButton to="/find-job" isActive={location.pathname === '/find-job'} onClick={closeMenu}>Find a Job</NavButton>
            <NavButton1 to="/hire-talent" isActive={location.pathname === '/hire-talent'} onClick={closeMenu}>Hire Talent</NavButton1>
          </NavButtonsMobile>
        </NavMenu>
      </LeftSection>
      <NavButtonsDesktop>
        <NavButton to="/find-job" isActive={location.pathname === '/find-job'}>Find a Job</NavButton>
        <NavButton1 to="/hire-talent" isActive={location.pathname === '/hire-talent'}>Hire Talent</NavButton1>
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
  z-index: 1000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 5%; /* Percentage-based margin */
  text-decoration: none;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  @media (max-width: 1124px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: #031B30;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  color: white;
  cursor: pointer;

  @media (max-width: 1124px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#FFD700' : 'white')};
  transition: color 0.3s ease;

  &:hover,
  &:focus,
  ${({ isActive }) =>
    isActive &&
    `
    color: #FFD700;
  `}
`;

const NavButtonsDesktop = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12%; /* Percentage-based margin */

  @media (max-width: 1124px) {
    display: none;
  }
`;

const NavButtonsMobile = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1124px) {
    display: flex;
    margin-top: 20px;
  }
`;

const NavButton = styled(Link)`
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#031B30')};
  color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: black;
  }

  @media (max-width: 1124px) {
    margin: 10px 0;
  }
`;

const NavButton1 = styled(Link)`
  background-color: ${({ isActive }) => (isActive ? '#FF0069' : '#FFD700')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border: none;
  border-radius: 20px;
  padding: 12px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  font-size: 0.8rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  margin-right: 0; /* Percentage-based margin */

  &:hover {
    background-color: #FF0069;
    color: white;
  }

  @media (max-width: 1124px) {
    margin: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  margin-right: 10%; /* Percentage-based margin */

  @media (max-width: 1124px) {
    display: block;
  }
`;

const CloseButton = styled.div`
  display: none; /* Hide initially */
  position: absolute;
  top: 20px;
  right: 5%; /* Percentage-based margin */
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }

  @media (max-width: 1124px) {
    display: block; /* Show when in mobile view */
  }
`;
