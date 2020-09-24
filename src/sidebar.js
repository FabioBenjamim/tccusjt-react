import './App.css';
import { fallDown as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import logo from './images/Agressivo.jpg';
import { Link } from 'react-router-dom';
import ApiService from './ApiService';
import conservador from './images/Conservador.png';

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      estado: '',
      endereco: '',
      idade: '',
      sexo: '',
      telefone: '',
      ibagen: this.props.perfil.ibagen,
      ibagenDaNuvem: null,
      tipoInvestidor: ''
    }
  }

  componentDidMount(){
    console.log(this.props)
  }
  
  pegaIbagen= () =>{
    if(tipoInvestidor == "Conservador"){
            this.setState({
        ibagen: conservador
      })
    }
  }

  render() {
    return (
      <div className="row">
        <Menu>
          <div>
            <img className='iconUser displayed' src={this.props.perfil.ibagen}/>
            <a className="menu-item text-menu-bar" href="/">
              <p className="text-center">Nome: {this.props.perfil.nome}</p>
            </a>
          </div>
          {/*<a className="menu-item" href="/">*/}
          {/*  Home*/}
          {/*</a>*/}

          <Link className="menu-item" to={{
            pathname: '/homePerfil',
            state: {
              email: this.props.email
            }
          }}>
            Minha Conta
          </Link>

          <Link className="menu-item" to={{
            pathname: '/meuInvestimento',
            state: {
              email: this.props.email
            }
          }}>
            Carteira de Investimentos
          </Link>

          <Link className="menu-item" to={{
            pathname: '/sugestaoInvestimento',
            state: {
              email: this.props.email
            }
          }}>
            Sugestão de Investimentos
          </Link>

          <Link className="menu-item" to="/">
            Sair
          </Link>
        </Menu>
      </div>
    );
  }

}

export default SideBar;
