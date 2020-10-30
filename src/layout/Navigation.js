import React, { useState, useContext } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Button } from '../components';
import Logo from '../images/logo.svg';
import AuthContext from '../context/auth/authContext';

export const Navigation = () => {
  let history = useHistory();

  const authContext = useContext(AuthContext);
  const { isLoggedIn, logout } = authContext;

  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  const doLogout = () => {
    logout();
    history.push('/');
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
      <div className={`navbar-menu ${toggle && ' is-active'}`}>
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
          {isLoggedIn && (
            <NavLink
              exact
              to='/items'
              className='navbar-item'
              activeClassName='is-active'
            >
              All Items
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              exact
              to='/items/new'
              className='navbar-item'
              activeClassName='is-active'
            >
              Add a New Item
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              exact
              to='/login'
              className='navbar-item'
              activeClassName='is-active'
            >
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              exact
              to='/signup'
              className='navbar-item'
              activeClassName='is-active'
            >
              Sign Up
            </NavLink>
          )}
          {isLoggedIn && (
            <Button id='logout' buttonFunction={doLogout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
