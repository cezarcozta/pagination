import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Content, Pagination, Nav, Item, Prev, Next } from './styles';

interface IData {
  name: string;
  diameter: string;
  climate: string;
  population: string;
  gravity: string;
}

const Table: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadTable() {
      const response = await api.get(`/planets?page=${currentPage}`);

      setTotal(response.data.count);

      const totalPages = Math.ceil(total / response.data.results.length);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);

      setData(response.data.results);
    }

    loadTable();
  }, [currentPage, setPages, total]);


  return (
    <Container>
      <h3>Table of STAR WARS Planets</h3>

      <Content>
        <thead>
          <tr>
            <th>Name</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Population</th>
            <th>Gravity</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.name}>
              <td>{d.name}</td>
              <td>{d.diameter}</td>
              <td>{d.climate}</td>
              <td>{d.population}</td>
              <td>{d.gravity}</td>
            </tr>
          ))}
        </tbody>
      </Content>

      <Pagination>
        <div>Total: {total}</div>
        <Nav>
          {currentPage > 1 && (
            <Prev onClick={() => setCurrentPage(currentPage - 1)}>
              Prev
            </Prev>
          )}
          {pages && pages.map(page => (
            <Item
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Item>
          ))}
          {currentPage < pages.length && (
            <Next onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Next>
          )}
        </Nav>
      </Pagination>
    </Container >
  );
};

export default Table;