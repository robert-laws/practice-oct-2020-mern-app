import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { checkGroupNameMatch } from '../util/utilities';
import TechnologyContext from '../context/technology/technologyContext';
import { HeadingText } from '../components';

export const Detail = () => {
  let history = useHistory();

  const { group, id } = useParams();

  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);

  const technologyContext = useContext(TechnologyContext);
  const { technologyData } = technologyContext;

  useEffect(() => {
    if (group) {
      if (checkGroupNameMatch(group)) {
        history.push('/');
      }
    }
  }, [group, history]);

  useEffect(() => {
    if (technologyData && group && id) {
      const data = technologyData.find((item) => {
        return item.id.toString() === id;
      });

      setDetailData(data);
      setLoading(false);
    }
  }, [technologyData, group, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <HeadingText text={detailData.title.toUpperCase()} />
      <p>{detailData.description}</p>
    </div>
  );
};
