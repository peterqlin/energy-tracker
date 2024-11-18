import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-links-container'>
        <Link to='/'>Home </Link>
        <Link to='/weekview'>Week View </Link>
      </div>
    </nav>
  );
};

export default Navbar;