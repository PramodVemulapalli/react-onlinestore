import { combineReducers } from 'redux';
import ItemsReducer, * as fromProducts  from './ItemsReducer';
import AuthReducer from './AuthReducer';
import CartReducer, * as fromCart from './CartReducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'



export default combineReducers({
  items: ItemsReducer,
  cart: CartReducer,
  form: formReducer,
  routing: routerReducer,
  auth: AuthReducer,
});


const getAddedIds = (state) => {
  return fromCart.getAddedIds(state.cart);
}
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) =>  {
  return fromProducts.getProduct(state.items, id);
}

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = (state) => {
  /*
  console.log('-------> Test state retrieval');
  console.log(state);
  if (state.items.items) {
    console.log(state.items.items['-L0WpwtfHVRtY826IxZY']);
  }
  */
  return getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));
};
