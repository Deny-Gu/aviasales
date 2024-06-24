import { getPackTickets, loadingTickets } from 'actions/ticektsActions';

export const fetchTickets = (searchId) => {
  return function tickets(dispatch) {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      .then((response) => {
        if (response.status === 500) {
          tickets(dispatch);
          throw new Error('Сервер не отвечает');
        } else {
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          dispatch(loadingTickets(json.stop));
          if (!json.stop) {
            dispatch(getPackTickets(json.tickets));
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
