import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Homepage from './Components/Homepage';
import './index.css';
ReactDOM.render(
  <BrowserRouter>
      <Homepage />
  </BrowserRouter>,
  
  document.getElementById('root')
);    
