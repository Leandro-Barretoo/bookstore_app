import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddForm = () => {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const form = document.getElementById('form');

    const newBook = [
      uuidv4(),
      [
        {
          category: document.getElementById('categories-input').value,
          title: document.getElementsByClassName('TextInput')[0].value,
        },
      ],
    ];

    const postBooks = () => (dispatch) => {
      dispatch(addBook(newBook));
      fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oWMP1iS5uMQBHYqtCwUz/books', {
        method: 'POST',
        body: JSON.stringify({
          item_id: newBook[0],
          title: newBook[1][0].title,
          category: newBook[1][0].category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response);
    };

    dispatch(postBooks());
    form.reset();
  };

  return (
    <div>
      <span>ADD NEW BOOK</span>
      <form id="form">
        <input className="TextInput" />
        <select id="categories-input">
          <option value="action">Action</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="economy">Economy</option>
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddForm;
