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
import PieChart from './PieChart';
import { formatarData } from './helpers';



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
    ApiService.buscarPerfil(this.props.location.state.email)
      .then(res => res.json())
      .then(res => {
        this.setState({
          id: res.id,
          nome: res.nome,
          estado: res.estado,
          endereco: res.endereco,
          idade: res.idade,
          sexo: res.sexo,
          telefone: res.telefone
        });

        ApiService.pegaSugestao(69)
        .then(res =>{
          let legenda = []
          let data = []
          Array.from(res).reverse().forEach(function(y){
            legenda.push(formatarData(y.data))
            data.push(y.fechamentoAjustado)

          })
          this.setState({
            sugestaoData:{
              labels:[...legenda],
              datasets:[
                  {
                     label:'Fechamento do dia',
                     data:[...data],
                     backgroundColor:[
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

          ApiService.pegaSugestao(97)
        .then(res =>{
          let legenda = []
          let data = []
          Array.from(res).reverse().forEach(function(y){
            legenda.push(formatarData(y.data))
            data.push(y.fechamentoAjustado)

          })
          this.setState({
            sugestaoData2:{
              labels:[...legenda],
              datasets:[
                  {
                     label:'Fechamento do dia',
                     data:[...data],
                     backgroundColor:[
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

          ApiService.pegaSugestao(33)
        .then(res =>{
          let legenda = []
          let data = []
          Array.from(res).reverse().forEach(function(y){
            legenda.push(formatarData(y.data))
            data.push(y.fechamentoAjustado)

          })
          this.setState({
            sugestaoData3:{
              labels:[...legenda],
              datasets:[
                  {
                     label:'Fechamento do dia',
                     data:[...data],
                     backgroundColor:[
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

          ApiService.pegaSugestao(81)
        .then(res =>{
          let legenda = []
          let data = []
          Array.from(res).reverse().forEach(function(y){
            legenda.push(formatarData(y.data))
            data.push(y.fechamentoAjustado)

          })
          this.setState({
            sugestaoData4:{
              labels:[...legenda],
              datasets:[
                  {
                     label:'Fechamento do dia',
                     data:[...data],
                     backgroundColor:[
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
            <SideBar perfil={this.state} email={this.props.location.state.email} />
          </div>
        </div>
        {/*<form className="form-inline my-2 my-lg-0 searchPosition">*/}
        {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
        {/*  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
        {/*</form>*/}
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Sugestão de investimento {this.state.nome}</h1>
          </div>
        </div>
        <div class="card cardSugestao">
          <div class="card-header cardHeader">
            <button type="button" class="btn btn-dark ml-3"><Link to="/" className="text">Investimento que juros mais subiram</Link></button>
            <button type="button" class="btn btn-dark ml-3">
              <Link className="text" to={{ pathname: '/investimentoSeguro', state: { email: this.props.email } }}>
                Investimento que os juros se manteve
              </Link>
            </button>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">Iochpe Maxion SA</h5>
                  <div className="card-body">
                    <SugestaoChart sugestaoData={this.state.sugestaoData}/>
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">WEG</h5>
                  <div className="card-body">
                    <SugestaoChart2 sugestaoData2={this.state.sugestaoData2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">AMBEV S.A</h5>
                  <div className="card-body">
                    <SugestaoChart3 sugestaoData3={this.state.sugestaoData3} />
                  </div>
                </div>
              </div>
              <div className="col-6 graficoSugestao mt-5">
                <div className="card car graficoSugestao">
                  <h5 className="card-header labelgraph">Oi</h5>
                  <div className="card-body">
                    <SugestaoChart4 sugestaoData4={this.state.sugestaoData4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default sugestaoInvestimento;
