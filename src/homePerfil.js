import React, { Component, Fragment } from 'react';
import './App.css';
import SideBar from './sidebar';



var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
  }

 
class homePerfil extends Component{

    render(){
    return(
        <div>
        <SideBar />
        <div id="page-wrap">
          <h1>Salve Joe</h1>
          <h2>Blz?</h2>
        </div>
      </div>
    );
  }
}
export default homePerfil;