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
                            <p>Ações mais rentaveis no mês</p>
                            <p>top 5 rendimentos do mes</p>
                            <p>top 5 rendimentos do mes</p>
                            <p>top 5 rendimentos do mes</p>
                            <p>top 5 rendimentos do mes</p>
                            <p>top 5 rendimentos do mes</p>
                    </div>
                </div>
        );
    }

}
export default ListaTop5;