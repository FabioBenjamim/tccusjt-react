import React, { Component, Fragment } from 'react';
import './App.css';
import SideBar from './sidebar';
import ApiService from './ApiService';
import ListaTop5 from './ListaTop5';
import SimpleLineChart from './SimpleLineChart';
import './index.css';
import top5 from './images/top5.png';
import investimento1 from './images/imgInvestimento2.jpeg';
import LineChart from './LineChart';
import PieChart from './PieChart';



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
        <div className="row">
          <div className="col-12">
            <SideBar perfil={this.state} />
          </div>
        </div>
        <form class="form-inline my-2 my-lg-0 searchPosition">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Bem vindo, {this.state.nome}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-6 graficos mt-5">
            <div class="card car grafico">
              <h5 class="card-header labelgraph">Rendimento total</h5>
              <div class="card-body grafico00">
                <PieChart />
              </div>
            </div>
          </div>
          <div class="col-6 graficos2 mt-5">
            <div class="card car grafico2">
              <h5 class="card-header labelgraph">Investimento mais rentável</h5>
              <div class="card-body">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 topMargin mt-5">
          <div class="card top5">
            <h5 class="card-header topHeader labelgraph">Top 5 Investimentos para iniciantes</h5>
            <img className='iconTop5 displayed coroa' src={top5} />
            <div class="card-body">
              <ListaTop5 />
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default homePerfil;