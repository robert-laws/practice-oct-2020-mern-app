import React from 'react';
import { useParams } from 'react-router-dom';
import { HeadingText } from '../components';

export const UpdateItem = () => {
  // let history = useHistory();

  const { id } = useParams();

  return (
    <div className='container'>
      <HeadingText text='Update Item' />
      <hr />
      <p>ID: {id}</p>
    </div>
  );
};
