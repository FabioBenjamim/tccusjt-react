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

    buscarInvestimentos: id => {
        return fetch('http://localhost:8080/api/transacoes',{
            method: 'GET',
            headers: {'content-type' : 'aplication/json'},
        })
        .then(res => res.json())
    }
}
export default ApiService;