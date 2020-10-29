import React from 'react';
import { HeadingText, Input, Button } from '../components';
import {
  validatorMinLength,
  validatorRequire,
  validatorEmail,
} from '../util/utilities';
import { useForm } from '../hooks/form';

export const SignUp = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      password: {
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
      <HeadingText text='Sign Up' />
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          id='name'
          label='Name'
          element='text'
          placeholder='Enter your Name'
          validators={[validatorRequire()]}
          errorText='Please enter a valid name'
          onInput={inputHandler}
        />
        <Input
          id='email'
          label='Email'
          element='text'
          placeholder='Enter your Email'
          validators={[validatorEmail()]}
          errorText='Please enter a valid email'
          onInput={inputHandler}
        />
        <Input
          id='password'
          label='Password'
          element='password'
          placeholder='Enter your Password'
          validators={[validatorRequire(), validatorMinLength(5)]}
          errorText='Please enter a password of at least 5 characters'
          onInput={inputHandler}
        />
        <Button
          color='primary'
          size='normal'
          type='submit'
          disabled={!formState.isValid}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};
