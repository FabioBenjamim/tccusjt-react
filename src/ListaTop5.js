import './App.css';
import React, { Component } from 'react';

const Top5 = props => {
    const lista = props.top5.map((linha) => {
        return (
            <tr key={linha.id}>
           <th scope="row">{linha.investimento.id}</th>
            <td>{linha.valor}</td>
            <td>{linha.investimento.nome}</td>
        </tr>
        );
    })

    return(
        <tbody>
        {lista}
      </tbody>
    );



}

class ListaTop5 extends Component {


    render(){
        const { top5, } = this.props;
        return(
            <table className="table">
            <thead>
                <tr>
                    <th scope="col-3">ID</th>
                    <th scope="col-3">valor</th>
                    <th scope="col-3">Nome</th>
                </tr>
            </thead>
            <Top5 top5={top5}/>
        </table>
        
        );
    }
}

export default ListaTop5;