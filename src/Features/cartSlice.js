import {crateSlice , createSlice, nanoid} from "@reduxjs/toolkit" 
import ProductData from '../ProductData'

const initialState = {
    cart: [] ,// inital state of cart is empty
    items: ProductData,
    totalQuantity : 0 , 
    totalPrice:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload) // pushing the item in cart array

        }
       
    }

})
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer ; 