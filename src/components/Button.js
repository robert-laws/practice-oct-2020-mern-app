import React from 'react';

export const Button = ({ children, color, disabled, type = 'button' }) => {
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

  return (
    <button
      type={type}
      className={`button ${buttonColor(color)}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
