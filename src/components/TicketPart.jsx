import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTicketWebdcSeq, setTicketSeq, setTicketPayload } from '../stores/ticketStore';
import { createTicket, modifyTicket, deleteTicket } from '../fetching';

function TicketPart() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const { ticketWebdcSeq, ticketSeq, ticketPayload } = useSelector((state) => state.ticket);

  const handleCreateTicket = async (webdcSeq, tickSeq, payload) => {
    setIsFetching(true);
    try {
      await createTicket(webdcSeq, tickSeq, payload);
      dispatch(setTicketWebdcSeq(0));
      dispatch(setTicketSeq(0));
      dispatch(setTicketPayload({ discountId: '', timeLimit: 0, dDay: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleModifyTicket = async (webdcSeq, tickSeq, payload) => {
    setIsFetching(true);
    try {
      await modifyTicket(webdcSeq, tickSeq, payload);
      dispatch(setTicketWebdcSeq(0));
      dispatch(setTicketSeq(0));
      dispatch(setTicketPayload({ discountId: '', timeLimit: 0, dDay: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteTicket = async (webdcSeq, tickSeq) => {
    setIsFetching(true);
    try {
      await deleteTicket(webdcSeq, tickSeq);
      dispatch(setTicketWebdcSeq(0));
      dispatch(setTicketSeq(0));
      dispatch(setTicketPayload({ discountId: '', timeLimit: 0, dDay: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

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
          disabled={isFetching}
          type="button"
          onClick={() => handleCreateTicket(ticketWebdcSeq, ticketSeq, ticketPayload)}
        >
          POST 때리기
        </button>
        <button
          disabled={isFetching}
          type="button"
          onClick={() => handleModifyTicket(ticketWebdcSeq, ticketSeq, ticketPayload)}
        >
          PUT 때리기
        </button>
        <button disabled={isFetching} type="button" onClick={() => handleDeleteTicket(ticketWebdcSeq, ticketSeq)}>
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}
export default TicketPart;