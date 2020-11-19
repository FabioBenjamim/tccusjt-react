import { post } from 'jquery';
import Config from './config';

const baseURL = Config.url ? Config.url : 'http://localhost:8080';

const ApiService = {
  cadastraConta: (conta) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: myHeaders,
      body: conta
    })
  },

  fazerLogin: (conta, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/login/autentica`, {
      method: 'POST',
      headers: myHeaders,
      body: conta
    })
  },

  adicionarPerfilInvestidor: (corpo, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/login`, {
      method: 'PUT',
      headers: myHeaders,
      body: corpo
    })
  },

  buscarPerfil: (email, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization",  token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/login?email=${email}`, {
      method: 'GET',
      headers: myHeaders,
    })
    
  },

  buscarInvestimentos: (id, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/transacoes/usuario/${id}`, {
      method: 'GET',
      headers: myHeaders,
    })

  },

  montarGrafico: (id, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    console.log(id)
    return fetch(`${baseURL}/api/transacoes/lucro/${id}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  top5: (idUsuario, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/transacoes/top/${idUsuario} & ${5}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  top5P: (idUsuario, posicao, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/sugestao/${idUsuario} & ${posicao}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  prever: (id, data, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/transacao/prever/${id}&${data}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  salvaTransacao: (transacao, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization",token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/transacao`, {
      method: 'POST',
      headers: myHeaders,
      body: transacao
    });
  },
  pegaDolar: (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/dolar`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  pegaSugestao: (idTipoSugestao, posicao, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/acoes/sugestao/${idTipoSugestao}&${posicao}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  pegaSugestaoP: (idUsuario, posicao, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/sugestao/${idUsuario}&${posicao}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then(res => res.json())
  },

  buscaTodosInventimentos: (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/investimento`, {
      method: 'GET',
      headers: myHeaders,
    })
  },

  deleteInvestimento: (id, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/api/transacao/${id}`, {
      method: 'DELETE',
      headers: myHeaders,
    })
  },

  salvaImagem: () => {
    
    return fetch(`${baseURL}/config/imagem`, {
      method: 'GET',
      headers: { 'content-type': 'image/jpeg' },
    })
  },

  pegaImagem: (ibagen) => {
    return fetch(`${baseURL}/config/imagem`, {
      method: 'POST',
      headers: { 'content-type': 'image/jpeg' },
      body: ibagen
    })
  },

  atualizaPerfil: (body, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    return fetch(`${baseURL}/login/atualizaPerfil`, {
      method: 'PUT',
      headers: myHeaders,
      body: body
    })
  },

  pegaToken: (email,senha) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2xpZW50OjEyMw==");
    var formdata = new FormData();
    formdata.append("grant_type", "password");
    formdata.append("username", email);
    formdata.append("password", senha);
    return fetch("http://localhost:8081/oauth/token", {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    })
  },
  criaUserAuth: body =>{
    return fetch('http://localhost:8081/user',{
      method: 'POST',
      headers: { "Content-Type" : "application/json"},
      body: body
    })
  }



}

export default ApiService;
