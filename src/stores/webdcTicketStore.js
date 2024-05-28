import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_WEBDC_SEQ = 'webdcTicket/SET_WEBDC_SEQ';
const SET_WEBDC_TICKET_PAYLOAD = 'webdcTicket/SET_WEBDC_TICKET_PAYLOAD';

export const setWebdcSeq = createAction(SET_WEBDC_SEQ);
export const setWebdcTicketPayload = createAction(SET_WEBDC_TICKET_PAYLOAD);

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
        draft.webdcSeq = payload;
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
