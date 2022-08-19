"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userCardModel_1 = __importDefault(require("../../db/Models/userCardModel"));
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    userCardModel_1.default.getUserCard(id, res); //Pega todas as cartões da base de dados
});
routes.get('/user/:id', async (req, res) => {
    const id = Number(req.params.id);
    userCardModel_1.default.getUserCardByUser(id, res); //Pega todas as cartões da base de dados
});
routes.post('/', (req, res) => {
    const cardData = req.body;
    cardData.LINK = "/user/relatorios/" + cardData.INFO.split(' ')[0].toLowerCase();
    cardData.VALUE = 999;
    console.log(cardData);
    userCardModel_1.default.addUserCard(cardData, res); //Cria a cartão
});
routes.patch('/:idUser/:id', (req, res) => {
    const id = Number(req.params.id);
    const idUser = Number(req.params.idUser);
    const cardData = req.body;
    userCardModel_1.default.updateUserCard(cardData, idUser, id, res); //Atualiza a cartão
});
routes.delete('/:idUser/:id', (req, res) => {
    const id = Number(req.params.id);
    const idUser = Number(req.params.idUser);
    userCardModel_1.default.deleteUserCard(idUser, id, res); //Deleta a cartão
});
exports.default = routes;
