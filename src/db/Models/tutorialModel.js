"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class TutorialModel {
    getTutorials(res) {
        __1.default.query('SELECT * FROM tutoriais', (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({
                    data: results,
                    message: 'Tutoriais retornados com sucesso'
                });
            }
        });
    }
    getTutorialById(id, res) {
        __1.default.query('SELECT * FROM tutoriais WHERE ID = ?', [id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial retornado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        data: results,
                        message: 'Tutorial não encontrado'
                    });
                }
            }
        });
    }
    getTutorialByCategoria(categoria, res) {
        __1.default.query('SELECT * FROM tutoriais WHERE CATEGORIA = ?', [categoria], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial retornado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        data: results,
                        message: 'Tutorial não encontrado'
                    });
                }
            }
        });
    }
    createTutorial(tutoriais, res) {
        __1.default.query('INSERT INTO tutoriais SET ?', tutoriais, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({
                    data: results,
                    message: 'Tutorial criado com sucesso'
                });
            }
        });
    }
    updateTutorial(id, tutoriais, res) {
        __1.default.query('UPDATE tutoriais SET ? WHERE ID = ?', [tutoriais, id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial atualizado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        data: results,
                        message: 'Tutorial não encontrado'
                    });
                }
            }
        });
    }
    deleteTutorial(id, res) {
        __1.default.query('DELETE FROM tutoriais WHERE ID = ?', [id], (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial deletado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        data: results,
                        message: 'Tutorial não encontrado'
                    });
                }
            }
        });
    }
}
exports.default = new TutorialModel();
