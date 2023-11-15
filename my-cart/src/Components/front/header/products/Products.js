import React from 'react'
import './Products.css'

export default function Products(props) {
  return (
    <div>
      <div className='products'>
        {props.productItems.map((productItem) => (
          <div className='maincard'>
            <div>
              <img className='product-image' src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className='product-name'>
                {productItem.name}
              </h3>
            </div>
            <div className='product-price'>
              ₹{productItem.price}
              <span className='product-exprice'>₹{productItem.exprice}</span>
            </div>
            <div className='product-buttons'>
              <button className='product-add-button' onClick={() => props.addProduct(productItem)}> Add to Cart </button>
              <button className='product-buy-button' onClick={() => props.addProduct(productItem)}> Buy Now </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className='footer-main-box'>
          <button> Back to top </button>
          <div> &copy; E-Electronics 2023 </div>
        </div>
      </div>
    </div>
  )
}
