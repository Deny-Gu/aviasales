import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import Tabs from 'components/Tabs/Tabs';
import TicketItem from 'components/TicketItem/TicketItem';
import { fetchTickets } from 'asyncActions/fetchTickets';

import TicketListModule from './TicketList.module.scss';

function TicketList({
  searchId,
  error,
  filters,
  tickets,
  ticketsLength,
  loadingTickets,
  fetchTickets,
}) {
  const [showMore, setShowMore] = useState(5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (searchId) {
      if (!loadingTickets) {
        fetchTickets(searchId);
        setProgress(ticketsLength / 100);
      } else {
        setProgress(100);
      }
    }
  }, [searchId, tickets, loadingTickets]);

  const renderNoTickets = (
    <p style={{ textAlign: 'center' }}>Рейсов, подходящих под заданные фильтры, не найдено</p>
  );

  const renderError = (
    <p style={{ textAlign: 'center' }}>
      Сервер не отвечает или недоступен!<br></br>Проверьте подключение к интернету!
    </p>
  );

  return (
    <div className={TicketListModule['ticket-list']}>
      <LoadingBar color={'#2196f3'} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Tabs />
      {error && renderError}
      {tickets &&
        tickets.map((ticket, i) => {
          if (i < showMore) {
            return (
              <TicketItem
                key={crypto.randomUUID()}
                price={ticket.price}
                carrier={ticket.carrier}
                segments={ticket.segments}
              />
            );
          }
        })}
      {!filters.length && !error && renderNoTickets}
      {tickets.length > 0 && (
        <button
          className={TicketListModule['ticket-list__btn']}
          onClick={() => setShowMore((state) => state + 5)}
        >
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
}

function filterAndSortTickets(tickets, filter, sort) {
  let arrFilterAndSort = [];

  let a = filter.includes('SHOW_WITHOUT_TRANSFERS') && 0;
  let b = filter.includes('SHOW_ONE_TRANSFER') && 1;
  let c = filter.includes('SHOW_TWO_TRANSFERS') && 2;
  let d = filter.includes('SHOW_THREE_TRANSFERS') && 3;

  if (filter.includes('SHOW_ALL')) {
    arrFilterAndSort = tickets.slice();
  } else {
    arrFilterAndSort = tickets.filter(
      (ticket) =>
        ticket.segments[0].stops.length === a ||
        ticket.segments[0].stops.length === b ||
        ticket.segments[0].stops.length === c ||
        ticket.segments[0].stops.length === d
    );
  }

  if (sort === 'cheap') {
    arrFilterAndSort = arrFilterAndSort.sort((a, b) => a.price - b.price);
  }

  if (sort === 'fast') {
    arrFilterAndSort = arrFilterAndSort.sort(
      (a, b) => a.segments[0].duration - b.segments[0].duration
    );
  }

  return arrFilterAndSort;
}

function mapStateToProps(state) {
  return {
    searchId: state.session.searchId,
    error: state.session.error,
    filters: state.filters,
    tickets: filterAndSortTickets(state.tickets.tickets, state.filters, state.sort),
    ticketsLength: state.tickets.tickets.length,
    loadingTickets: state.tickets.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTickets: (searchId) => dispatch(fetchTickets(searchId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
