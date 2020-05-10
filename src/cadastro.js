import React, { Component, Fragment } from 'react';
import image from './images/Logo.png'
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import DadosPessoais from './cadastroDadosPessoais'
import ApiService from './ApiService';


var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
  }

 
class Cadastro extends Component{
  constructor(props){
    super(props);
    
    this.stateLogin = {
            cpf: '',
            email: '',
            senha: '',
            nome: '',
            estado: '',
            endereco: '',
            idade: '',
            sexo: '',
            telefone: '' 
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
    ApiService.cadastraConta(JSON.stringify(
        {
          email: this.state.email,
          senha: this.state.senha,
          perfil: {
            cpf: this.state.cpf,
            nome: this.state.nome,
            estado: this.state.estado,
            endereco: this.state.endereco,
            idade: this.state.idade,
            sexo: this.state.sexo,
            telefone: this.state.telefone
          }
        }))
        .then(res =>{
          if(res.ok){
            alert("conta criada com sucesso");
          }else
            alert("erro ao tentar criar a conta");
        })
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
                <p className="text-cadastro">DADOS DE USUARIO</p>
                <input className=" mt-5 form-control border-top-0 border-left-0 border-right-0 bor-col"
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
                <p className="text-cadastro mt-5">DADOS PESSOAIS</p>
                <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col" 
                  name="nome" 
                  placeholder="Nome Completo" 
                  autoComplete="off"
                  type="text"
                  onChange= { this.escutadorDeInput }
                  />
                <div className="row mt-5">
                  <div className="col-8">
                    <input type="text"
                    name="endereco"
                    className="form-control" 
                    placeholder="Endereco"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                  <div className="col-4">
                    <input type="text" 
                    className="form-control"
                    name="estado"
                    placeholder="Estado"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <input type="text"
                    name="telefone"
                    className="form-control" 
                    placeholder="Telefone"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                  <div className="col">
                    <input type="text" 
                    className="form-control"
                    name="idade"
                    placeholder="Idade"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                  <div className="col">
                    <input type="text" 
                    className="form-control"
                    name="sexo"
                    placeholder="Sexo"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <input className=" mt-5 form-control border-top-0 border-left-0 border-right-0 bor-col"
                    type="text"
                    name="cpf" 
                    placeholder="CPF"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                  />
                  </div>
                </div>
                <div className="row">
                  <div className="col botao-centro">
                    <button onClick={ this.submitFormulario } className="btn btn-dark botao mt-5">CADASTRAR</button>
                  </div>
                </div>
              </div>
              <div className="col-5 logo-meio">
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