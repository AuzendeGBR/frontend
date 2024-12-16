import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/services/`, config);
  return request.data;
};

const getById = async (id: string) => {
  const request = await axios.get(`${baseUrl}/services/${id}`, config);
  return request.data;
};

export default {
  getAll,
  getById,
  setToken,
};
