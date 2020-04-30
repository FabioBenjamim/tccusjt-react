import React, { Component } from 'react';
import './App.css';

class DadosPessoais extends Component{
    constructor(props){
        super(props)

        this.statePerfil = {
            nome: '',
            estado: '',
            endereco: '',
            idade: 0,
            sexo: '',
            telefone: ''
        }
        this.state = this.statePerfil;

    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
    
        this.setState({
            [name]: value
        });

        console.log(this.state)
      }

    render(){
        return(
            <div>
            <p className="text-cadastro mt-5">DADOS PESSOAIS</p>
                <input className="mt-5 mb-3 form-control border-top-0 border-left-0 border-right-0 bor-col" 
                  name="nome" 
                  placeholder="Nome Completo" 
                  autoComplete="off"
                  type="text"
                  onChange= { this.escutadorDeInput }
                  />
                <div className="row mt-5">
                  <div className="col">
                    <input type="text"
                    name="estado "
                    className="form-control" 
                    placeholder="Endereco"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                  <div className="col">
                    <input type="text" 
                    className="form-control"
                    name="estado"
                    placeholder="Estado"
                    autoComplete="off"
                    onChange= { this.escutadorDeInput }
                    />
                  </div>
                </div>
            </div>
        );
    }
}
export default DadosPessoais;