import { createStore } from 'redux';

const initialState = {
  page: 1,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changePage') {
    return { ...state, page: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
