import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { RouterProvider } from 'react-router-dom';


ReactDOM.render(
  <RouterProvider router={Router}/>,
  document.getElementById('root')
);

