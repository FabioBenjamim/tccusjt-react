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
    } 
}
export default ApiService;