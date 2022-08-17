import axios from "axios";

//Classe para pegar as licenças contidas na api antiga
class Licencas{
    async getAll(idCloud:number) {
        const response = await axios.get(`http://192.95.42.179:8090/DataSnap/Rest/TFrmSrvMethods/GetTerminais/${idCloud}`).then(response => {
            console.log(response)
            return response 
            }).catch(error => {
                console.log(error)
            })
        return response;
    }
    
}

export default new Licencas();