import { GET_NOTAS, SEARCH_NOTES, GET_CATEGORY_NOTES } from '../types';

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
      };
    default:
      return state;
  }
};
