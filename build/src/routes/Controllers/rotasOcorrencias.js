"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var occurrencesModel_1 = __importDefault(require("../../db/Models/occurrencesModel"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    occurrencesModel_1.default.getAll(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    occurrencesModel_1.default.getOccurrenceById(id, res);
});
router.get('/sector/:sector', function (req, res) {
    var idSector = Number(req.params.sector);
    occurrencesModel_1.default.getOccurrenceBySector(idSector, res);
});
router.get('/chamado/:chamado', function (req, res) {
    var idChamado = Number(req.params.chamado);
    occurrencesModel_1.default.getOccurrenceByChamado(idChamado, res);
});
router.get('/interno/:interno', function (req, res) {
    var idInterno = Number(req.params.interno);
    occurrencesModel_1.default.getOccurrenceByInterno(idInterno, res);
});
router.post('/', function (req, res) {
    var occurrenceData = req.body;
    occurrencesModel_1.default.createOccurrence(occurrenceData, res);
});
router.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var occurrenceData = req.body;
    occurrencesModel_1.default.updateOccurrence(id, occurrenceData, res);
});
router.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    occurrencesModel_1.default.deleteOccurrence(id, res);
});
exports.default = router;
//# sourceMappingURL=rotasOcorrencias.js.map