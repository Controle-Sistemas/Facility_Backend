"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tiposChamado_1 = __importDefault(require("../../db/Models/tiposChamado"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    tiposChamado_1.default.getAll(res);
});
router.get("/itens", function (req, res) {
    tiposChamado_1.default.getAllItems(res);
});
router.get("/:title", function (req, res) {
    tiposChamado_1.default.getByName(req.params.title, res);
});
router.get("/id/:id", function (req, res) {
    tiposChamado_1.default.getById(req.params.id, res);
});
router.get("/chamado/:id", function (req, res) {
    tiposChamado_1.default.getByChamadoId(parseInt(req.params.id), res);
});
router.get("/chamado/item/:id", function (req, res) {
    tiposChamado_1.default.getItemByChamadoId(parseInt(req.params.id), res);
});
router.post("/", function (req, res) {
    var tipo = req.body;
    tiposChamado_1.default.create(tipo, res);
});
router.post("/:id", function (req, res) {
    var data = req.body;
    tiposChamado_1.default.createChamadoItems(data, res);
});
router.patch("/", function (req, res) {
    var id = Number(req.params.id);
    var item = req.body;
    tiposChamado_1.default.update(id, item, res);
});
router.patch("/item/:id", function (req, res) {
    var id = Number(req.params.id);
    var item = req.body;
    tiposChamado_1.default.updateItem(id, item, res);
});
router.delete("/:id", function (req, res) {
    tiposChamado_1.default.delete(req.params.id, res);
});
router.delete("/chamado/:id", function (req, res) {
    tiposChamado_1.default.deleteChamadoItems(parseInt(req.params.id), res);
});
exports.default = router;
//# sourceMappingURL=rotasTiposChamado.js.map