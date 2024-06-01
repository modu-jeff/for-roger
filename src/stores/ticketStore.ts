import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_TICKET_WEBDC_SEQ = 'ticket/SET_TICKET_WEBDC_SEQ';
const SET_TICKET_SEQ = 'ticket/SET_TICKET_SEQ';
const SET_TICKET_PAYLOAD = 'ticket/SET_TICKET_PAYLOAD';

export const setTicketWebdcSeq = createAction<number, typeof SET_TICKET_WEBDC_SEQ>(SET_TICKET_WEBDC_SEQ);
export const setTicketSeq = createAction<number, typeof SET_TICKET_SEQ>(SET_TICKET_SEQ);
export const setTicketPayload = createAction<
  { discountId: string; timeLimit: number; dDay: number },
  typeof SET_TICKET_PAYLOAD
>(SET_TICKET_PAYLOAD);

const initialState = {
  ticketWebdcSeq: 0,
  ticketSeq: 0,
  ticketPayload: {
    discountId: '',
    timeLimit: 0,
    dDay: 0,
  },
};

const ticketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTicketWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketWebdcSeq = Number(payload);
      }),
    )
    .addCase(setTicketSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketSeq = Number(payload);
      }),
    )
    .addCase(setTicketPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketPayload.discountId = payload.discountId;
        draft.ticketPayload.timeLimit = Number(payload.timeLimit);
        draft.ticketPayload.dDay = Number(payload.dDay);
      }),
    )
    .addDefaultCase((state) => state);
});

export default ticketReducer;
