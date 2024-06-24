import { getSearchID, getSearchIdError } from 'actions/searchIdActions';

export const fetchSearchId = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((json) => dispatch(getSearchID(json.searchId)))
      .catch((error) => dispatch(getSearchIdError(error)));
  };
};
