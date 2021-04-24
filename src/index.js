import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { App, Acerca, Contacto, Blog } from './App';
import './index.css';

ReactDOM.render(
<Router>
  <App path='/' />
  <Acerca path='acerca' />
  <Contacto path='contacto' />
  <Blog path='blog' />
</Router>
, document.getElementById('root'));