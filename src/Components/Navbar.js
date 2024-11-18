import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>Site Name</Link>
      <ul>
        <li>
          <Link to='/dayview'>Daily Circle</Link>
        </li>
        <li>
          <Link to='/weekview'>Week View</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;