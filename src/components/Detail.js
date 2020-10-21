import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { group, id } = useParams();

  // const [itemData, setItemData] = useState(null);

  // useEffect(() => {
  //   setItemData(getFunction(id));
  // }, []);

  return (
    <div>
      Detail: {group}: {id}
    </div>
  );
};
