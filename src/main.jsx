import React from 'react';
import ReactDOM from 'react-dom/client';
import AppC from './AppC';
import './index.css';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import X_Factor from './X_FactorC';
import Home from "./Home";


const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
  );
/*
React.createElement(React.StrictMode, null,
    React.createElement(RouterProvider, { router: router })
*/