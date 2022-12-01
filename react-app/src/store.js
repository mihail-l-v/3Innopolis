import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';
import favoritesReducer from './reducers/favorites-reducer';

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
  }

  if (action.type === 'cart/removeProduct') {
    localStorage.removeItem('cart-products');
  }

  if (action.type === 'favorites/addFavorites') {
    const data = JSON.stringify(store.getState().favorites.products);
    localStorage.setItem(`favorites-products`, data);
    console.log(`в локал стор favorit - `, data);
  }

  if (action.type === 'favorites/removeFavorites') {
    localStorage.removeItem('favorites-products');
  }

  return result;
}

export const store = configureStore({

  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },

  middleware: [logger],

});
