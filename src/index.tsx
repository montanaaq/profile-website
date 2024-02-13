import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import { SnackbarProvider } from 'notistack'


const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={2} autoHideDuration={1500}>
          <Router />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
