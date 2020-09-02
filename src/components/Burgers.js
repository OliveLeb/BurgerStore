import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Burgers = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-md-4'>
        <div className='img-thumbnail'>
          <img
            src={require('../images/m1.png')}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div className='price'>8.90 €</div>
          <div className='caption'>
            <h4>Menu Classic</h4>
            <p>Burger + Frites + Boisson</p>
            <button className='btn btn-order '>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-md-4'>
        <div className='img-thumbnail'>
          <img
            src={require('../images/m1.png')}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div className='price'>8.90 €</div>
          <div className='caption'>
            <h4>Menu Classic</h4>
            <p>Burger + Frites + Boisson</p>
            <button className='btn btn-order '>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burgers;
