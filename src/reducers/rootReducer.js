import { combineReducers } from 'redux';

import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import filtersReducer from './filtersReducer';
import sortReducer from './sortReducer';

export const rootReducer = combineReducers({
  session: searchIdReducer,
  tickets: ticketsReducer,
  filters: filtersReducer,
  sort: sortReducer,
});

export default rootReducer;
