import axios from 'axios';
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
    async getDailyEvolution(range: { DateInit: string, DateFinal: string }) {
        console.log(range)
        const response = await axios.get(`${EXTERNAL_API}/getDailyEvolution`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            },
            data: { DateInit: range.DateInit, DateFinal: range.DateFinal }
        }).then(response => {
            if (response.data.Error)
                return { "error": response.data.Error };
            var data = response.data.dailyEvolution.map((dia: any) => ({ ...dia, diaDaSemana: getDiaDaSemana(dia.data) }));
            return data;
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }
    async getRealTimeByIdCloud(DateInit: string, TimeInit: string) {
        var params = { DateInit: DateInit, TimeInit: TimeInit }
        const response = await axios.get(`${EXTERNAL_API}/RealTime`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            },
            data: params,
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
    async getViewPeriodoClosed(startDate: string, finishDate: string, id?: string) {

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
    async getViewPeriodoOpen(startDate: string, finishDate: string, id?: string) {

        var params = {
            "id": id,
            DateInit: startDate,
            DateFinal: finishDate,
            ClosedOrOpen: "O"
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
    async getProductsByGroupID(groupID: string) {

        var params = {
            groupID: groupID
        }

        const response = await axios.get(`${EXTERNAL_API}/ListProductGroup`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            },
            data: params
        }).then(response => {
            return response.data.listProductGroup
        })
            .catch(error => {
                console.log("Erro: " + error.errno + ' - ' + error.code)
                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                return response;
            })
        return response
    }
    async getCurveABC(startDate: string, finishDate: string) {

        var params = {
            DateInit: '01.01.2023',
            DateFinal: '01.04.2023'
        }

        const response = await axios.get(`${EXTERNAL_API}/CurveABC`, {
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


    async getProductsProfitabilityByGroup(data: any) {
        var params = {
            Type: "M",
            DateInit: data.DateInit,
            TimeInit: data.TimeInit,
            DateFinal: data.DateFinal,
            TimeFinal: data.TimeFinal,
            GroupID: data.GroupID
        }

        console.log(this.clientIdCloud)

        const response = await axios.get(`${EXTERNAL_API}/ReportProductGroup`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            },
            data: params
        }).then(response => {
            return response.data.reportProductGroup
        }).catch(error => {
            console.log("Erro: " + error.errno + ' - ' + error.code)
            var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
            return response;
        })
        return response
    }

    async getProductGroupsByIdCloudClient() {
        const response = await axios.get(`${EXTERNAL_API}/Groups`, {
            headers: {
                "socket_client": `@${this.clientIdCloud}`
            }
        }).then(response => {
            return response.data.groups
        }).catch(error => {
            console.log("Erro: " + error.errno + ' - ' + error.code)
            var response = { "error": error.Error + ' - ' + error.code };
            return response;
        })
        return response
    }

}


function getDiaDaSemana(date: string) {
    const weekDays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    var dataSplited = date.split('/');
    var dateFormated = `${dataSplited[1]} ${dataSplited[0]} ${dataSplited[2]}`;
    return weekDays[new Date(dateFormated).getDay()].toUpperCase();
}


export default DashboardRequest
