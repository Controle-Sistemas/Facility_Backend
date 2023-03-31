"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var sysRamosAtividade = /** @class */ (function () {
    function sysRamosAtividade() {
    }
    sysRamosAtividade.prototype.getAllSysRamosAtividade = function (res) {
        __1.default.query('SELECT * FROM SYSRAMOSATIVIDADE', function (error, results, fields) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).json(results);
            }
        });
    };
    sysRamosAtividade.prototype.getSysRamosAtividadeByName = function (name, res) {
        __1.default.query('SELECT * FROM SYSRAMOSATIVIDADE WHERE descricao = ?', [name], function (error, results, fields) {
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
    };
    sysRamosAtividade.prototype.addSysRamosAtividade = function (sysRamosAtividade, res) {
        __1.default.query('INSERT INTO SYSRAMOSATIVIDADE SET ?', sysRamosAtividade, function (error, results, fields) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(results);
            }
        });
    };
    sysRamosAtividade.prototype.updateSysRamosAtividade = function (name, sysRamosAtividade, res) {
        __1.default.query('UPDATE SYSRAMOSATIVIDADE SET ? WHERE descricao = ?', [sysRamosAtividade, name], function (error, results, fields) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(results);
            }
        });
    };
    sysRamosAtividade.prototype.deleteSysRamosAtividade = function (name, res) {
        __1.default.query('DELETE FROM SYSRAMOSATIVIDADE WHERE descricao = ?', [name], function (error, results, fields) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(results);
            }
        });
    };
    return sysRamosAtividade;
}());
exports.default = new sysRamosAtividade();
//# sourceMappingURL=sysRamosAtividade.js.map