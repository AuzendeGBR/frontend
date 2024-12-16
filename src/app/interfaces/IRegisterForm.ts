export interface IRegisterForm {
  nome_completo: string;
  sexo: 'MASCULINO' | 'FEMININO';
  cpf: string;
  celular: string;
  data_nascimento: string;
  email: string;
  senha: string;
  tipo: 'CLIENTE' | 'ADMIN' | 'FUNCIONARIO';
}
