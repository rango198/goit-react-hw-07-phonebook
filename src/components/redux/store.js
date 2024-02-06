import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
