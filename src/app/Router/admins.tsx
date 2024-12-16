import { Route, Routes } from 'react-router-dom';

import Admin from '../../views/components/Admin/Admin';

import { adminRoutes } from './routes';

const AdminRoutes = () => (
  <Routes>
    <Route path={adminRoutes.adminIndex} element={<Admin />} />
    <Route path={adminRoutes.services} element={<Admin />} />
    <Route path={adminRoutes.createService} element={<Admin />} />
    <Route path={adminRoutes.serviceById} element={<Admin />} />
    <Route path={adminRoutes.editService} element={<Admin />} />
    <Route path={adminRoutes.removeService} element={<Admin />} />
    <Route path={adminRoutes.users} element={<Admin />} />
    <Route path={adminRoutes.userById} element={<Admin />} />
    <Route path={adminRoutes.editUser} element={<Admin />} />
    <Route path={adminRoutes.removeUser} element={<Admin />} />
    <Route path={adminRoutes.schedules} element={<Admin />} />
    <Route path={adminRoutes.scheduleById} element={<Admin />} />
    <Route path={adminRoutes.editSchedule} element={<Admin />} />
    <Route path={adminRoutes.removeSchedule} element={<Admin />} />
  </Routes>
);

export default AdminRoutes;
