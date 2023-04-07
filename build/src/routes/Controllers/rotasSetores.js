"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sectorsModel_1 = __importDefault(require("../../db/Models/sectorsModel"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    sectorsModel_1.default.getSectors(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    sectorsModel_1.default.getSectorById(id, res);
});
router.post('/', function (req, res) {
    var sectorData = req.body;
    sectorsModel_1.default.createSector(sectorData, res);
});
router.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var sectorData = req.body;
    sectorsModel_1.default.updateSector(id, sectorData, res);
});
router.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    sectorsModel_1.default.deleteSector(id, res);
});
exports.default = router;
//# sourceMappingURL=rotasSetores.js.map