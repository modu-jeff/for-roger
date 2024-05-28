import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWebdcSeq, setWebdcPayload } from './stores/webdcStore';
import { setEnvWebdcSeq, setEnvPayload } from './stores/envStore';
import * as api from './fetching';

function App() {
  const dispatch = useDispatch();
  const { webdcSeq, webdcPayload } = useSelector((state) => state.webdc);
  const { envWebdcSeq, envWebdcPayload } = useSelector((state) => state.env);

  const [ticketWebdcSeq, setTicketWebdcSeq] = useState(0);
  const [ticketSeq, setTicketSeq] = useState(0);
  const [ticketPayload, setTicketPayload] = useState({
    discountId: '',
    timeLimit: 0,
    dDay: 0,
  });

  return (
    <>
      <h1>ENV 파트</h1>
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
              await api.createEnv(envWebdcSeq, envWebdcPayload);
            }}
          >
            POST 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.modifyEnv(envWebdcSeq, envWebdcPayload);
            }}
          >
            PUT 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.deleteEnv(envWebdcSeq);
            }}
          >
            DELETE 때리기
          </button>
        </div>
      </form>
      <h1>TICKET 파트</h1>
      <form>
        <label>
          WebdcSeq: <input type="number" onChange={(e) => setTicketWebdcSeq(Number(e.target.value))} />
        </label>
        <br />
        <label htmlFor="">
          TicketSeq: <input type="number" onChange={(e) => setTicketSeq(Number(e.target.value))} />
        </label>
        <br />
        <div>payload section</div>
        <label>
          discountId:{' '}
          <input
            type="text"
            onChange={(e) =>
              setTicketPayload((prev) => ({
                ...prev,
                discountId: e.target.value,
              }))
            }
          />
        </label>
        <br />
        <label>
          timeLimit:{' '}
          <input
            type="text"
            onChange={(e) =>
              setTicketPayload((prev) => ({
                ...prev,
                timeLimit: Number(e.target.value),
              }))
            }
          />
        </label>
        <br />
        <label>
          dDay:{' '}
          <input
            type="text"
            onChange={(e) =>
              setTicketPayload((prev) => ({
                ...prev,
                dDay: Number(e.target.value),
              }))
            }
          />
        </label>
        <br />
        <div>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.createTicket(ticketWebdcSeq, ticketSeq, ticketPayload);
            }}
          >
            POST 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.modifyTicket(ticketWebdcSeq, ticketSeq, ticketPayload);
            }}
          >
            PUT 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.deleteTicket(ticketWebdcSeq, ticketSeq);
            }}
          >
            DELETE 때리기
          </button>
        </div>
      </form>
      <h1>WEBDC 그 잡채</h1>
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
              await api.createWebdc(webdcSeq, webdcPayload);
            }}
          >
            POST 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.modifyWebdc(webdcSeq, webdcPayload);
            }}
          >
            PUT 때리기
          </button>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              await api.deleteWebdc(webdcSeq);
            }}
          >
            DELETE 때리기
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
