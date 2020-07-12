import React, { useReducer } from 'react';
import axios from 'axios';
import NotasContext from './notasContext';
import NotasReducer from './notasReducer';
import { GET_NOTAS, GET_CATEGORY_NOTES, SEARCH_NOTES } from '../types';

const NotasState = (props) => {
  const initialState = {
    notas: [],
    count: 0,
    next: null,
    previous: null,
  };

  const [state, dispatch] = useReducer(NotasReducer, initialState);

  // get data
  const getData = async () => {
    const res = await axios.get(
      'https://gonews-back-develop.herokuapp.com/notes'
    );

    dispatch({
      type: GET_NOTAS,
      payload: res.data,
    });
  };

  //get category
  const getCategory = async (categoryID) => {
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?category=${categoryID}`
    );

    dispatch({
      type: GET_CATEGORY_NOTES,
      payload: res.data.results,
    });
  };

  // search notes
  const searchNotes = async (text) => {
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?search=${text}`
    );

    dispatch({
      type: SEARCH_NOTES,
      payload: res.data,
    });
  };

  return (
    <NotasContext.Provider
      value={{
        notas: state.notas,
        count: state.count,
        getData,
        getCategory,
        searchNotes,
      }}
    >
      {props.children}
    </NotasContext.Provider>
  );
};

export default NotasState;
