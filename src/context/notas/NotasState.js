import React, { useReducer } from 'react';
import axios from 'axios';
import NotasContext from './notasContext';
import NotasReducer from './notasReducer';
import { GET_NOTAS } from '../types';

const NotasState = (props) => {
  const initialState = {
    notas: [],
  };

  const [state, dispatch] = useReducer(NotasReducer, initialState);

  // get data
  const getData = async () => {
    const res = await axios('../data/notas.json');

    dispatch({
      type: GET_NOTAS,
      payload: res.data,
    });
  };

  return (
    <NotasContext.Provider
      value={{
        notas: state.notas,
        getData,
      }}
    >
      {props.children}
    </NotasContext.Provider>
  );
};

export default NotasState;
