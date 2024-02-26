import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import ProductCards from '../Components/ProductCards'
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state)=>state.allcart.items)
 
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={`https://via.placeholder.com/150?text=${items.productImage}`}
                alt="Product Image"
                className="w-full"
              />
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold">{items.productName}</h2>
                <p className="text-sm text-gray-600">Price: ${items.productPrice}</p>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="text-gray-600 hover:bg-gray-200 rounded-full p-1"
                   
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="text-gray-600 hover:bg-gray-200 rounded-full p-1"
                   
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Order Summary</h2>
            <p className="text-sm text-gray-600">Total Items: 0</p>
            <p className="text-sm text-gray-600">Total Amount: 0</p>
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
