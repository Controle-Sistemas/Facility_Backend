"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class DocumentsModel {
    getAllDocuments(res) {
        __1.default.query(`SELECT * FROM DOCUMENTOS`, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({
                    data: results,
                    message: 'Lista de documentos'
                });
            }
        });
    }
    getDocumentById(id, res) {
        __1.default.query(`SELECT * FROM DOCUMENTOS WHERE ID = ?`, [id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({ data: results, message: 'Documento encontrado' });
                }
                else {
                    res.status(404).send({ message: 'Documento não encontrado' });
                }
            }
        });
    }
    getDocumentByUserCNPJ(cnpj, res) {
        __1.default.query(`SELECT * FROM DOCUMENTOS WHERE CNPJ = ?`, [cnpj], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({ data: results, message: 'Documento encontrado' });
                }
                else {
                    res.status(404).send({ message: 'Documento não encontrado' });
                }
            }
        });
    }
    getDocumentByUserId(id, res) {
        __1.default.query(`SELECT * FROM DOCUMENTOS WHERE ID = ?`, [id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({ data: results, message: 'Documento encontrado' });
            }
        });
    }
    addDocument(document, res) {
        __1.default.query(`INSERT INTO DOCUMENTOS SET ?`, [document], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({ data: results, message: 'Documento adicionado' });
            }
        });
    }
    updateDocument(id, document, res) {
        __1.default.query(`UPDATE DOCUMENTOS SET ? WHERE ID = ?`, [document, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({ data: results, message: 'Documento atualizado' });
                }
                else {
                    res.status(404).send({ message: 'Documento não encontrado' });
                }
            }
        });
    }
    deleteDocument(id, res) {
        __1.default.query(`DELETE FROM DOCUMENTOS WHERE ID = ?`, [id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({ data: results, message: 'Documento deletado' });
                }
                else {
                    res.status(404).send({ message: 'Documento não encontrado' });
                }
            }
        });
    }
}
exports.default = new DocumentsModel;
