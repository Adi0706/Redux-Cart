import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items:ProductData,
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
          state.cart[existingItemIndex].productQuantity += 1;
        } else {
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
    removeItem:(state,action)=>{
        state.cart = state.cart.filter((item)=>item.id!==action.payload)
    },
    incrementQuantity:(state,action)=>{
        state.cart = state.cart.map((item)=>{
            if(item.id===action.payload){
                return {...item,quantity:item.productQuantity+1}
            }
            return item ; 
        })
    }
  },
});

export const { addToCart, getCartTotal,removeItem,incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
