import React, { useCallback } from 'react';
import { HeadingText, Input } from '../components';
import { validatorMinLength, validatorRequire } from '../util/utilities';

export const AddItem = () => {
  const inputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <div className='container'>
      <HeadingText text='Add a New Item' />
      <hr />
      <Input
        id='title'
        label='Title'
        element='input'
        placeholder='Add a title'
        validators={[validatorRequire()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        placeholder='Add a description'
        validators={[validatorMinLength(5), validatorRequire()]}
        errorText='Please enter a valid description (at least 5 characters).'
        onInput={inputHandler}
      />
    </div>
  );
};
