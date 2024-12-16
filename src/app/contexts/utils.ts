import { ICartItem } from '../interfaces/ICartItem';
import { ILoggedUSerData } from '../interfaces/ILoggedUSerData';
import adminService from '../services/adminService';
import clientService from '../services/clientService';
import loginService from '../services/loginService';
import scheduleService from '../services/scheduleService';
import servicesService from '../services/servicesService';

export function addTokenByUserType(tipo: string, token: string) {
  switch (tipo) {
    case 'CLIENTE':
      clientService.setToken(token);
      servicesService.setToken(token);
      scheduleService.setToken(token);
      break;
    case 'ADMIN':
      adminService.setToken(token);
      break;
    default:
      console.log('Tipo de usuário desconhecido.');
  }
}

export function removeTokenByUserType(tipo: string) {
  switch (tipo) {
    case 'CLIENTE':
      clientService.setToken('');
      servicesService.setToken('');
      scheduleService.setToken('');
      break;
    case 'ADMIN':
      adminService.setToken('');
      break;
    default:
      console.log('Tipo de usuário desconhecido.');
  }
}

export function setCartLocalStorage(cart: ICartItem[] | null) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function setUserLocalStorage(user: ILoggedUSerData | null) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserLocalStorage() {
  localStorage.removeItem('user');
}

export function getCartLocalStorage() {
  const json = localStorage.getItem('cart');
  if (json) {
    const cart = JSON.parse(json);
    return cart ?? null;
  }

  return null;
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (json) {
    const user = JSON.parse(json);
    return user ?? null;
  }

  return null;
}

export async function loginRequest(email: string, senha: string) {
  try {
    const response = await loginService.login({ email, senha });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
