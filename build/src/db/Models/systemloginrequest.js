"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var ModeloClientes = /** @class */ (function () {
    function ModeloClientes() {
    }
    ModeloClientes.prototype.getClientsWithoutGroup = function (res) {
        //lista todas os clientes cadastradas sem grupo
        try {
            __1.default.query("SELECT ID, NOME, NOMEESTABELECIMENTO AS 'ESTABELECIMENTO', IDCLOUD, CNPJ \n\t\t\t\tFROM SYSLOGINREQUEST \n\t\t\t\tWHERE ADMIN = 0 AND SYSLOGINREQUEST.CNPJ NOT IN \n\t\t\t\t(SELECT CNPJ FROM FILIAIS UNION SELECT CNPJ FROM  MATRIZES)", function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Clientes disponível para grupo listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.getClients = function (res) {
        //Retorna todos os clientes
        try {
            __1.default.query('SELECT * FROM SYSLOGINREQUEST', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Clientes listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.getAdmins = function (res) {
        //Retorna todos os admin
        try {
            __1.default.query('SELECT * FROM SYSLOGINREQUEST WHERE ADMIN = 1', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Admins listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.getClientById = function (id, res) {
        //Retorna um cliente pelo id
        try {
            __1.default.query('SELECT * FROM SYSLOGINREQUEST WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: 'Cliente listado com sucesso',
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: 'Cliente não encontrado'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.getClientByCNPJ = function (cnpj, res) {
        //Retorna um cliente pelo cnpj
        try {
            __1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ".concat(cnpj), function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: 'Cliente listado com sucesso',
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: 'Cliente não encontrado, verifique se o CNPJ está correto'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.getFields = function (res) {
        //Retorna todos os campos de um cliente
        try {
            __1.default.query('DESCRIBE SYSLOGINREQUEST', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    results.push({
                        Field: 'Ações',
                        Type: 'button',
                        Null: 'NO',
                        Key: ''
                    });
                    res.status(200).send({
                        message: 'Campos listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.createClient = function (sysLogin, res) {
        //Cria um cliente
        try {
            __1.default.query('INSERT INTO SYSLOGINREQUEST SET ?', [sysLogin]);
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.updateClient = function (id, sysLogin, res) {
        //Atualiza um cliente
        try {
            __1.default.query('UPDATE SYSLOGINREQUEST SET ? WHERE id = ?', [sysLogin, id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Cliente atualizado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloClientes.prototype.deleteClient = function (id, res) {
        //Deleta um cliente
        try {
            __1.default.query('DELETE FROM SYSLOGINREQUEST WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Cliente deletado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return ModeloClientes;
}());
exports.default = new ModeloClientes();
//# sourceMappingURL=systemloginrequest.js.map