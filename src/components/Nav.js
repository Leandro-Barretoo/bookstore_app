import React from 'react';
import './Nav.css';
import NavLink from './NavLink';

const Nav = () => (
  <div className="NavBar">
    <NavLink title="Bookstore CMS" />
    <NavLink title="Books" />
    <NavLink title="Categories" />
  </div>
);

export default Nav;
