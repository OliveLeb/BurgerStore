import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Article = ({ image, name, price, description, btnBuy }) => {
  return (
    <div className='img-thumbnail'>
      <img
        src={require(`../../images/${image}`)}
        alt={name}
        style={{ width: '100%', height: 'auto' }}
      />

      <div className='price'>{price} €</div>
      <div className='caption'>
        <h4>{name}</h4>
        <p>{description}</p>
        {btnBuy && (
          <button className='btn btn-order'>
            <FaShoppingCart /> Commander
          </button>
        )}
      </div>
    </div>
  );
};

export default Article;
