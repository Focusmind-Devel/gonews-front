import React, { useReducer } from 'react';
import axios from 'axios';
import NotasContext from './notasContext';
import NotasReducer from './notasReducer';
import {
  GET_NOTAS,
  GET_CATEGORY_NOTES,
  SEARCH_NOTES,
  GET_NOTA,
} from '../types';

const NotasState = (props) => {
  const initialState = {
    notas: [],
    nota: {},
    loading: true,
    count: 0,
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
      payload: res.data,
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

  // get individual note
  const getNote = async (noteID) => {
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/note/${noteID}`
    );

    dispatch({
      type: GET_NOTA,
      payload: res.data,
    });
  };

  return (
    <NotasContext.Provider
      value={{
        notas: state.notas,
        count: state.count,
        nota: state.nota,
        loading: state.loading,
        getData,
        getCategory,
        searchNotes,
        getNote,
      }}
    >
      {props.children}
    </NotasContext.Provider>
  );
};

export default NotasState;
