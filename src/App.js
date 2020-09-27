import 'bootstrap';

import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from '~/services/history';
import { GlobalStyles } from '~/styles/global';

import Routes from '~/routes';

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}
