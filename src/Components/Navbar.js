import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>Personal Energy Tracker</Link>
      <ul>
        <li>
          <Link to='/dayview'>Daily Energy</Link>
        </li>
        <li>
          <Link to='/weekview'>Weekly Summary</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;