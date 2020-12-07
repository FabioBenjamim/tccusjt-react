import React, { Component } from 'react';
import { formatarData } from './helpers';



const TableBody = props =>{
    
    const linhas = props.investimentos.map((linha)=>{
        if(linha.dataVencimento == null ){
            return( 
                <tr key={linha.id}>
                     <th scope="row">{linha.id}</th>
                     <td>{linha.investimento.nome}</td>
                     <td>${linha.valor}</td>
                     <td>{formatarData(linha.data)}</td>
                     <td>{linha.dataVencimento}</td>
                     <td>{linha.investimento.tipoInvestimento.nome}</td>
                     <td>{linha.nomeTipoTaxa}</td>
                     <td>{linha.taxaPorcentagem}</td>
                     <td><button type="button"  onClick= { () =>{props.setaDescricao(linha) }} className="btn btn-dark" data-toggle="modal" data-target="#staticBackdrop">Prever</button></td>
                     <td><button  onClick= { () => props.removeAutor(linha, linha.id)} className="btn btn-dark ">Remover</button></td>
                 </tr>
                )
        } else{
       return( 
       <tr key={linha.id}>
            <th scope="row">{linha.id}</th>
            <td>{linha.investimento.nome}</td>
            <td>${linha.valor}</td>
            <td>{formatarData(linha.data)}</td>
            <td>{formatarData(linha.dataVencimento)}</td>
            <td>{linha.investimento.tipoInvestimento.nome}</td>
            <td>{linha.nomeTipoTaxa}</td>
            <td>{linha.taxaPorcentagem}</td>
            <td><button type="button"  onClick= { () =>{props.setaDescricao(linha) }} className="btn btn-dark" data-toggle="modal" data-target="#staticBackdrop">Prever</button></td>
            <td><button  onClick= { () => props.removeAutor(linha, linha.id)} className="btn btn-dark ">Remover</button></td>
        </tr>
       );}
    });

    return(
        <tbody>
          {linhas}
        </tbody>
    );
}


class Tabela extends Component{
    

    render(){
        const { investimentos, removeAutor, setaDescricao } = this.props;
        
        return(

        <TableBody investimentos={ investimentos } removeAutor = { removeAutor } setaDescricao = { setaDescricao }/>
        );
    }

}
export default Tabela;