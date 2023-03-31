"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var UserCardModel = /** @class */ (function () {
    function UserCardModel() {
    }
    UserCardModel.prototype.getUserCard = function (id, res) {
        if (id) {
            __1.default.query("SELECT * FROM USERCARD WHERE id = ?", [id], function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (result.length > 0) {
                        res.status(200).json({
                            message: 'Card Encontrado',
                            data: result
                        });
                    }
                    else {
                        res.status(404).json({ message: 'Nenhum registro encontrado' });
                    }
                }
            });
        }
    };
    UserCardModel.prototype.getUserCardByUser = function (id, res) {
        __1.default.query("SELECT * FROM USERCARD WHERE IDUSER = ?", [id], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                if (result.length > 0) {
                    res.status(200).json({
                        message: 'Cards Encontrados',
                        data: result
                    });
                }
                else {
                    res.status(404).json({ message: 'Nenhum registro encontrado', data: [] });
                }
            }
        });
    };
    UserCardModel.prototype.addUserCard = function (cardData, res) {
        __1.default.query("INSERT INTO USERCARD SET ?", [cardData], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    message: 'Card Adicionado',
                    data: result
                });
            }
        });
    };
    UserCardModel.prototype.updateUserCard = function (cardData, idUser, idCard, res) {
        __1.default.query("UPDATE USERCARD SET ? WHERE IDUSER = ? AND ID = ?", [cardData, idUser, idCard], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                if (result.affectedRows > 0) {
                    res.status(200).json({
                        message: 'Card Atualizado',
                        data: result
                    });
                }
                else {
                    res.status(404).json({ message: 'Nenhum registro encontrado' });
                }
            }
        });
    };
    UserCardModel.prototype.deleteUserCard = function (idUser, idCard, res) {
        __1.default.query("DELETE FROM USERCARD WHERE IDUSER = ? AND ID = ?", [idUser, idCard], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    message: 'Card Deletado',
                    data: result
                });
            }
        });
    };
    return UserCardModel;
}());
exports.default = new UserCardModel();
//# sourceMappingURL=userCardModel.js.map