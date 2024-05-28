import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWebdcSeq, setWebdcTicketPayload } from '../stores/webdcTicketStore';
import { createNewTicket } from '../fetching';

function WebdcTicketPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, webdcTicketPayload } = useSelector((state) => state.webdcTicket);

  const handleCreateNewTicket = async (seq, payload) => {
    setIsFetching(true);
    try {
      await createNewTicket(seq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcTicketPayload({ tickets: '' }));
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
      <span>payload section</span>
      <br />
      <label>
        tickets:{' '}
        <textarea
          cols="30"
          rows="5"
          placeholder="배열안에 객체 친구들"
          onChange={(e) => dispatch(setWebdcTicketPayload(e.target.value))}
        />
      </label>
      <br />
      <br />
      <div>
        <button disabled={isFetching} type="button" onClick={() => handleCreateNewTicket(webdcSeq, webdcTicketPayload)}>
          POST 때리기
        </button>
      </div>
    </form>
  );
}

export default WebdcTicketPart;
