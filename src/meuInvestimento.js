import React, { Component, Fragment } from 'react';
import SideBar from './sidebar';
import ApiService from './ApiService';
import Tabela from './corpoTabela';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acoes from './acoes';
import Cardinvestimento from './CardCadastroInvestimento';
import conservador from './images/Conservador.png';
import moderado from './images/Moderado.png';
import agressivo from './images/Agressivo.png';
import logo from './images/Logo.png';

class meuInvestimento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            estado: '',
            endereco: '',
            idade: '',
            sexo: '',
            telefone: '',
            investimentos: [],
            descricao: 'nulo',
            data: '',
            dataVencimento: '',
            id_investimento: '',
            taxaPorcentagem: '',
            nomeTipoTaxa: '',
            acoes: []
        }
    }

    componentDidMount() {
        ApiService.buscarPerfil(this.props.location.state.email, this.props.location.state.token)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id: res.id,
                    nome: res.nome,
                    estado: res.estado,
                    endereco: res.endereco,
                    idade: res.idade,
                    sexo: res.sexo,
                    telefone: res.telefone,
                    tipoInvestidor: res.perfilInvestidor
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
                
                ApiService.buscarInvestimentos(res.id, this.props.location.state.token)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        this.setState({ investimentos: [...this.state.investimentos, ...res] })
                        console.log(this.state.investimentos)
                        console.log(res)
                    });
            });

        ApiService.buscaTodosInventimentos(this.props.location.state.token)
            .then(res => res.json())
            .then(res => {
                this.setState({ acoes: [...this.state.acoes, ...res] })
            });
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    chamarApi = dale => {
        ApiService.prever(this.state.id_investimento, this.state.data, this.props.location.state.token)
            .then(res => {
                this.setState({
                    descricao: res.valor
                })
            })
    }

    setaDescricao = linha => {
        this.setState({
            id_investimento: linha.id,
            descricao: linha.valor
        })
    }

    novoInvestimento = investimento => {
        this.setState({
            investimentos: [...this.state.investimentos, investimento]
        })
    }

    removeAutor = (investimentoss, id) => {

        const { investimentos } = this.state;

        const investimentosAtualizado = investimentos.filter(investimento => {
            return investimento.id !== id
        })
        ApiService.deleteInvestimento(id,this.props.location.state.token)
            .then(res => {
                if (res.ok) {
                    this.setState({
                        investimentos: [...investimentosAtualizado]
                    })
                }
            })

    }

    pegaValorMinimo = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        let pegaValorMinimo = this.state.acoes.filter(acao => {
            return console.log(this.state.id_acao)
        })
    }

    alertDescrição = () => {
        alert('Salve');
    }

    render() {
        return (
            <Fragment>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <SideBar perfil={this.state} email={this.props.location.state.email} token={ this.props.location.state.token } />
                <div className="row">
                    <div className="col-10 graficos mt-5">
                        <div className="card car grafico">
                            <h5 className="card-header labelgraph">Carteira de Investimentos</h5>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col-3">#</th>
                                            <th scope="col-1">Nome</th>
                                            <th scope="col-3">Valor</th>
                                            <th scope="col-3">Data de inclusão</th>
                                            <th scope="col-3">Data de vencimento</th>
                                            <th scope="col">Tipo de investimento</th>
                                            <th scope="col-3">Taxa aplicada</th>
                                            <th scope="col-3">Porcentagem da taxa</th>
                                            <th scope="col-3">Previsão</th>
                                            <th scope="col-3">Remover</th>
                                        </tr>
                                    </thead>
                                    <Tabela investimentos={this.state.investimentos} removeAutor={this.removeAutor} setaDescricao={this.setaDescricao} />
                                </table>
                                <div className="">
                                    <div className="botao-direita">
                                        <div className="col">
                                            <button className="btn btn-dark" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Cadastrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse card car grafico mt-5 mb-5" id="collapseExample">
                            <h5 className="card-header labelgraph">Cadastrar Investimento</h5>

                            <div className="card-body">

                                <Acoes acoes={this.state.acoes} escutadorDeInput={this.escutadorDeInput} pegaValorMinimo={this.pegaValorMinimo} token={ this.props.location.state.token }/>
                                <Cardinvestimento novoInvestimento={this.novoInvestimento} escutadorDeInput={this.escutadorDeInput} stateAntigo={this.state} token={ this.props.location.state.token } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">A previsão do investimento para a data selecionada é de R${this.state.descricao}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type='date' name='data' onChange={this.escutadorDeInput} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.chamarApi}>Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default meuInvestimento;