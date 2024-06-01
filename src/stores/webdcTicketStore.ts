import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_WEBDC_SEQ = 'webdcTicket/SET_WEBDC_SEQ';
const SET_WEBDC_TICKET_PAYLOAD = 'webdcTicket/SET_WEBDC_TICKET_PAYLOAD';

export const setWebdcSeq = createAction<number, typeof SET_WEBDC_SEQ>(SET_WEBDC_SEQ);
export const setWebdcTicketPayload = createAction<string, typeof SET_WEBDC_TICKET_PAYLOAD>(SET_WEBDC_TICKET_PAYLOAD);

const initialState = {
  webdcSeq: 0,
  webdcTicketPayload: {
    tickets: '',
  },
};

const webdcTicketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcSeq = Number(payload);
      }),
    )
    .addCase(setWebdcTicketPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcTicketPayload.tickets = payload;
      }),
    )
    .addDefaultCase((state) => state);
});

export default webdcTicketReducer;
