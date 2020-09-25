import axios from 'axios';

// instance axios
const http = axios.create({
  //baseURL: 'http://localhost/projet/BurgerStoreReact/react-burgerstore/server/',
  baseURL: 'https://burgerstore.lebelolivier.fr/server/',
  headers: {
    'Content-type': 'application/json',
  },
});
http.CancelToken = axios.CancelToken;

export default http;
