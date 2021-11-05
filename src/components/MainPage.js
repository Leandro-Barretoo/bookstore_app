import React from 'react';
import { useSelector } from 'react-redux';
import './MainPage.css';
import Nav from './Nav';
import BookCard from './BookCard';
import Line from './Line';
import AddForm from './AddForm';

const MainPage = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const myBooksArr = myBooks.map((book) => {
    const id = book[0];
    const { category, title } = book[1][0];
    return (
      <BookCard
        key={id}
        bookid={id}
        category={category}
        title={title}
        author="unknown"
      />
    );
  });

  return (
    <div className="Panel-bg">
      <Nav />
      <Line name="Line" />
      { myBooksArr }
      <Line name="Line-2" />
      <AddForm />
    </div>
  );
};

export default MainPage;
