import React, { Component } from 'react';
import ApiService from './ApiService';

class CardCadastroInvestimento extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: '',
            data: '',
            usuario: {

            },
            dataVencimento: '',
            taxaPorcentagem: '',
            nomeTipoTaxa: '',
            investimento: { 

            },
        }
    }

    cadastra = () => {
        ApiService.salvaTransacao(JSON.stringify(
            {
                valor: this.state.valor,
                data: this.state.data,
                dataVencimento: this.state.dataVencimento,
                taxaPorcentagem: this.state.taxaPorcentagem,
                nomeTipoTaxa: this.state.nomeTipoTaxa,
                investimento: {
                        id: this.props.stateAntigo.id_acao
                },
                usuario: {
                    id: this.props.stateAntigo.id
                }
                
            }));
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className=" cardCadastroInv1 col-8">
                        <input className="mt-1" onChange={this.escutadorDeInput} name="valor" placeholder="valor" />
                        <input className="ml-3" type='date' name='dataVencimento' onChange={this.escutadorDeInput} />
                        <input className="ml-3" type='date' name='data' onChange={this.escutadorDeInput} />
                    </div>
                </div>
                <div className="row">
                    <div className="cardCadastroInv2 col-8">
                    <input className="mt-1" onChange={this.escutadorDeInput} name="nomeTipoTaxa" placeholder="nomeTipoTaxa" />
                    <input className="mt-1 ml-3" onChange={this.escutadorDeInput} name="taxaPorcentagem" placeholder="valor" />
                    </div>
                </div>
                <div className="">
                    <div className="botao-direita">
                        <div className="col">
                            <button  onClick={ this.cadastra } className="btn btn-dark mt-4" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default CardCadastroInvestimento;