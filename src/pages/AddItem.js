import React from 'react';
import { Button, HeadingText, Input, Select } from '../components';
import { validatorMinLength, validatorRequire } from '../util/utilities';
import { useForm } from '../hooks/form';

export const AddItem = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      group: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formState.inputs);
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
        <Select
          id='group'
          label='Group'
          selectText='Select a Group'
          options={['equipment', 'software', 'learning']}
          validators={[validatorRequire()]}
          errorText='make a selection'
          onInput={inputHandler}
        />
        <Button color='primary' type='submit' disabled={!formState.isValid}>
          Add New Item
        </Button>
      </form>
    </div>
  );
};
