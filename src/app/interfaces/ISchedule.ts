import { IService } from './IService';
import { IUser } from './IUser';

export interface ISchedule {
  id: number;
  data_hora: string;
  usuario: IUser;
  servico: IService;
}
