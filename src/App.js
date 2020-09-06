import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/commun/Navigation';
import Menus from './components/Menus';
import Burgers from './components/Burgers';
import Boissons from './components/Boissons';
import Snacks from './components/Snacks';
import Salades from './components/Salades';
import Desserts from './components/Desserts';
import Admin from './components/back/Admin';
import AjouterArticle from './components/back/AjouterArticle';
import ModifierArticle from './components/back/ModifierArticle';
import FetchAllArticles from './actions/actionsArticles';
import ActionCategories from './actions/actionsCategorie';

//import DataService from './services/Services';
function App() {
  const [articles] = FetchAllArticles();
  const [categories] = ActionCategories();

  return (
    <Router>
      <Navigation />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <Menus articles={articles} />
          </Route>
          <Route path='/menus'>
            <Menus articles={articles} />
          </Route>
          <Route path='/burgers'>
            <Burgers articles={articles} />
          </Route>
          <Route path='/boissons'>
            <Boissons articles={articles} />
          </Route>
          <Route path='/snacks'>
            <Snacks articles={articles} />
          </Route>
          <Route path='/salades'>
            <Salades articles={articles} />
          </Route>
          <Route path='/desserts'>
            <Desserts articles={articles} />
          </Route>

          <Route path='/admin' exact>
            <Admin />
          </Route>
          <Route path='/admin/ajouter'>
            <AjouterArticle data={categories} />
          </Route>
          <Route path='/admin/modifier/:slug'>
            <ModifierArticle categories={categories} articles={articles} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
