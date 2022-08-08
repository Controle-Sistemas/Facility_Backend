import CategoriasTutorial from "../../Models/categoriasTutorial";
import express,{ Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    CategoriasTutorial.getAll(res);
})

router.get("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    CategoriasTutorial.getById(id, res);
})

router.get("/nome/:nome", (req: Request, res: Response) => {
    const nome = req.params.nome;
    CategoriasTutorial.getByNome(nome, res);
})

router.post("/", (req: Request, res: Response) => {
    const categoria = req.body;
    CategoriasTutorial.create(categoria, res);
})

router.patch("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const categoria = req.body;
    CategoriasTutorial.update(id, categoria, res);
})

router.delete("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    CategoriasTutorial.delete(id, res);
})

export default router;