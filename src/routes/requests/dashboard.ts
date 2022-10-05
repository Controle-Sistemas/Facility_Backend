import axios from 'axios';
import {API_PRODUCT_URL} from './urls'

class DashboardRequest{
    clientId:string;
    constructor(clientId:string){
        this.clientId = clientId
    }
    getActualMonthData(id:number){
        return axios.get(`${API_PRODUCT_URL}/VWSALESPERMONTH`,{
            headers:{
                "socket_client":this.clientId
            },
            data:{
                "ClientId":this.clientId,"id":id
            }
        }).then(response => {
            return {res:response, error: false}
        }).catch(err => {
            return {res:err, error: true}
        })
    }
       
    async getData () {
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
}




export default DashboardRequest