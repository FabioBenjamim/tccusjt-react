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
import ListaTop5 from './ListaTop5';


var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
}


class sugestaoP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome: '',
      estado: '',
      endereco: '',
      idade: '',
      sexo: '',
      telefone: '',
      top5: []
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

        if (this.state.tipoInvestidor == "Conservador") {
          this.setState({
            ibagen: conservador
          })
        } else if (this.state.tipoInvestidor == "Diversificado") {
          this.setState({
            ibagen: moderado
          })
        } else if (this.state.tipoInvestidor == "Agressivo") {
          this.setState({
            ibagen: agressivo
          })
        }
        else {
          this.setState({
            ibagen: logo
          })
        }

        if (this.state.tipoInvestidor != "Conservador") {
          ApiService.pegaSugestaoP(this.state.id, 0, this.props.location.state.token)
            .then(res => {
              let legenda = []
              let data = []
              this.setState({ sugestao1: res.acoes[0].investimento.nome })
              Array.from(res.acoes).reverse().forEach(function (y) {
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

          ApiService.pegaSugestaoP(this.state.id, 1, this.props.location.state.token)
            .then(res => {
              let legenda = []
              let data = []
              this.setState({ sugestao2: res.acoes[0].investimento.nome })
              Array.from(res.acoes).reverse().forEach(function (y) {
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

          ApiService.pegaSugestaoP(this.state.id, 2, this.props.location.state.token)
            .then(res => {
              let legenda = []
              let data = []
              this.setState({ sugestao3: res.acoes[0].investimento.nome })
              Array.from(res.acoes).reverse().forEach(function (y) {
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

          ApiService.pegaSugestaoP(this.state.id, 3, this.props.location.state.token)
            .then(res => {
              let legenda = []
              let data = []
              this.setState({ sugestao4: res.acoes[0].investimento.nome })
              Array.from(res.acoes).reverse().forEach(function (y) {
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
        } else {
          ApiService.top5P(this.state.id, 0, this.props.location.state.token)
            .then(res => {
              this.setState({
                top1N: res.investimento.nome,
                top1T: res.investimento.tipoInvestimento.nome,
                top1V: res.valor,
                top1R: res.risco
              })
              ApiService.top5P(this.state.id, 1, this.props.location.state.token)
            .then(res => {
              this.setState({
                top2N: res.investimento.nome,
                top2T: res.investimento.tipoInvestimento.nome,
                top2V: res.valor,
                top2R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 2, this.props.location.state.token)
            .then(res => {
              this.setState({
                top3N: res.investimento.nome,
                top3T: res.investimento.tipoInvestimento.nome,
                top3V: res.valor,
                top3R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 3, this.props.location.state.token)
            .then(res => {
              this.setState({
                top4N: res.investimento.nome,
                top4T: res.investimento.tipoInvestimento.nome,
                top4V: res.valor,
                top4R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 4, this.props.location.state.token)
            .then(res => {
              this.setState({
                top5N: res.investimento.nome,
                top5T: res.investimento.tipoInvestimento.nome,
                top5V: res.valor,
                top5R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 5, this.props.location.state.token)
            .then(res => {
              this.setState({
                top6N: res.investimento.nome,
                top6T: res.investimento.tipoInvestimento.nome,
                top6V: res.valor,
                top6R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 6, this.props.location.state.token)
            .then(res => {
              this.setState({
                top7N: res.investimento.nome,
                top7T: res.investimento.tipoInvestimento.nome,
                top7V: res.valor,
                top7R: res.risco
              })
            })
            ApiService.top5P(this.state.id, 7, this.props.location.state.token)
            .then(res => {
              this.setState({
                top8N: res.investimento.nome,
                top8T: res.investimento.tipoInvestimento.nome,
                top8V: res.valor,
                top8R: res.risco
              })
            })
            })
        }
      });
  }

  render() {
    if (this.state.tipoInvestidor != "Conservador") {
      return (
        <div className="body-homePerfil">
          <div className="row">
            <div className="col-12">
              <SideBar perfil={this.state} email={this.props.location.state.email} token={this.props.location.state.token} />
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
                <Link className="text" to={{ pathname: '/sugestaoInvestimento', state: { email: this.props.location.state.email, token: this.props.location.state.token } }}>
                  Investimento que juros mais subiram
              </Link>
              </button>
              <button type="button" class="btn btn-dark ml-3">
                <Link to={{ pathname: '/investimentoSeguro', state: { email: this.props.location.state.email, token: this.props.location.state.token } }} className="text">
                  Investimento que os juros se manteve
              </Link>
              </button>
              < button type="button" class="btn btn-dark ml-3">
                <Link to={{ pathname: '/sugestaoP', state: { email: this.props.location.state.email, token: this.props.location.state.token } }} className="text">
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
                      <ManteveChart manteveData={this.state.manteveData} />
                    </div>
                  </div>
                </div>
                <div className="col-6 graficoSugestao mt-5">
                  <div className="card car graficoSugestao">
                    <h5 className="card-header labelgraph">{this.state.sugestao2}</h5>
                    <div className="card-body">
                      <ManteveChart2 manteveData2={this.state.manteveData2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 graficoSugestao mt-5">
                  <div className="card car graficoSugestao">
                    <h5 className="card-header labelgraph">{this.state.sugestao3}</h5>
                    <div className="card-body">
                      <ManteveChart3 manteveData3={this.state.manteveData3} />
                    </div>
                  </div>
                </div>
                <div className="col-6 graficoSugestao mt-5">
                  <div className="card car graficoSugestao">
                    <h5 className="card-header labelgraph">{this.state.sugestao4}</h5>
                    <div className="card-body">
                      <ManteveChart4 manteveData4={this.state.manteveData4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className="body-homePerfil">
            <div className="row">
              <div className="col-12">
                <SideBar perfil={this.state} email={this.props.location.state.email} token={this.props.location.state.token} />
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
                  <Link className="text" to={{ pathname: '/sugestaoInvestimento', state: { email: this.props.location.state.email, token: this.props.location.state.token } }}>
                    Investimento que juros mais subiram
              </Link>
                </button>
                <button type="button" class="btn btn-dark ml-3">
                  <Link to={{ pathname: '/investimentoSeguro', state: { email: this.props.location.state.email, token: this.props.location.state.token } }} className="text">
                    Investimento que os juros se manteve
              </Link>
                </button>
                < button type="button" class="btn btn-dark ml-3">
                  <Link to={{ pathname: '/sugestaoP', state: { email: this.props.location.state.email, token: this.props.location.state.token } }} className="text">
                    Sugestao Personalizada
              </Link>
                </button>
              </div>
              <div class="card-body">
                <div className="col-11 mt-5 ml-5 mb-5">
                  <div className="card ">
                    <h5 className="card-header topHeader labelgraph">Sugestao Personalizada</h5>
                    <div className="card-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col-3">Valor</th>
                            <th scope="col-3">Nome</th>
                            <th scope="col-3">Tipo</th>
                            <th scope="col-3">Risco</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr >
                            <td>{this.state.top1V}</td>
                            <td>{this.state.top1N}</td>
                            <td>{this.state.top1T}</td>
                            <td>{this.state.top1R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top2V}</td>
                            <td>{this.state.top2N}</td>
                            <td>{this.state.top2T}</td>
                            <td>{this.state.top2R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top3V}</td>
                            <td>{this.state.top3N}</td>
                            <td>{this.state.top3T}</td>
                            <td>{this.state.top3R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top4V}</td>
                            <td>{this.state.top4N}</td>
                            <td>{this.state.top4T}</td>
                            <td>{this.state.top4R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top5V}</td>
                            <td>{this.state.top5N}</td>
                            <td>{this.state.top5T}</td>
                            <td>{this.state.top5R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top6V}</td>
                            <td>{this.state.top6N}</td>
                            <td>{this.state.top6T}</td>
                            <td>{this.state.top6R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top7V}</td>
                            <td>{this.state.top7N}</td>
                            <td>{this.state.top7T}</td>
                            <td>{this.state.top7R}</td>
                          </tr>
                          <tr >
                            <td>{this.state.top8V}</td>
                            <td>{this.state.top8N}</td>
                            <td>{this.state.top8T}</td>
                            <td>{this.state.top8R}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default sugestaoP;