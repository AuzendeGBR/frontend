import { useContext } from 'react';

import { CartContext } from '../contexts/CartProvider';

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
