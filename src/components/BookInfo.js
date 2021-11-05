import React from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookActions';

const BookInfo = (props) => {
  const {
    bookid,
    category,
    title,
    author,
  } = props;

  return (
    <div>
      <span>{category}</span>
      <span>{title}</span>
      <span>{author}</span>
      <BookActions bookid={bookid} />
    </div>
  );
};

BookInfo.defaultProps = {
  bookid: '',
  category: '',
  title: '',
  author: '',
};

BookInfo.propTypes = {
  bookid: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookInfo;
