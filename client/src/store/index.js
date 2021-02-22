import { createStore } from 'redux';

const initialState = {
  currentFormat: '12hr',
  timeOfDay: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeTimeFormat') {
    return { ...state, currentFormat: action.payload };
  } if (action.type === 'changeTimeOfDay') {
    return { ...state, timeOfDay: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
