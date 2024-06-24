import { GET_SORT } from 'actions/sortActions';

const initialState = null;

function sortReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SORT:
      return action.sort;
    default:
      return state;
  }
}

export default sortReducer;
