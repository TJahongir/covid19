import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <section className='navbar'>
      <div className='logo'>
        <Link to='/'>COVID-19</Link>
      </div>

      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/protect-yourself'>Protect urself</Link>
        </li>
        <li>
          <Link to='/qanda'>Q&A</Link>
        </li>
        <li>
          <Link to='/myth-busters'>Myth Busters</Link>
        </li>
        <li>
          <Link to='/donate'>Donate</Link>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
