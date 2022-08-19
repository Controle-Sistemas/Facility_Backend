"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
routes.post('/duvida', (req, res) => {
    const duvida = req.body;
    const sendEmailService = new sendEmailService_1.default();
    sendEmailService.sendEmailDuvida(duvida);
    res.status(200).send();
});
exports.default = routes;
