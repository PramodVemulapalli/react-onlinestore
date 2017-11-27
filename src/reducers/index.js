import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'



export default combineReducers({
  items: ItemsReducer,
  form: formReducer,
  routing: routerReducer,
  auth: AuthReducer,
});
