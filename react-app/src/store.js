import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';

let countActions = 0;

const logger = (store) => (next) => (action) => {
  console.log(`action`, action);

  let result = next(action);
  console.log(`new state`, store.getState());

  if (action.type === 'cart/addProduct' || action.type === 'cart/removeProduct') {
    countActions++;
    console.log(`Количество обработанных действий: `, countActions);
  }

  if (action.type === 'cart/addProduct') {
    const data = JSON.stringify(store.getState().cart.products);
    localStorage.setItem(`cart-products`, data);
    console.log(`в локал сторадж - `, data);
  }

  if (action.type === 'cart/removeProduct') {
    localStorage.removeItem('cart-products');
  }

  return result;
}

export const store = configureStore({

  reducer: {
    cart: cartReducer,
  },

  middleware: [logger],

});
