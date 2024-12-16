import { createContext, useEffect, useMemo, useState } from 'react';

import useNavigation from '../libs/navigate';

import { IAuthProvider } from '../interfaces/IAuthProvider';
import { IContext } from '../interfaces/IContext';
import { ILoggedUSerData } from '../interfaces/ILoggedUSerData';
import {
  addTokenByUserType,
  getUserLocalStorage,
  loginRequest,
  removeTokenByUserType,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './utils';

export const AuthContext = createContext<IContext>({
  user: {
    email: '',
    senha: '',
    tipo: '',
    id: '',
  },
  token: '',
  handleLogin: async () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [loggedUserData, setLoggedUserData] = useState<ILoggedUSerData>({
    user: {
      email: '',
      senha: '',
      tipo: '',
      id: '',
    },
    token: '',
  });
  const navigate = useNavigation();

  useEffect(() => {
    const userLocalStorage = getUserLocalStorage();

    if (userLocalStorage) {
      setLoggedUserData(userLocalStorage);
      addTokenByUserType(userLocalStorage.user.tipo, userLocalStorage.token);

      navigate('/conta');
    } else {
      navigate('/home');
    }
  }, []);

  async function handleLogin(email: string, password: string) {
    const response = await loginRequest(email, password);

    if (response && response.user && response.token) {
      setLoggedUserData(response);
      addTokenByUserType(response.user.tipo, response.token);
      setUserLocalStorage(response);
      navigate('/conta');
    } else {
      console.error('Failed to log in: Invalid response');
    }
  }

  function handleLogout() {
    setLoggedUserData({
      user: {
        email: '',
        senha: '',
        tipo: '',
        id: '',
      },
      token: '',
    });
    if (loggedUserData?.user.tipo)
      removeTokenByUserType(loggedUserData.user.tipo);
    removeUserLocalStorage();
    navigate('/login');
  }

  const contextValue = useMemo(
    () => ({
      ...loggedUserData,
      handleLogin,
      handleLogout,
    }),
    [loggedUserData]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
