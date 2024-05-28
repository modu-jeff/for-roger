import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_ENV_WEBDC_SEQ = 'env/SET_ENV_WEBDC_SEQ';
const SET_ENV_PAYLOAD = 'env/SET_ENV_PAYLOAD';

export const setEnvWebdcSeq = createAction(SET_ENV_WEBDC_SEQ);
export const setEnvPayload = createAction(SET_ENV_PAYLOAD, (payload) => ({
  payload,
}));

const initialState = {
  envWebdcSeq: 0,
  envWebdcPayload: {
    env: '',
  },
};

const envReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setEnvWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.envWebdcSeq = payload;
      }),
    )
    .addCase(setEnvPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.envWebdcPayload.env = payload;
      }),
    )
    .addDefaultCase((state) => state);
});

export default envReducer;
