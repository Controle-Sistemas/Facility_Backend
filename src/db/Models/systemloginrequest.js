"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class ModeloClientes {
    getClients(res) {
        //Retorna todos os clientes
        try {
            __1.default.query('SELECT * FROM sysloginrequest', (err, results) => {
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
                    __1.default.end();
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    getClientById(id, res) {
        //Retorna um cliente pelo id
        try {
            __1.default.query('SELECT * FROM sysloginrequest WHERE id = ?', [id], (err, results) => {
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
                        __1.default.end();
                    }
                    else {
                        res.status(404).send({
                            message: 'Cliente não encontrado'
                        });
                        __1.default.end();
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    getClientByCNPJ(cnpj, res) {
        //Retorna um cliente pelo cnpj
        try {
            __1.default.query(`SELECT * FROM sysloginrequest WHERE CNPJ = ${cnpj}`, (err, results) => {
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
                        __1.default.end();
                    }
                    else {
                        res.status(404).send({
                            message: 'Cliente não encontrado, verifique se o CNPJ está correto'
                        });
                        __1.default.end();
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    getFields(res) {
        //Retorna todos os campos de um cliente
        try {
            __1.default.query('DESCRIBE sysloginrequest', (err, results) => {
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
                    __1.default.end();
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    createClient(sysLogin, res) {
        //Cria um cliente
        try {
            __1.default.query('INSERT INTO sysloginrequest SET ?', [sysLogin]);
        }
        catch (error) {
            console.error(error);
        }
    }
    updateClient(id, sysLogin, res) {
        //Atualiza um cliente
        try {
            __1.default.query('UPDATE sysloginrequest SET ? WHERE id = ?', [sysLogin, id], (err, results) => {
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
                    __1.default.end();
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    deleteClient(id, res) {
        //Deleta um cliente
        try {
            __1.default.query('DELETE FROM sysloginrequest WHERE id = ?', [id], (err, results) => {
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
    }
}
exports.default = new ModeloClientes();
