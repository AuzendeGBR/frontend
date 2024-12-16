import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const getSchedulingsByUser = async (userId: string) => {
  const response = await axios.get(
    `${baseUrl}/schedules/users/${userId}`,
    config
  );
  return response.data;
};

const createScheduling = async (data: {
  usuarioId: number;
  servicoId: number;
  data_hora: string;
}) => {
  const response = await axios.post(`${baseUrl}/schedules/`, data, config);
  return response.data;
};

export default {
  getSchedulingsByUser,
  createScheduling,
  setToken,
};
