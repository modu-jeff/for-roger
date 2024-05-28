import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webdcReducer from './webdcStore';

const rootReducer = combineReducers({
  webdc: webdcReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
