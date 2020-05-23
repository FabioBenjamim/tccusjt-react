import React, { Component } from 'react';
import './App.css';
import SideBar from './sidebar';
import ApiService from './ApiService';
import ListaTop5 from './ListaTop5';
import './index.css';
import top5 from './images/top5.png';
import LineChart from './LineChart';
import PieChart from './PieChart';

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
            <SideBar perfil={this.state} email={this.props.location.state.email} />
          </div>
        </div>
        <form className="form-inline my-2 my-lg-0 searchPosition">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Bem vindo {this.state.nome}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 graficos mt-5">
            <div className="card car grafico">
              <h5 className="card-header labelgraph">Rendimento total</h5>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-6 graficos2 mt-5">
            <div className="card car grafico2">
              <h5 className="card-header labelgraph">Investimento mais rentável</h5>
              <div className="card-body">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 graficos mt-5">
            <div className="card car grafico3">
              <h5 className="card-header labelgraph">Rendimento total</h5>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-6 graficos2 mt-5">
            <div className="card top5">
              <h5 className="card-header topHeader labelgraph">Top 5 Investimentos</h5>
              <img className='iconTop5 displayed coroa' src={top5} />
              <div className="card-body">
                <ListaTop5 />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default homePerfil;