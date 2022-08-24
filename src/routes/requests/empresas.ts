import axios from 'axios'
import {EXTERNAL_API_URL} from './urls'

//Classe para pegar as empresas contidas na api antiga
class Empresas {
  async getAll () {
    const response = await axios.get(`${EXTERNAL_API_URL}enterprises`).then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })
    return response

    
  }
    
}

export default new Empresas()