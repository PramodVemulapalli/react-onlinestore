import {
  FETCH_ITEMS
} from '../actions/types';

const INITIAL_STATE = {};

export const getProduct = (state, id) => {
  // console.log('--> Test getProduct');
  // console.log(state.items[id]);
  return state.items[id];
}


  const items = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ITEMS:
        return { ...state, items: action.payload };
      default:
        return state;
    }
  }

  export default items;
