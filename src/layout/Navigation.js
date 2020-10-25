import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav
      className='navbar has-shadow is-white'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img src={Logo} alt='Tech Menu Logo' style={{ flex: '0' }} />
        </Link>
        {/* eslint-disable-next-line */}
        <a className='navbar-burger' onClick={showMobile}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className={`navbar-menu ${toggle ? ' is-active' : ''}`}>
        <div className='navbar-start'>
          <NavLink
            exact
            to='/equipment'
            className='navbar-item'
            activeClassName='is-active'
          >
            Equipment
          </NavLink>
          <NavLink
            exact
            to='/software'
            className='navbar-item'
            activeClassName='is-active'
          >
            Software
          </NavLink>
          <NavLink
            exact
            to='/learning'
            className='navbar-item'
            activeClassName='is-active'
          >
            Learning
          </NavLink>
          <NavLink
            exact
            to='/items/new'
            className='navbar-item'
            activeClassName='is-active'
          >
            Add a New Item
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
