import { createStore } from 'redux';

function rootReducer(state = { books: [] }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer);
window.store = store;

export default store;
