import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, loading } from './contact-reducer';
import { filter } from './filter/ContactFilterReducer';
const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
