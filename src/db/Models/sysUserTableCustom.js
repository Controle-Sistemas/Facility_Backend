"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class UserTableCustomModel {
    editTable(tableData, idUser, res) {
        try {
            __1.default.query(`UPDATE sysselecttablecolumn SET ? WHERE  idUser = ${idUser} and idTable = ${tableData.idTable} AND id = ${tableData.id}`, [tableData]);
        }
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
    getTable(idUser, idTable, res) {
        try {
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
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
    createTable(tableData, res) {
        try {
            __1.default.query(`INSERT INTO sysselecttablecolumn SET ?`, [tableData], (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
    deleteTable(idTable, res) {
        try {
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
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
    deleteTableByUser(idUser, res) {
        try {
            __1.default.query(`DELETE FROM sysselecttablecolumn WHERE  idUser = ${idUser}`);
        }
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
}
exports.default = new UserTableCustomModel();
