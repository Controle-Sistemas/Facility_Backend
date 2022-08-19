"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//Classe para pegar as licenças contidas na api antiga
class Licencas {
    async getAll(idCloud) {
        const response = await axios_1.default.get(`http://192.95.42.179:8090/DataSnap/Rest/TFrmSrvMethods/GetTerminais/${idCloud}`).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
        });
        return response;
    }
}
exports.default = new Licencas();
