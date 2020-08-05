import '@babel/polyfill';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';

ReactDOM.hydrate(
  <BrowserRouter>
    <>{renderRoutes(Routes)}</>
  </BrowserRouter>,
  document.querySelector('#root'),
);
