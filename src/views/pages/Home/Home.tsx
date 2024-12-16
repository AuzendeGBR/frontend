import banner from '../../assets/home_banner.png';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section
      className={styles.heroImg}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
      }}
    >
      <div className={styles.heroTxt}>
        <h1>Seja bem-vindo</h1>
        <p>
          Seja bem-vindo ao nosso site de agendamento de serviços. Aqui, voce pode
          agendar seus serviços de forma simples e eficiente.
        </p>
      </div>
    </section>
  );
};

export default Home;
