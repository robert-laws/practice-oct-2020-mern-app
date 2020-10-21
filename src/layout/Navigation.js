import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

export const Navigation = () => {
  return (
    <nav
      className='navbar has-shadow is-white'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img
            src={Logo}
            alt='Tech Menu Logo'
            style={{ maxHeight: '70px', flex: '0' }}
          />
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <NavLink
            exact
            to='/equipment'
            className='navbar-item'
            activeClassName='is-active'
          >
            Equipment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
