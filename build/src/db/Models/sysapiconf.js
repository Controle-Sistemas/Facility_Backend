"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var ModeloSysApiConf = /** @class */ (function () {
    function ModeloSysApiConf() {
    }
    ModeloSysApiConf.prototype.getSysApiConf = function (res) {
        try {
            __1.default.query('SELECT * FROM SYSAPICONF', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SYSAPICONF listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloSysApiConf.prototype.getSysApiConfById = function (id, res) {
        try {
            __1.default.query('SELECT * FROM SYSAPICONF WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SYSAPICONF listado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloSysApiConf.prototype.createSysApiConf = function (sysApiConf, res) {
        try {
            __1.default.query('INSERT INTO SYSAPICONF SET ?;', [sysApiConf], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SYSAPICONF criado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloSysApiConf.prototype.editSysApiConf = function (id, sysApiConf, res) {
        try {
            __1.default.query('UPDATE SYSAPICONF SET ? WHERE id = ?', [sysApiConf, id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SYSAPICONF editado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloSysApiConf.prototype.deleteSysApiConf = function (id, res) {
        try {
            __1.default.query('DELETE FROM SYSAPICONF WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'SYSAPICONF deletado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return ModeloSysApiConf;
}());
exports.default = new ModeloSysApiConf();
//# sourceMappingURL=sysapiconf.js.map