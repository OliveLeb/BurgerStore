import { useEffect, useState } from 'react';
import axios from 'axios';

const url = `http://localhost/projet/BurgerStoreReact/react-burgerstore/server/view.php`;

const Actions = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = () => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          setArticles(data);
          //console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return getArticles(articles);
  });

  return [articles];
  /* return (
    <ul>
      {articles.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );*/
};

export default Actions;
