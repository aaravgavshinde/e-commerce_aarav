import React from 'react'
import './Cart.css'

export default function Cart(props) {

  return (
    <>
      <div className='cartpage'>
        <div className='cart-items'>
          <div className='cart-items-header'>Cart Items</div>

          {props.cartItems2.length === 0 && (
            <div className='cart-items-empty'>No items are added</div>
          )}

          <div className='cart-items-inside'>
            {props.cartItems2.map((item) => (
              <div key={item.id} className='cart-items-list'>
                <img className='cart-items-image' src={item.image} alt={item.name} />
                <span className='cart-items-name'>{item.name}:</span>
                <span className='cart-items-price'> ₹ {item.price} (each)</span>
                <button className='cart-items-decrease' onClick={() => props.removeProduct(item)}>-</button>
                <span className='cart-items-quantity'>{item.quantity}</span>
                <button className='cart-items-increase' onClick={() => props.addProduct(item)}>+</button>
                <span className='cart-items-totalprice'>Total Price: ₹ {item.quantity * item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='clear-btn-box'>
        <button id='clear-btn' className='clear-btn' onClick={props.cartClear}>Clear Cart</button>
      </div>
    </>
  )
}
