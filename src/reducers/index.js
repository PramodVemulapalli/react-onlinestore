import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  items: ItemsReducer,
  form: formReducer
});
