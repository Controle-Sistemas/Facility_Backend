"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class ModeloSysApiConf {
    getSysApiConf(res) {
        try {
            __1.default.query('SELECT * FROM sysapiconf', (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SysApiConf listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    getSysApiConfById(id, res) {
        try {
            __1.default.query('SELECT * FROM sysapiconf WHERE id = ?', [id], (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SysApiConf listado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    createSysApiConf(sysApiConf, res) {
        try {
            __1.default.query('INSERT INTO sysapiconf SET ?;', [sysApiConf], (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SysApiConf criado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    editSysApiConf(id, sysApiConf, res) {
        try {
            __1.default.query('UPDATE sysapiconf SET ? WHERE id = ?', [sysApiConf, id], (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SysApiConf editado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    deleteSysApiConf(id, res) {
        try {
            __1.default.query('DELETE FROM sysapiconf WHERE id = ?', [id], (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SysApiConf deletado com sucesso',
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
exports.default = new ModeloSysApiConf();
