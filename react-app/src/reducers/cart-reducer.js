import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',

  // начальное состояние хранилища
  initialState: {
    products: JSON.parse(localStorage.getItem('cart-products')) || [],
  },

  reducers: {

    addProduct: (prevState, action) => {
      const product = action.payload;
      const hasInCart = prevState.products.some((prevProduct) => prevProduct.id === product.id);

      if (hasInCart) return prevState;

      return {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
    },

    removeProduct: (prevState, action) => {
      const product = action.payload;
      return {...prevState, products: prevState.products.filter((prevProduct) => {
        return prevProduct.id !== product.id;
      })};
    },

  }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
