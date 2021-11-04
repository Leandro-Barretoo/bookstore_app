import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import BookCard from './BookCard';
import Line from './Line';
import AddForm from './AddForm';

const MainPage = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const myBooksArr = myBooks.map((book) => {
    const {
      id,
      categorie,
      title,
      author,
    } = book;
    return (
      <BookCard
        key={id}
        bookid={id}
        categorie={categorie}
        title={title}
        author={author}
      />
    );
  });

  return (
    <div className="Panel-bg">
      <Nav />
      { myBooksArr }
      <Line />
      <AddForm />
    </div>
  );
};

export default MainPage;
