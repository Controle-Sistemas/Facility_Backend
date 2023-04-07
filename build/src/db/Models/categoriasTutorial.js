"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var CategoriasModel = /** @class */ (function () {
    function CategoriasModel() {
    }
    CategoriasModel.prototype.getAll = function (res) {
        try {
            __1.default.query('SELECT * FROM TUTORIAISCATEGORIA', function (err, results) {
                if (err) {
                    res.status(503).send(err);
                }
                else {
                    res.status(200).send(results);
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    CategoriasModel.prototype.getById = function (id, res) {
        try {
            __1.default.query('SELECT * FROM TUTORIAISCATEGORIA WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send(results);
                    }
                    else {
                        res.status(404).send({
                            message: 'Categoria não encontrada'
                        });
                    }
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    CategoriasModel.prototype.getByNome = function (nome, res) {
        __1.default.query('SELECT * FROM TUTORIAISCATEGORIA WHERE nome = ?', [nome], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send(results);
                }
                else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    });
                }
            }
        });
    };
    CategoriasModel.prototype.create = function (categoria, res) {
        __1.default.query('INSERT INTO TUTORIAISCATEGORIA SET ?', [categoria], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({
                    data: results,
                    message: 'Categoria criada com sucesso'
                });
            }
        });
    };
    CategoriasModel.prototype.update = function (id, categoria, res) {
        __1.default.query('UPDATE TUTORIAISCATEGORIA SET ? WHERE id = ?', [categoria, id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Categoria atualizada com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    });
                }
            }
        });
    };
    CategoriasModel.prototype.delete = function (id, res) {
        __1.default.query('DELETE FROM TUTORIAISCATEGORIA WHERE id = ?', [id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Categoria deletada com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    });
                }
            }
        });
    };
    return CategoriasModel;
}());
exports.default = new CategoriasModel();
//# sourceMappingURL=categoriasTutorial.js.map