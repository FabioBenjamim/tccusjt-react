const ApiService = {
    cadastraConta: conta =>{
        return fetch('http://localhost:8080/login', {
                    method: 'POST', 
                    headers: {'content-type': 'application/json'},
                    body: conta
                })
    },

    fazerLogin: conta =>{
        return fetch('http://localhost:8000/api/autor', {
                    method: 'GET', 
                    headers: {'content-type': 'application/json'},

                })
                .then(res => res.json())
                .then(res => console.log(res.data));
    } 
}
export default ApiService;