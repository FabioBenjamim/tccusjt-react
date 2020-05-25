import React, { Component, Fragment } from 'react';
import SideBar from './sidebar';
import ApiService from './ApiService';
import Tabela from './corpoTabela';
import 'bootstrap/dist/css/bootstrap.min.css';

class meuInvestimento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            nome: '',
            estado: '',
            endereco: '',
            idade: '',
            sexo: '',
            telefone: '',
            investimentos: [
            ],
            descricao: 'nulo',
            data: '',
            id_investimento:''
        }
    }

    componentDidMount() {
        ApiService.buscarPerfil(this.props.location.state.email)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id: res.id,
                    nome: res.nome,
                    estado: res.estado,
                    endereco: res.endereco,
                    idade: res.idade,
                    sexo: res.sexo,
                    telefone: res.telefone
                });
                ApiService.buscarInvestimentos(res.id)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({ investimentos: [...this.state.investimentos, ...res] })
            console.log(this.state.investimentos)
            console.log(res)
        });
            });
        
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
          this.setState({
              [name]: value
          });     
    }

    chamarApi = dale =>{
        ApiService.prever(this.state.id_investimento, this.state.data)
        .then(res => {
            this.setState({
                descricao: res.valor
            })
        })
    }

    setaDescricao = linha =>{
      this.setState({
          id_investimento: linha.id,
          descricao: linha.valor
      })
    }

    removeAutor = (investimentoss, id) => {

        const { investimentos } = this.state;

        const investimentosAtualizado = investimentos.filter(investimento => {
            return investimento.id !== id
        })
    }

    alertDescrição = () => {
        alert('Salve');
    }

    render() {
        return (
            <Fragment>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <SideBar perfil={this.state} email={this.props.location.state.email} />
                <div className="row">
                    <div className="col-10 graficos mt-5">
                        <div className="card car grafico">
                            <h5 className="card-header labelgraph">Meus Investimentos</h5>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col-3">#</th>
                                            <th scope="col-3">Valor</th>
                                            <th scope="col-3">Data de inclusão</th>
                                            <th scope="col">Tipo de investimento</th>
                                            <th scope="col-3">Previsão</th>
                                            <th scope="col-3">Remover</th>
                                        </tr>
                                    </thead>
                                    <Tabela investimentos={this.state.investimentos} removeAutor={this.removeAutor}  setaDescricao = { this.setaDescricao }/>
                                </table>
                                <div className="">
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <input type="text"
                                                name="valor"
                                                className="form-control"
                                                placeholder="Valor"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input type="text"
                                                className="form-control"
                                                name="dataInclusão"
                                                placeholder="Data Inclusão"
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <input type="text"
                                                name="descrição"
                                                className="form-control"
                                                placeholder="Descrição"
                                                autoComplete="off"
                                                onChange={this.escutadorDeInput}
                                            />
                                        </div>
                                        <div className="col">
                                            <input type="text"
                                                className="form-control"
                                                name="tipoInvestimento"
                                                placeholder="Tipo Investimento"
                                                autoComplete="off"
                                                onChange={this.escutadorDeInput}
                                            />
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-dark">Cadastrar</button>
                                        </div>
                                    </div>
                                </div>
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
                            <input type='date' name='data'onChange={this.escutadorDeInput}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"     onClick={this.chamarApi}>Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default meuInvestimento;