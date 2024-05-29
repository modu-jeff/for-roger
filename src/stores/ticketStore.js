import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_TICKET_WEBDC_SEQ = 'ticket/SET_TICKET_WEBDC_SEQ';
const SET_TICKET_SEQ = 'ticket/SET_TICKET_SEQ';
const SET_TICKET_PAYLOAD = 'ticket/SET_TICKET_PAYLOAD';

export const setTicketWebdcSeq = createAction(SET_TICKET_WEBDC_SEQ);
export const setTicketSeq = createAction(SET_TICKET_SEQ);
export const setTicketPayload = createAction(SET_TICKET_PAYLOAD, (payload) => ({
  payload,
}));

const initialState = {
  ticketWebdcSeq: '',
  ticketSeq: '',
  ticketPayload: {
    discountId: '',
    timeLimit: '',
    dDay: '',
  },
};

const ticketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTicketWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketWebdcSeq = payload;
      }),
    )
    .addCase(setTicketSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketSeq = payload;
      }),
    )
    .addCase(setTicketPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketPayload.discountId = payload.discountId;
        draft.ticketPayload.timeLimit = payload.timeLimit;
        draft.ticketPayload.dDay = payload.dDay;
      }),
    )
    .addDefaultCase((state) => state);
});

export default ticketReducer;
