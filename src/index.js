import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import StorePage from './pages/store_page';
import WelcomePage from './pages/welcome_page';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import firebase from 'firebase';
import { firebaseConfig } from './config/auth';


import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = createStore(reducers, {}, applyMiddleware(ReduxThunk));
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/dishes" component={StorePage} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
