import './App.css';
import React, { Component } from 'react';

class ListaTop5 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="">
            <div className="lista-top5 text-top5">
                <li class="list-group-item">Fundos de investimento</li>
                <li class="list-group-item">LCI – Letra de Crédito Imobilário</li>
                <li class="list-group-item">CDB – Certificados de Depósito Bancário</li>
                <li class="list-group-item">Tesouro direto</li>
                <li class="list-group-item">Caderneta de Poupança</li>
            </div>
        </div>
        );
    }

}
export default ListaTop5;