import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeWebdc, deleteWebdcParkinglot } from '../fetching';
import { setWebdcSeq, setWebdcModifyPayload } from '../stores/webdcModifyStore';

function WebdcModifyPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, webdcModifyPayload } = useSelector((state) => state.webdcModify);

  const handleChangeWebdc = async (seq, payload) => {
    setIsFetching(true);
    try {
      await changeWebdc(seq, payload);
      dispatch(setWebdcSeq(0));
      dispatch(setWebdcModifyPayload({ systemSeq: 0, env: '' }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteWebdcParkinglot = async (seq) => {
    setIsFetching(true);
    try {
      await deleteWebdcParkinglot(seq);
      dispatch(setWebdcSeq(0));
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

        <div>payload section</div>
        <div></div>

        <label>systemSeq: </label>
        <input
          type="number"
          onChange={(e) =>
            dispatch(setWebdcModifyPayload({ ...webdcModifyPayload, systemSeq: Number(e.target.value) }))
          }
        />

        <label>env: </label>
        <textarea
          cols="30"
          rows="5"
          onChange={(e) => dispatch(setWebdcModifyPayload({ ...webdcModifyPayload, env: e.target.value }))}
        />
      </form>
      <div>
        <button disabled={isFetching} type="button" onClick={() => handleChangeWebdc(webdcSeq, webdcModifyPayload)}>
          PUT 때리기
        </button>
        <button disabled={isFetching} type="button" onClick={() => handleDeleteWebdcParkinglot(webdcSeq)}>
          DELETE 때리기
        </button>
      </div>
    </>
  );
}

export default WebdcModifyPart;
