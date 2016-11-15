import initialState from './initialState';
import * as types from '../actions/actionTypes';

const seanReducer = (state = initialState.deaths, action) => {
  switch(action.type) {
    case types.ADD_SEAN_DEATH:
      return state.concat(action.death);
    default:
      return state;
  }
};

export default seanReducer;
