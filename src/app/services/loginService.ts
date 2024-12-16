import axios from 'axios';

const baseUrl = 'http://localhost:3000/login';

const login = async (credentials: { email: string; senha: string }) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export default { login };
