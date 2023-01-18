import express,{ Request, Response } from "express";
import tiposChamado from "../../db/Models/tiposChamado";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    tiposChamado.getAll(res);
})

router.get("/:title", (req: Request, res: Response) => {
    tiposChamado.getByName(req.params.title, res);
})

router.get("/id/:id", (req: Request, res: Response) => {
    tiposChamado.getById(req.params.id, res);
})

router.get("/chamado/:id", (req: Request, res: Response) => {
    tiposChamado.getByChamadoId(req.params.id, res);
})

router.post("/", (req: Request, res: Response) => {
    const tipo = req.body;
    tiposChamado.create(tipo, res);
})

router.patch("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const categoria = req.body;
    tiposChamado.update(id, categoria, res);
})

router.delete("/:id", (req: Request, res: Response) => {
    tiposChamado.delete(req.params.id, res);
})

export default router;