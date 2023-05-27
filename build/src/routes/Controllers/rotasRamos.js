"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sysRamosAtividade_1 = __importDefault(require("../../db/Models/sysRamosAtividade"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    sysRamosAtividade_1.default.getAllSysRamosAtividade(res);
});
routes.get("/:name", function (req, res) {
    var name = req.params.name;
    sysRamosAtividade_1.default.getSysRamosAtividadeByName(name, res);
});
routes.get("/cliente/:idCloud", function (req, res) {
    var idCloud = req.params.idCloud;
    sysRamosAtividade_1.default.getSysRamosAtividadeByIdCloud(idCloud, res);
});
routes.post("/", function (req, res) {
    var sysRamosAtividade = req.body;
    sysRamosAtividade_1.default.addSysRamosAtividade(sysRamosAtividade, res);
});
routes.patch("/:name", function (req, res) {
    var name = req.params.name;
    var sysRamosAtividade = req.body;
    sysRamosAtividade_1.default.updateSysRamosAtividade(name, sysRamosAtividade, res);
});
routes.delete("/:name", function (req, res) {
    var name = req.params.name;
    sysRamosAtividade_1.default.deleteSysRamosAtividade(name, res);
});
exports.default = routes;
//# sourceMappingURL=rotasRamos.js.map