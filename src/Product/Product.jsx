import React from 'react'
import './Product.css'

function Product() {
  return (
    <div>
       <div className="card">
    <img src="product-image.jpg" alt="Product Image" className="product-image"/>
    <div className="card-content">
      <h2 className="product-title">Product Name</h2>
      <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="product-price">$19.99</p>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>
    </div>
  )
}

export default Product
