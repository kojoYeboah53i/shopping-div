// import React from 'react'
import PropTypes from 'prop-types';
const Products = ({items}) => {
  return (
    <>
      <div className="w-full products-container flex flex-col items-center">

< div className="cart">
  {items.map((product) => (
    <div className="cart-items" key={product.id}>
      <div className="cart-item">
        <div className="cart-item-image">
          <img src={product.image} alt="item"   />
        </div>
        <div className="cart-item-details">
          <p className="cart-item-name">{product.name}</p>
          <p className="cart-item-price">$ {product.price}</p>
        </div>
        <div className="add-to-cart w-full">
          <button className="cart-btn py-2 px-6 flex justify-center items-center mx-auto">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  ))}
  </div>
    
</div>
    </>
  )

  
}

Products.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Products