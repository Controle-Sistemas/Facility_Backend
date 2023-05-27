import express, { Request, Response } from "express";
import ApiRamosModel from '../../db/Models/sysRamosAtividade'
const routes = express.Router()

routes.get("/", (req: Request, res: Response) => {
    ApiRamosModel.getAllSysRamosAtividade(res)
})

routes.get("/:name", (req: Request, res: Response) => {
    const name = req.params.name
    ApiRamosModel.getSysRamosAtividadeByName(name, res)
})

routes.get("/cliente/:idCloud", (req: Request, res: Response) => {
    const idCloud = req.params.idCloud
    ApiRamosModel.getSysRamosAtividadeByIdCloud(idCloud, res)
})

routes.post("/", (req: Request, res: Response) => {
    const sysRamosAtividade = req.body
    ApiRamosModel.addSysRamosAtividade(sysRamosAtividade, res)
})

routes.patch("/:name", (req: Request, res: Response) => {
    const name = req.params.name
    const sysRamosAtividade = req.body
    ApiRamosModel.updateSysRamosAtividade(name, sysRamosAtividade, res)
})

routes.delete("/:name", (req: Request, res: Response) => {
    const name = req.params.name
    ApiRamosModel.deleteSysRamosAtividade(name, res)
})

export default routes;