import { useEffect, useState } from 'react';
import axios from 'axios';

const url = `http://localhost/projet/BurgerStoreReact/react-burgerstore/server/read.php`;

const Actions = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = () => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data.body;
          setArticles(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return getArticles(articles);
  });

  return [articles];
};

export default Actions;
