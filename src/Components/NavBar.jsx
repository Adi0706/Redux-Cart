import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartLength = useSelector(state => state.allcart.items.length);
  
  return (
    <nav className=' bg-red-500 p-7'>
      <ul className=' flex items-center justify-evenly'>
        <Link to='/'>
          <li className='text-white text-3xl font-bold'>CART-SYSTEM REDUX-TOOLKIT</li>
        </Link>  
        <Link to='/cart'>
          <li className='text-white text-2xl'>
            <FaShoppingCart />
            <span>({cartLength})</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
