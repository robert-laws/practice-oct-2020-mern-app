import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { checkGroupNameMatch } from '../util/utilities';
import TechnologyContext from '../context/technology/technologyContext';
import { HeadingText } from '../components';

export const Detail = () => {
  let history = useHistory();

  const { group, id } = useParams();

  const [loading, setLoading] = useState(true);

  const technologyContext = useContext(TechnologyContext);
  const { technologyData, technologyItem, getItemById } = technologyContext;

  useEffect(() => {
    if (group) {
      if (checkGroupNameMatch(group)) {
        history.push('/');
      }
    }
  }, [group, history]);

  useEffect(() => {
    if (technologyData && id) {
      getItemById(id);
      setLoading(false);
    }
  }, [technologyData, getItemById, id]);

  if (loading) {
    return (
      <div className='container'>
        <p>Loading...</p>
      </div>
    );
  }

  if (!technologyItem || technologyItem.group !== group) {
    return (
      <div className='container'>
        <p>Item not found</p>
      </div>
    );
  }

  return (
    <div className='container'>
      {technologyItem && (
        <>
          <HeadingText text={technologyItem.title.toUpperCase()} />
          <p>{technologyItem.description}</p>
        </>
      )}
    </div>
  );
};
