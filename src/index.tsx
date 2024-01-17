import React from 'react';
import ReactDOM from 'react-dom/client';
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import {persistedStore, store} from "./store/store";
import {App} from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
