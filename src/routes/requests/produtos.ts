import axios from 'axios';
import {API_PRODUCT_URL} from './urls'

class ProductRequest{
    clientId:string;
    constructor(clientId:string){
        this.clientId = clientId
    }
    getOne(id:number){
        return axios.get(`${API_PRODUCT_URL}/CadProductId`,{
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

    getList(description:string){
        return axios.get(`${API_PRODUCT_URL}/ListProduct`,{
            headers:{
                "socket_client":this.clientId
            },
            data:{
                "ClientId":this.clientId,"description":description
            }
        }).then(response => {
            return {res:response, error: false}
        }).catch(err => {
            return {res:err, error: true}
        })
    }


}

export default ProductRequest