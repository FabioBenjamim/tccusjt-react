import React, { Component } from 'react';
import './App.css';
import SideBar from './sidebar';
import ApiService from './ApiService';
import ListaTop5 from './ListaTop5';
import './index.css';
import top5 from './images/top5.png';
import LineChart from './LineChart';
import PieChart from './PieChart';
import DolarChart from './DolarChart';
import { formatarData } from './helpers';
import conservador from './images/Conservador.png';
import moderado from './images/Moderado.png';
import agressivo from './images/Agressivo.png';
import logo from './images/Logo.png';

class homePerfil extends Component {

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
      top5: [],
      token: ""
    }
  }

  componentDidMount() {
    console.log(this.props.location.state.token)
    ApiService.buscarPerfil(this.props.location.state.email,this.props.location.state.token)
      .then(res => res.json())
      .then(res => {
        console.log(res)
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

        ApiService.montarGrafico(res.id, this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            Array.from(res).forEach(function (y) {
              legenda.push(y.investimento.nome)
              data.push(y.valor)

            })
            this.setState({
              chartData: {
                labels: [...legenda],
                datasets: [
                  {
                    label: 'Teste',
                    data: [...data],
                    backgroundColor: [
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(33, 162, 70, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(75, 192, 192, 0.6)'
                    ]
                  }
                ]
              }
            })
          });

        ApiService.pegaDolar(this.props.location.state.token)
          .then(res => {
            let legenda = []
            let data = []
            Array.from(res).reverse().forEach(function (y) {
              legenda.push(formatarData(y.data))
              data.push(y.fechamento)

            })
            this.setState({
              dolarData: {
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

        ApiService.top5(res.id, this.props.location.state.token)
          .then(res => {
            this.setState({
              top5: [...this.state.top5, ...res]
            })
          })
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
        {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
        {/*  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
        {/*</form>*/}
        <div id="page-wrap">
          <div>
            <h1 className="welcome">Bem vindo, {this.state.nome}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 graficos mt-5">
            <div className="card car grafico">
              <h5 className="card-header labelgraph">Rendimento total</h5>
              <div className="card-body">
                <PieChart chartData={this.state.chartData} />
              </div>
            </div>
          </div>
          <div className="col-6 graficos2 mt-5">
            <div className="card car grafico2">
              <h5 className="card-header labelgraph">Investimento mais rentável</h5>
              <div className="card-body">
                <LineChart chartData={this.state.chartData} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 graficos mt-5">
            <div className="card car grafico3">
              <h5 className="card-header labelgraph">Cotação do Dólar</h5>
              <div className="card-body">
                <DolarChart dolarData={this.state.dolarData} />
              </div>
            </div>
          </div>
          <div className="col-6 graficos2 mt-5">
            <div className="card top5">
              <h5 className="card-header topHeader labelgraph">Top 5 Investimentos</h5>
              <img className='iconTop5 displayed coroa' src={top5} />
              <div className="card-body">
                <ListaTop5 top5={this.state.top5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default homePerfil;
/*
chartData:{
  labels:[
     'Ação', 'Bolsa de valores', 'Título',
     'Investimento', 'Ação 2'
  ],
  datasets:[
      {
         label:'Teste',
         data:[
             13,
             61,
             43,
             96,
             74
         ],
         backgroundColor:[
             'rgba(33, 162, 70, 0.6)',
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(75, 192, 192, 0.6)'
         ]
      }
  ]
 }


 chartData:{
  labels:[...legenda] ,
  datasets:[
   {
      label:'Teste',
      data:[...data],
      backgroundColor:[
          'rgba(33, 162, 70, 0.6)'
      ]
   }
  ]
}*/
