const ApiService = {
    cadastraConta: conta =>{
        return fetch('http://localhost:8080/login', {
                    method: 'POST', 
                    headers: {'content-type': 'application/json'},
                    body: conta
                })
    },

    fazerLogin: conta =>{
        return fetch('http://localhost:8080/login/autentica', {
                    method: 'POST', 
                    headers: {'content-type': 'application/json'},
                    body: conta
                })
    },
    buscarPerfil: email =>{
        return fetch(`http://localhost:8080/login?email=${email}`, {
                    method: 'GET', 
                    headers: {'content-type': 'application/json'},
                })
    },

    buscarInvestimentos: id =>{
        return fetch(`http://localhost:8080/api/transacoes/usuario/${id}`, {
                    method: 'GET', 
                    headers: {'content-type': 'application/json'},
        })
        
    },

    montarGrafico: id => {
        console.log(id)
        return fetch(`http://localhost:8080/api/transacoes/lucro/${id}`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    },

    top5: idUsuario => {
        return fetch(`http://localhost:8080/api/transacoes/top/${idUsuario} & ${5}`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    },

    prever: (id, data) => {
        return fetch(`http://localhost:8080/api//transacao/prever/${id}&${data}`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    },
    
    salvaTransacao: transacao => {
        return fetch(`http://localhost:8080/api//transacao`,{
            method: 'POST',
            headers: {'content-type' : 'aplication/json'},
            body: transacao
        })
        .then(res => res.json()) 
    },

    pegaDolar: () => {
        return fetch(`http://localhost:8080/api/dolar`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    },
    
    pegaSugestao: (id) => {
        return fetch(`http://localhost:8080/api/acoes/sugestao/${id}`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    },

    buscaTodosInventimentos: () =>{
        return fetch(`http://localhost:8080/api/transacoes`,{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
    }


}

    
export default ApiService;
