"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var TerminalModel = /** @class */ (function () {
    function TerminalModel() {
    }
    TerminalModel.prototype.getTerminals = function (req, res) {
        __1.default.query("SELECT * FROM TERMINAIS", function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'TERMINAIS listados com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.getTerminal = function (id, res) {
        __1.default.query("SELECT * FROM TERMINAIS WHERE idEmpresa = ?", [id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal listado com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.createTerminal = function (terminalData, res) {
        __1.default.query("INSERT INTO TERMINAIS SET ?", [terminalData]);
    };
    TerminalModel.prototype.updateTerminal = function (id, terminalData, res) {
        __1.default.query("UPDATE TERMINAIS SET ? WHERE id = ?", [terminalData, id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal Atualizado com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.deleteTerminal = function (id, res) {
        __1.default.query("DELETE FROM TERMINAIS WHERE id = ?", [id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal deletado com sucesso',
                    data: results
                });
            }
        });
    };
    return TerminalModel;
}());
exports.default = new TerminalModel();
//# sourceMappingURL=sysTerminals.js.map