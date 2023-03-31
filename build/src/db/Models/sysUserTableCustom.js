"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var UserTableCustomModel = /** @class */ (function () {
    function UserTableCustomModel() {
    }
    UserTableCustomModel.prototype.editTable = function (tableData, idUser, res) {
        __1.default.query("UPDATE SYSSELECTTABLECOLUMN SET ? WHERE  idUser = ".concat(idUser, " and idTable = ").concat(tableData.idTable, " AND id = ").concat(tableData.id), [tableData]);
    };
    UserTableCustomModel.prototype.getTable = function (idUser, idTable, res) {
        __1.default.query("SELECT * FROM SYSSELECTTABLECOLUMN WHERE idUser = ".concat(idUser, " AND idTable = ").concat(idTable), function (err, results) {
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
    };
    UserTableCustomModel.prototype.createTable = function (tableData, res) {
        __1.default.query("INSERT INTO SYSSELECTTABLECOLUMN SET ?", [tableData], function (err) {
            if (err) {
                console.log(err);
            }
        });
    };
    UserTableCustomModel.prototype.deleteTable = function (idTable, res) {
        __1.default.query("DELETE FROM SYSSELECTTABLECOLUMN WHERE idUser = ".concat(idTable), function (err) {
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
    };
    UserTableCustomModel.prototype.deleteTableByUser = function (idUser, res) {
        __1.default.query("DELETE FROM SYSSELECTTABLECOLUMN WHERE  idUser = ".concat(idUser));
    };
    return UserTableCustomModel;
}());
exports.default = new UserTableCustomModel();
//# sourceMappingURL=sysUserTableCustom.js.map