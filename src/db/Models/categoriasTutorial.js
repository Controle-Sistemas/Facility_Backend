"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class CategoriasModel {
    getAll(res) {
        __1.default.query('SELECT * FROM tutoriaiscategoria', (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(results);
            }
        });
    }
    getById(id, res) {
        __1.default.query('SELECT * FROM tutoriaiscategoria WHERE id = ?', [id], (err, results) => {
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
    getByNome(nome, res) {
        __1.default.query('SELECT * FROM tutoriaiscategoria WHERE nome = ?', [nome], (err, results) => {
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
    create(categoria, res) {
        __1.default.query('INSERT INTO tutoriaiscategoria SET ?', [categoria], (err, results) => {
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
    }
    update(id, categoria, res) {
        __1.default.query('UPDATE tutoriaiscategoria SET ? WHERE id = ?', [categoria, id], (err, results) => {
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
    }
    delete(id, res) {
        __1.default.query('DELETE FROM tutoriaiscategoria WHERE id = ?', [id], (err, results) => {
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
    }
}
exports.default = new CategoriasModel();
