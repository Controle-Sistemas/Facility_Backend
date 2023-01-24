import express,{ Request, Response } from "express";
import tiposChamado from "../../db/Models/tiposChamado";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    tiposChamado.getAll(res);
})

router.get("/itens", (req: Request, res: Response) => {
    tiposChamado.getAllItems(res);
})

router.get("/:title", (req: Request, res: Response) => {
    tiposChamado.getByName(req.params.title, res);
})

router.get("/id/:id", (req: Request, res: Response) => {
    tiposChamado.getById(req.params.id, res);
})

router.get("/chamado/:id", (req: Request, res: Response) => {
    tiposChamado.getByChamadoId(parseInt(req.params.id), res);
})

router.get("/chamado/item/:id", (req: Request, res: Response) => {
    tiposChamado.getItemByChamadoId(parseInt(req.params.id), res);
})

router.post("/", (req: Request, res: Response) => {
    const tipo = req.body;
    tiposChamado.create(tipo, res);
})

router.post("/:id", (req: Request, res: Response) => {
    const data = req.body;
    tiposChamado.createChamadoItems(data, res);
})

router.patch("/", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const item = req.body;
    tiposChamado.update(id, item, res);
})

router.patch("/item/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const item = req.body;
    tiposChamado.updateItem(id, item, res);
})

router.delete("/:id", (req: Request, res: Response) => {
    tiposChamado.delete(req.params.id, res);
})

router.delete("/chamado/:id", (req: Request, res: Response) => {
    tiposChamado.deleteChamadoItems(parseInt(req.params.id), res);
})

export default router;