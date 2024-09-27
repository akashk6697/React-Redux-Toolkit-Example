// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from './counter/counterSlice';
import App from './App';

// Create the store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
