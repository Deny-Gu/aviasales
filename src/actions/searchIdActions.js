export const GET_SEARCH_ID = 'GET_SESSION_ID';
export const GET_SEARCH_ID_ERROR = 'GET_SESSION_ID_ERROR';

export function getSearchID(id) {
  return { type: GET_SEARCH_ID, id };
}

export function getSearchIdError(error) {
  return { type: GET_SEARCH_ID_ERROR, error };
}
