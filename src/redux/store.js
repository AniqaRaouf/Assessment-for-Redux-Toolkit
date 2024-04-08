// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer, // Add authReducer to the reducer object with the 'auth' slice name
    // Add more reducers here if needed
  },
});

export default store;
