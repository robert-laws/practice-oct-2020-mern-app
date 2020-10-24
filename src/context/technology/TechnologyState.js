import React, { useReducer, useCallback } from 'react';
import TechnologyContext from './technologyContext';
import technologyReducer from './technologyReducer';
import { GET_ALL_DATA } from '../types';
import data from '../../data/allData';

const TechnologyState = ({ children }) => {
  const initialState = {
    technologyData: null,
  };

  const [state, dispatch] = useReducer(technologyReducer, initialState);

  const getAllTechnologyData = useCallback(() => {
    try {
      dispatch({ type: GET_ALL_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <TechnologyContext.Provider
      value={{
        technologyData: state.technologyData,
        getAllTechnologyData,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyState;
