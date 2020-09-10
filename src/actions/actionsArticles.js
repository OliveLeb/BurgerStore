import { useEffect, useReducer } from 'react';
import DataService from '../services/Services';
import ArticleReducer, { initialState } from '../reducer/ArticleReducer';
import { useHistory } from 'react-router-dom';

export const CreateArticle = (data, isSubmitted, setIsSubmitted) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(ArticleReducer, initialState);
  const { articleCreated, hasError } = state;
  // const [isCreated, setIsCreated] = useState(false);
  useEffect(() => {
    const createArticle = () => {
      if (isSubmitted) {
        // setIsCreated(false);
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
            setIsSubmitted(false);
            // setIsCreated(true);
            history.push('/admin');
          })
          .catch((e) => {
            console.log(e);
            dispatch({
              type: 'CREATE_ARTICLE_FAILURE',
            });
            // setIsCreated(false);
          });
      }
    };
    createArticle();
  }, [isSubmitted]);
  return [articleCreated, hasError /*, isCreated*/];
};
