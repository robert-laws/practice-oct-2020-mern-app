import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { HeadingText } from '../components';
import TechnologyContext from '../context/technology/technologyContext';
import { checkGroupNameMatch } from '../util/utilities';
import { ListItem } from './';

export const List = () => {
  let history = useHistory();

  const { group } = useParams();

  const [groupData, setGroupData] = useState(null);
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
    if (technologyData && group) {
      const data = technologyData.filter((item) => item.group === group);

      setGroupData(data);
      setLoading(false);
    }
  }, [technologyData, group]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <HeadingText text={group.toUpperCase()} />
      {groupData &&
        groupData.map((item) => (
          <ListItem key={item.id} group={group} item={item} />
        ))}
    </div>
  );
};
