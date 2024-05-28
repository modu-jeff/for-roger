import { useSelector, useDispatch } from 'react-redux';
import { setTicketWebdcSeq, setTicketSeq, setTicketPayload } from '../stores/ticketStore';
import { createTicket, modifyTicket, deleteTicket } from '../fetching';

function TicketPart() {
  const dispatch = useDispatch();
  const { ticketWebdcSeq, ticketSeq, ticketPayload } = useSelector((state) => state.ticket);
  return (
    <form>
      <label>
        WebdcSeq: <input type="number" onChange={(e) => dispatch(setTicketWebdcSeq(Number(e.target.value)))} />
      </label>
      <br />
      <label htmlFor="">
        TicketSeq: <input type="number" onChange={(e) => dispatch(setTicketSeq(Number(e.target.value)))} />
      </label>
      <br />
      <div>payload section</div>
      <label>
        discountId:{' '}
        <input
          type="text"
          onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, discountId: e.target.value }))}
        />
      </label>
      <br />
      <label>
        timeLimit:{' '}
        <input
          type="text"
          onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, timeLimit: Number(e.target.value) }))}
        />
      </label>
      <br />
      <label>
        dDay:{' '}
        <input
          type="text"
          onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, dDay: Number(e.target.value) }))}
        />
      </label>
      <br />
      <div>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await createTicket(ticketWebdcSeq, ticketSeq, ticketPayload);
          }}
        >
          POST 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await modifyTicket(ticketWebdcSeq, ticketSeq, ticketPayload);
          }}
        >
          PUT 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await deleteTicket(ticketWebdcSeq, ticketSeq);
          }}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}
export default TicketPart;
