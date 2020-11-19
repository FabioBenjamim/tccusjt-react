import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar';
import imagem from './images/Milkes.png'
import homePerfil from './homePerfil';
import conservador from './images/Conservador.png';
import moderado from './images/Moderado.png';
import agressivo from './images/Agressivo.png';
import logo from './images/Logo.png';

class Configuracoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cpf: '',
            email: '',
            senha: '',
            nome: '',
            estado: 'AC',
            endereco: '',
            idade: '',
            sexo: 'Masculino',
            telefone: '',
            nome: '',
            tipoInvestidor: '',
            redirecionar: '',
            ibagen: ''
        }
    }

    componentDidMount() {
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
                    tipoInvestidor: res.perfilInvestidor,
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
            }
            )

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

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    redirecionarFormulario = () => {
        this.setState({ redirecionar: true });
    }

    submitFormulario = () => {
        ApiService.atualizaPerfil(JSON.stringify(
            {
                    id: this.state.id,
                    nome: this.state.nome,
                    estado: this.state.estado,
                    endereco: this.state.endereco,
                    idade: this.state.idade,
                    sexo: this.state.sexo,
                    telefone: this.state.telefone
            }),this.props.location.state.token)
            .then(res => {
                if (res.ok) {
                  alert("conta atualizada com sucesso");
                } else
                  alert("erro ao tentar atualizar a conta");
              })
          }

    render() {
        if (this.state.redirecionar) {
            return <Redirect to={{
                pathname: '/Formulario',
                state: {
                    email: this.props.location.state.email,
                    token: this.props.location.state.token
                }
            }} />
        } else {
            return (
                <Fragment>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <SideBar perfil={this.state} email={this.props.location.state.email} token={this.props.location.state.token}/>
                    <div className="row">
                        <div className="col-10 graficos mt-5">
                            <div className="card car grafico">
                                <h5 className="card-header labelgraph">Configurações</h5>
                                <div className="card-body">
                                    <div className="">
                                        <div className="botao-direita">
                                            <div className="col">
                                                <img className='imgperfil' src={this.state.ibagen} />
                                                <p className="configperfil">Nome: {this.state.nome}</p>
                                                <p className="configperfil">Tipo de Investidor: {this.state.tipoInvestidor}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="botao-direita">
                                            <div className="col">
                                                <button className="btn btn-dark botaodados" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Alterar dados</button>
                                                <button className="btn btn-dark botaodados ml-3" onClick={this.redirecionarFormulario}>Refazer formulário</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="collapse card car grafico mt-5 mb-5" id="collapseExample">
                                <h5 className="card-header labelgraph">Alterar dados do usuário</h5>

                                <div className="card-body">
                                    <p className="text-cadastro mt-5">DADOS PESSOAIS</p>
                                    <input className="mt-5 mb-3 form-control"
                                        name="nome"
                                        placeholder="Nome Completo"
                                        value={this.state.nome}
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
                                                value={this.state.endereco}
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
                                                value={this.state.telefone}
                                                autoComplete="off"
                                                onChange={this.escutadorDeInput}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input type="text"
                                                className="form-control"
                                                name="idade"
                                                placeholder="Idade"
                                                value={this.state.idade}
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
                                </div>
                                <div className="row">
                                    <div className="col botao-centro">
                                        <button onClick={this.submitFormulario} className="btn btn-dark mt-5 mb-3">ENVIAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default Configuracoes;
