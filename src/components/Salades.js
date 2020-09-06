import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Salades = ({ articles }) => {
  return (
    <div className='site'>
      <div className='row'>
        {articles.map(
          (item) =>
            item.category === 'Salades' && (
              <div className='col-sm-6 col-md-4 mb-5' key={item.id}>
                <div className='img-thumbnail'>
                  <img
                    src={require(`../images/${item.image}`)}
                    alt={item.name}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className='price'>{item.price} €</div>
                  <div className='caption'>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <button className='btn btn-order'>
                      <FaShoppingCart /> Commander
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Salades;
