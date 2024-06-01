import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_WEBDC_SEQ = ' webdcModify/SET_WEBDC_SEQ';
const SET_WEBDC_MODIFY_PAYLOAD = 'webdcModify/SET_WEBDC_MODIFY_PAYLOAD';

export const setWebdcSeq = createAction<number, typeof SET_WEBDC_SEQ>(SET_WEBDC_SEQ);
export const setWebdcModifyPayload = createAction<{ systemSeq: number; env: string }, typeof SET_WEBDC_MODIFY_PAYLOAD>(
  SET_WEBDC_MODIFY_PAYLOAD,
);

const initialState = {
  webdcSeq: 0,
  webdcModifyPayload: {
    systemSeq: 0,
    env: '',
  },
};

const webdcModifyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcSeq = Number(payload);
      }),
    )
    .addCase(setWebdcModifyPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcModifyPayload.systemSeq = Number(payload.systemSeq);
        draft.webdcModifyPayload.env = payload.env;
      }),
    )
    .addDefaultCase((state) => state);
});

export default webdcModifyReducer;
