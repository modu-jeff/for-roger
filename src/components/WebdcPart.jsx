import { useSelector, useDispatch } from 'react-redux';
import { setWebdcSeq, setWebdcPayload } from '../stores/webdcStore';
import { createWebdc, modifyWebdc, deleteWebdc } from '../fetching';

function WebdcPart() {
  const dispatch = useDispatch();
  const { webdcSeq, webdcPayload } = useSelector((state) => state.webdc);

  return (
    <form>
      <label>
        WebdcSeq: <input type="number" onChange={(e) => dispatch(setWebdcSeq(Number(e.target.value)))} />
      </label>
      <br />
      <span>payload section</span>
      <br />
      <label>
        systemSeq:{' '}
        <input
          type="number"
          onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, systemSeq: Number(e.target.value) }))}
        />
      </label>
      <br />
      <label>
        parkinglotSeq:{' '}
        <input
          type="number"
          onChange={(e) => dispatch(setWebdcPayload({ ...webdcPayload, parkinglotSeq: Number(e.target.value) }))}
        />
      </label>
      <br />
      <div>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await createWebdc(webdcSeq, webdcPayload);
          }}
        >
          POST 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await modifyWebdc(webdcSeq, webdcPayload);
          }}
        >
          PUT 때리기
        </button>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await deleteWebdc(webdcSeq);
          }}
        >
          DELETE 때리기
        </button>
      </div>
    </form>
  );
}
export default WebdcPart;
