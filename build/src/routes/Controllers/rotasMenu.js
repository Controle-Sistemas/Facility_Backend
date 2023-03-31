"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sysMenuItem_1 = __importDefault(require("../../db/Models/sysMenuItem"));
var routes = express_1.default.Router();
routes.get('/item', function (req, res) {
    sysMenuItem_1.default.getAllMenuItems(res);
});
routes.get('/item/:id', function (req, res) {
    var id = Number(req.params.id);
    sysMenuItem_1.default.getMenuItemById(id, res);
});
routes.get('/item/ramo/:ramoAtividade', function (req, res) {
    var ramoAtividade = req.params.ramoAtividade;
    sysMenuItem_1.default.getItemsByRamoDeAtividade(ramoAtividade, res);
});
routes.post('/item', function (req, res) {
    var menuItem = req.body;
    sysMenuItem_1.default.createMenuItem(menuItem, res);
});
routes.patch('/item/:id', function (req, res) {
    var id = Number(req.params.id);
    var menuItem = req.body;
    sysMenuItem_1.default.updateMenuItem(id, menuItem, res);
});
routes.delete('/item/:id', function (req, res) {
    var id = Number(req.params.id);
    sysMenuItem_1.default.deleteMenuItem(id, res);
});
exports.default = routes;
//# sourceMappingURL=rotasMenu.js.map