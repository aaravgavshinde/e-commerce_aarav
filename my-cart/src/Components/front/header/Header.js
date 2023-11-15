import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function header(props) {
  return (
    <header>
      <div>
        <h1>
          <Link to='/' className='logo'>E-Electronics</Link>
        </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/signup'> Sign-Up </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/cart' className='cart'>
              <i className='fa fa-shopping-cart' />
              <span className='cart-length'>
                {props.cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
