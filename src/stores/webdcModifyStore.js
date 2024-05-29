import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_WEBDC_SEQ = ' webdcModify/SET_WEBDC_SEQ';
const SET_WEBDC_MODIFY_PAYLOAD = 'webdcModify/SET_WEBDC_MODIFY_PAYLOAD';

export const setWebdcSeq = createAction(SET_WEBDC_SEQ);
export const setWebdcModifyPayload = createAction(SET_WEBDC_MODIFY_PAYLOAD, (payload) => ({ payload }));

const initialState = {
  webdcSeq: '',
  webdcModifyPayload: {
    systemSeq: '',
    env: '',
  },
};

const webdcModifyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcSeq = payload;
      }),
    )
    .addCase(setWebdcModifyPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcModifyPayload.systemSeq = payload.systemSeq;
        draft.webdcModifyPayload.env = payload.env;
      }),
    )
    .addDefaultCase((state) => state);
});

export default webdcModifyReducer;
