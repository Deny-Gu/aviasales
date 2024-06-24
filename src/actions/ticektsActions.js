export const GET_PACK_TICKETS = 'GET_PACK_TICKETS';
export const LOADING_TICKETS = 'LOADING_TICKETS';

export function loadingTickets(loading) {
  return { type: LOADING_TICKETS, loading };
}

export function getPackTickets(tickets) {
  return { type: GET_PACK_TICKETS, tickets };
}
