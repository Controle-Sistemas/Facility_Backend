"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var systemloginrequestGroup_1 = __importDefault(require("../../db/Models/systemloginrequestGroup"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    systemloginrequestGroup_1.default.getAllGroups(res);
});
routes.post('/matrizes', function (req, res) {
    systemloginrequestGroup_1.default.createMatriz(req.body, res);
});
routes.get('/matrizes', function (req, res) {
    systemloginrequestGroup_1.default.getMatrizes(res);
});
routes.get('/matrizes/:id', function (req, res) {
    systemloginrequestGroup_1.default.getMatrizById(parseInt(req.params.id), res);
});
routes.patch('/matrizes/:id', function (req, res) {
    systemloginrequestGroup_1.default.updateMatriz(parseInt(req.params.id), req.body, res);
});
routes.delete('/matrizes/:id', function (req, res) {
    systemloginrequestGroup_1.default.deleteMatriz(parseInt(req.params.id), res);
});
routes.post('/filiais', function (req, res) {
    systemloginrequestGroup_1.default.createFilial(req.body, res);
});
routes.get('/filiais', function (req, res) {
    systemloginrequestGroup_1.default.getAllFiliais(res);
});
routes.delete('/filiais/:cnpj', function (req, res) {
    systemloginrequestGroup_1.default.deleteFilial(req.params.cnpj, res);
});
routes.get('/completo/:cnpj', function (req, res) {
    systemloginrequestGroup_1.default.getFullGroupByMatrizCnpj(req.params.cnpj, res);
});
exports.default = routes;
//# sourceMappingURL=rotasGrupos.js.map