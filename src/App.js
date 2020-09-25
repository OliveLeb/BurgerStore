import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './components/commun/Navigation';
import Footer from './components/commun/Footer';
import NotFound from './components/commun/NotFound';
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
import { Provider as ArticleProvider } from './context/ArticleContext';

function App() {
  const [categories] = ActionCategories();

  return (
    <Router>
      <ArticleProvider>
        <div className='app'>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/menus' exact>
                <Menus />
              </Route>
              <Route path='/burgers' exact>
                <Burgers />
              </Route>
              <Route path='/boissons' exact>
                <Boissons />
              </Route>
              <Route path='/snacks' exact>
                <Snacks />
              </Route>
              <Route path='/salades' exact>
                <Salades />
              </Route>
              <Route path='/desserts' exact>
                <Desserts />
              </Route>

              <Route path='/admin' exact>
                <Admin />
              </Route>
              <Route path='/admin/ajouter' exact>
                <AjouterArticle categories={categories} />
              </Route>
              <Route path='/admin/modifier/:slug' exact>
                <ModifierArticle categories={categories} />
              </Route>
              <Route path='/admin/view/:slug' exact>
                <ViewArticle />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ArticleProvider>
    </Router>
  );
}

export default App;
