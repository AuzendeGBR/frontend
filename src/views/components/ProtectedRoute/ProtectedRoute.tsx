import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate('/home');
    }
  }, [token]);

  if (!user.email) {
    return <h1>Não possui acesso</h1>;
  }

  return children;
};

export default ProtectedRoute;
