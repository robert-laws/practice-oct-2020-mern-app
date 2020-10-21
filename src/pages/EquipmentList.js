import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EquipmentData from '../data/equipment';
import { HeadingText } from '../components';

export const EquipmentList = () => {
  const { group } = useParams();

  const data = EquipmentData;

  return (
    <section className='section'>
      <div className='container'>
        <HeadingText text={group.toUpperCase()} />
        {data.map((item) => (
          <Link key={item.id} to={`/${group}/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
