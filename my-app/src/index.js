import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';

import ReactDOM from 'react-dom';
//import RouterMapping from './RouterMapping';
const RouterMapping = () => (
  <Router>
   <Routes>
      <Route exact path="/virtualcv" element={<App />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </Router>
);

ReactDOM.render(
  <RouterMapping />, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
