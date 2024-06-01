import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEnvWebdcSeq, setEnvPayload } from '@/stores/envStore';
import { createEnv, modifyEnv, deleteEnv } from '@/fetching';
import type { RootState } from '@/stores';

function EnvPart() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const { envWebdcSeq, envWebdcPayload } = useSelector((state: RootState) => state.env);

  const handleCreateEnv = async (webdcSeq: string | number, payload: { env: string }) => {
    setIsFetching(true);
    try {
      await createEnv(Number(webdcSeq), payload);
      dispatch(setEnvWebdcSeq(0));
      dispatch(setEnvPayload(''));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleModifyEnv = async (webdcSeq: number, payload: { env: string }) => {
    setIsFetching(true);
    try {
      await modifyEnv(webdcSeq, payload);
      dispatch(setEnvWebdcSeq(0));
      dispatch(setEnvPayload(''));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDeleteEnv = async (webdcSeq: number) => {
    setIsFetching(true);
    try {
      await deleteEnv(webdcSeq);
      dispatch(setEnvWebdcSeq(0));
      dispatch(setEnvPayload(''));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <form>
      <label>WebdcSeq:</label>
<<<<<<< HEAD:src/components/EnvPart.jsx
      <input value={envWebdcSeq} type="text" onChange={(e) => dispatch(setEnvWebdcSeq(e.target.value))} />
=======
      <input value={envWebdcSeq} type="text" onChange={(e) => dispatch(setEnvWebdcSeq(Number(e.target.value)))} />
>>>>>>> 9786c92 (type 전환):src/components/EnvPart.tsx
      <label>env: </label>
      <textarea
        onChange={(e) => {
          dispatch(setEnvPayload(e.target.value));
        }}
        rows={5}
        cols={30}
        value={envWebdcPayload.env}
      />
      <div className="button-wrapper">
        <button
          className="post-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleCreateEnv(envWebdcSeq, envWebdcPayload)}
        >
          POST 때리기
        </button>
        <button
          className="put-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleModifyEnv(envWebdcSeq, envWebdcPayload)}
        >
          PUT 때리기
        </button>
        <button
          className="delete-button"
          type="button"
          disabled={isFetching}
          onClick={() => handleDeleteEnv(envWebdcSeq)}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}

export default EnvPart;
