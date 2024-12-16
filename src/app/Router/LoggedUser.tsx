import { useAuth } from '../hooks/useAuth';
import AdminRoutes from './admins';
import ClientRoutes from './clients';

const Profile = () => {
  const { user } = useAuth();
  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {user.tipo === 'CLIENTE' && <ClientRoutes />}
      {user.tipo === 'ADMIN' && <AdminRoutes />}
    </section>
  );
};

export default Profile;
