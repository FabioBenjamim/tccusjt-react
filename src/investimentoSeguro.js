import React, { Component, Fragment } from 'react';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import SideBar from './sidebar';
import ApiService from './ApiService';
import './index.css';
import ManteveChart from './ManteveChart';
import ManteveChart2 from './ManteveChart2';
import ManteveChart3 from './ManteveChart3';
import ManteveChart4 from './ManteveChart4';
import { formatarData } from './helpers';
import conservador from './images/Conservador.png';
import moderado from './images/Moderado.png';
import agressivo from './images/Agressivo.png';
import logo from './images/Logo.png';


var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
}


class investimentoSeguro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome: '',
      estado: '',
      endereco: '',
      idade: '',
      sexo: '',
      telefone: ''
    }
  }


  componentDidMount() {
    ApiService.buscarPerfil(this.props.location.state.email, this.props.location.state.token)
      .then(res => res.json())
      .then(res => {
        this.setState({
          id: res.id,
          nome: res.nome,
          estado: res.estado,
          endereco: res.endereco,
          idade: res.idade,
          sexo: res.sexo,
          telefone: res.telefone,
          tipoInvestidor: res.perfilInvestidor
        });

        if(this.state.tipoInvestidor == "Conservador"){
          this.setState({
            ibagen: conservador
          })
        } else if(this.state.tipoInvestidor == "Diversificado"){ 
          this.setState({
            ibagen: moderado
          })
        } else if(this.state.tipoInvestidor == "Agressivo"){
          this.setState({
            ibagen: agressivo
          })
        }
        else {
          this.setState({
            ibagen: logo
          })
        }

        ApiService.pegaSugestao(1, 1, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao1: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              manteveData: {
                labels: [...legenda],
                datasets: [
                  {
                    label: 'Fechamento do dia',
                    data: [...data],
                    backgroundColor: [
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                    ]
                  }
                ]
              }
            })
          });

        ApiService.pegaSugestao(1, 2,this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao2: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              manteveData2: {
                labels: [...legenda],
                datasets: [
                  {
                    label: 'Fechamento do dia',
                    data: [...data],
                    backgroundColor: [
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                    ]
                  }
                ]
              }
            })
          });

        ApiService.pegaSugestao(1, 3,this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao3: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              manteveData3: {
                labels: [...legenda],
                datasets: [
                  {
                    label: 'Fechamento do dia',
                    data: [...data],
                    backgroundColor: [
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                    ]
                  }
                ]
              }
            })
          });

        ApiService.pegaSugestao(1, 4, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao4: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              manteveData4: {
                labels: [...legenda],
                datasets: [
                  {
                    label: 'Fechamento do dia',
                    data: [...data],
                    backgroundColor: [
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                    ]
                  }
                ]
              }
            })
          });

      });
  }

  render() {
    return (
      <div className="body-homePerfil">
        <div className="row">
          <div className="col-12">
            <SideBar perfil={this.state} email={this.props.location.state.email} token={ this.props.location.state.token } />
          </div>
        </div>
        {/*<form className="form-inline my-2 my-lg-0 searchPosition">*/}
        {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
        {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
        {/*</form>*/}
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Sugestão de investimento</h1>
          </div>
        </div>
        <div class="card cardSugestao">
          <div class="card-header cardHeader">
            <button type="button" class="btn btn-dark ml-3">
              <Link className="text" to={{ pathname: '/sugestaoInvestimento', state: { email: this.props.location.state.email , token:this.props.location.state.token} }}>
                Investimento que juros mais subiram
              </Link>
            </button>
            <button type="button" class="btn btn-dark ml-3">
              <Link to={{ pathname: '/investimentoSeguro', state: { email: this.props.location.state.email, token:this.props.location.state.token,  } }} className="text">
                Investimento que os juros se manteve
              </Link>
            </button>
            <button type="button" class="btn btn-dark ml-3">
              <Link to={{ pathname: '/sugestaoP', state: { email: this.props.location.state.email, token:this.props.location.state.token,  } }} className="text">
                Sugestao Personalizada
              </Link>
            </button>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao1}</h5>
                  <div className="card-body">
                    <ManteveChart manteveData={this.state.manteveData}/>
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao2}</h5>
                  <div className="card-body">
                    <ManteveChart2 manteveData2={this.state.manteveData2}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao3}</h5>
                  <div className="card-body">
                    <ManteveChart3 manteveData3={this.state.manteveData3}/>
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao4}</h5>
                  <div className="card-body">
                    <ManteveChart4 manteveData4={this.state.manteveData4}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default investimentoSeguro;
