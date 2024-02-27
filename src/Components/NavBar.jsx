import React, { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import {getCartTotal} from '../Features/cartSlice'

function NavBar() {
  const {cart , totalQuantity} = useSelector(state => state.allcart);
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  
  return (
    <nav className=' bg-red-500 p-7'>
      <ul className=' flex items-center justify-evenly'>
        <Link to='/'>
          <li className='text-white text-3xl font-bold'>CART-SYSTEM REDUX-TOOLKIT</li>
        </Link>  
        <Link to='/cart'>
          <li className='text-white text-2xl'>
            <FaShoppingCart />
            <span>({totalQuantity})</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
