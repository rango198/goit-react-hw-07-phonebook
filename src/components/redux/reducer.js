import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts-slice';
import filterReducer from './filter-slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
