import React from 'react';
import PropTypes from 'prop-types';
import './BookInfo.css';
import BookActions from './BookActions';

const BookInfo = (props) => {
  const {
    bookid,
    category,
    title,
    author,
  } = props;

  return (
    <div className="Info-Box">
      <span className="Cat-Info Display-Block">{category}</span>
      <span className="Tit-Info Display-Block Family-Roboto">{title}</span>
      <span className="Auth-Info Display-Block Family-Roboto">{author}</span>
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
