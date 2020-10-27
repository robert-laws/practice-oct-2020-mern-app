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

export const Select = ({
  id,
  label,
  selectText,
  options,
  validators,
  errorText,
  onInput,
  inputValue,
  inputValid,
}) => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: inputValue || '',
    isTouched: false,
    isValid: inputValid || false,
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

  return (
    <div className='field'>
      <label htmlFor={id} className='label'>
        {label}
      </label>
      <div className='control'>
        <div className={`select ${!isValid && isTouched && 'is-danger'}`}>
          <select
            id={id}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value=''>{selectText}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option.replace(/^\w/, (c) => c.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
        {!isValid && isTouched && (
          <div>
            <span className='is-size-6 has-text-danger ml-1'>{errorText}</span>
          </div>
        )}
      </div>
    </div>
  );
};
