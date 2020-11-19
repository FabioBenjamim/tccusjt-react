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

    

    cadastra = event => {
        const acao = this.props.stateAntigo.acoes[this.props.stateAntigo.id_acao]
        console.log(acao)
        if(this.state.valor < acao.valorMinimo){
            alert('Valor Minimo para essa renda é de: ' + acao.valorMinimo)
            event.preventDefault()
        }else{
        ApiService.salvaTransacao(JSON.stringify(
            {
                valor: this.state.valor,
                data: this.state.data,
                investimento: {
                        id: this.props.stateAntigo.id_acao
                },
                usuario: {
                    id: this.props.stateAntigo.id
                }
                
            }), this.props.token);
            const investimento = {
                valor: this.state.valor,
                data: this.state.data,
                investimento: {
                        id: this.props.stateAntigo.id_acao
                } 
            }
            window.location.reload();
        }
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
                        <input className="mt-1" onChange={this.escutadorDeInput } name="valor" placeholder="valor" />
                        <input className="ml-3" type='date' name='data' onChange={this.escutadorDeInput} />
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