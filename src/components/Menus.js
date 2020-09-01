import React from 'react';
import m1 from '../images/m1.png';
import { FaShoppingCart } from 'react-icons/fa';

const Menus = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-md-4'>
        <div className='card mx-4 my-2'>
          <img
            src={m1}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div>8.90 €</div>
          <div className='card-body'>
            <h4 className='card-title'>Menu Classic</h4>
            <p className='card-text'>Burger + Frites + Boisson</p>
            <button className='btn btn-order btn-warning'>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-md-4'>
        <div className='card mx-4 my-2'>
          <img
            src={m1}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div>8.90 €</div>
          <div className='card-body'>
            <h4 className='card-title'>Menu Classic</h4>
            <p className='card-text'>Burger + Frites + Boisson</p>
            <button className='btn btn-order btn-warning'>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-md-4'>
        <div className='card mx-4 my-2'>
          <img
            src={m1}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div>8.90 €</div>
          <div className='card-body'>
            <h4 className='card-title'>Menu Classic</h4>
            <p className='card-text'>Burger + Frites + Boisson</p>
            <button className='btn btn-order btn-warning'>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-md-4'>
        <div className='card mx-4 my-2'>
          <img
            src={m1}
            alt='menu 1'
            style={{ width: '100%', height: 'auto' }}
          />
          <div>8.90 €</div>
          <div className='card-body'>
            <h4 className='card-title'>Menu Classic</h4>
            <p className='card-text'>Burger + Frites + Boisson</p>
            <button className='btn btn-order btn-warning'>
              <FaShoppingCart /> Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
