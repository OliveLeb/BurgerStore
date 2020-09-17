import { useEffect } from 'react';
import DataService from '../services/Services';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateArticle = (state, dispatch) => {
  const history = useHistory();
  const { articleById, isSubmitted } = state;
  const data = {
    name: articleById.name,
    description: articleById.description,
    price: articleById.price,
    image: articleById.image,
    category: articleById.category,
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
            history.push('/admin');
            toast.success('Article créé avec succès !');
          })
          .catch((e) => {
            console.log(e);
            dispatch({
              type: 'CREATE_ARTICLE_FAILURE',
            });
            toast.error("Impossible de créer l'article...");
          });
      }
    };
    createArticle();
  }, [isSubmitted]);
};

export default CreateArticle;
