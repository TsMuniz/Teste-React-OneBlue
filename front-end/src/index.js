import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Reset, Base} from './global/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset/>
      <Base/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
