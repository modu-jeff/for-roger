import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWebdcSeq, setWebdcPayload } from '../stores/webdcStore';
import { createWebdc, modifyWebdc, deleteWebdc } from '../fetching';

function WebdcPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, webdcPayload } = useSelector((state) => state.webdc);

  const handleCreateWebdc = async (seq, payload) => {
    setIsFetching(true);
    try {
      await createWebdc(seq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcPayload({ systemSeq: 0, parkinglotSeq: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleModifyWebdc = async (seq, payload) => {
    setIsFetching(true);
    try {
      await modifyWebdc(seq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcPayload({ systemSeq: 0, parkinglotSeq: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteWebdc = async (seq) => {
    setIsFetching(true);
    try {
      await deleteWebdc(seq);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcPayload({ systemSeq: 0, parkinglotSeq: 0 }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <form>
      <label htmlFor="webdcSeq">WebdcSeq:</label>
      <input id="webdcSeq" type="text" value={webdcSeq} onChange={(e) => dispatch(setWebdcSeq(e.target.value))} />

      <div className="payload-title">payload section</div>

      <label htmlFor="systemSeq">systemSeq: </label>
      <input
        id="systemSeq"
        type="text"
        value={webdcPayload.systemSeq}
        onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, systemSeq: e.target.value }))}
      />
      <label htmlFor="parkinglotSeq">parkinglotSeq: </label>
      <input
        id="parkinglotSeq"
        type="text"
        value={webdcPayload.parkinglotSeq}
        onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, parkinglotSeq: e.target.value }))}
      />
      <div className="button-wrapper">
        <button
          className="post-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleCreateWebdc(webdcSeq, webdcPayload)}
        >
          POST 때리기
        </button>
        <button
          className="put-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleModifyWebdc(webdcSeq, webdcPayload)}
        >
          PUT 때리기
        </button>
        <button
          className="delete-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleDeleteWebdc(webdcSeq)}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}
export default WebdcPart;
