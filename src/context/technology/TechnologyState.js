import React, { useReducer, useCallback } from 'react';
import TechnologyContext from './technologyContext';
import technologyReducer from './technologyReducer';
import {
  GET_ITEMS,
  GET_ITEM_BY_ID,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} from '../types';
import data from '../../data/allData';

const TechnologyState = ({ children }) => {
  const initialState = {
    technologyData: null,
    technologyItem: null,
  };

  const [state, dispatch] = useReducer(technologyReducer, initialState);

  const getAllTechnologyData = useCallback(() => {
    try {
      dispatch({ type: GET_ITEMS, payload: data });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getItemById = useCallback(
    (id) => {
      try {
        dispatch({ type: GET_ITEM_BY_ID, payload: id });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const addItem = useCallback(
    (item) => {
      try {
        dispatch({ type: ADD_ITEM, payload: item });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const updateItem = useCallback(
    (item) => {
      try {
        dispatch({ type: UPDATE_ITEM, payload: item });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const deleteItem = useCallback(
    (id) => {
      try {
        dispatch({ type: DELETE_ITEM, payload: id });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return (
    <TechnologyContext.Provider
      value={{
        technologyData: state.technologyData,
        technologyItem: state.technologyItem,
        getAllTechnologyData,
        getItemById,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyState;
