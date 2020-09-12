import { useEffect, useState } from 'react';
import axios from 'axios';

const url = `http://localhost/projet/BurgerStoreReact/react-burgerstore/server/categorie.php`;

const ActionsCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          setCategories(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (categories == '') getCategories(categories);
  });

  return [categories];
};

export default ActionsCategories;
