import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webdcReducer from './webdcStore';
import envReducer from './envStore';
import ticketReducer from './ticketStore';

const rootReducer = combineReducers({
  webdc: webdcReducer,
  env: envReducer,
  ticket: ticketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
