import Config from './config';

const baseURL = Config.url ? Config.url : 'http://localhost:8080';

const ApiService = {
  cadastraConta: conta => {
    return fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: conta
    })
  },

  fazerLogin: conta => {
    return fetch(`${baseURL}/login/autentica`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: conta
    })
  },

  adicionarPerfilInvestidor: corpo => {
    return fetch(`${baseURL}/login`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: corpo
    })
  },

  buscarPerfil: email => {
    return fetch(`${baseURL}/login?email=${email}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
  },

  buscarInvestimentos: id => {
    return fetch(`${baseURL}/api/transacoes/usuario/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })

  },

  montarGrafico: id => {
    console.log(id)
    return fetch(`${baseURL}/api/transacoes/lucro/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  top5: idUsuario => {
    return fetch(`${baseURL}/api/transacoes/top/${idUsuario} & ${5}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  prever: (id, data) => {
    return fetch(`${baseURL}/api//transacao/prever/${id}&${data}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  salvaTransacao: transacao => {
    return fetch(`${baseURL}/api/transacao`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: transacao
    });
  },
  pegaDolar: () => {
    return fetch(`${baseURL}/api/dolar`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  pegaSugestao: (id) => {
    return fetch(`${baseURL}/api/acoes/sugestao/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  buscaTodosInventimentos: () => {
    return fetch(`${baseURL}/api/investimento`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
  },

  deleteInvestimento: (id) => {
    return fetch(`${baseURL}/api/transacao/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'aplication/json' },
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

  atualizaPerfil: body => {
    return fetch(`${baseURL}/login/atualizaPerfil`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: body
    })
  }

}

export default ApiService;
