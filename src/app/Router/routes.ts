export const clientRoutes = {
  clientIndex: '/',
  checkoutCart: '/checkout',
  schedulingServices: '/servicos-agendados/',
};

export const adminRoutes = {
  adminIndex: '/',
  services: '/servicos',
  createService: '/servicos',
  serviceById: '/servicos/:serviceId',
  editService: '/editar-servico/:serviceId',
  removeService: '/remover-servico/:serviceId',
  users: '/usuarios',
  userById: '/usuarios/:userId',
  editUser: '/editar-usuario/:userId',
  removeUser: '/remover-usuario/:userId',
  schedules: '/agendamentos',
  scheduleById: '/agendamentos/:scheduleId',
  editSchedule: '/editar-agendamento/:scheduleId',
  removeSchedule: '/remover-agendamento/:scheduleId',
};

export const defaultRoutes = {
  account: '/conta/*',
  home: '/home',
  login: '/login',
  register: '/cadastro',
  notfound: '*',
};
