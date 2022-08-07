import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './theme';

import { BrowserRouter as Router } from 'react-router-dom';
import {UserItemsContextProvider} from './context/Items';
import ScrollToTop from './Utilities/ScrollToTop';
import { LocationContextProvider } from './context/Location';
import { UserContextProvider } from './context/user';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme = {theme}>
    <UserItemsContextProvider>
      <UserContextProvider>
        <LocationContextProvider>
        <ScrollToTop/>
        <App />
        </LocationContextProvider>
      </UserContextProvider>
    </UserItemsContextProvider> 
    </ThemeProvider >   
    </StyledEngineProvider>
    </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
