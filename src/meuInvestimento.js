import React, { Component, Fragment } from 'react';
import SideBar from './sidebar';
import ApiService from './ApiService';
import Tabela from './corpoTabela';

class meuInvestimento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            estado: '',
            endereco: '',
            idade: '',
            sexo: '',
            telefone: '',
            autores: [
            ],
        }
    }

    componentDidMount() {
        ApiService.buscarPerfil(this.props.location.state.email)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    nome: res.nome,
                    estado: res.estado,
                    endereco: res.endereco,
                    idade: res.idade,
                    sexo: res.sexo,
                    telefone: res.telefone
                });
            });
            ApiService.buscarInvestimentos(1)
            .then(res => {
                console.log(res)
                this.setState({autores: [...this.state.autores, ...res]})
            })
    }

    alertDescrição = () => {
        alert('Salve');
    }

    render() {
        return (
            <Fragment>
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
                                            <th scope="col-3">valor</th>
                                            <th scope="col-3">data inclusão</th>
                                            <th scope="col">Tipo Investimento</th>
                                            <th scope="col-3">descrição</th>
                                        </tr>
                                    </thead>
                                    <Tabela autores={this.state.autores} />
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
            </Fragment>
        );
    }
}
export default meuInvestimento;