"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriasTutorial_1 = __importDefault(require("../../db/Models/categoriasTutorial"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    categoriasTutorial_1.default.getAll(res);
});
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    categoriasTutorial_1.default.getById(id, res);
});
router.get("/nome/:nome", (req, res) => {
    const nome = req.params.nome;
    categoriasTutorial_1.default.getByNome(nome, res);
});
router.post("/", (req, res) => {
    const categoria = req.body;
    categoriasTutorial_1.default.create(categoria, res);
});
router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const categoria = req.body;
    categoriasTutorial_1.default.update(id, categoria, res);
});
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    categoriasTutorial_1.default.delete(id, res);
});
exports.default = router;
