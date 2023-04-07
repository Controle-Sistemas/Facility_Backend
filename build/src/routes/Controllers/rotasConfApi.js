"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sysapiconf_1 = __importDefault(require("../../db/Models/sysapiconf"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    sysapiconf_1.default.getSysApiConf(res);
});
routes.get("/:id", function (req, res) {
    var id = Number(req.params.id);
    sysapiconf_1.default.getSysApiConfById(id, res);
});
routes.post("/", function (req, res) {
    var sysApiConf = req.body;
    sysapiconf_1.default.createSysApiConf(sysApiConf, res);
});
routes.patch("/:id", function (req, res) {
    var id = Number(req.params.id);
    var sysApiConf = req.body;
    sysapiconf_1.default.editSysApiConf(id, sysApiConf, res);
});
routes.delete("/:id", function (req, res) {
    var id = Number(req.params.id);
    sysapiconf_1.default.deleteSysApiConf(id, res);
});
exports.default = routes;
//# sourceMappingURL=rotasConfApi.js.map