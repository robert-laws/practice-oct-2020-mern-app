import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  buttonFunction,
  id,
  size = 'medium',
  color = 'primary',
  outlined = false,
  disabled = false,
  type = 'button',
  linkTo = '',
}) => {
  const buttonColor = (color) => {
    switch (color) {
      case 'primary':
        return 'is-primary';

      case 'info':
        return 'is-info';

      case 'success':
        return 'is-success';

      case 'warning':
        return 'is-warning';

      case 'danger':
        return 'is-danger';

      case 'light':
        return 'is-light';

      default:
        return 'is-primary';
    }
  };

  const buttonSize = (size) => {
    switch (size) {
      case 'small':
        return 'is-small';

      case 'full-width':
        return 'is-fullwidth';

      case 'medium':
        return 'is-medium';

      case 'large':
        return 'is-large';

      case 'normal':
        return 'is-normal';

      default:
        return 'is-normal';
    }
  };

  const buttonElement =
    linkTo === '' ? (
      <button
        id={id}
        type={type}
        className={`button mx-1 ${buttonColor(color)} ${buttonSize(size)} ${
          outlined && 'is-outlined'
        }`}
        disabled={disabled}
        onClick={buttonFunction}
      >
        {children}
      </button>
    ) : (
      <Link to={linkTo}>
        <button
          type={type}
          className={`button mx-1 ${buttonColor(color)} ${buttonSize(size)} ${
            outlined && 'is-outlined'
          }`}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );

  return buttonElement;
};
