import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { mswWorker } from './api-mocks/msw-worker';

if (process.env.REACT_APP_USE_MSW_MOCK_API === 'yes') {
  mswWorker.start().then();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
