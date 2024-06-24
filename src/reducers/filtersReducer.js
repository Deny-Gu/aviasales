import { VisibilityFilters, TOGGLE_FILTER } from '../actions/filtersActions';

const initialState = [
  VisibilityFilters.SHOW_ALL,
  VisibilityFilters.SHOW_WITHOUT_TRANSFERS,
  VisibilityFilters.SHOW_ONE_TRANSFER,
  VisibilityFilters.SHOW_TWO_TRANSFERS,
  VisibilityFilters.SHOW_THREE_TRANSFERS,
];

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      if (action.filter === VisibilityFilters.SHOW_ALL) {
        if (state.includes(action.filter)) {
          return [];
        } else {
          return Object.values(VisibilityFilters);
        }
      } else {
        if (!state.includes(action.filter) && state.length + 1 === 4) {
          return Object.values(VisibilityFilters);
        }
        if (state.includes(VisibilityFilters.SHOW_ALL)) {
          return state.filter(
            (item) => item !== action.filter && item !== VisibilityFilters.SHOW_ALL
          );
        }
        return state.includes(action.filter)
          ? state.filter((item) => item !== action.filter)
          : [...state, action.filter];
      }
    default:
      return state;
  }
}

export default filtersReducer;
