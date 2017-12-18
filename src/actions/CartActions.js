import firebase from 'firebase';

import {
  ADD_TO_CART
} from './types';

import { items } from './../data/items';


export const addToCart = (itemid) => {
  return (dispatch) => {
    //console.log(' ---> Cartactions: add to cart');
    // console.log(itemid);
    dispatch({ type: ADD_TO_CART, productId: itemid });
  };
};
