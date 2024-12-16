import { useCart } from '../../../app/hooks/useCart';
import useNavigation from '../../../app/libs/navigate';
import styles from './CartModal.module.css';

const CartModal = ({ onClose }: { onClose: () => void }) => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigation();

  const handleCheckout = () => {
    navigate('/conta/checkout');
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Carrinho</h2>
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
        <div>
          {cart.length > 0 && (
            <button className={styles.checkoutButton} onClick={handleCheckout}>
              Confirmar Pedido
            </button>
          )}
          <button className={styles.closeButton} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
