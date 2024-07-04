import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThreadProvider } from './context/ThreadContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThreadProvider>
        <App />
      </ThreadProvider>
    </React.StrictMode>
  );
}
