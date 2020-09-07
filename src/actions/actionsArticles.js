import { useEffect, useState } from 'react';
import DataService from '../services/Services';

const FetchArticles = (isDeleted) => {
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

export default FetchArticles;
