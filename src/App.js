import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/commun/Navigation';
import Home from './components/Home';
import Menus from './components/Menus';
import Burgers from './components/Burgers';
import Boissons from './components/Boissons';
import Snacks from './components/Snacks';
import Salades from './components/Salades';
import Desserts from './components/Desserts';
import Admin from './components/back/Admin';
import AjouterArticle from './components/back/AjouterArticle';
import ModifierArticle from './components/back/ModifierArticle';
import ActionCategories from './actions/actionsCategorie';
import ViewArticle from './components/back/ViewArticle';
import ArticleReducer, { initialState } from './reducer/ArticleReducer';
import { Provider as ArticleProvider } from './context/ArticleContext';

function App() {
  const [categories] = ActionCategories();
  const [state, dispatch] = useReducer(ArticleReducer, initialState);
  const { articleCreated } = state;

  return (
    <Router>
      <ArticleProvider>
        <Navigation />
        <div className='container'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/menus'>
              <Menus />
            </Route>
            <Route path='/burgers'>
              <Burgers />
            </Route>
            <Route path='/boissons'>
              <Boissons />
            </Route>
            <Route path='/snacks'>
              <Snacks />
            </Route>
            <Route path='/salades'>
              <Salades />
            </Route>
            <Route path='/desserts'>
              <Desserts />
            </Route>

            <Route path='/admin' exact>
              <Admin />
            </Route>
            <Route path='/admin/ajouter'>
              <AjouterArticle
                categories={categories}
                dispatch={dispatch}
                articleCreated={articleCreated}
              />
            </Route>
            <Route path='/admin/modifier/:slug'>
              <ModifierArticle categories={categories} />
            </Route>
            <Route path='/admin/view/:slug'>
              <ViewArticle />
            </Route>
          </Switch>
        </div>
      </ArticleProvider>
    </Router>
  );
}

export default App;
