"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sysMenuItem_1 = __importDefault(require("../../db/Models/sysMenuItem"));
const routes = express_1.default.Router();
routes.get('/item', (req, res) => {
    sysMenuItem_1.default.getAllMenuItems(res);
});
routes.get('/item/:id', (req, res) => {
    const id = Number(req.params.id);
    sysMenuItem_1.default.getMenuItemById(id, res);
});
routes.get('/item/ramo/:ramoAtividade', (req, res) => {
    const ramoAtividade = req.params.ramoAtividade;
    sysMenuItem_1.default.getItemsByRamoDeAtividade(ramoAtividade, res);
});
routes.post('/item', (req, res) => {
    const menuItem = req.body;
    sysMenuItem_1.default.createMenuItem(menuItem, res);
});
routes.patch('/item/:id', (req, res) => {
    const id = Number(req.params.id);
    const menuItem = req.body;
    sysMenuItem_1.default.updateMenuItem(id, menuItem, res);
});
routes.delete('/item/:id', (req, res) => {
    const id = Number(req.params.id);
    sysMenuItem_1.default.deleteMenuItem(id, res);
});
exports.default = routes;
