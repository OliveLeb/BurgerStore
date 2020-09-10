import { useEffect, useContext } from 'react';
import { Context as ArticleContext } from '../context/ArticleContext';
import DataService from '../services/Services';
import { useParams } from 'react-router-dom';

const FetchArticles = () => {
  const { state, dispatch } = useContext(ArticleContext);
  const { articles, articleById } = state;

  const { slug } = useParams();

  // FETCH ARTICLE BY ID SI ID DANS SLUG OU ALL SI NON
  useEffect(() => {
    const fecthById = () => {
      const id = slug;
      DataService.getOne(id)
        .then((res) => {
          dispatch({
            type: 'GET_ARTICLEBYID_SUCCESS',

            payload: res.data.body[0],
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: 'GET_ARTICLEBYID_FAILURE' });
        });
    };

    const getArticles = () => {
      dispatch({ type: 'FETCH_INIT' });
      DataService.getAll()
        .then((res) => {
          dispatch({
            type: 'GET_ARTICLES_SUCCESS',
            payload: res.data.body.map((item) => {
              return {
                id: item.id,
                category: item.category,
                categoryId: item.categoryId,
                description: item.description,
                image: item.image,
                name: item.name,
                price: item.price,
              };
            }),
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: 'GET_ARTICLES_FAILURE' });
        });
    };

    isNaN(slug) ? getArticles() : fecthById();
  }, []);
};

export default FetchArticles;
