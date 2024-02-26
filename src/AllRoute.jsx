import React from 'react'
import Home from '../src/Pages/Home';
import Cart from '../src/Pages/Cart'
import {Routes,Route} from 'react-router-dom'

function AllRoute() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </>
  )
}

export default AllRoute