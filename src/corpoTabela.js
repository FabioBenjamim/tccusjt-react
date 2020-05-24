import React, { Component } from 'react';



const TableBody = props =>{
    
    const linhas = props.investimentos.map((linha)=>{
       return( 
       <tr key={linha.id}>
           <th scope="row">{linha.id}</th>
            <td>{linha.valor}</td>
            <td>{linha.data}</td>
            <td>{linha.investimento.tipoInvestimento.nome}</td>
            <td><button type="button"  onClick= { () =>{props.setaDescricao(linha) }} className="btn btn-dark" data-toggle="modal" data-target="#staticBackdrop">descrição</button></td>
            <td><button  onClick= { () => props.removeAutor(linha, linha.id)} className="btn btn-dark ">Remover</button></td>
        </tr>
       );
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