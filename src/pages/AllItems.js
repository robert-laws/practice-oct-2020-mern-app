import React, { useContext } from 'react';
import { HeadingText, Button } from '../components';
import TechnologyContext from '../context/technology/technologyContext';

export const AllItems = () => {
  const technologyContext = useContext(TechnologyContext);
  const { technologyData } = technologyContext;

  if (!technologyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <HeadingText text='All Items' />
      <hr />
      {technologyData &&
        technologyData.map((item) => (
          <div key={item.id}>
            {item.title} <Button linkTo={`/items/${item.id}`}>Edit</Button>
          </div>
        ))}
    </div>
  );
};
