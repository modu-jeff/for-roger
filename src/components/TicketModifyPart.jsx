import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifyNewTicket, deleteNewTicket } from '../fetching';
import { setWebdcSeq, setTicketSeq, setTicketModifyPayload } from '../stores/ticketModifyStore';

function TicketModifyPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, ticketSeq, ticketModifyPayload } = useSelector((state) => state.ticketModify);

  const handleModifyNewTicket = async (dcSeq, tickSeq, payload) => {
    setIsFetching(true);
    try {
      await modifyNewTicket(dcSeq, tickSeq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setTicketSeq(0));
      dispatch(
        setTicketModifyPayload({
          discountId: '',
          timeLimit: 0,
          dDay: 0,
          report: { reportMemo: '', runDt: null, failDt: null, reportDt: null },
        }),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteNewTicket = async (dcSeq, tickSeq) => {
    setIsFetching(true);
    try {
      await deleteNewTicket(dcSeq, tickSeq);
      dispatch(setWebdcSeq(0));
      dispatch(setTicketSeq(0));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <form>
        <label>webdcSeq:</label>
        <input type="number" onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))} />

        <label>ticketSeq:</label>
        <input type="number" onChange={(e) => dispatch(setTicketSeq(Number(e.target.value)))} />

        <div>payload section</div>
        <div></div>

        <label>discountId: </label>
        <input
          type="text"
          onChange={(e) => {
            dispatch(setTicketModifyPayload({ ...ticketModifyPayload, discountId: e.target.value }));
          }}
        />

        <label>timeLimit: </label>
        <input
          type="number"
          onChange={(e) =>
            dispatch(setTicketModifyPayload({ ...ticketModifyPayload, timeLimit: Number(e.target.value) }))
          }
        />

        <label>dDay: </label>
        <input
          type="number"
          onChange={(e) => dispatch(setTicketModifyPayload({ ...ticketModifyPayload, dDay: Number(e.target.value) }))}
        />

        <label>report.reportMemo: </label>
        <input
          type="text"
          onChange={(e) =>
            dispatch(
              setTicketModifyPayload({
                ...ticketModifyPayload,
                report: { ...ticketModifyPayload.report, reportMemo: e.target.value },
              }),
            )
          }
        />

        <label>report.runDt: </label>
        <input
          type="text"
          onChange={(e) =>
            dispatch(
              setTicketModifyPayload({
                ...ticketModifyPayload,
                report: { ...ticketModifyPayload.report, runDt: e.target.value },
              }),
            )
          }
        />

        <label>report.failDt: </label>
        <input
          type="text"
          onChange={(e) =>
            dispatch(
              setTicketModifyPayload({
                ...ticketModifyPayload,
                report: { ...ticketModifyPayload.report, failDt: e.target.value },
              }),
            )
          }
        />

        <label>report.reportDt: </label>
        <input
          type="text"
          onChange={(e) =>
            dispatch(
              setTicketModifyPayload({
                ...ticketModifyPayload,
                report: { ...ticketModifyPayload.report, reportDt: e.target.value },
              }),
            )
          }
        />
      </form>
      <div>
        <button
          type="button"
          disabled={isFetching}
          onClick={() => handleModifyNewTicket(webdcSeq, ticketSeq, ticketModifyPayload)}
        >
          PUT 때리기
        </button>
        <button type="button" disabled={isFetching} onClick={() => handleDeleteNewTicket(webdcSeq, ticketSeq)}>
          DELETE 때리기
        </button>
      </div>
    </>
  );
}

export default TicketModifyPart;
