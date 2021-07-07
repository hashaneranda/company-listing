import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

//reducers
import rootReducer from 'app/rootReducer';

const reducers = combineReducers(rootReducer);

export default function configureAppStore(initialState = {}) {
  const store = configureStore({
    reducer: reducers,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
}
