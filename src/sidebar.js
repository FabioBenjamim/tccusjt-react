import './App.css';
import { fallDown as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import logo from './images/Logo.png';

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

      <a className="menu-item" href="/laravel">
        Minha Conta
      </a>

      <a className="menu-item" href="/angular">
        Meus Investimentos
      </a>

      <a className="menu-item" href="/react">
        Sair
      </a>
    </Menu>
    </div>
      );
    }
    
}

export default SideBar;