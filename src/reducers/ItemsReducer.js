import {
  FETCH_ITEMS
} from '../actions/types';

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      console.log(action.payload);
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
