import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthProvider';
import { defaultRoutes } from './routes';

import NotFound from '../../views/components/NotFound/NotFound';
import ProtectedRoute from '../../views/components/ProtectedRoute/ProtectedRoute';
import Home from '../../views/pages/Home/Home';
import Login from '../../views/pages/Login/Login';

import LoggedNavBar from '../../views/components/LoggedNavBar/LoggedNavBar';
import Navbar from '../../views/components/NavBar/NavBar';
import Register from '../../views/pages/Register/Register';
import { CartProvider } from '../contexts/CartProvider';
import LoggedUser from './LoggedUser';

const ShowNavbar = () => {
  const location = useLocation();

  const isLoggedInRoute = location.pathname.startsWith('/conta');

  return isLoggedInRoute ? <LoggedNavBar /> : <Navbar />;
};

const Router = () => (
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <>
          <ShowNavbar />
          <Routes>
            <Route
              path={defaultRoutes.account}
              element={
                <ProtectedRoute>
                  <LoggedUser />
                </ProtectedRoute>
              }
            />
            <Route path={defaultRoutes.home} element={<Home />} />
            <Route path={defaultRoutes.login} element={<Login />} />
            <Route path={defaultRoutes.register} element={<Register />} />
            <Route path={defaultRoutes.notfound} element={<NotFound />} />
          </Routes>
        </>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default Router;
