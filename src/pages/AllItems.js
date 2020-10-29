import React, { useContext } from 'react';
import { HeadingText, Button } from '../components';
import TechnologyContext from '../context/technology/technologyContext';

export const AllItems = () => {
  const technologyContext = useContext(TechnologyContext);
  const { technologyData } = technologyContext;

  if (!technologyData) {
    return <div>Loading...</div>;
  }

  const deleteItem = (event) => {
    console.log(event.target.id);
  };

  return (
    <div className='container'>
      <HeadingText text='All Items' />
      <hr />
      {technologyData &&
        technologyData.map((item) => (
          <div key={item.id} className='my-4'>
            {item.title}{' '}
            <Button linkTo={`/items/${item.id}`} size='small' color='info'>
              Edit
            </Button>
            <Button
              id={item.id}
              size='small'
              color='danger'
              buttonFunction={deleteItem}
            >
              Delete
            </Button>
          </div>
        ))}
    </div>
  );
};
