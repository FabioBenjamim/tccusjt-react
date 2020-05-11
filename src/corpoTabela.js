import React, { Component } from 'react';

const TableBody = props =>{
    
    const linhas = props.autores.map((linha)=>{
       return( 
       <tr key={linha.id}>
           <th scope="row">{linha.id}</th>
            <td>{linha.valor}</td>
            <td>{linha.dataInclusao}</td>
            <td>XXXXXXXX</td>
            <td><button  onClick= { () =>{
                alert(linha.valor)
            } } className="btn btn-dark ">Descrição</button></td>
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
        const { autores } = this.props;
        
        return(

        <TableBody autores={autores} />
        );
    }

}
export default Tabela;