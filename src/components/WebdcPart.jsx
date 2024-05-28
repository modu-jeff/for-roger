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
    <>
      <form>
        <label>WebdcSeq:</label>
        <input type="number" onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))} />

        <div>payload section</div>
        <div></div>

        <label>systemSeq: </label>
        <input
          type="number"
          onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, systemSeq: Number(e.target.value) }))}
        />
        <label>parkinglotSeq: </label>
        <input
          type="number"
          onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, parkinglotSeq: Number(e.target.value) }))}
        />
      </form>
      <div>
        <button type="button" disabled={isFetching} onClick={() => handleCreateWebdc(webdcSeq, webdcPayload)}>
          POST 때리기
        </button>
        <button type="button" disabled={isFetching} onClick={() => handleModifyWebdc(webdcSeq, webdcPayload)}>
          PUT 때리기
        </button>
        <button type="button" disabled={isFetching} onClick={() => handleDeleteWebdc(webdcSeq)}>
          DELETE 때리기
        </button>
      </div>
    </>
  );
}
export default WebdcPart;
