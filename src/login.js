import React, { Component } from 'react';
import image from './images/Logo.png'
import { Link, Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import './App.css';

var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.stateLogin = {
      email: '',
      senha: '',
      redirect: false,
      pathname: '',
      token: ''
    }
    this.state = this.stateLogin;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitFormulario = () => {
    ApiService.pegaToken(this.state.email, this.state.senha)
      .then(res => res.json())
      .then(res => {
        if (res.access_token != null) {
          this.props.usuario.email = this.state.email
          this.props.usuario.senha = this.state.senha
          this.props.usuario.token = res.access_token
          ApiService.buscarPerfil(this.props.usuario.email, "Bearer " + res.access_token)
            .then(res => res.json())
            .then(res => (res.perfilInvestidor))
            .then(perfilInvestidor => {
              if (perfilInvestidor) {
                this.setState({ pathname: '/homePerfil' })
              } else {
                this.setState({ pathname: '/formulario' })
              }
              this.setState({ redirect: true })
            })
        } else {
          alert('Falha ao fazer Login');
        }
      });
      console.log(this.state)
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.pathname,
        state: {
          email: this.props.usuario.email,
          senha: this.props.usuario.senha,
          token: "Bearer " + this.props.usuario.token
        }
      }} />
    } else
      return (
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-1">
                <Link to="/" className="text-barra">LOGIN</Link>
                <Link to={{ pathname: '/cadastro' }} className="text">CADASTRO</Link>
              </div>
            </div>
            <div className="">
              <div className="row">
                <div className="col-5 mt-5">
                  <input className=" form-control border-top-0 border-left-0 border-right-0 bor-col"
                    type="text"
                    autoFocus
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={this.escutadorDeInput}
                  />
                  <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col"
                    name="senha"
                    placeholder="Senha"
                    autoComplete="off"
                    type="password"
                    onChange={this.escutadorDeInput}
                  />
                  <a className="text-links" href="/">ESQUECI MINHA SENHA</a>
                  <div className="row">
                    <div className="col botao-centro">
                      <button onClick={ this.submitFormulario } className="btn btn-dark botao mt-5">ENTRAR</button>
                    </div>
                  </div>
                </div>
                <div className="col-5 logo-meio">
                  <img src={image} alt="Logo da empresa" style={style}></img>
                  <p className="nome-empresa">ALGO ALTAMENTE PERSUASIVO E MOTIVACIONAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Login;
