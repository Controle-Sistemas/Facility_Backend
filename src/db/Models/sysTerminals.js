"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class TerminalModel {
    getTerminals(req, res) {
        __1.default.query(`SELECT * FROM TERMINAIS`, (err, results) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminais listados com sucesso',
                    data: results
                });
            }
        });
    }
    getTerminal(id, res) {
        __1.default.query(`SELECT * FROM TERMINAIS WHERE idEmpresa = ?`, [id], (err, results) => {
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
    }
    createTerminal(terminalData, res) {
        __1.default.query(`INSERT INTO TERMINAIS SET ?`, [terminalData]);
    }
    updateTerminal(id, terminalData, res) {
        __1.default.query(`UPDATE TERMINAIS SET ? WHERE id = ?`, [terminalData, id], (err, results) => {
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
    }
    deleteTerminal(id, res) {
        __1.default.query(`DELETE FROM TERMINAIS WHERE id = ?`, [id], (err, results) => {
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
    }
}
exports.default = new TerminalModel();
