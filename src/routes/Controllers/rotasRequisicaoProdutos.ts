import express, { Request, Response } from "express";
import ProductRequest from '../requests/produtos'
const routes = express.Router()

routes.get('/produto/:clientId/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const clientId = req.params.clientId

    const NewProductRequest = new ProductRequest(clientId)
    const productPromise = NewProductRequest.getOne(id)
    Promise.resolve(productPromise).then(response => {
        if(response.res.error){
            res.status(400).json({
                message:"Erro!",
                data:response.res.data
            })
        } else {
            res.status(200).json({ message: `Produto Encontrado com sucesso`, data:response.res.data})

        }

    })

})

routes.get('/lista-produtos/:clientId/:description', (req: Request, res: Response) => {
    const description = req.params.description
    const clientId = req.params.clientId

    const NewProductRequest = new ProductRequest(clientId)
    const productsPromise = NewProductRequest.getList(description)
    Promise.resolve(productsPromise).then(response => {
        if(response.res.error){
            res.status(400).json({
                message:"Erro!",
                data:response.res.data
            })
        } else {
            res.status(200).json({ message: `Produtos Retornados com sucesso!`, data:response.res.data})

        }

     })

})


export default routes;