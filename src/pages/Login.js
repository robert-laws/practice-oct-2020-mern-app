import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeadingText, Button, Input } from '../components';
import {
  validatorMinLength,
  validatorRequire,
  validatorEmail,
} from '../util/utilities';
import { useForm } from '../hooks/form';
import AuthContext from '../context/auth/authContext';

export const Login = () => {
  let history = useHistory();

  const authContext = useContext(AuthContext);
  const { login } = authContext;

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

    login();
    history.push('/items');
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
