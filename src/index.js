import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cadastro from './cadastro';
import HomePerfil from './homePerfil';
import meuInvestimento from './meuInvestimento';
import sugestaoInvestimento from './sugestaoInvestimento';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"  exact= { true } component= { App } />
      <Route path="/cadastro"  exact= { true } component= { Cadastro } />
      <Route path="/homePerfil"  exact= { true } component= { HomePerfil } />
      <Route path="/meuInvestimento"  exact= { true } component= { meuInvestimento } />
      <Route path="/sugestaoInvestimento"  exact= { true } component= { sugestaoInvestimento } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
