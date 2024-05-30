import { produce } from 'immer';
import { createAction, createReducer } from '@reduxjs/toolkit';

const SET_WEBDC_SEQ = 'webdc/SET_WEBDC_SEQ';
const SET_WEBDC_PAYLOAD = 'webdc/SET_WEBDC_PAYLOAD';

export const setWebdcSeq = createAction(SET_WEBDC_SEQ);
export const setWebdcPayload = createAction(SET_WEBDC_PAYLOAD, (payload) => ({
  payload,
}));

const initialState = {
  webdcSeq: 0,
  webdcPayload: {
    systemSeq: 0,
    parkinglotSeq: 0,
  },
};

const webdcReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcSeq = Number(payload);
      }),
    )
    .addCase(setWebdcPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcPayload.parkinglotSeq = Number(payload.parkinglotSeq);
        draft.webdcPayload.systemSeq = Number(payload.systemSeq);
      }),
    )
    .addDefaultCase((state) => state);
});

export default webdcReducer;
