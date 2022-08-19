"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const urls_1 = require("./urls");
//Classe para pegar as empresas contidas na api antiga
class Empresas {
    async getAll() {
        const response = await axios_1.default.get(`${urls_1.EXTERNAL_API_URL}enterprises`).then(response => {
            return response.data;
        })
            .catch(error => {
            console.log(error);
        });
        return response;
    }
}
exports.default = new Empresas();
