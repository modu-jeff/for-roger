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
      <label>WebdcSeq:</label>
      <input type="text" value={ticketWebdcSeq} onChange={(e) => dispatch(setTicketWebdcSeq(e.target.value))} />

      <label>TicketSeq:</label>
      <input type="text" value={ticketSeq} onChange={(e) => dispatch(setTicketSeq(e.target.value))} />

      <div className="payload-title">payload section</div>

      <label>discountId: </label>
      <input
        type="text"
        value={ticketPayload.discountId}
        onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, discountId: e.target.value }))}
      />

      <label>timeLimit: </label>
      <input
        type="text"
        value={ticketPayload.timeLimit}
        onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, timeLimit: e.target.value }))}
      />

      <label>dDay: </label>
      <input
        type="text"
        value={ticketPayload.dDay}
        onChange={(e) => dispatch(setTicketPayload({ ...ticketPayload, dDay: e.target.value }))}
      />

      <div className="button-wrapper">
        <button
          className="post-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleCreateTicket(ticketWebdcSeq, ticketSeq, ticketPayload)}
        >
          POST 때리기
        </button>
        <button
          className="put-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleModifyTicket(ticketWebdcSeq, ticketSeq, ticketPayload)}
        >
          PUT 때리기
        </button>
        <button
          className="delete-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleDeleteTicket(ticketWebdcSeq, ticketSeq)}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}
export default TicketPart;
