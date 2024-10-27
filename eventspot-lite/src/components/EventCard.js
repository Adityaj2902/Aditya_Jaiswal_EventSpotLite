import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
`;

const Navbar = ({ searchTerm, onSearchChange }) => {
  return (
    <NavbarContainer>
      <h1>EventSpot Lite</h1>
      <SearchInput
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </NavbarContainer>
  );
};

export default Navbar;