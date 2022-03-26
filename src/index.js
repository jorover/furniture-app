import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {ContextAPI} from '../src/ContextAPI'


ReactDOM.render(
      <BrowserRouter>
      <ContextAPI> 
        <App />
      </ContextAPI>
      </BrowserRouter>,
  document.getElementById('root')
);
