import React from 'react';
import Englobant from '../HOC/Englobant';

const Home = () => {
  const homeStyle = {
    color: '#fff',
  };

  return (
    <div style={homeStyle}>
      <h2 style={{ textAlign: 'center' }}>Bienvenue sur Burger Store</h2>

      <div className='my-5'>
        <p className='mb-3'>Ce site a été créé avec React js en utilisant :</p>
        <ul>
          <li>Axios pour la récupération des données</li>
          <li>Un Reducer pour gérer tout nos états avec useReducer</li>
          <li>Un context avec useContext</li>
          <li>
            Un HOC qui permet de fetch les data quelque soit la page sur
            laquelle on se connecte
          </li>
        </ul>
      </div>

      <div>
        <p>La partie back a été faite avec PHP :</p>
        <p>
          Il s'agit d'une API RESTful permettant l'affichage, la création, la
          modification et la suppressions des données de la bdd MySQL.
        </p>
      </div>
    </div>
  );
};

export default Englobant(Home);
