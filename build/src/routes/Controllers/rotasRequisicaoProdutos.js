"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var produtos_1 = __importDefault(require("../requests/produtos"));
var routes = express_1.default.Router();
routes.get('/produto/:clientId/:id', function (req, res) {
    var id = Number(req.params.id);
    var clientId = req.params.clientId;
    var NewProductRequest = new produtos_1.default(clientId);
    var productPromise = NewProductRequest.getOne(id);
    Promise.resolve(productPromise).then(function (response) {
        if (response.res.error) {
            res.status(400).json({
                message: "Erro!",
                data: response.res.data
            });
        }
        else {
            res.status(200).json({ message: "Produto Encontrado com sucesso", data: response.res.data });
        }
    });
});
routes.get('/lista-produtos/:clientId/:description', function (req, res) {
    var description = req.params.description;
    var clientId = req.params.clientId;
    var NewProductRequest = new produtos_1.default(clientId);
    var productsPromise = NewProductRequest.getList(description);
    Promise.resolve(productsPromise).then(function (response) {
        if (response.res.error) {
            res.status(400).json({
                message: "Erro!",
                data: response.res.data
            });
        }
        else {
            res.status(200).json({ message: "Produtos Retornados com sucesso!", data: response.res.data });
        }
    });
});
exports.default = routes;
//# sourceMappingURL=rotasRequisicaoProdutos.js.map