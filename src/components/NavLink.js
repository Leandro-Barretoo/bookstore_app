import React from 'react';
import PropTypes from 'prop-types';
import './NavLink.css';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { title } = props;
  switch (title) {
    case 'Bookstore CMS':
      return <span><Link to="/" className="Logo">{title}</Link></span>;
    case 'Books':
      return <span><Link to="/" className="Bok-Cat Cat-Op">{title}</Link></span>;
    case 'Categories':
      return <span><Link to="/categories" className="Cat-Cat Cat-Op">{title}</Link></span>;
    default:
      return <span>{title}</span>;
  }
};

NavLink.defaultProps = {
  title: '',
};

NavLink.propTypes = {
  title: PropTypes.string,
};

export default NavLink;
