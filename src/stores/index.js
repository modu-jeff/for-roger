import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webdcReducer from './webdcStore';
import envReducer from './envStore';
import ticketReducer from './ticketStore';
import newWebdcReducer from './newWebdcStore';

const rootReducer = combineReducers({
  webdc: webdcReducer,
  env: envReducer,
  ticket: ticketReducer,
  newWebdc: newWebdcReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
