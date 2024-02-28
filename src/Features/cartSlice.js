import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      if (existingItemIndex >= 0) {
        // Existing item found, add a new item with the same details
        state.cart.push({ ...action.payload, productQuantity: 1 });
      } else {
        // Item not found, simply add it to the cart
        state.cart.push({ ...action.payload, productQuantity: 1 });
      }
    },

    
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { productPrice, productQuantity } = cartItem;
          const itemTotal = productPrice * productQuantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += productQuantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, productQuantity: item.productQuantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.productQuantity === 1) {
            return null; // To remove the item from the cart if quantity becomes 0
          }
          return { ...item, productQuantity: item.productQuantity - 1 };
        }
        return item;
      }).filter(Boolean);
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  incrementItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
