import './App.css';
import { fallDown as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import conservador from './images/Conservador.png';
import moderado from './images/Moderado.png';
import agressivo from './images/Agressivo.png';
import logo from './images/Logo.png';


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
    this.setState( { tipoInvestidor: this.props.perfil.tipoInvestidor } ) 
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
  }

  render() {
    return (
      <div className="row">
        <Menu>
          <div>
            <img className='iconUser displayed' style={{borderRadius: '50%'}}  src={this.props.perfil.ibagen}/>
            <a className="menu-item text-menu-bar" href="/">
              <p className="text-center">Tipo de Investidor: {this.props.perfil.tipoInvestidor}</p>
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

          <Link className="menu-item" to={{
            pathname: '/Configuracoes',
            state: {
              email: this.props.email
            }
          }}>
            Configurações
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
