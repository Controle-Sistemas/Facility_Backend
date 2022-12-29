import express, { Request, Response } from "express";
import systemloginrequestGroup from '../../db/Models/systemloginrequestGroup';
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
    systemloginrequestGroup.getAllGroups(res)
})

routes.post('/matrizes', (req: Request, res: Response) => {
    systemloginrequestGroup.createMatriz(req.body, res)
})

routes.get('/matrizes', (req: Request, res: Response) => {
    systemloginrequestGroup.getMatrizes(res)
})

routes.get('/matrizes/:id', (req: Request, res: Response) =>{
    systemloginrequestGroup.getMatrizById(parseInt(req.params.id), res)
})

routes.patch('/matrizes/:id', (req: Request, res: Response) =>{
    systemloginrequestGroup.updateMatriz(parseInt(req.params.id), req.body, res)
})

routes.delete('/matrizes/:id', (req: Request, res: Response) =>{
    systemloginrequestGroup.deleteMatriz(parseInt(req.params.id), res)
})


routes.post('/filiais', (req: Request, res: Response) => {
    systemloginrequestGroup.createFilial(req.body, res)
})

routes.get('/filiais', (req: Request, res: Response) => {
    systemloginrequestGroup.getAllFiliais(res)
})

routes.delete('/filiais/:id', (req: Request, res: Response) => {
    systemloginrequestGroup.deleteFilial(parseInt(req.params.id), res)
})

routes.get('/completo/:CNPJ', (req: Request, res: Response) =>{
    systemloginrequestGroup.getFullGroupByMatrizCnpj(req.params.cnpj, res)
})


export default routes;