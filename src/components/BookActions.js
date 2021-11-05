import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookActions = (props) => {
  const dispatch = useDispatch();
  const { bookid } = props;

  const removeBookFromStore = () => {
    const deleteBooks = () => (dispatch) => {
      dispatch(removeBook(bookid));
      fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oWMP1iS5uMQBHYqtCwUz/books/${bookid}`, {
        method: 'DELETE',
        body: JSON.stringify({ item_id: `${bookid}` }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response);
    };

    dispatch(deleteBooks());
  };

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

BookActions.defaultProps = {
  bookid: '',
};

BookActions.propTypes = {
  bookid: PropTypes.string,
};

export default BookActions;
