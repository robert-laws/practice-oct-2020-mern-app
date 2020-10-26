import React, { useReducer } from 'react';
import { validate } from '../util/utilities';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };

    case 'BLUR':
      return {
        ...state,
        isTouched: true,
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
    isTouched: false,
    isValid: false,
  });

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE', payload: event.target.value, validators });
  };

  const handleBlur = () => {
    dispatch({ type: 'BLUR' });
  };

  const formElement =
    element === 'input' ? (
      <input
        id={id}
        className={`input ${!state.isValid && state.isTouched && 'is-danger'}`}
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={state.value}
      />
    ) : (
      <textarea
        id={id}
        className={`textarea`}
        rows={rows || 3}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={state.value}
      />
    );

  return (
    <div className='field'>
      <label htmlFor={id} className='label'>
        {label}
      </label>
      <div className='control'>{formElement}</div>
      {!state.isValid && state.isTouched && (
        <span className='is-size-6 has-text-danger ml-1'>{errorText}</span>
      )}
    </div>
  );
};
