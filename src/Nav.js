import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoImageSrc from './mainLogo.png'; // Ensure this path is correct

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavItem>Home</NavItem>
        <NavItem>Industries</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Blogs</NavItem>
        <NavItem>About us</NavItem>
        <NavItem>Contact us</NavItem>
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
  background-color: #031B30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
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

  &:hover {
    color: #FFD700;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;

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
  }
`;

const LanguageSelector = styled.div`
  margin-right: 20px;
  color: white;
  display: flex;
  align-items: center;
`;

const Phone = styled.div`
  color: white;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
