export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITHOUT_TRANSFERS: 'SHOW_WITHOUT_TRANSFERS',
  SHOW_ONE_TRANSFER: 'SHOW_ONE_TRANSFER',
  SHOW_TWO_TRANSFERS: 'SHOW_TWO_TRANSFERS',
  SHOW_THREE_TRANSFERS: 'SHOW_THREE_TRANSFERS',
};

export function toggleFilter(filter) {
  return { type: TOGGLE_FILTER, filter };
}
