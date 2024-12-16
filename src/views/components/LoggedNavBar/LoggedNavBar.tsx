import { useState } from 'react';

import { useAuth } from '../../../app/hooks/useAuth';
import useNavigation from '../../../app/libs/navigate';

import logo from '../../assets/senac_logo.svg';

import CartModal from '../CartModal/CartModal';
import styles from './LoggedNavBar.module.css';

const LoggedNavBar = () => {
  const navigate = useNavigation();
  const auth = useAuth();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate('/conta')}>
        <img
          className={styles.logo}
          src={logo}
          alt='Logo da instituição senac'
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          type='button'
          className={styles.button}
          onClick={() => navigate('/conta/servicos-agendados')}
        >
          Agendamentos
        </button>
        <button
          type='button'
          className={styles.button}
          onClick={handleCartToggle}
        >
          Carrinho
        </button>
        <button
          type='button'
          className={styles.button}
          onClick={() => auth.handleLogout()}
        >
          Sair
        </button>
      </div>
      {isCartOpen && <CartModal onClose={handleCartToggle} />}
    </nav>
  );
};

export default LoggedNavBar;
