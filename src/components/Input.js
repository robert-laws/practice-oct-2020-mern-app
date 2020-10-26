import React, { useReducer, useEffect } from 'react';
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
  onInput,
}) => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: '',
    isTouched: false,
    isValid: false,
  });

  const { value, isValid, isTouched } = state;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

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
        className={`input ${!isValid && isTouched && 'is-danger'}`}
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        className={`textarea ${!isValid && isTouched && 'is-danger'}`}
        rows={rows || 3}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    );

  return (
    <div className='field'>
      <label htmlFor={id} className='label'>
        {label}
      </label>
      <div className='control'>{formElement}</div>
      {!isValid && isTouched && (
        <span className='is-size-6 has-text-danger ml-1'>{errorText}</span>
      )}
    </div>
  );
};
