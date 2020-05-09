import React, { Component, Fragment } from 'react';
import './App.css';
import SideBar from './sidebar';
import ApiService from './ApiService';
import ListaTop5 from  './ListaTop5';
import SimpleLineChart from'./SimpleLineChart';



var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
  }

 
class homePerfil extends Component{

    constructor(props){
      super(props);
      this.state = {
        nome: '',
        estado: '',
        endereco: '',
        idade: '',
        sexo: '',
        telefone: ''

      }
    }


    componentDidMount(){
        ApiService.buscarPerfil(this.props.location.state.email)
        .then(res => res.json())
        .then(res => {
          this.setState({nome: res.nome,
          estado: res.estado,
          endereco: res.endereco,
          idade: res.idade,
          sexo: res.sexo,
          telefone: res.telefone});
        });
    }
    render(){
    return(
      <div className="body-homePerfil">
        <div>
          <div className="row">
            <div className="col-12">
              <SideBar perfil = { this.state }/>
            </div>
        </div>
        <div id="page-wrap">
          <div>
            <div className="text-boas">
              <h1>Bem vindo {this.state.nome}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="graficos">
              <SimpleLineChart />
              <SimpleLineChart />
            </div>
            </div>
            <div className="col-4">
            <ListaTop5 />
            </div>
        </div>
        </div>
        </div>
    );
  }
}
export default homePerfil;