"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var statusChamadoModel_1 = __importDefault(require("../../db/Models/statusChamadoModel"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    statusChamadoModel_1.default.getAll(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    statusChamadoModel_1.default.getStatusChamadoById(id, res);
});
router.get('/status/:nome', function (req, res) {
    var nomeStatus = req.params.nome;
    statusChamadoModel_1.default.getStatusChamadoByName(nomeStatus, res);
});
router.post('/', function (req, res) {
    var statusChamadoData = req.body;
    statusChamadoModel_1.default.createStatusChamado(statusChamadoData, res);
});
router.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var statusChamadoData = req.body;
    statusChamadoModel_1.default.updateStatusChamado(id, statusChamadoData, res);
});
router.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    statusChamadoModel_1.default.deleteStatusChamado(id, res);
});
exports.default = router;
//# sourceMappingURL=rotasStatusChamado.js.map