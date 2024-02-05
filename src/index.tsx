import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { SnackbarProvider } from 'notistack'
import Circles from './Components/Circles';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SnackbarProvider maxSnack={2} autoHideDuration={1500}>
      <Circles>
        <Router />
      </Circles>
    </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
