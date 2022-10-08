import axios from 'axios';
import {API_PRODUCT_URL} from './urls'

class DashboardRequest{
    clientId:string;
    constructor(clientId:string){
        this.clientId = clientId
    }
    async getSalesPerMonth () {
        const response = await axios.get(`${API_PRODUCT_URL}/VWSALESPERMONTH`,{
            headers:{
                "socket_client":this.clientId
            }}).then(response => {
            console.log(response)
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
        return response
}
       
    async getRealTime () {
            const response = await axios.get(`${API_PRODUCT_URL}/RealTime`,{
                headers:{
                    "socket_client":'@20033038' // '@' + this.clientId
                }}).then(response => {
                console.log(response)
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
            return response
    }
}




export default DashboardRequest