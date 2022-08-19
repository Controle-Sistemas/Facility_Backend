"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sysapiconf_1 = __importDefault(require("../../db/Models/sysapiconf"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    sysapiconf_1.default.getSysApiConf(res);
});
routes.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    sysapiconf_1.default.getSysApiConfById(id, res);
});
routes.post("/", (req, res) => {
    const sysApiConf = req.body;
    sysapiconf_1.default.createSysApiConf(sysApiConf, res);
});
routes.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const sysApiConf = req.body;
    sysapiconf_1.default.editSysApiConf(id, sysApiConf, res);
});
routes.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    sysapiconf_1.default.deleteSysApiConf(id, res);
});
exports.default = routes;
