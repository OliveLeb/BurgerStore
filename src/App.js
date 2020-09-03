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
import Actions from './actions/actions';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <Menus />
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

          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/actions'>
            <Actions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
