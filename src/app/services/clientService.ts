import axios from 'axios';
import { IRegisterForm } from '../interfaces/IRegisterForm';
import { IUser } from '../interfaces/IUser';

const baseUrl = 'http://localhost:3000';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const create = async (clientData: IRegisterForm) => {
  const request = await axios.post(`${baseUrl}/users/`, clientData);
  return request.data;
};

const getById = async (id: string) => {
  const request = await axios.get(`${baseUrl}/users/${id}`, config);
  return request.data;
};

const update = async (id: string, newObject: IUser) => {
  const request = await axios.put(`${baseUrl}/users/${id}`, newObject, config);
  return request.data;
};

export default {
  create,
  update,
  getById,
  setToken,
};
