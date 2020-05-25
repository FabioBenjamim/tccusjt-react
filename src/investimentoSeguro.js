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

            ApiService.pegaSugestao(57)
            .then(res =>{
              let legenda = []
              let data = []
              Array.from(res).reverse().forEach(function(y){
                legenda.push(formatarData(y.data))
                data.push(y.fechamentoAjustado)

              })
              this.setState({
                manteveData:{
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

              ApiService.pegaSugestao(51)
            .then(res =>{
              let legenda = []
              let data = []
              Array.from(res).reverse().forEach(function(y){
                legenda.push(formatarData(y.data))
                data.push(y.fechamentoAjustado)

              })
              this.setState({
                manteveData2:{
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

              ApiService.pegaSugestao(55)
            .then(res =>{
              let legenda = []
              let data = []
              Array.from(res).reverse().forEach(function(y){
                legenda.push(formatarData(y.data))
                data.push(y.fechamentoAjustado)

              })
              this.setState({
                manteveData3:{
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

              ApiService.pegaSugestao(59)
            .then(res =>{
              let legenda = []
              let data = []
              Array.from(res).reverse().forEach(function(y){
                legenda.push(formatarData(y.data))
                data.push(y.fechamentoAjustado)

              })
              this.setState({
                manteveData4:{
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
                {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
                {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                {/*</form>*/}
                <div id="page-wrap">
                    <div>
                        <h1 className="welcome">Sugestão de investimento {this.state.nome}</h1>
                    </div>
                </div>
                <div class="card cardSugestao">
                    <div class="card-header cardHeader">
                        <button type="button" class="btn btn-dark ml-3">
                            <Link className="text" to={{ pathname: '/sugestaoInvestimento', state: { email: this.props.email } }}>
                            Investimento que juros mais subiram
                            </Link>
                        </button>
                        <button type="button" class="btn btn-dark ml-3"><Link to="/" className="text">Investimento que os juros se manteve</Link></button>
                </div>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6 graficoSugestao mt-5">
                            <div className="card car graficoSugestao">
                                <h5 className="card-header labelgraph">Rendimento total</h5>
                                <div className="card-body">
                                    <ManteveChart manteveData={this.state.manteveData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 graficoSugestao mt-5">
                            <div className="card car graficoSugestao">
                                <h5 className="card-header labelgraph">Investimento mais rentável</h5>
                                <div className="card-body">
                                    <ManteveChart2 manteveData2={this.state.manteveData2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 graficoSugestao mt-5">
                            <div className="card car graficoSugestao">
                                <h5 className="card-header labelgraph">Rendimento total</h5>
                                <div className="card-body">
                                    <ManteveChart3 manteveData3={this.state.manteveData3}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 graficoSugestao mt-5">
                            <div className="card car graficoSugestao">
                                <h5 className="card-header labelgraph">Rendimento total</h5>
                                <div className="card-body">
                                    <ManteveChart4 manteveData4={this.state.manteveData4} />
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
export default investimentoSeguro;
