import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contacts-slice';
import { filterSlice } from './filter-slice';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
