import { createStore } from 'redux';

const initialState = {
  currentFormat: '12hr',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeTimeFormat') {
    return { ...state, currentFormat: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
