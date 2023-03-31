"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var DocumentsModel = /** @class */ (function () {
    function DocumentsModel() {
    }
    DocumentsModel.prototype.getAllDocuments = function (res) {
        __1.default.query("SELECT * FROM DOCUMENTOS", function (err, results) {
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
    };
    DocumentsModel.prototype.getDocumentById = function (id, res) {
        __1.default.query("SELECT * FROM DOCUMENTOS WHERE ID = ?", [id], function (err, results) {
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
    };
    DocumentsModel.prototype.getDocumentByUserCNPJ = function (cnpj, res) {
        __1.default.query("SELECT * FROM DOCUMENTOS WHERE CNPJ = ?", [cnpj], function (err, results) {
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
    };
    DocumentsModel.prototype.getDocumentByUserId = function (id, res) {
        __1.default.query("SELECT * FROM DOCUMENTOS WHERE ID = ?", [id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({ data: results, message: 'Documento encontrado' });
            }
        });
    };
    DocumentsModel.prototype.addDocument = function (document, res) {
        __1.default.query("INSERT INTO DOCUMENTOS SET ?", [document], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({ data: results, message: 'Documento adicionado' });
            }
        });
    };
    DocumentsModel.prototype.updateDocument = function (id, document, res) {
        __1.default.query("UPDATE DOCUMENTOS SET ? WHERE ID = ?", [document, id], function (err, results) {
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
    };
    DocumentsModel.prototype.deleteDocument = function (id, res) {
        __1.default.query("DELETE FROM DOCUMENTOS WHERE ID = ?", [id], function (err, results) {
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
    };
    return DocumentsModel;
}());
exports.default = new DocumentsModel;
//# sourceMappingURL=documentsModel.js.map