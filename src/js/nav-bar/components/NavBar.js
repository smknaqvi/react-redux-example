import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StyledLink = styled(Link)`
  padding: 10px 20px 10px 0px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/table">Table</StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
