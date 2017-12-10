import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger';


import reducers from './../reducers';
import ReduxThunk from 'redux-thunk';

// https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

//if (process.env.NODE_ENV === 'development')

if (true){
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
  middleware.push(createLogger());
}


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const mystore = createStore(reducers, {}, composedEnhancers);

// console.log("In the redux store");

export default mystore;
