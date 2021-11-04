import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const form = document.getElementById('form');
    const newBook = {
      id: uuidv4(),
      categorie: document.getElementById('categories-input').value,
      title: document.getElementsByClassName('TextInput')[0].value,
      author: 'unknown',
    };
    dispatch(addBook(newBook));
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
