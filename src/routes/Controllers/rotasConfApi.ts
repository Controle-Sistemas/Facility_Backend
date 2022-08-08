import express, { Request, Response } from "express";
import ApiConfModel from '../../Models/sysapiconf'
const routes = express.Router()

routes.get("/", (req: Request, res: Response) => {
    ApiConfModel.getSysApiConf(res)
})

routes.get("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    ApiConfModel.getSysApiConfById(id, res)
})

routes.post("/", (req: Request, res: Response) => {
    const sysApiConf = req.body
    ApiConfModel.createSysApiConf(sysApiConf, res)
})

routes.patch("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const sysApiConf = req.body
    ApiConfModel.editSysApiConf(id, sysApiConf, res)
})

routes.delete("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    ApiConfModel.deleteSysApiConf(id, res)
})

export default routes;