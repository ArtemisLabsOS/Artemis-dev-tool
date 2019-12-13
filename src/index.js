import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landing/Landing.jsx';
import App from './App.jsx';
import store from './store';
import './assets/styles/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

import LandingPage from '.components/LandingPage';
import 'tachyons';
import '../styles.css';

/**
 * React Routed components to switch from landing page (immediate view of page) to the application
 *
 * Wrapped Root Component in the Provider allowing children to be connected with Redux store
 **/

render(

  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/app'>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,

   <div className='landing'>
     <LandingPage/>
   </div>,
  document.getElementById('landing')
);