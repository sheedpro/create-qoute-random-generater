import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './slice/QouteSlice'; // Corrected import path
import { Provider } from 'react-redux';
import './index.css';

const store = configureStore({
  reducer: {
    quotes: quoteReducer, // Corrected slice name
  },
});

store.subscribe(() => console.log(store.getState())); // Optional for debugging, you may remove it

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
