const ApiService = {
  cadastraConta: conta => {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: conta
    })
  },

  fazerLogin: conta => {
    return fetch('http://localhost:8080/login/autentica', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: conta
    })
  },

  adicionarPerfilInvestidor: corpo => {
    return fetch('http://localhost:8080/login', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: corpo
    })
  },

  buscarPerfil: email => {
    return fetch(`http://localhost:8080/login?email=${email}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
  },

  buscarInvestimentos: id => {
    return fetch(`http://localhost:8080/api/transacoes/usuario/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })

  },

  montarGrafico: id => {
    console.log(id)
    return fetch(`http://localhost:8080/api/transacoes/lucro/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  top5: idUsuario => {
    return fetch(`http://localhost:8080/api/transacoes/top/${idUsuario} & ${5}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  prever: (id, data) => {
    return fetch(`http://localhost:8080/api//transacao/prever/${id}&${data}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  salvaTransacao: transacao => {
    return fetch('http://localhost:8080/api/transacao', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: transacao
    });
  },
  pegaDolar: () => {
    return fetch(`http://localhost:8080/api/dolar`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  pegaSugestao: (id) => {
    return fetch(`http://localhost:8080/api/acoes/sugestao/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
      .then(res => res.json())
  },

  buscaTodosInventimentos: () => {
    return fetch(`http://localhost:8080/api/investimento`, {
      method: 'GET',
      headers: { 'content-type': 'aplication/json' },
    })
  },

  deleteInvestimento: (id) => {
    return fetch(`http://localhost:8080/api/transacao/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'aplication/json' },
    })
  },

  salvaImagem: () => {
    return fetch(`http://localhost:8080/config/imagem`, {
      method: 'GET',
      headers: { 'content-type': 'image/jpeg' },
    })
  },

  pegaImagem: (ibagen) => {
    return fetch(`http://localhost:8080/config/imagem`, {
      method: 'POST',
      headers: { 'content-type': 'image/jpeg' },
      body: ibagen
    })
  },

  atualizaPerfil: body =>{
    return fetch(`http://localhost:8080/login/atualizaPerfil`,{
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: body
    })
  }

}

export default ApiService;
