import initialState from './initialState';
import * as types from '../actions/actionTypes';

const seanReducer = (state = initialState.deaths, action) => {
  switch(action.type) {
    case types.ADD_SEAN_DEATH:
      return state.concat(action.death);
    case types.CLEAR_ALL:
      return [];
    default:
      return state;
  }
};

export default seanReducer;
