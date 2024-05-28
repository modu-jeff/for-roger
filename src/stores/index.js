import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webdcReducer from './webdcStore';
import envReducer from './envStore';
import ticketReducer from './ticketStore';
import newWebdcReducer from './newWebdcStore';
import webdcTicketReducer from './webdcTicketStore';
import ticketModifyReducer from './ticketModifyStore';
import webdcModifyReducer from './webdcModifyStore';

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
