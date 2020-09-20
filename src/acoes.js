import React, { Component } from 'react';

const Options = props => {

  const options = props.acoes.map((option) => {
    return (
      <option value={option.id}>{option.nome}</option>
    );
  });

  return (
    <select required onChange={props.escutadorDeInput} name="id_acao">
      <option value=''>Escolha um investimento</option>
      {options}
    </select>
  );
}


class Acoes extends Component {

  render() {
    const { acoes, escutadorDeInput } = this.props;
    return (
      <Options acoes={acoes} escutadorDeInput={escutadorDeInput} />

    );
  }

} export default Acoes;
