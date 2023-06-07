// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a slice for expense categories
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Create a slice for expense logs
const logsSlice = createSlice({
  name: 'logs',
  initialState: [],
  reducers: {
    addLog: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Create a slice for filters
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    week: null,
    month: null,
    category: null,
  },
  reducers: {
    setWeekFilter: (state, action) => {
      state.week = action.payload;
    },
    setMonthFilter: (state, action) => {
      state.month = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    logs: logsSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

// Save the store data to AsyncStorage on each state change
store.subscribe(() => {
  const state = store.getState();
  AsyncStorage.setItem('expenseData', JSON.stringify(state.logs));
});

// Load the store data from AsyncStorage when the app starts
AsyncStorage.getItem('expenseData')
  .then((data) => {
    if (data) {
      const logs = JSON.parse(data);
      store.dispatch(logsSlice.actions.addLog(logs));
    }
  })
  .catch((error) => {
    console.error('Error loading data from AsyncStorage:', error);
  });

  // Export actions
export const { addCategory } = categoriesSlice.actions;
export const { addLog } = logsSlice.actions;
export const { setCategoryFilter } = filtersSlice.actions;

// Export the store
export default store;
