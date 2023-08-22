import React from 'react'
import './Products.css'

export default function Products(props) {
  return (
    <div className='products'>
      {props.productItems.map((productItem) => (
        <div className='maincard'> 
        <div>
          <img className='product-image' src={productItem.image} alt={productItem.name}/>
        </div>
        <div>
          <h3 className='product-name'>
            {productItem.name}
          </h3>
        </div>
        <div className='product-price'>
          ₹{productItem.price}
        </div>
        <div>
          <button className='product-add-button' onClick={() => props.addProduct(productItem)}> Add to Cart </button>
        </div>
        </div>
      ))}
    </div>
  )
}
