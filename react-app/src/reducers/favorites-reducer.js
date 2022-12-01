import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',

  // начальное состояние хранилища
  initialState: {
    products: JSON.parse(localStorage.getItem('favorites-products')) || [],
  },

  reducers: {

    addFavorites: (prevState, action) => {
      const product = action.payload;
      const hasInFavorites = prevState.products.some((prevProduct) => prevProduct.id === product.id);
      console.log(`asdfadf -`, product);

      if (hasInFavorites) return prevState;

      return {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
    },

    removeFavorites: (prevState, action) => {
      const product = action.payload;
      return {
        ...prevState,
        products: prevState.products.filter((prevProduct) => {
          return prevProduct.id !== product.id;
      })};
    },

  }
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
