"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class sysRamosAtividade {
    getAllSysRamosAtividade(res) {
        try {
            __1.default.query('SELECT * FROM sysRamosAtividade', (error, results, fields) => {
                if (error) {
                    res.status(400).send(error);
                    console.log(error);
                }
                else {
                    res.status(200).json(results);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            __1.default.end();
        }
    }
    getSysRamosAtividadeByName(name, res) {
        try {
            __1.default.query('SELECT * FROM sysRamosAtividade WHERE descricao = ?', [name], (error, results, fields) => {
                if (error) {
                    res.status(400).send(error);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send(results);
                    }
                    else {
                        res.status(404).send({
                            message: 'Ramo de atividade não encontrado'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            __1.default.end();
        }
    }
    addSysRamosAtividade(sysRamosAtividade, res) {
        try {
            __1.default.query('INSERT INTO sysRamosAtividade SET ?', sysRamosAtividade, (error, results, fields) => {
                if (error) {
                    res.status(400).send(error);
                }
                else {
                    res.status(200).send(results);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            __1.default.end();
        }
    }
    updateSysRamosAtividade(name, sysRamosAtividade, res) {
        try {
            __1.default.query('UPDATE sysRamosAtividade SET ? WHERE descricao = ?', [sysRamosAtividade, name], (error, results, fields) => {
                if (error) {
                    res.status(400).send(error);
                }
                else {
                    res.status(200).send(results);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            __1.default.end();
        }
    }
    deleteSysRamosAtividade(name, res) {
        try {
            __1.default.query('DELETE FROM sysRamosAtividade WHERE descricao = ?', [name], (error, results, fields) => {
                if (error) {
                    res.status(400).send(error);
                }
                else {
                    res.status(200).send(results);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            __1.default.end();
        }
    }
}
exports.default = new sysRamosAtividade();
