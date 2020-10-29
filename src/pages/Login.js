import React from 'react';
import { HeadingText, Button, Input } from '../components';
import {
  validatorMinLength,
  validatorRequire,
  validatorEmail,
} from '../util/utilities';
import { useForm } from '../hooks/form';

export const Login = () => {
  const [formState, inputHandler] = useForm(
    {
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
      <HeadingText text='Login' />
      <hr />
      <form onSubmit={handleSubmit}>
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
          size='medium'
          type='submit'
          disabled={!formState.isValid}
        >
          Login
        </Button>
        <Button linkTo='/signup' color='info' size='medium'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
