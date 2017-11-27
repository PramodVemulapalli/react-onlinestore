import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
import mystore, { history } from './store';
import StorePage from './containers/store_page';
import WelcomePage from './containers/welcome_page';
import LoadingPage from './containers/loading_page';
import requireAuth from './components/require_auth';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import firebase from 'firebase';
import { firebaseConfig } from './config/auth';


import registerServiceWorker from './registerServiceWorker';


// const createStoreWithMiddleware = createStore(reducers, {}, applyMiddleware(ReduxThunk));
firebase.initializeApp(firebaseConfig);

//<ConnectedRouter history={history}>
//     </ConnectedRouter>


// https://stackoverflow.com/questions/42095600/nested-routes-in-react-router-v4

ReactDOM.render(
  <Provider store={mystore}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={LoadingPage} />
        <Switch>
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/dishes" component={requireAuth(StorePage)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
