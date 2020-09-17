import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  httpsAgent: true,
});

export default api;