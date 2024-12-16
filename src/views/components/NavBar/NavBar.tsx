import useNavigation from '../../../app/libs/navigate';
import logo from '../../assets/senac_logo.svg';
import styles from './NavBar.module.css';

const Navbar = () => {
  const navigate = useNavigation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate('/home')}>
        <img
          className={styles.logo}
          src={logo}
          alt='Logo da instituição senac'
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button
          type='button'
          className={styles.button}
          onClick={() => navigate('/login')}
        >
          Entrar
        </button>
        <button
          type='button'
          className={styles.button}
          onClick={() => navigate('/cadastro')}
        >
          Cadastre-se
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
