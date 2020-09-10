import React from 'react';
import Article from './commun/Article';
import Englobant from '../HOC/Englobant';

const Salades = ({ articles }) => {
  const isBtnBuy = true;

  return (
    <div className='site'>
      <div className='row'>
        {articles.map(
          (item) =>
            item.category === 'Salades' && (
              <div className='col-sm-6 col-md-4 mb-5' key={item.id}>
                <Article
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  btnBuy={isBtnBuy}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Englobant(Salades);
