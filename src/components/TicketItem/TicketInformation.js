import TicketItemModule from './TicketItem.module.scss';

function TicketInformation({ segments }) {
  const textTransfers = (length) => {
    let str = '';
    if (length === 0) {
      str = 'Без пересадок';
    } else if (length === 1) {
      str = '1 пересадка';
    } else {
      str = length + ' пересадки';
    }
    return str;
  };

  function travelTime(date, minutes) {
    const timeDeparture = new Date(date).getTime();
    const minDeparture = new Date(date).getMinutes();
    const hoursDeparture = new Date(date).getHours();
    const timeArrival = timeDeparture + minutes * 60000;
    const minArrival = new Date(timeArrival).getMinutes();
    const hoursArrival = new Date(timeArrival).getHours();
    const minOnTheWay = minutes % 60;
    const hoursOnTheWay = (minutes - minOnTheWay) / 60;
    const onTheWay =
      (hoursOnTheWay < 10 ? '0' : '') +
      hoursOnTheWay +
      'ч' +
      ' ' +
      (minOnTheWay < 10 ? '0' : '') +
      minOnTheWay +
      'м';
    return {
      departureArrival: `${hoursDeparture < 10 ? '0' + hoursDeparture : hoursDeparture}:${minDeparture < 10 ? '0' + minDeparture : minDeparture} -
                          ${hoursArrival < 10 ? '0' + hoursArrival : hoursArrival}:${minArrival < 10 ? '0' + minArrival : minArrival}`,
      onTheWay: onTheWay,
    };
  }

  const transfers = textTransfers(segments.stops.length);
  const { departureArrival, onTheWay } = travelTime(segments.date, segments.duration);

  return (
    <table className={TicketItemModule['ticket-item__table']}>
      <thead>
        <tr>
          <th>{`${segments.origin} - ${segments.destination}`}</th>
          <th>В ПУТИ</th>
          <th>{transfers}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{departureArrival}</td>
          <td>{onTheWay}</td>
          <td>{segments.stops.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TicketInformation;
