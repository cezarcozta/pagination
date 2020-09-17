import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Content, Pagination, Nav, Item, Prev, Next } from './styles';

interface IData {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  cargo_capacity: string;
  consumables: string;
}

const Starships: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadTable() {
      const response = await api.get(`/starships?page=${currentPage}`);

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
      <h3>Starships</h3>
      <Content>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>StarShip Class</th>
            <th>Manufacturer</th>
            <th>Cost</th>
            <th>Length</th>
            <th>Crew</th>
            <th>Passengers</th>
            <th>Atmosphere Max Speed</th>
            <th>Hyperdriver</th>
            <th>Capacity</th>
            <th>Consumables</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.name}>
              <td>{d.name}</td>
              <td>{d.model}</td>
              <td>{d.starship_class}</td>
              <td>{d.manufacturer}</td>
              <td>{d.cost_in_credits}</td>
              <td>{d.length}</td>
              <td>{d.crew}</td>
              <td>{d.passengers}</td>
              <td>{d.max_atmosphering_speed}</td>
              <td>{d.hyperdrive_rating}</td>
              <td>{d.cargo_capacity}</td>
              <td>{d.consumables}</td>
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

export default Starships;