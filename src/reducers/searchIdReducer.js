import { GET_SEARCH_ID, GET_SEARCH_ID_ERROR } from 'actions/searchIdActions';

const initialState = {
  searchId: null,
  error: null,
};

function searchIdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_ID:
      return { ...state, searchId: action.id };
    case GET_SEARCH_ID_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default searchIdReducer;
