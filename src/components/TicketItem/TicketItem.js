import TicketInformation from './TicketInformation';
import TicketItemModule from './TicketItem.module.scss';

function TicketItem({ price, carrier, segments }) {
  return (
    <div className={TicketItemModule['ticket-item']}>
      <div className={TicketItemModule['ticket-item__header']}>
        <div className={TicketItemModule['ticket-item__price']}>
          <span>{price}</span>
        </div>
        <div className={TicketItemModule['ticket-item__airline']}>
          <span>
            <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
          </span>
        </div>
      </div>
      <div className="ticket-item__main">
        <TicketInformation segments={segments[0]} />
        <TicketInformation segments={segments[1]} />
      </div>
    </div>
  );
}

export default TicketItem;
