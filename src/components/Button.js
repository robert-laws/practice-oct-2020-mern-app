import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  color = 'primary',
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

      default:
        return 'is-primary';
    }
  };

  const buttonElement =
    linkTo === '' ? (
      <button
        type={type}
        className={`button ${buttonColor(color)}`}
        disabled={disabled}
      >
        {children}
      </button>
    ) : (
      <Link to={linkTo}>
        <button
          type={type}
          className={`button ${buttonColor(color)}`}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );

  return buttonElement;
};
