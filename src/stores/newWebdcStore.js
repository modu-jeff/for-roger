import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_NEW_WEBDC_PAYLOAD = 'newWebdc/SET_NEW_WEBDC_PAYLOAD';

export const setNewWebdcPayload = createAction(SET_NEW_WEBDC_PAYLOAD, (payload) => ({ payload }));

const initialState = {
  newWebdcPayload: {
    systemSeq: 0,
    parkinglotSeq: 0,
    env: '',
  },
};

const newWebdcReducer = createReducer(initialState, (builder) => {
  builder.addCase(setNewWebdcPayload, (state, { payload }) =>
    produce(state, (draft) => {
      draft.newWebdcPayload.systemSeq = payload.systemSeq;
      draft.newWebdcPayload.parkinglotSeq = payload.parkinglotSeq;
      draft.newWebdcPayload.env = payload.env;
    }),
  );
});

export default newWebdcReducer;
