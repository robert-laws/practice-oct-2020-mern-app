import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HeadingText } from '../components';
import TechnologyContext from '../context/technology/technologyContext';

export const Equipment = () => {
  const { group } = useParams();

  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  const technologyContext = useContext(TechnologyContext);
  const { technologyData } = technologyContext;

  useEffect(() => {
    if (technologyData && group) {
      const data = technologyData.filter((item) => item.group !== group);

      setEquipment(data);
      setLoading(false);
    }
  }, [technologyData, group]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className='section'>
      <div className='container'>
        <HeadingText text={group.toUpperCase()} />
        {equipment &&
          equipment.map((item) => (
            <Link key={item.id} to={`/${group}/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          ))}
      </div>
    </section>
  );
};
