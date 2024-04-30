import express, { Request, Response } from "express";
import DashboardRequest from '../requests/dashboard'
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
})

routes.patch('/daily-evolution/:idCloud', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const range = req.body;
    const dashboardRequest = new DashboardRequest(idCloud)
    const dataPromise = dashboardRequest.getDailyEvolution(range)
    Promise.resolve(dataPromise).then(response => {
        if (response.error || response.Error) {
            res.status(400).json({
                message: response.message,
                error: response.error,
            })
        } else {
            return res.status(200).json({ message: `Evolução diária da empresa de idcloud ${idCloud} recuperada com sucesso`, data: response })

        }

    })
})

routes.post('/real-time/:idCloud', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const DateInit = req.body.DateInit;
    const TimeInit = req.body.TimeInit;
    var dataPromise = dashboardRequest.getRealTimeByIdCloud(DateInit, TimeInit);
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

routes.post('/registradoras/:idCloud', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const DateInit = req.body.DateInit;
    const DateFinal = req.body.DateFinal;
    var dataPromise = dashboardRequest.getViewPeriodoClosed(DateInit, DateFinal, req.params.id);
    var finalData = { closed: {}, open: {} };
    Promise.resolve(dataPromise).then(response => {
        if (response.ERROR_getValuesFromUsers) {
            res.status(400).json({
                error: true,
                message: response.ERROR_getValuesFromUsers,
            })
        } else {
            finalData.closed = response;
            dataPromise = dashboardRequest.getViewPeriodoOpen(DateInit, DateFinal, req.params.id);
            Promise.resolve(dataPromise).then(response => {
                if (response.ERROR_getValuesFromUsers) {
                    res.status(400).json({
                        error: true,
                        message: response.ERROR_getValuesFromUsers,
                    })
                } else {
                    finalData.open = response;
                    return res.status(200).json({ message: `Dados da empresa de idcloud ${idCloud} recuperados com sucesso`, data: finalData })
                }
            })
        }
    })
})

routes.get('/registradoras/:idCloud/:id', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const DateInit = req.body.DateInit;
    const DateFinal = req.body.DateFinal;
    const dataPromise = dashboardRequest.getViewPeriodoClosed(DateInit, DateFinal, req.params.id)
    Promise.resolve(dataPromise).then(response => {
        if (response.cabec.length < 1) {
            res.status(400).json({
                error: true,
                data: "Não foram encontrados registros no período",
            })
        } else {
            return res.status(200).json({ message: `Dados da empresa de idcloud ${idCloud} recuperados com sucesso`, data: response })

        }
    })
})


routes.post('/list-products/:idCloud', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const groupID = req.body.groupID;
    console.log("Buscando dados do idCloud: ", idCloud)
    var dataPromise = dashboardRequest.getProductsByGroupID(groupID);
    Promise.resolve(dataPromise).then(response => {
        if (response) {
            if (response.error) {
                res.status(400).json({
                    message: response.message,
                    data: response.error,
                })
            } else {
                return res.status(200).json({ message: `Dados em tempo real da empresa de idcloud ${idCloud} recuperados com sucesso`, data: response })

            }
        }else{
            return res.status(500).json({ message: `Timeout!`})

        }

    })

    routes.post('/curvaABC/:idCloud', (req: Request, res: Response) => {
        const idCloud = parseInt(req.params.idCloud)
        const dashboardRequest = new DashboardRequest(idCloud)
        const DateInit = req.body.DateInit;
        const DateFinal = req.body.DateFinal;
        const dataPromise = dashboardRequest.getCurveABC(DateInit, DateFinal)
        Promise.resolve(dataPromise).then(response => {
            if (response.cabec.length < 1) {
                res.status(400).json({
                    error: true,
                    data: "Não foram encontrados registros",
                })
            } else {
                return res.status(200).json({ message: `Dados da empresa de idcloud ${idCloud} recuperados com sucesso`, data: response })
    
            }
        })
    })

    
routes.get('/lucratividade/:idCloud/:id', (req: Request, res: Response) => {
    const idCloud = parseInt(req.params.idCloud)
    const dashboardRequest = new DashboardRequest(idCloud)
    const DateInit = req.body.DateInit;
    const DateFinal = req.body.DateFinal;
    const dataPromise = dashboardRequest.getViewPeriodoClosed(DateInit, DateFinal, req.params.id)
    Promise.resolve(dataPromise).then(response => {
        if (response.cabec.length < 1) {
            res.status(400).json({
                error: true,
                data: "Não foram encontrados registros no período",
            })
        } else {
            return res.status(200).json({ message: `Dados da empresa de idcloud ${idCloud} recuperados com sucesso`, data: response })

        }
    })
})

})



export default routes;