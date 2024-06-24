import { GET_PACK_TICKETS, LOADING_TICKETS } from 'actions/ticektsActions';

const initialState = {
  tickets: [],
  loading: false,
};

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_TICKETS:
      return { ...state, loading: action.loading };
    case GET_PACK_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    default:
      return state;
  }
}

export default ticketsReducer;
