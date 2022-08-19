"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class UserTableCustomModel {
    editTable(tableData, idUser, res) {
        __1.default.query(`UPDATE sysselecttablecolumn SET ? WHERE  idUser = ${idUser} and idTable = ${tableData.idTable} AND id = ${tableData.id}`, [tableData]);
    }
    getTable(idUser, idTable, res) {
        __1.default.query(`SELECT * FROM sysselecttablecolumn WHERE idUser = ${idUser} AND idTable = ${idTable}`, (err, results) => {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                console.log(typeof results);
                if (results.toString().length > 0) {
                    res.status(200).send({
                        message: 'Tabela listada com sucesso',
                        data: results
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Tabela não encontrada'
                    });
                }
            }
        });
    }
    createTable(tableData, res) {
        __1.default.query(`INSERT INTO sysselecttablecolumn SET ?`, [tableData], (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    deleteTable(idTable, res) {
        __1.default.query(`DELETE FROM sysselecttablecolumn WHERE idUser = ${idTable}`, (err) => {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Tabela deletada com sucesso'
                });
            }
        });
    }
    deleteTableByUser(idUser, res) {
        __1.default.query(`DELETE FROM sysselecttablecolumn WHERE  idUser = ${idUser}`);
    }
}
exports.default = new UserTableCustomModel();
