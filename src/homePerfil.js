import React, { Component, Fragment } from 'react';
import './App.css';
import SideBar from './sidebar';
import ApiService from './ApiService';
import ListaTop5 from './ListaTop5';
import SimpleLineChart from './SimpleLineChart';
import './index.css';
import top5 from './images/top5.png';
import investimento1 from './images/investimento1.jpg'



var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
}


class homePerfil extends Component {

  constructor(props) {
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


  componentDidMount() {
    ApiService.buscarPerfil(this.props.location.state.email)
      .then(res => res.json())
      .then(res => {
        this.setState({
          nome: res.nome,
          estado: res.estado,
          endereco: res.endereco,
          idade: res.idade,
          sexo: res.sexo,
          telefone: res.telefone
        });
      });
  }
  render() {
    return (
      <div className="body-homePerfil">
        <div>
          <div className="row">
            <div className="col-12">
              <SideBar perfil={this.state} />
            </div>
          </div>
          <div id="page-wrap">
            <div>
              <h1>Bem vindo {this.state.nome}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="col mb-4">
                <div class="card mt-5 ml-5">
                  <img className='card-img-top' src={investimento1} />
                </div>
                <div class="card mt-5 ml-5">
                  <img className='card-img-top' src={investimento1} />
                </div>
              </div>
            </div>
            <div class="col-5 intro">
              <div className="graficos">
                <SimpleLineChart />
                <SimpleLineChart />
              </div>
            </div>
            <div class="col top5div">
              <div class="card">
                <img className='iconTop5 displayed coroa' src={top5} />
                <div class="card-body">
                  <ListaTop5 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default homePerfil;