import {
  GET_NOTAS,
  SEARCH_NOTES,
  GET_CATEGORY_NOTES,
  GET_NOTA,
  GET_MENU,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        main: action.payload.main,
        second: action.payload.second,
      };
    case GET_NOTAS:
      return {
        ...state,
        notas: action.payload.results,
        count: action.payload.count,
      };
    case SEARCH_NOTES:
      return {
        ...state,
        notas: action.payload.results,
        count: action.payload.count,
        currentPage: action.payload.current,
        loading: false,
      };
    case GET_CATEGORY_NOTES:
      return {
        ...state,
        categoryNotes: action.payload.results,
        count: action.payload.count,
        loading: false,
        currentPage: action.payload.current,
      };
    case GET_NOTA:
      return {
        ...state,
        nota: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
