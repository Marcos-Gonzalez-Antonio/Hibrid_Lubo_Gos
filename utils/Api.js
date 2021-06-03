import urlApi from '../config/Config'

export default class Api{
    constructor(url,metodo,parametros = null ,token = null){
        this.url = `${urlApi}${url}`;
        this.metodo = metodo ;
        this.parametros = parametros;
        this.token = token;
    }

    async send(){
        let configFeach = null;
        if (this.metodo === "GET") {
            configFeach = {
                method:this.metodo,
                headers: {
                    "Content-Type":"application/json",
                    "auth-token":this.token
                }
            }
        } else {
            configFeach = {
                method:this.metodo,
                body:JSON.stringify(this.parametros),
                headers: {
                    "Content-Type":"application/json",
                    "auth-token":this.token
                }
            }
        }

        const respuestaApi = await fetch(this.url,configFeach)
        .then(res=>res.json());

        return respuestaApi;
    }
}
