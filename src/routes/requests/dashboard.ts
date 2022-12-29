import axios from 'axios';
import { errorMonitor } from 'events';
import {API_PRODUCT_URL} from './urls'

class DashboardRequest{
    clientIdCloud:number;
    constructor(clientIdCloud: number){
        this.clientIdCloud = clientIdCloud
    }
    async getSalesPerMonth () {
        const response = await axios.get(`${API_PRODUCT_URL}/VWSALESPERMONTH`,{
            headers:{
                "socket_client":this.clientIdCloud
            }}).then(response => {
            return response.data
        })
        .catch(error => {
            console.log("Erro: " + error.errno + ' - ' + error.code)
            var response = {"message" : "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
            return response;
         })
        return response
}
       
    async getRealTime () {
            const response = await axios.get(`${API_PRODUCT_URL}/RealTime`,{
                headers:{
                    "socket_client":'@20033038' // '@' + this.clientIdCloud 
                }}).then(response => {
                return response.data
            })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = {"message" : "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
            return response
    }

    async getRealTimeByIdCloud () {
        const response = await axios.get(`${API_PRODUCT_URL}/RealTime`,{
            headers:{
                "socket_client":`@${this.clientIdCloud}` 
            }}).then(response => {
            return response.data
        })
        .catch(error => {
            console.log("Erro: " + error.errno + ' - ' + error.code)
            var response = {"message" : "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
            return response;
        })
        return response
}
}




export default DashboardRequest