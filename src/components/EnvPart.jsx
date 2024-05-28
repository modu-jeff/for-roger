import { useDispatch, useSelector } from 'react-redux';
import { setEnvWebdcSeq, setEnvPayload } from '../stores/envStore';
import { createEnv, modifyEnv, deleteEnv } from '../fetching';

function EnvPart() {
  const dispatch = useDispatch();
  const { envWebdcSeq, envWebdcPayload } = useSelector((state) => state.env);

  return (
    <form>
      <label>
        WebdcSeq: <input type="number" onChange={(e) => dispatch(setEnvWebdcSeq(Number(e.target.value)))} />
      </label>
      <br />
      <br />
      <label>
        env:{' '}
        <textarea
          onChange={(e) => {
            dispatch(setEnvPayload(e.target.value));
          }}
          rows="5"
          cols="30"
          type="text"
        />
      </label>
      <br />
      <br />
      <div>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await createEnv(envWebdcSeq, envWebdcPayload);
          }}
        >
          POST 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await modifyEnv(envWebdcSeq, envWebdcPayload);
          }}
        >
          PUT 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await deleteEnv(envWebdcSeq);
          }}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}

export default EnvPart;
