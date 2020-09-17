import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #313131;
`;

export const Nav = styled.ul`
  list-style: none;
  margin-right: 100px;
  text-decoration: none;
`;

export const NavItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  background: #C4C4C4;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 6px;


  a {
    text-decoration: none;
    transition: 0.2s;
    color: #000;
  }
  
  :hover {
    opacity: 0.8;
  }
`;