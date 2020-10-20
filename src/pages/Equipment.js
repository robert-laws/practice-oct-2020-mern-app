import React from 'react';
import EquipmentData from '../data/equipment';
import { HeadingText, List } from '../components';

export const Equipment = () => {
  const data = EquipmentData;

  return (
    <section className='section'>
      <div className='container'>
        <HeadingText text='Equipment' />
        <List data={data} />
      </div>
    </section>
  );
};
