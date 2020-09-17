import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background: #313131;
  color: #313131;
  font-size: 18px;

  h3{
    font-size: 22px;
    font-weight: bold;
    color: #D3D3D3;
  }
`;

export const Content = styled.table`
  border-collapse: collapse;
  min-width: 500px;
  
  th {
    padding: 10px;
    text-align: center;

    background: #D3D3D3;
  }

  tbody {
    color: #c4c4c4;
    width: 100%;

    tr{
      text-align: center;
      border-bottom: 1px solid #c4c4c4;

      td{
        padding: 1px;
        font-size: 12px;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 500px;
  padding: 10px;

  align-items: center;
  justify-content: space-between;

  background: #D3D3D3;

  font-weight: bold;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  margin: 0 10px;

  cursor: pointer;
`;


export const Prev = styled.button``;

export const Next = styled.button``;