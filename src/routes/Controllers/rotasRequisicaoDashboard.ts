import express, { Request, Response } from "express";
import DashboardRequest from '../requests/dashboard'
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {

    const dashboardRequest = new DashboardRequest(20033038)
    const dataPromise = dashboardRequest.getRealTime()
    Promise.resolve(dataPromise).then(response => {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            })
        } else {
            return res.status(200).json({ message: `Dados recuperados com sucesso`, data: response })
        }
    })

})

routes.get('/real-time', (req: Request, res: Response) => {

    const dashboardRequest = new DashboardRequest(parseInt(req.params.clientId))
    const dataPromise = dashboardRequest.getRealTime()
    Promise.resolve(dataPromise).then(response => {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            })
        } else {
            console.log(response)
            return res.status(200).json({ message: `Dados em tempo real recuperados com sucesso`, data: response })

        }
    })

})

routes.get('/real-time/:idCloud', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const dataPromise = dashboardRequest.getRealTimeByIdCloud()
    Promise.resolve(dataPromise).then(response => {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,                
            })
        } else {
            return res.status(200).json({ message: `Dados em tempo real da empresa de idcloud ${idCloud} recuperados com sucesso`, data: response })

        }

    })

})



export default routes;