import React from 'react';
import { Link } from 'react-router-dom';

export const ListItem = ({ group, item: { id, title } }) => {
  return (
    <div>
      <Link to={`/${group}/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
};
