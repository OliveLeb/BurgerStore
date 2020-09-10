import React from 'react';
import { NavLink } from 'react-router-dom';
import Article from '../commun/Article';
import Englobant from '../../HOC/Englobant';

const ViewArticle = ({ state }) => {
  const { articleById, hasError } = state;
  const { name, description, price, image } = articleById;
  const btnBuy = true;

  return (
    <div className='admin'>
      <div className='row px-5 justify-content-between'>
        <h1 className='mb-5'>Voir Article</h1>
        <NavLink to='/admin/'>Retour</NavLink>
      </div>
      <div className='row'>
        <div className='col-sm-3'>
          {name}, {description},{price},{image}{' '}
        </div>
        <div className='col-sm-6'>
          {
            <Article
              btnBuy={btnBuy}
              name={name}
              description={description}
              price={price}
              image={image}
              error={hasError}
            />
          }
        </div>
        <div className='col-sm-3'></div>
      </div>
    </div>
  );
};

export default Englobant(ViewArticle);
