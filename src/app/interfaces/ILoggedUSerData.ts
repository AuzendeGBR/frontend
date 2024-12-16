export interface ILoggedUSerData {
  user: {
    email?: string;
    senha?: string;
    tipo?: string;
    id?: string;
  };
  token?: string;
}
