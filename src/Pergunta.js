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
import 'bootstrap/dist/css/bootstrap.min.css';

class Pergunta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pergunta: this.props.perguntaEstado
    }
  }

  render() {
    return (
      <div className="pergunta">
        <p>{this.props.pergunta}</p>

        <input type="radio" id={`${this.props.name}-1`} name={this.props.name} value="1" onClick={this.props.setResposta} />
        <label for={`${this.props.name}-1`}>
          {this.props.resposta01}
        </label>

        <input type="radio" id={`${this.props.name}-2`} name={this.props.name} value="2" onClick={this.props.setResposta} />
        <label for={`${this.props.name}-2`}>
          {this.props.resposta02}
        </label>

        <input type="radio" id={`${this.props.name}-3`} name={this.props.name} value="3" onClick={this.props.setResposta} />
        <label for={`${this.props.name}-3`}>
          {this.props.resposta03}
        </label>
      </div>
    );
  }
}

export default Pergunta;
