"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sysTerminals_1 = __importDefault(require("../../db/Models/sysTerminals"));
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    sysTerminals_1.default.getTerminals(req, res); //Pega todos os terminais da base de dados
});
routes.get('/:id', function (req, res) {
    var idCloud = Number(req.params.id); //Pega o id do terminal
    sysTerminals_1.default.getTerminal(idCloud, res); //Pega o terminal pelo id
});
routes.post('/', function (req, res) {
    var terminalData = req.body; //Pega os dados do terminal
    sysTerminals_1.default.createTerminal(terminalData, res); //Cria o terminal
});
routes.patch('/:id', function (req, res) {
    var idCloud = Number(req.params.id); //Pega o id do terminal
    var terminalData = req.body; //Pega os dados do terminal
    sysTerminals_1.default.updateTerminal(idCloud, terminalData, res); //Atualiza o terminal
});
routes.delete('/:id', function (req, res) {
    var idCloud = Number(req.params.id); //Pega o id do terminal
    sysTerminals_1.default.deleteTerminal(idCloud, res); //Deleta o terminal
});
exports.default = routes;
//# sourceMappingURL=rotasTerminais.js.map