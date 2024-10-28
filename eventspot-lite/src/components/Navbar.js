
import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  margin: 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  margin-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem; 
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; 
  }

  div {
    height: 3px;
    width: 25px;
    background: white;
    margin: 3px 0;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
    flex-direction: column;
    position: absolute;
    top: 60px; 
    left: 0;
    right: 0;
    background: #333;
    padding: 1rem;
  }
`;

const Navbar = ({ searchTerm, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo>EventSpot Lite</Logo>
      <MenuIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <Menu isOpen={isMenuOpen}>
        <SearchInput
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;