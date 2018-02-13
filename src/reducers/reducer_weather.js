import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //we never mutate the state, that's why we use concat and NOT push
      // by doing so, we're creating a new array instead of manipulating state one
      return [action.payload.data, ...state]; //ES6 syntax for concat.
  }
  return state;
}
