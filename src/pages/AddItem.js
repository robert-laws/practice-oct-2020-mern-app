import React from 'react';
import { HeadingText, Input } from '../components';
import { validatorRequire } from '../util/utilities';

export const AddItem = () => {
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
        errorText='Please enter a valid title'
      />
    </div>
  );
};
