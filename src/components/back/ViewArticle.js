import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../commun/Article';

const ViewArticle = ({ articles }) => {
  const { slug } = useParams();

  const btnBuy = true;

  const item = articles.find((item) => item.id === slug);

  return (
    <div className='admin'>
      <div className='col-sm-6'>
        <Article
          btnBuy={btnBuy}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      </div>
    </div>
  );
};

export default ViewArticle;
