import { useEffect, useState } from 'react';
//import axios from 'axios';
import DataService from '../services/Services';

//const urlRead = `http://localhost/projet/BurgerStoreReact/react-burgerstore/server/read.php`;

const FetchAllArticles = (isDeleted) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getArticles = () => {
      DataService.getAll()
        .then((res) => {
          setIsLoading(false);
          const data = res.data.body;
          setArticles(data);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setHasError(true);
        });
    };
    return getArticles(articles);
  }, [isDeleted]);

  return [articles, isLoading, hasError];
};

export default FetchAllArticles;
