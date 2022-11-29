import express, { Request, Response } from "express";
import DashboardRequest from '../requests/dashboard'
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {

    const dashboardRequest = new DashboardRequest('@20033038')
    const dataPromise = dashboardRequest.getRealTime()
    console.log('Entrou na Promisse')
    Promise.resolve(dataPromise).then(response => {
        if(response.error){
            
            console.log('Entrou no If')
            res.status(400).json({
                message:"Erro!",
                data:response.data
            })
        } else {
            console.log(response)
            return res.status(200).json({ message: `Dados recuperados com sucesso`, data:response})

        }

    })

})

routes.get('/real-time', (req: Request, res: Response) => {
    
    const dashboardRequest = new DashboardRequest(req.params.clientId)
    const dataPromise = dashboardRequest.getRealTime()
    console.log('Entrou na Promisse')
    Promise.resolve(dataPromise).then(response => {
        if(response.error){
            res.status(400).json({
                message:"Erro!",
                data:response.data,
            })
        } else {
            console.log(response)
            return res.status(200).json({ message: `Dados em tempo real recuperados com sucesso`, data:response})

        }

    })

})



export default routes;