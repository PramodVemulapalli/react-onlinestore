import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import PostsIndex from './components/items_index';

import { firebaseConfig } from './config/auth';


import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = createStore(reducers, {}, applyMiddleware(ReduxThunk));
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
