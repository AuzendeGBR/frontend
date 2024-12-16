import { ICartItem } from './ICartItem';

export interface ICartContext {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
