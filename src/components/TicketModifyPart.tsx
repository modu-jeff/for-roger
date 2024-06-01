import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifyNewTicket, deleteNewTicket } from '@/fetching';
import { setWebdcSeq, setTicketSeq, setTicketModifyPayload } from '@/stores/ticketModifyStore';
import type { RootState } from '@/stores';

function TicketModifyPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, ticketSeq, ticketModifyPayload } = useSelector((state: RootState) => state.ticketModify);

  const handleModifyNewTicket = async (dcSeq: number, tickSeq: number, payload: any) => {
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
          report: { reportMemo: '', runDt: '', failDt: '', reportDt: '' },
        }),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteNewTicket = async (dcSeq: number, tickSeq: number) => {
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
      <label htmlFor="webdcSeq">webdcSeq:</label>
      <input
        id="webdcSeq"
        type="text"
        value={webdcSeq}
        onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))}
      />

      <label htmlFor="ticketSeq">ticketSeq:</label>
      <input
        id="ticketSeq"
        type="text"
        value={ticketSeq}
        onChange={(e) => dispatch(setTicketSeq(Number(e.target.value)))}
      />

      <div className="payload-title">payload section</div>

      <label htmlFor="discountId">discountId: </label>
      <input
        id="discountId"
        type="text"
        value={ticketModifyPayload.discountId}
        onChange={(e) => {
          dispatch(setTicketModifyPayload({ ...ticketModifyPayload, discountId: e.target.value }));
        }}
      />

      <label htmlFor="timeLimit">timeLimit: </label>
      <input
        id="timeLimit"
        type="text"
        value={ticketModifyPayload.timeLimit}
        onChange={(e) =>
          dispatch(setTicketModifyPayload({ ...ticketModifyPayload, timeLimit: Number(e.target.value) }))
        }
      />

      <label htmlFor="dDay">dDay: </label>
      <input
        id="dDay"
        type="text"
        value={ticketModifyPayload.dDay}
        onChange={(e) => dispatch(setTicketModifyPayload({ ...ticketModifyPayload, dDay: Number(e.target.value) }))}
      />

      <label htmlFor="report-reportMemo">report.reportMemo: </label>
      <input
        id="report-reportMemo"
        type="text"
        value={ticketModifyPayload.report.reportMemo}
        onChange={(e) =>
          dispatch(
            setTicketModifyPayload({
              ...ticketModifyPayload,
              report: { ...ticketModifyPayload.report, reportMemo: e.target.value },
            }),
          )
        }
      />

      <label htmlFor="report-runDt">report.runDt: </label>
      <input
        id="report-runDt"
        type="text"
        value={ticketModifyPayload.report.runDt}
        onChange={(e) =>
          dispatch(
            setTicketModifyPayload({
              ...ticketModifyPayload,
              report: { ...ticketModifyPayload.report, runDt: e.target.value },
            }),
          )
        }
      />

      <label htmlFor="report-failDt">report.failDt: </label>
      <input
        id="report-failDt"
        type="text"
        value={ticketModifyPayload.report.failDt}
        onChange={(e) =>
          dispatch(
            setTicketModifyPayload({
              ...ticketModifyPayload,
              report: { ...ticketModifyPayload.report, failDt: e.target.value },
            }),
          )
        }
      />

      <label htmlFor="report-reportDt">report.reportDt: </label>
      <input
        id="report-reportDt"
        type="text"
        value={ticketModifyPayload.report.reportDt}
        onChange={(e) =>
          dispatch(
            setTicketModifyPayload({
              ...ticketModifyPayload,
              report: { ...ticketModifyPayload.report, reportDt: e.target.value },
            }),
          )
        }
      />
      <div className="button-wrapper">
        <button
          className="put-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleModifyNewTicket(webdcSeq, ticketSeq, ticketModifyPayload)}
        >
          PUT 때리기
        </button>
        <button
          className="delete-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleDeleteNewTicket(webdcSeq, ticketSeq)}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}

export default TicketModifyPart;
