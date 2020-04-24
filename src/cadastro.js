import React, { Component } from 'react';
import image from './images/Logo.png'
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import ApiService from './ApiService';

var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
  }

 
class Cadastro extends Component{
  constructor(props){
    super(props)
    
    this.stateLogin = {
      email: this.props.location.state.email,
      senha: this.props.location.state.senha
    }
    this.state = this.stateLogin; 
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;

    this.setState({
        [name]: value
    });
  }

  submitFormulario = () =>{
    ApiService.cadastraConta(JSON.stringify(this.state))
    .then(res => {
      if(res.ok){
        alert("Conta criada com sucesso");
      }else
        alert("error ao criar a conta");
    }
    );
  }

    render(){
    return(
      <div className="body-cadastro">
    <div className="container">
        <div className="">
          <div className="row">
              <div className="col-1">
                <Link to="/" className="text">LOGIN</Link>
                <Link to='/cadastro' className="ml-5 text-barra">CADASTRO</Link>
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
                  onChange= { this.escutadorDeInput }
                  />
                <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col" 
                  name="senha" 
                  placeholder="Senha" 
                  autoComplete="off"
                  type="password"
                  onChange= { this.escutadorDeInput }
                />
                <div className="row">
                  <div className="col botao-centro">
                    <button onClick={ this.submitFormulario } className="botao mt-5">CADASTRAR</button>
                  </div>
                </div>
              </div>
              <div className="col-5">
                  <img src={ image } alt="Logo da empresa" style={ style }></img>
                  <p className="nome-empresa">ALGO ALTAMENTE PERSUASIVO E MOTIVACIONAL</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    );
  }
}
export default Cadastro;