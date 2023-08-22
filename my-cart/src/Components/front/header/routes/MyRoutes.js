import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Products from '../products/Products'
import SignUp from '../Sign-Up/SignUp'
import Cart from '../cart/Cart'

export default function MyRoutes(props) {

  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Products productItems={props.productItems} itemText={props.itemText} cartItems2={props.cartItems} addProduct={props.handleAddProduct} />} /> 
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/cart' exact element={<Cart cartItems2={props.cartItems} addProduct={props.handleAddProduct} removeProduct={props.handleRemoveProduct} cartClear={props.cartClear} priceTotal={props.priceTotal} setPriceTotal={props.setPriceTotal}/>} />
      </Routes>
    </div>
  )
}
