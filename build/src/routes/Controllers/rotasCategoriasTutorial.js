"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var categoriasTutorial_1 = __importDefault(require("../../db/Models/categoriasTutorial"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    categoriasTutorial_1.default.getAll(res);
});
router.get("/:id", function (req, res) {
    var id = Number(req.params.id);
    categoriasTutorial_1.default.getById(id, res);
});
router.get("/nome/:nome", function (req, res) {
    var nome = req.params.nome;
    categoriasTutorial_1.default.getByNome(nome, res);
});
router.post("/", function (req, res) {
    var categoria = req.body;
    categoriasTutorial_1.default.create(categoria, res);
});
router.patch("/:id", function (req, res) {
    var id = Number(req.params.id);
    var categoria = req.body;
    categoriasTutorial_1.default.update(id, categoria, res);
});
router.delete("/:id", function (req, res) {
    var id = Number(req.params.id);
    categoriasTutorial_1.default.delete(id, res);
});
exports.default = router;
//# sourceMappingURL=rotasCategoriasTutorial.js.map