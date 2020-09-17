import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Nav, NavItem } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Nav>
        <NavItem>
          <Link to="/people">Characters</Link>
        </NavItem>

        <NavItem>
          <Link to="/films">Films</Link>
        </NavItem>

        <NavItem>
          <Link to="/starships">Starships</Link>
        </NavItem>

        <NavItem>
          <Link to="/vehicles">Vehicles</Link>
        </NavItem>

        <NavItem>
          <Link to="/species">Species</Link>
        </NavItem>

        <NavItem>
          <Link to="/">Planets</Link>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Navigation;