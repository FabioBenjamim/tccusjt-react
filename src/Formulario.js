import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ApiService from './ApiService';
import './App.css';
import './index.css';
import Pergunta from './Pergunta';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirecionar: false,
      pergunta01: '',
      pergunta02: '',
      pergunta03: '',
      pergunta04: '',
      pergunta05: '',
      pergunta06: '',
      pergunta07: '',
      pergunta08: '',
      pergunta09: '',
      pergunta10: '',
    }
  }

  setResposta = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  criarPerfilInvestidor = () => {
    const perfilInvestidor = {
      Conservador: 0,
      Diversificado: 0,
      Agressivo: 0,
    }

    Object.keys(this.state).forEach((key) => {
      switch (this.state[key]) {
        case '1':
          perfilInvestidor.Conservador++;
          break
        case '2':
          perfilInvestidor.Diversificado++;
          break
        case '3':
          perfilInvestidor.Agressivo++;
          break
      }
    })

    let arr = Object.values(perfilInvestidor);
    const max = Math.max(...arr);
    return Object.keys(perfilInvestidor).find(key => perfilInvestidor[key] === max)
  }

  adicionarPerfilInvestidor = async (event) => {
    event.preventDefault();

    const perfilInvestidor = this.criarPerfilInvestidor();

    const cpf = await ApiService.buscarPerfil(this.props.location.state.email,this.props.location.state.token)
      .then(res => res.json())
      .then(res => (res.cpf))

    const corpo = {
      cpf,
      perfil_investidor: perfilInvestidor
    }

    ApiService.adicionarPerfilInvestidor(JSON.stringify(corpo),this.props.location.state.token).then(
      res => {
        this.setState({ redirecionar: true });
      }
    );



    // if (!newRepo) {
    //   setInputError('');
    //   return;
    // }

    // try {
    //   const response = await api(`/${newRepo}`);
    //   console.log(response)
    //   setInputError('');
    // } catch (error) {
    //   setInputError('Erro ');
    // }
  }

  render() {
    if (this.state.redirecionar) {
      return <Redirect to={{
        pathname: '/homePerfil',
        state: {
          email: this.props.location.state.email,
          token: this.props.location.state.token
        }
      }} />
    } else {
      return (
        <div className="row">
          <div className="col-10 graficos mt-5">
            <div className="card car grafico">
              <h5 className="card-header labelgraph">Qual seu perfil de investidor?</h5>
              <div className="card-body respostatxt">
                <form action="#" onSubmit={this.adicionarPerfilInvestidor}>
                  <Pergunta
                    pergunta={"1 – Para que você investe ou investiria seu dinheiro?"}
                    resposta01={"Para não ficar com o dinheiro parado na minha conta e correr o risco de gastar"}
                    resposta02={"Para conseguir realizar alguns sonhos"}
                    resposta03={"Para obter rendimento e conseguir multiplicar minha renda"}
                    name={"pergunta01"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"2 – Você aceitaria perder alguma porcentagem do recurso investido?"}
                    resposta01={"Não aceito ter prejuízo de nenhuma forma"}
                    resposta02={"Se a quantia for pequena, tudo bem"}
                    resposta03={"Aceito correr o risco, se tiver a possibilidade de ganhos maiores"}
                    name={"pergunta02"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"3 – Como você poupa rendas extras, como 13º salário, restituição de IRPF, etc.?"}
                    resposta01={"Invisto em aplicações seguras"}
                    resposta02={"Coloco a maior porcentagem em investimentos sem riscos e uma pequena parte em modalidades mais arrojadas"}
                    resposta03={"Aplico boa parte dos meus recursos em investimentos de risco, que possuem maiores chances de rendimentos altos e a menor parte em modalidades mais conservadoras"}
                    name={"pergunta03"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"4 – Como se planeja para a aposentadoria?"}
                    resposta01={"Poupo e invisto em uma aplicação de baixo risco"}
                    resposta02={"Parte do que guardo coloco em um fundo conservador e outra parte (menor) em investimentos mais agressivos"}
                    resposta03={"Sempre distribuo meus recursos em investimentos que gerem alto retorno financeiro"}
                    name={"pergunta04"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"5 – Para você, ter um futuro sustentável financeiramente significa:"}
                    resposta01={"Ter segurança financeira, ainda que seja pouca quantia"}
                    resposta02={"Guardar a maior parte do dinheiro de maneira cautelosa e, ao mesmo tempo, separar uma parte menor para conseguir um rendimento maior"}
                    resposta03={"Ter cada vez mais dinheiro rendendo, ainda que tenha riscos"}
                    name={"pergunta05"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"6 – O que faria você mudar seu planejamento financeiro?"}
                    resposta01={"Apenas situações emergenciais"}
                    resposta02={"Diante de alguma emergência ou chance de ganhar mais dinheiro"}
                    resposta03={"Se houver alguma emergência, chance de ter mais rendimentos e anseio por novos desafios"}
                    name={"pergunta06"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"7 – Sua principal fonte de renda é…"}
                    resposta01={"Aposentadoria"}
                    resposta02={"Salário fixo"}
                    resposta03={"Salário e rendimento de investimentos"}
                    name={"pergunta07"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"8 – Você investe ou investiria seu dinheiro seguindo alguma especulação?"}
                    resposta01={"Não, isso está fora de cogitação"}
                    resposta02={"Talvez uma pequena parte do meu dinheiro"}
                    resposta03={"Investiria, porque o risco é proporcional aos ganhos"}
                    name={"pergunta08"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"9 – Tem o costume de acompanhar as variações de mercado dos investimentos?"}
                    resposta01={"Não vejo nada sobre isso"}
                    resposta02={"Procuro informações apenas dos quais aplico"}
                    resposta03={"Acompanho tudo, pois tenho interesse em várias modalidades"}
                    name={"pergunta09"}
                    setResposta={this.setResposta}
                  />
                  <Pergunta
                    pergunta={"10 – Qual é o seu principal objetivo financeiro para o futuro?"}
                    resposta01={"Segurança é tudo o que importa para mim"}
                    resposta02={"Quero segurança, mas também quero poder curtir a vida"}
                    resposta03={"Meu objetivo é acumular riquezas"}
                    name={"pergunta10"}
                    setResposta={this.setResposta}
                  />
                  <br />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Formulario;
