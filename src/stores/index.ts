import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import webdcReducer from '@/stores/webdcStore';
import envReducer from '@/stores/envStore';
import ticketReducer from '@/stores/ticketStore';
import newWebdcReducer from '@/stores/newWebdcStore';
import webdcTicketReducer from '@/stores/webdcTicketStore';
import ticketModifyReducer from '@/stores/ticketModifyStore';
import webdcModifyReducer from '@/stores/webdcModifyStore';

const rootReducer = combineReducers({
  webdc: webdcReducer,
  env: envReducer,
  ticket: ticketReducer,
  newWebdc: newWebdcReducer,
  webdcTicket: webdcTicketReducer,
  ticketModify: ticketModifyReducer,
  webdcModify: webdcModifyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type RootState = ReturnType<typeof rootReducer>;
