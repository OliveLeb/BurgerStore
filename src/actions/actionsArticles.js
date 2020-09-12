import { useEffect, useContext } from 'react';
import DataService from '../services/Services';
import { useHistory } from 'react-router-dom';
import { Context as ArticleContext } from '../context/ArticleContext';

const CreateArticle = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(ArticleContext);
  const { articleCreated, isSubmitted } = state;
  const data = {
    name: articleCreated.name,
    description: articleCreated.description,
    price: articleCreated.price,
    image: articleCreated.image,
    category: articleCreated.category,
  };
  useEffect(() => {
    const createArticle = () => {
      if (isSubmitted) {
        DataService.create(data)
          .then((res) => {
            dispatch({
              type: 'CREATE_ARTICLE_SUCCESS',
              payload: {
                name: res.data.name,
                description: res.data.description,
                price: res.data.price,
                image: res.data.image,
                category: res.data.category,
              },
            });
            console.log(res);
            history.push('/admin');
          })
          .catch((e) => {
            console.log(e);
            dispatch({
              type: 'CREATE_ARTICLE_FAILURE',
            });
          });
      }
    };
    createArticle();
  }, [isSubmitted]);
};

export default CreateArticle;
