import React, { Component, Fragment } from 'react';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import SideBar from './sidebar';
import ApiService from './ApiService';
import './index.css';
import SugestaoChart from './SugestaoChart';
import SugestaoChart2 from './SugestaoChart2';
import SugestaoChart3 from './SugestaoChart3';
import SugestaoChart4 from './SugestaoChart4';
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


class sugestaoInvestimento extends Component {

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

        ApiService.pegaSugestao(2, 1, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao1: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              sugestaoData: {
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

        ApiService.pegaSugestao(2, 2, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao2: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              sugestaoData2: {
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

        ApiService.pegaSugestao(2, 3, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao3: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              sugestaoData3: {
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

        ApiService.pegaSugestao(2, 4, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            this.setState( { sugestao4: res[0].investimento.nome } )
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamentoAjustado)

            })
            this.setState({
              sugestaoData4: {
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
            <SideBar perfil={this.state} email={this.props.location.state.email} token={ this.props.location.state.token }/>
          </div>
        </div>
        {/*<form className="form-inline my-2 my-lg-0 searchPosition">*/}
        {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
        {/*  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
        {/*</form>*/}
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Sugestão de investimento</h1>
          </div>
        </div>
        <div class="card cardSugestao">
          <div class="card-header cardHeader">
            <button type="button" class="btn btn-dark ml-3">
              <Link to={{ pathname: '/sugestaoInvestimento', state: { email: this.props.location.state.email, token: this.props.location.state.token, id: this.props.location.state.id } }} className="text">
                Investimento que juros mais subiram
              </Link>
            </button>
            <button type="button" class="btn btn-dark ml-3">
              <Link className="text" to={{ pathname: '/investimentoSeguro', state: { email:this.props.location.state.email, token: this.props.location.state.token, id: this.props.location.state.id } }}>
                Investimento que os juros se manteve
              </Link>
            </button>
           < button type="button" class="btn btn-dark ml-3">
              <Link to={{ pathname: '/sugestaoP', state: { email: this.props.location.state.email, token:this.props.location.state.token, id: this.props.location.state.id } }} className="text">
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
                    <SugestaoChart sugestaoData={this.state.sugestaoData}/>
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao2}</h5>
                  <div className="card-body">
                    <SugestaoChart2 sugestaoData2={this.state.sugestaoData2}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao3}</h5>
                  <div className="card-body">
                    <SugestaoChart3 sugestaoData3={this.state.sugestaoData3}/>
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">{this.state.sugestao4}</h5>
                  <div className="card-body">
                    <SugestaoChart4 sugestaoData4={this.state.sugestaoData4}/>
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

export default sugestaoInvestimento;
