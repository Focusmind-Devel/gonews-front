import {
  GET_NOTAS,
  SEARCH_NOTES,
  GET_CATEGORY_NOTES,
  GET_NOTA,
} from '../types';

export default (state, action) => {
  switch (action.type) {
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
      };
    case GET_CATEGORY_NOTES:
      return {
        ...state,
        notas: action.payload.results,
        count: action.payload.count,
        loading: false,
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
