import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import Completed from './Completed';
import Chapter from './Chapter';

const BookCard = (props) => {
  const {
    bookid,
    category,
    title,
    author,
  } = props;

  return (
    <div className="Lesson-Panel">
      <BookInfo
        bookid={bookid}
        category={category}
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
  category: '',
  title: '',
  author: '',
};

BookCard.propTypes = {
  bookid: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookCard;
