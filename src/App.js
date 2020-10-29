import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './login'
import './App.css';


class App extends Component{  

  state = {
    usuario : {
      email: '',
      senha: '',
      token: ''
    }
  }


  render() {
    return (
      <Fragment>
        <div className="body-login">
          <Login usuario = { this.state.usuario }/>
       </div>
      </Fragment>

    );
  }
}
export default App;
