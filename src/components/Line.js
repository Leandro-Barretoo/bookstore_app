import React from 'react';
import PropTypes from 'prop-types';
import './Line.css';

const Line = (props) => {
  const { name } = props;
  return (
    <div className={name} />
  );
};

Line.defaultProps = {
  name: '',
};

Line.propTypes = {
  name: PropTypes.string,
};

export default Line;
