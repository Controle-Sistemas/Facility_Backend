"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class EnterprisesModel {
    getEnterprises(res) {
        //lista todas as empresas
        __1.default.query(`SELECT * FROM EMPRESAS`, (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Empresas listadas com sucesso',
                    data: results
                });
            }
        });
    }
    getEnterprise(id, res) {
        //lista uma empresa especifica
        __1.default.query(`SELECT * FROM EMPRESAS WHERE IDCLOUD = ?`, [id], (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({
                        message: 'Empresa listada com sucesso',
                        data: results
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Empresa não encontrada'
                    });
                }
            }
        });
    }
    getEnterpriseCnpj(cnpj, res) {
        //lista uma empresa especifica
        __1.default.query(`SELECT * FROM EMPRESAS WHERE CNPJ = ?`, [cnpj], (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({
                        message: 'Empresa listada com sucesso',
                        data: results
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Empresa não encontrada'
                    });
                }
            }
        });
    }
    createEnterprise(enterpriseData, res) {
        //cria uma nova empresa
        __1.default.query(`INSERT INTO EMPRESAS SET ?`, [enterpriseData], (err, results) => {
            if (err) {
                res.status(500).send({
                    message: 'Erro ao criar empresa',
                    errormessage: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Empresa criada com sucesso',
                    data: results
                });
            }
        });
    }
    updateEnterprise(id, enterpriseData, res) {
        //atualiza uma empresa
        __1.default.query(`UPDATE EMPRESAS SET ? WHERE idCloud = ?`, [enterpriseData, id], (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        message: 'Empresa Atualizada com sucesso',
                        data: results
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Empresa não encontrada'
                    });
                }
            }
        });
    }
    deleteEnterprise(id, res) {
        //deleta uma empresa
        __1.default.query(`DELETE FROM EMPRESAS WHERE idCloud = ?`, [id], (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        message: 'Empresa Deletada com sucesso',
                        data: results
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Empresa não encontrada'
                    });
                }
            }
        });
    }
}
exports.default = new EnterprisesModel();
