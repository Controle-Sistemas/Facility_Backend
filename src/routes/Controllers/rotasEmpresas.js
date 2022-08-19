"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enterprisesModel_1 = __importDefault(require("../../db/Models/enterprisesModel"));
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.get('/', async (req, res) => {
    enterprisesModel_1.default.getEnterprises(res); //Pega todas as empresas da base de dados
});
routes.get('/:idCloud', async (req, res) => {
    const id = Number(req.params.idCloud); //Pega o id da empresa
    enterprisesModel_1.default.getEnterprise(id, res); //Pega a empresa pelo id
});
routes.get('/cnpj/:cnpj', async (req, res) => {
    const cnpj = req.params.cnpj; //Pega o cnpj da empresa
    enterprisesModel_1.default.getEnterpriseCnpj(cnpj, res); //Pega a empresa pelo cnpj
});
routes.post('/', (req, res) => {
    // Empresas.getAll().then(response => {
    //     response.Empresas.forEach((empresa:any) => {
    //         EnterprisesModel.createEnterprise(empresa, res)
    //     });
    // })
    const enterpriseData = req.body; //Pega os dados da empresa
    enterprisesModel_1.default.createEnterprise(enterpriseData, res); //Cria a empresa
});
routes.patch('/:idCloud', (req, res) => {
    const id = Number(req.params.idCloud); //Pega o id da empresa
    const enterpriseData = req.body; //Pega os dados da empresa
    enterprisesModel_1.default.updateEnterprise(id, enterpriseData, res); //Atualiza a empresa
});
routes.delete('/:idCloud', (req, res) => {
    const id = Number(req.params.idCloud); //Pega o id da empresa
    enterprisesModel_1.default.deleteEnterprise(id, res); //Deleta a empresa
});
exports.default = routes;
