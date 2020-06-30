import { GET_NOTAS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_NOTAS:
      return {
        ...state,
        notas: action.payload,
      };
    default:
      return state;
  }
};
