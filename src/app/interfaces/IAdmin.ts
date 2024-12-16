type tipo = 'CLIENTE' | 'ADMIN';

export interface IAdmin {
  _id: string;
  nome_completo: string;
  sexo: string;
  username: string;
  senha?: string;
  data_nascimento: string;
  email: string;
  celular: string;
  tipo: tipo;
}
