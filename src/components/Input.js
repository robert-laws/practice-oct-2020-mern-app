import React, { useReducer } from 'react';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload,
        isValid: true,
      };

    default:
      return state;
  }
};

export const Input = ({
  id,
  element,
  label,
  placeholder,
  rows,
  validators,
  errorText,
}) => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
  });

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE', payload: event.target.value });
  };

  const formElement =
    element === 'input' ? (
      <input
        id={id}
        className={`input ${!state.isValid && 'is-danger'}`}
        type='text'
        placeholder={placeholder}
        value={state.value}
        onChange={handleChange}
      />
    ) : (
      <textarea
        id={id}
        className={`textarea`}
        rows={rows || 3}
        placeholder={placeholder}
        value={state.value}
        onChange={handleChange}
      />
    );

  return (
    <div className='field'>
      <label htmlFor={id} className='label'>
        {label}
      </label>
      <div className='control'>{formElement}</div>
      {!state.isValid && (
        <span className='is-size-6 has-text-danger ml-1'>{errorText}</span>
      )}
    </div>
  );
};
