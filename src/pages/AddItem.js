import React, { useReducer, useCallback } from 'react';
import { Button, HeadingText, Input, Select } from '../components';
import { validatorMinLength, validatorRequire } from '../util/utilities';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

export const AddItem = () => {
  const [state, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const handleInput = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(state.inputs);
  };

  return (
    <div className='container'>
      <HeadingText text='Add a New Item' />
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          label='Title'
          element='input'
          placeholder='Add a title'
          validators={[validatorRequire()]}
          errorText='Please enter a valid title.'
          onInput={handleInput}
        />
        <Input
          id='description'
          label='Description'
          element='textarea'
          placeholder='Add a description'
          validators={[validatorMinLength(5), validatorRequire()]}
          errorText='Please enter a valid description (at least 5 characters).'
          onInput={handleInput}
        />
        <Select
          id='group'
          label='Group'
          selectText='Select a Group'
          options={['equipment', 'software', 'learning']}
          validators={[validatorRequire()]}
          errorText='make a selection'
          onInput={handleInput}
        />
        <Button color='primary' type='submit' disabled={!state.isValid}>
          Add New Item
        </Button>
      </form>
    </div>
  );
};
