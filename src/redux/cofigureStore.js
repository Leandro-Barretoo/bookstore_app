import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { addBook } from './books/books';

const rootReducer = combineReducers({
  booksReducer,
});

const fetchBooks = () => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ym9eiorepf3iLhrJ7Q7F/books')
    .then((response) => {
      response.json().then((data) => {
        const books = Object.entries(data);
        books.forEach((book) => {
          dispatch(addBook(book));
        });
      });
    });
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

store.dispatch(fetchBooks());

export default store;
