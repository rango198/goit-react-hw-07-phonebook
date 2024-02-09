import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';
import { AppTask } from 'AppTask';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <AppTask />
    </Provider>
  </React.StrictMode>
);
