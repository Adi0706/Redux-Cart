import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../Features/cartSlice";
import {removeItem} from '../Features/cartSlice'
import {incrementItemQuantity} from '../Features/cartSlice'
import {decreaseItemQuantity} from '../Features/cartSlice';

const Cart = () => {
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [ cart]);


  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart is Empty !</h1>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
                  <img src={item.productImage} alt="Product Image" className="w-full" />
                  <div className="text-center mt-4">
                    <h2 className="text-lg font-bold">{item.productName}</h2>
                    <p className="text-sm text-gray-600">Price: ${item.productPrice}</p>
                    <div className="flex items-center justify-center mt-4">
                      <button className="text-gray-600 hover:bg-gray-200 rounded-full p-1" onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
                      <span className="mx-2">{item.productQuantity}</span>
                      <button className="text-gray-600 hover:bg-gray-200 rounded-full p-1" onClick={() => dispatch(incrementItemQuantity(item.id))}>+</button>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <div>
                <h2 className="text-lg font-bold">Order Summary</h2>
                <p className="text-sm text-gray-600"><strong>Total Items: {totalQuantity}</strong></p>
                <p className="text-sm text-gray-600"><strong>Total Amount: ${totalPrice.toFixed(2)}</strong></p>
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
