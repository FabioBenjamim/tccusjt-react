import './App.css';
import { fallDown as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import logo from './images/Logo.png';
import { Link, Redirect} from 'react-router-dom';

class SideBar extends Component {
    constructor(props){
      super(props)
      this.state = {
        nome: '',
        estado: '',
        endereco: '',
        idade: '',
        sexo: '',
        telefone: ''
      }
    }

    render(){
      return(
        <div className="row">
        <Menu>
      <div>
        <img className='iconUser displayed' src={ logo }/>
        <a className="menu-item text-menu-bar" href="/" >
        <p className="text-center">Nome: {this.props.perfil.nome}</p>
        </a>
      </div>
      <a className="menu-item" href="/">
        Home
      </a>

      <Link className="menu-item" to={{ pathname: '/homePerfil',
      state: {
        email: this.props.email
      } }}>
        Minha Conta
      </Link>

      <Link className="menu-item" to={{ pathname: '/meuInvestimento',
      state: {
        email: this.props.email
      } }}>
        Meus Investimentos
      </Link>

      <Link className="menu-item" to={{ pathname: '/sugestaoInvestimento',
      state: {
        email: this.props.email
      } }}>
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