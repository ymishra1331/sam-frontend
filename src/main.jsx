import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'AW-1040241149',
};
TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById('root'));
window.store = store;
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
