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
    <form>
      <label htmlFor="webdcSeq">webdcSeq:</label>
      <input id="webdcSeq" type="number" onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))} />

      <div className="payload-title">payload section</div>

      <label htmlFor="systemSeq">systemSeq: </label>
      <input
        id="systemSeq"
        type="number"
        onChange={(e) => dispatch(setWebdcModifyPayload({ ...webdcModifyPayload, systemSeq: Number(e.target.value) }))}
      />

      <label htmlFor="env">env: </label>
      <textarea
        id="env"
        cols="30"
        rows="5"
        onChange={(e) => dispatch(setWebdcModifyPayload({ ...webdcModifyPayload, env: e.target.value }))}
      />
      <div className="button-wrapper">
        <button
          className="put-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleChangeWebdc(webdcSeq, webdcModifyPayload)}
        >
          PUT 때리기
        </button>
        <button
          className="delete-button"
          disabled={isFetching}
          type="button"
          onClick={() => handleDeleteWebdcParkinglot(webdcSeq)}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}

export default WebdcModifyPart;
