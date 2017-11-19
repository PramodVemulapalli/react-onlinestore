import firebase from 'firebase';

import {
  FETCH_ITEMS,
  POPULATE_ITEMS
} from './types';

import { items } from './../data/items';

/*
// The firebase rules for the database
"items": {
  ".read": "auth !== null",
  ".write": "root.child('admins').hasChild(auth.uid)"
}

*/



export const fetchItems = () => {
  return (dispatch) => {
    console.log('fetchItems called');
    console.log(items);
    firebase.database().ref(`/items`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_ITEMS, payload: snapshot.val() });
      });
  };
};


export const populateItems = () => {
  return (dispatch) => {
    console.log('populateItems called');
    console.log(items);
    items.map( (item) => {
      firebase.database().ref(`/items`).push().set(item);
      return true;
    });
    dispatch({ type: POPULATE_ITEMS, payload: true });

  };
};
