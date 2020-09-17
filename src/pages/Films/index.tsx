import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Content, Pagination, Nav, Item, Prev, Next } from './styles';

interface IData {
  title: string;
  episode: string;
  director: string;
  producer: string;
  release_date: string;
}

const Films: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadTable() {
      const response = await api.get(`/films?page=${currentPage}`);

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
      <h3>Films</h3>

      <Content>
        <thead>
          <tr>
            <th>Title</th>
            <th>Episode</th>
            <th>Director</th>
            <th>Productor</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.title}>
              <td>{d.title}</td>
              <td>{d.episode}</td>
              <td>{d.director}</td>
              <td>{d.producer}</td>
              <td>{d.release_date}</td>
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

export default Films;