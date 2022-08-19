"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sysRamosAtividade_1 = __importDefault(require("../../db/Models/sysRamosAtividade"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    sysRamosAtividade_1.default.getAllSysRamosAtividade(res);
});
routes.get("/:name", (req, res) => {
    const name = req.params.name;
    sysRamosAtividade_1.default.getSysRamosAtividadeByName(name, res);
});
routes.post("/", (req, res) => {
    const sysRamosAtividade = req.body;
    sysRamosAtividade_1.default.addSysRamosAtividade(sysRamosAtividade, res);
});
routes.patch("/:name", (req, res) => {
    const name = req.params.name;
    const sysRamosAtividade = req.body;
    sysRamosAtividade_1.default.updateSysRamosAtividade(name, sysRamosAtividade, res);
});
routes.delete("/:name", (req, res) => {
    const name = req.params.name;
    sysRamosAtividade_1.default.deleteSysRamosAtividade(name, res);
});
exports.default = routes;
