import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../Features/cartSlice";
import {removeItem} from '../Features/cartSlice'
import {incrementQuantity} from '../Features/cartSlice'

const Cart = () => {
  const { cart, totalPrice, totalQuantity } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();
  const removeDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [ cart]);


  const handleRemove=(item)=>{
    removeDispatch(removeItem(item))
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img src={item.productImage} alt="Product Image" className="w-full" />
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold">{item.productName}</h2>
                <p className="text-sm text-gray-600">Price: ${item.productPrice}</p>
                <div className="flex items-center justify-center mt-4">
                  <button className="text-gray-600 hover:bg-gray-200 rounded-full p-1">-</button>
                  <span className="mx-2">{item.productQuantity}</span>
                  <button className="text-gray-600 hover:bg-gray-200 rounded-full p-1" onClick={dispatch(incrementQuantity(item.id))}>+</button>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5" onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Order Summary</h2>
            <p className="text-sm text-gray-600">Total Items: {totalQuantity}</p>
            <p className="text-sm text-gray-600">Total Amount: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
