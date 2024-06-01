import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewWebdcPayload } from '@/stores/newWebdcStore';
import { createNewWebdc } from '@/api/fetching';
import type { RootState } from '@/stores';

function NewWebdcPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { newWebdcPayload } = useSelector((state: RootState) => state.newWebdc);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewWebdc = async (payload: any) => {
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
      <div className="payload-title">payload section</div>

      <label htmlFor="systemSeq">systemSeq: </label>
      <input
        id="systemSeq"
        type="text"
        value={newWebdcPayload.systemSeq}
        onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, systemSeq: Number(e.target.value) }))}
      />

      <label htmlFor="parkinglotSeq">parkinglotSeq: </label>
      <input
        id="parkinglotSeq"
        type="text"
        value={newWebdcPayload.parkinglotSeq}
        onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, parkinglotSeq: Number(e.target.value) }))}
      />

      <label htmlFor="env">env: </label>
      <textarea
        id="env"
        rows={5}
        cols={30}
        value={newWebdcPayload.env}
        onChange={(e) => dispatch(setNewWebdcPayload({ ...newWebdcPayload, env: e.target.value }))}
      />
      <div className="button-wrapper">
        <button
          className="post-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleCreateNewWebdc(newWebdcPayload)}
        >
          POST 때리기
        </button>
      </div>
    </form>
  );
}

export default NewWebdcPart;
