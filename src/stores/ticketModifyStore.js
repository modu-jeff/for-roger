import { createAction, createReducer } from '@reduxjs/toolkit';
import { produce } from 'immer';

const SET_WEBDC_SEQ = 'ticketModify/SET_WEBDC_SEQ';
const SET_TICKET_SEQ = 'ticketModify/SET_TICKET_SEQ';
const SET_TICKET_MODIFY_PAYLOAD = 'ticketModify/SET_TICKET_MODIFY_PAYLOAD';

export const setWebdcSeq = createAction(SET_WEBDC_SEQ);
export const setTicketSeq = createAction(SET_TICKET_SEQ);
export const setTicketModifyPayload = createAction(SET_TICKET_MODIFY_PAYLOAD, (payload) => ({ payload }));

const initialState = {
  webdcSeq: 0,
  ticketSeq: 0,
  ticketModifyPayload: {
    discountId: '',
    timeLimit: 0,
    dDay: 0,
    report: {
      reportMemo: '',
      runDt: '',
      failDt: '',
      reportDt: '',
    },
  },
};

const ticketModifyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWebdcSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.webdcSeq = Number(payload);
      }),
    )
    .addCase(setTicketSeq, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketSeq = Number(payload);
      }),
    )
    .addCase(setTicketModifyPayload, (state, { payload }) =>
      produce(state, (draft) => {
        draft.ticketModifyPayload.discountId = payload.discountId;
        draft.ticketModifyPayload.timeLimit = Number(payload.timeLimit);
        draft.ticketModifyPayload.dDay = Number(payload.dDay);
        draft.ticketModifyPayload.report.reportMemo = payload.report.reportMemo;
        draft.ticketModifyPayload.report.runDt = payload.report.runDt;
        draft.ticketModifyPayload.report.failDt = payload.report.failDt;
        draft.ticketModifyPayload.report.reportDt = payload.report.reportDt;
      }),
    )
    .addDefaultCase((state) => state);
});

export default ticketModifyReducer;
