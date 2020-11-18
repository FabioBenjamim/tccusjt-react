import React, { Component } from 'react';
import image from './images/Logo.png'
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import { validate } from 'gerador-validador-cpf';


var style = {
  width: '80%',
  heigth: '80%',
  marginLeft: '20%'
}


class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.stateLogin = {
      cpf: '',
      email: '',
      senha: '',
      nome: '',
      estado: 'AC',
      endereco: '',
      idade: '',
      sexo: 'Masculino',
      telefone: '',
      mensagemErro: '',
    }
    this.state = this.stateLogin;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  escutadorDeCpf = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  escutadorDeTell = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  submitFormulario = () => {
    const cpfValido = validate(this.state.cpf);

    if (cpfValido) {
      ApiService.criaUserAuth(JSON.stringify(
        {
          name: this.state.nome,
          email: this.state.email,
          password: this.state.senha,
          roles:[
            "ROLE_ADMIN",
            "ROLE_CLIENT"
          ]
        }
      ))
      .then(res => {
        if(res.ok){
          ApiService.pegaToken(this.state.email,this.state.senha)
          .then(res => res.json() )
          .then(res =>{
            console.log(res.access_token)
            ApiService.cadastraConta(JSON.stringify(
              {
                email: this.state.email,
                senha: this.state.senha,
                perfil: {
                  cpf: this.state.cpf.replaceAll(".", "").replaceAll("-", ""),
                  nome: this.state.nome,
                  estado: this.state.estado,
                  endereco: this.state.endereco,
                  idade: this.state.idade,
                  sexo: this.state.sexo,
                  telefone: this.state.telefone
                }
              }),"Bearer " + res.access_token)
              .then(res => {
                if (res.ok) {
                  alert("conta criada com sucesso");
                  return <Redirect to="/"></Redirect>
                } else
                  alert("erro ao tentar criar a conta");
                console.log(this.state)
              })
          })
        }
      })
    } else {
      alert('CPF inválido')
    }
  }

  testaCPF = (strCPF) => {
    let Soma = 0;
    let Resto;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  render() {
    return (
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
                    onChange={this.escutadorDeInput}
                    required
                  />
                  <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col"
                    name="senha"
                    placeholder="Senha"
                    autoComplete="off"
                    type="password"
                    onChange={this.escutadorDeInput}
                    required
                  />
                  <p className="text-cadastro mt-5">DADOS PESSOAIS</p>
                  <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col"
                    name="nome"
                    placeholder="Nome Completo"
                    autoComplete="off"
                    type="text"
                    onChange={this.escutadorDeInput}
                    required
                  />
                  <div className="row mt-5">
                    <div className="col-8">
                      <input type="text"
                        name="endereco"
                        className="form-control"
                        placeholder="Endereco"
                        autoComplete="off"
                        onChange={this.escutadorDeInput}
                        required
                      />
                    </div>
                    <select required onChange={this.escutadorDeInput} name="estado">
                      <option value="Acre">AC</option>
                      <option value="Alagoas">AL</option>
                      <option value="Amapa">AP</option>
                      <option value="Amazonas">AM</option>
                      <option value="Bahia">BA</option>
                      <option value="Ceara">CE</option>
                      <option value="Distrito Federal">DF</option>
                      <option value="Espirito Santo">ES</option>
                      <option value="Goias">GO</option>
                      <option value="Maranhao">MA</option>
                      <option value="Mato Grosso">MT</option>
                      <option value="Mato Grosso do Sul">MS</option>
                      <option value="Minas Gerais">MG</option>
                      <option value="Para">PA</option>
                      <option value="Paraiba">PB</option>
                      <option value="Parana">PR</option>
                      <option value="Pernambuco">PE</option>
                      <option value="Piaui">PI</option>
                      <option value="Rio De Janeiro">RJ</option>
                      <option value="Rio Grande Do Norte">RN</option>
                      <option value="Rio Grande Do Sul">RS</option>
                      <option value="Rondonia">RO</option>
                      <option value="Roraima">RR</option>
                      <option value="Santa Catarina">SC</option>
                      <option value="Sao Paulo">SP</option>
                      <option value="Sergipe">SE</option>
                      <option value="Tocantins">TO</option>
                    </select>
                  </div>
                  <div className="row mt-5">
                    <div className="col-4">
                      <input type="text"
                        name="telefone"
                        className="form-control"
                        placeholder="Telefone"
                        autoComplete="off"
                        onChange={this.escutadorDeTell}
                        required
                      />
                    </div>
                    <div className="col-4">
                      <input type="text"
                        className="form-control"
                        name="idade"
                        placeholder="Idade"
                        autoComplete="off"
                        onChange={this.escutadorDeInput}
                        required
                      />
                    </div>
                    <select required onChange={this.escutadorDeInput} name="sexo">
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input className=" mt-5 form-control border-top-0 border-left-0 border-right-0 bor-col cpf-mask"
                        type="text"
                        name="cpf"
                        maxLength="14"
                        placeholder="CPF"
                        autoComplete="off"
                        onChange={this.escutadorDeCpf}
                        minLength="11"
                        maxLength="11"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col botao-centro">
                      <button onClick={this.submitFormulario} className="btn btn-dark botao mt-5">CADASTRAR</button>
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
      </div>
    );
  }
}
export default Cadastro;
