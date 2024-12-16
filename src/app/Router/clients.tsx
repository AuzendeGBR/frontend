import { Route, Routes } from 'react-router-dom';

import Client from '../../views/components/Client/Client';

import Checkout from '../../views/pages/Checkout/Checkout';
import UserSchedules from '../../views/pages/UserSchedules/UserSchedules';
import { clientRoutes } from './routes';

const ClientRoutes = () => (
  <Routes>
    <Route path={clientRoutes.clientIndex} element={<Client />} />
    <Route path={clientRoutes.checkoutCart} element={<Checkout />} />
    <Route path={clientRoutes.schedulingServices} element={<UserSchedules />} />
  </Routes>
);

export default ClientRoutes;
