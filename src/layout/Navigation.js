import React, { useState, useContext } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from '../components';
import Logo from '../images/logo.svg';
import AuthContext from '../context/auth/authContext';

export const Navigation = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location.pathname.split('/')[1]);

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
      <div
        className={`navbar-menu is-align-items-center ${
          toggle && ' is-active'
        }`}
      >
        <div className='navbar-start'>
          <NavLink
            exact
            to='/equipment'
            isActive={() => {
              if (location && location.pathname.split('/')[1] === 'equipment') {
                return true;
              }
            }}
            className='navbar-item mr-2'
            activeClassName='is-active'
          >
            Equipment
          </NavLink>
          <NavLink
            exact
            to='/software'
            isActive={() => {
              if (location && location.pathname.split('/')[1] === 'software') {
                return true;
              }
            }}
            className='navbar-item mr-2'
            activeClassName='is-active'
          >
            Software
          </NavLink>
          <NavLink
            exact
            to='/learning'
            isActive={() => {
              if (location && location.pathname.split('/')[1] === 'learning') {
                return true;
              }
            }}
            className='navbar-item mr-2'
            activeClassName='is-active'
          >
            Learning
          </NavLink>
          {isLoggedIn && (
            <NavLink
              exact
              to='/items'
              className='navbar-item mr-2'
              activeClassName='is-active'
            >
              All Items
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              exact
              to='/items/new'
              className='navbar-item mr-2'
              activeClassName='is-active'
            >
              Add a New Item
            </NavLink>
          )}
        </div>
        <div className='navbar-end mr-4'>
          {!isLoggedIn && (
            <NavLink
              exact
              to='/login'
              className='navbar-item button mr-2'
              activeClassName='is-active'
            >
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              exact
              to='/signup'
              className='navbar-item button'
              activeClassName='is-active'
            >
              Sign Up
            </NavLink>
          )}
          {isLoggedIn && (
            <Button
              id='logout'
              size='normal'
              color='info'
              outlined
              buttonFunction={doLogout}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
