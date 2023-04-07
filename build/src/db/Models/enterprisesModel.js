"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var EnterprisesModel = /** @class */ (function () {
    function EnterprisesModel() {
    }
    EnterprisesModel.prototype.getEnterprises = function (res) {
        //lista todas as contas de cnpj cadastradas
        __1.default.query("SELECT * FROM EMPRESAS", function (err, results) {
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
    };
    EnterprisesModel.prototype.getEnterprise = function (id, res) {
        //lista uma empresa especifica
        __1.default.query("SELECT * FROM EMPRESAS WHERE IDCLOUD = ?", [id], function (err, results) {
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
    };
    EnterprisesModel.prototype.getEnterpriseCnpj = function (cnpj, res) {
        //lista uma empresa especifica
        __1.default.query("SELECT * FROM EMPRESAS WHERE CNPJ = ?", [cnpj], function (err, results) {
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
    };
    EnterprisesModel.prototype.createEnterprise = function (enterpriseData, res) {
        //cria uma nova empresa
        __1.default.query("INSERT INTO EMPRESAS SET ?", [enterpriseData], function (err, results) {
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
    };
    EnterprisesModel.prototype.updateEnterprise = function (id, enterpriseData, res) {
        //atualiza uma empresa
        __1.default.query("UPDATE EMPRESAS SET ? WHERE idCloud = ?", [enterpriseData, id], function (err, results) {
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
    };
    EnterprisesModel.prototype.deleteEnterprise = function (id, res) {
        //deleta uma empresa
        __1.default.query("DELETE FROM EMPRESAS WHERE idCloud = ?", [id], function (err, results) {
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
    };
    return EnterprisesModel;
}());
exports.default = new EnterprisesModel();
//# sourceMappingURL=enterprisesModel.js.map