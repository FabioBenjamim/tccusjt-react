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
                <li class="list-group-item">top 5 rendimentos do mes</li>
                <li class="list-group-item">top 5 rendimentos do mes</li>
                <li class="list-group-item">top 5 rendimentos do mes</li>
                <li class="list-group-item">top 5 rendimentos do mes</li>
                <li class="list-group-item">top 5 rendimentos do mes</li>
            </div>
        </div>
        );
    }

}
export default ListaTop5;