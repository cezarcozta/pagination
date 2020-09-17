import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Nav = styled.ul`
  list-style: none;
  margin-bottom: -500px;
`;

export const NavItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  background: #C4C4C4;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 6px;
`;