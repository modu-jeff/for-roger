import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewWebdcPayload } from '../stores/newWebdcStore';
import { createNewWebdc } from '../fetching';

function NewWebdcPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { newWebdcPayload } = useSelector((state) => state.newWebdc);

  const handleCreateNewWebdc = async (payload) => {
    setIsFetching(true);
    try {
      await createNewWebdc(payload);
      dispatch(setNewWebdcPayload({ systemSeq: 0, parkinglotSeq: 0, env: '' }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <form>
      <span>payload section</span>
      <br />
      <label>
        systemSeq:{' '}
        <input
          type="number"
          onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, systemSeq: Number(e.target.value) }))}
        />
      </label>
      <br />
      <label>
        parkinglotSeq:{' '}
        <input
          type="number"
          onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, parkinglotSeq: Number(e.target.value) }))}
        />
      </label>
      <br />
      <label>
        env:{' '}
        <textarea
          rows="5"
          cols="30"
          onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, env: e.target.value }))}
        />
      </label>
      <br />
      <br />
      <div>
        <button type="button" disabled={isFetching} onClick={() => handleCreateNewWebdc(newWebdcPayload)}>
          POST 때리기
        </button>
      </div>
    </form>
  );
}

export default NewWebdcPart;
