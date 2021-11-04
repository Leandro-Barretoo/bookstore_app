import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import Completed from './Completed';
import Chapter from './Chapter';

const BookCard = (props) => {
  const {
    bookid,
    categorie,
    title,
    author,
  } = props;

  return (
    <div className="Lesson-Panel">
      <BookInfo
        bookid={bookid}
        categorie={categorie}
        title={title}
        author={author}
      />
      <Completed />
      <Chapter />
    </div>
  );
};

BookCard.defaultProps = {
  bookid: '',
  categorie: '',
  title: '',
  author: '',
};

BookCard.propTypes = {
  bookid: PropTypes.string,
  categorie: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookCard;
