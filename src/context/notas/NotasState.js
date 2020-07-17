import React, { useReducer } from 'react';
import axios from 'axios';
import NotasContext from './notasContext';
import NotasReducer from './notasReducer';
import {
  GET_NOTAS,
  GET_CATEGORY_NOTES,
  SEARCH_NOTES,
  GET_NOTA,
  GET_MENU,
} from '../types';

const NotasState = (props) => {
  const initialState = {
    notas: [],
    categoryNotes: [],
    nota: {},
    loading: true,
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
    main: [],
    second: [],
  };

  const [state, dispatch] = useReducer(NotasReducer, initialState);

  // get menu items
  const getMenu = async () => {
    const res = await axios.get(
      'https://gonews-back-develop.herokuapp.com/menu/'
    );

    dispatch({
      type: GET_MENU,
      payload: res.data,
    });
  };

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
  const getCategory = async (category) => {
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?category__slug=${category}`
    );

    dispatch({
      type: GET_CATEGORY_NOTES,
      payload: res.data,
    });
  };

  // search notes
  const searchNotes = async (text) => {
    initialState.loading = true;
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?search=${text}`
    );

    dispatch({
      type: SEARCH_NOTES,
      payload: res.data,
    });
  };

  // get Next Search Page
  const getNextPage = async (pageNumber = 2, text) => {
    let res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?page=${pageNumber}&search=${text}`
    );

    window.scrollTo({ top: '200', behavior: 'smooth' });

    dispatch({
      type: SEARCH_NOTES,
      payload: res.data,
    });
  };

  // get Next Category Page
  const getNextPageCat = async (pageNumber = 2, category) => {
    let res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/notes/?category=${category}&page=${pageNumber}`
    );

    window.scrollTo({ top: '600', behavior: 'smooth' });

    dispatch({
      type: GET_CATEGORY_NOTES,
      payload: res.data,
    });
  };

  // get individual note
  const getNote = async (text) => {
    const res = await axios.get(
      `https://gonews-back-develop.herokuapp.com/note/${text}`
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
        categoryNotes: state.categoryNotes,
        next: state.next,
        previous: state.previous,
        currentPage: state.currentPage,
        searchText: state.searchText,
        main: state.main,
        second: state.second,
        getMenu,
        getData,
        getCategory,
        searchNotes,
        getNote,
        getNextPage,
        getNextPageCat,
      }}
    >
      {props.children}
    </NotasContext.Provider>
  );
};

export default NotasState;
