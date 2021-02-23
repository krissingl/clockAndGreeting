import { createStore } from 'redux';

const initialState = {
  currentFormat: '12hr',
  timeOfDay: null,
  tempFormat: 'F',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeTimeFormat') {
    return { ...state, currentFormat: action.payload };
  } if (action.type === 'changeTimeOfDay') {
    return { ...state, timeOfDay: action.payload };
  } if (action.type === 'changeTempFormat') {
    return { ...state, tempFormat: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
