import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWebdcSeq, setWebdcTicketPayload } from '@/stores/webdcTicketStore';
import { createNewTicket } from '@/api/fetching';
import type { RootState } from '@/stores';

function WebdcTicketPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, webdcTicketPayload } = useSelector((state: RootState) => state.webdcTicket);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewTicket = async (seq: number, payload: any) => {
    setIsFetching(true);
    try {
      await createNewTicket(seq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcTicketPayload(''));
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

      <div className="payload-title">payload section</div>

      <label htmlFor="tickets">tickets: </label>
      <textarea
        id="tickets"
        cols={30}
        rows={5}
        placeholder="배열안에 객체 친구들"
        value={webdcTicketPayload.tickets}
        onChange={(e) => dispatch(setWebdcTicketPayload(e.target.value))}
      />
      <div className="button-wrapper">
        <button
          className="post-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleCreateNewTicket(webdcSeq, webdcTicketPayload)}
        >
          POST 때리기
        </button>
      </div>
    </form>
  );
}

export default WebdcTicketPart;
