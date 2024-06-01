import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeWebdc, deleteWebdcParkinglot } from '@/api/fetching';
import { setWebdcSeq, setWebdcModifyPayload } from '@/stores/webdcModifyStore';
import type { RootState } from '@/stores';

function WebdcModifyPart() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const { webdcSeq, webdcModifyPayload } = useSelector((state: RootState) => state.webdcModify);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeWebdc = async (seq: number, payload: any) => {
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

  const handleDeleteWebdcParkinglot = async (seq: number) => {
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
      <input
        id="webdcSeq"
        type="text"
        value={webdcSeq}
        onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))}
      />

      <div className="payload-title">payload section</div>

      <label htmlFor="systemSeq">systemSeq: </label>
      <input
        id="systemSeq"
        type="text"
        value={webdcModifyPayload.systemSeq}
        onChange={(e) => dispatch(setWebdcModifyPayload({ ...webdcModifyPayload, systemSeq: Number(e.target.value) }))}
      />

      <label htmlFor="env">env: </label>
      <textarea
        id="env"
        cols={30}
        rows={5}
        value={webdcModifyPayload.env}
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
