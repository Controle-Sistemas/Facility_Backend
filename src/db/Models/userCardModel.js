"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class UserCardModel {
    getUserCard(id, res) {
        __1.default.query(`SELECT * FROM USERCARD WHERE id = ?`, [id], (err, result) => {
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
    getUserCardByUser(id, res) {
        __1.default.query(`SELECT * FROM USERCARD WHERE IDUSER = ?`, [id], (err, result) => {
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
    }
    addUserCard(cardData, res) {
        __1.default.query(`INSERT INTO USERCARD SET ?`, [cardData], (err, result) => {
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
    }
    updateUserCard(cardData, idUser, idCard, res) {
        __1.default.query(`UPDATE USERCARD SET ? WHERE IDUSER = ? AND ID = ?`, [cardData, idUser, idCard], (err, result) => {
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
    }
    deleteUserCard(idUser, idCard, res) {
        __1.default.query(`DELETE FROM USERCARD WHERE IDUSER = ? AND ID = ?`, [idUser, idCard], (err, result) => {
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
    }
}
exports.default = new UserCardModel();
