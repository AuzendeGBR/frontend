import { useState } from 'react';
import { useAuth } from '../../../app/hooks/useAuth';
import { useCart } from '../../../app/hooks/useCart';
import useNavigation from '../../../app/libs/navigate';
import scheduleService from '../../../app/services/scheduleService';

import cartao from '../../assets/cartao.png';
import pix from '../../assets/pix.png';

import styles from './Payment.module.css';

const Payment = ({ onClose }: { onClose: () => void }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'method1' | 'method2' | null
  >(null);

  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigation();

  const handleCheckout = async () => {
    try {
      if (cart.length === 0) {
        alert('Carrinho vazio!');
        return;
      }

      if (!user.id) {
        alert('Usuário não encontrado!');
        return;
      } else {
        const promises = cart.map((item) =>
          scheduleService.createScheduling({
            usuarioId: Number(user.id),
            servicoId: item.id,
            data_hora: item.data_hora,
          })
        );

        // Aguarda todas as requisições serem finalizadas
        await Promise.all(promises);

        alert('Todos os agendamentos foram realizados com sucesso!');
        clearCart();
        navigate('/conta');
      }
    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
      alert('Ocorreu um erro ao processar o agendamento. Tente novamente.');
    }
  };

  const handlePaymentMethodClick = (method: 'method1' | 'method2') => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Escolha uma forma de pagamento</h2>

        <div className={styles.paymentMethods}>
          <img
            src={cartao}
            alt='Método de Pagamento 1'
            className={`${styles.paymentMethod} ${
              selectedPaymentMethod === 'method1' ? styles.active : ''
            }`}
            onClick={() => handlePaymentMethodClick('method1')}
          />
          <img
            src={pix}
            alt='Método de Pagamento 2'
            className={`${styles.paymentMethod} ${
              selectedPaymentMethod === 'method2' ? styles.active : ''
            }`}
            onClick={() => handlePaymentMethodClick('method2')}
          />
        </div>

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

export default Payment;
