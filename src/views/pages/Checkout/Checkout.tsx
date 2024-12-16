import { useState } from 'react';
import { useCart } from '../../../app/hooks/useCart';
import useNavigation from '../../../app/libs/navigate';
import Payment from '../../components/Payment/Payment';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const { cart, removeFromCart } = useCart();
  const navigate = useNavigation();

  const handleBackToShop = () => {
    navigate('/conta');
  };

  const handlePaymentToggle = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <h2>Detalhes do pagamento</h2>
        {cart.length === 0 ? (
          <p>O carrinho está vazio</p>
        ) : (
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div>
                  <p>{item.nome}</p>
                  <p>{`Preço: R$ ${Number(item.preco).toFixed(2)}`}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.buttonsContainer}>
        {cart.length > 0 && (
          <button
            className={styles.checkoutButton}
            onClick={handlePaymentToggle}
          >
            Finalizar Compra
          </button>
        )}
        <button className={styles.closeButton} onClick={handleBackToShop}>
          Voltar
        </button>
      </div>
      {isCartOpen && <Payment onClose={handlePaymentToggle} />}
    </div>
  );
};

export default Checkout;
