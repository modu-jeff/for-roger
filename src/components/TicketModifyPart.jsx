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
    <form>
      <label>
        webdcSeq: <input type="number" onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))} />
      </label>
      <br />
      <label>
        ticketSeq: <input type="number" onChange={(e) => dispatch(setTicketSeq(Number(e.target.value)))} />
      </label>
      <br />
      <span>payload section</span>
      <br />
      <label>
        discountId:{' '}
        <input
          type="text"
          onChange={(e) => {
            dispatch(setTicketModifyPayload({ ...ticketModifyPayload, discountId: e.target.value }));
          }}
        />
      </label>
      <br />
      <label>
        timeLimit:{' '}
        <input
          type="number"
          onChange={(e) =>
            dispatch(setTicketModifyPayload({ ...ticketModifyPayload, timeLimit: Number(e.target.value) }))
          }
        />
      </label>
      <br />
      <label>
        dDay:{' '}
        <input
          type="number"
          onChange={(e) => dispatch(setTicketModifyPayload({ ...ticketModifyPayload, dDay: Number(e.target.value) }))}
        />
      </label>
      <br />
      <label>
        report.reportMemo:{' '}
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
      </label>
      <br />
      <label>
        report.runDt:{' '}
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
      </label>
      <br />
      <label>
        report.failDt:{' '}
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
      </label>
      <br />
      <label>
        report.reportDt:{' '}
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
      </label>
      <br />
      <br />
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
    </form>
  );
}

export default TicketModifyPart;
