import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TechnologyContext from '../context/technology/technologyContext';
import { HeadingText, Input, Button, Select } from '../components';
import { validatorRequire } from '../util/utilities';
import { useForm } from '../hooks/form';

export const UpdateItem = () => {
  const technologyContext = useContext(TechnologyContext);
  const {
    technologyData,
    technologyItem,
    getItemById,
    updateItem,
  } = technologyContext;

  const [loading, setLoading] = useState(true);

  let history = useHistory();

  const { id } = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      group: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (technologyData) {
      getItemById(id);
    }
  }, [technologyData, getItemById, id]);

  useEffect(() => {
    if (technologyItem) {
      setFormData(
        {
          title: {
            value: technologyItem.title,
            isValid: true,
          },
          description: {
            value: technologyItem.description,
            isValid: true,
          },
          group: {
            value: technologyItem.group,
            isValid: true,
          },
        },
        true
      );

      setLoading(false);
    }
  }, [technologyItem, setFormData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedItem = {
      id: id,
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      group: formState.inputs.group.value,
    };

    updateItem(updatedItem);

    history.push(`/${formState.inputs.group.value}/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <HeadingText text='Update Item' />
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          id='title'
          label='Title'
          element='input'
          placeholder='Add a title'
          validators={[validatorRequire()]}
          errorText='Please enter a valid title'
          onInput={inputHandler}
          inputValue={formState.inputs.title.value}
          inputValid={formState.inputs.title.isValid}
        />

        <Input
          id='description'
          label='Description'
          placeholder='Add a description'
          validators={[validatorRequire()]}
          errorText='Please enter a valid description'
          onInput={inputHandler}
          inputValue={formState.inputs.description.value}
          inputValid={formState.inputs.description.isValid}
        />

        <Select
          id='group'
          label='Group'
          selectText='Select a Group'
          options={['equipment', 'software', 'learning']}
          validators={[validatorRequire()]}
          errorText='make a selection'
          onInput={inputHandler}
          inputValue={formState.inputs.group.value}
          inputValid={formState.inputs.group.isValid}
        />

        <Button color='info' type='submit' disabled={!formState.isValid}>
          Update Item
        </Button>
      </form>
    </div>
  );
};
