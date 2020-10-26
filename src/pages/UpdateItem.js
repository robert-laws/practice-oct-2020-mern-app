import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import TechnologyContext from '../context/technology/technologyContext';
import { HeadingText, Input, Button } from '../components';
import { validatorRequire } from '../util/utilities';

export const UpdateItem = () => {
  // let history = useHistory();

  const technologyContext = useContext(TechnologyContext);
  const { technologyData } = technologyContext;

  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (technologyData) {
      const data = technologyData.find((item) => {
        return item.id.toString() === id;
      });

      if (data) {
        setDetailData(data);
        setLoading(false);
      }
    }
  }, [technologyData, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <HeadingText text='Update Item' />
      <hr />
      <h5>{detailData.title}</h5>
      <p>{detailData.group}</p>
      <p>{detailData.description}</p>

      <hr />

      <Input
        id='title'
        label='title'
        element='input'
        placeholder='Add a title'
        validators={[validatorRequire()]}
        errorText='Please enter a valid title'
        onInput={() => {}}
        inputValue={detailData.title}
      />

      <Input
        id='description'
        label='description'
        placeholder='Add a description'
        validators={[validatorRequire()]}
        errorText='Please enter a valid description'
        onInput={() => {}}
        inputValue={detailData.description}
      />

      <Button color='info' type='submit' disabled={true}>
        Update Item
      </Button>
    </div>
  );
};
