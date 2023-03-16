import axios from 'axios';
import { errorMonitor } from 'events';
import { EXTERNAL_API } from './urls'

class DashboardRequest {
    clientIdCloud: number;
    constructor(clientIdCloud: number) {
        this.clientIdCloud = clientIdCloud
    }
    async getSalesPerMonth() {
        const response = await axios.get(`${EXTERNAL_API}/VWSALESPERMONTH`, {
            headers: {
                "socket_client": this.clientIdCloud
            }
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }

    async getRealTime() {
        const response = await axios.get(`${EXTERNAL_API}/RealTime`, {
            headers: {
                "socket_client": '@20033038' // '@' + this.clientIdCloud 
            }
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }

    async getRealTimeByIdCloud() {
        const response = await axios.get(`${EXTERNAL_API}/RealTime`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            }
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }

    async getValuesFromUsers(startDate: string, finishDate: string) {

        var params = {
            DateInit: startDate,
            DateFinal: finishDate,
            ClosedOrOpen: "C"
        }

        console.log(params)
        const response = await axios.get(`${EXTERNAL_API}/getValuesFromUsers`, {
            headers: {
                "socket_client": '@20033038' // '@' + this.clientIdCloud 
            },
            data: params
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }

    async getViewPeriodo( startDate: string, finishDate: string, id?: string) {

        var params = {
            "id": id,
            DateInit: startDate,
            DateFinal: finishDate,
            ClosedOrOpen: "C"
        }

        const response = await axios.get(`${EXTERNAL_API}/getViewPeriodo`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            },
            data: params
        }).then(response => {
            return response.data
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }
}





export default DashboardRequest