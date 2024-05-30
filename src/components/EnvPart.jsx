import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEnvWebdcSeq, setEnvPayload } from '../stores/envStore';
import { createEnv, modifyEnv, deleteEnv } from '../fetching';

function EnvPart() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const { envWebdcSeq, envWebdcPayload } = useSelector((state) => state.env);

  const handleCreateEnv = async (webdcSeq, payload) => {
    setIsFetching(true);
    try {
      await createEnv(webdcSeq, payload);
      dispatch(setEnvWebdcSeq(0));
      dispatch(setEnvPayload(''));
    } catch (err) {
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleModifyEnv = async (webdcSeq, payload) => {
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

  const handleDeleteEnv = async (webdcSeq) => {
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
      <input value={envWebdcSeq} type="text" onChange={(e) => dispatch(setEnvWebdcSeq(e.target.value))} />
      <label>env: </label>
      <textarea
        onChange={(e) => {
          dispatch(setEnvPayload(e.target.value));
        }}
        rows="5"
        cols="30"
        type="text"
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
