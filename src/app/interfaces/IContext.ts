import { ILoggedUSerData } from './ILoggedUSerData';

export interface IContext extends ILoggedUSerData {
  handleLogin: (email: string, senha: string) => Promise<void>;
  handleLogout: () => void;
}
