import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webdcReducer from './webdcStore';
import envReducer from './envStore';

const rootReducer = combineReducers({
  webdc: webdcReducer,
  env: envReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
