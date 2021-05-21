import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { App, Acerca, Contacto, Blog, PostUnico, Glosario, NoExiste } from './App';
import './index.css';
import './App.css';

ReactDOM.render(
<Router>
  <App path='/' />
  <Acerca path='acerca' />
  <Contacto path='contacto' />
  <Blog path='blog' />
  <PostUnico path=':link' />
  <Glosario path='glosario' />
  <NoExiste default className={'article_parrafo'} />
</Router>
, document.getElementById('root'));