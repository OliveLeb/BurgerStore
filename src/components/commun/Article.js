import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Article = ({ image, name, price, description, btnBuy, error }) => {
  return error ? (
    <div>oupsie, il y'a une erreur !</div>
  ) : (
    <div className='img-thumbnail'>
      {image != null ? (
        <img
          src={require(`./../../images/${image}`)}
          alt={name}
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <div>Erreur chargement image</div>
      )}

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
