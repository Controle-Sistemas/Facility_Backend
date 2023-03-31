"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var TutorialModel = /** @class */ (function () {
    function TutorialModel() {
    }
    TutorialModel.prototype.getTutorials = function (res) {
        try {
            __1.default.query('SELECT * FROM TUTORIAIS', function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send({
                        data: results,
                        message: 'TUTORIAIS retornados com sucesso'
                    });
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    };
    TutorialModel.prototype.getTutorialById = function (id, res) {
        __1.default.query('SELECT * FROM TUTORIAIS WHERE ID = ?', [id], function (err, results) {
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
    };
    TutorialModel.prototype.getTutorialByCategoria = function (categoria, res) {
        __1.default.query('SELECT * FROM TUTORIAIS WHERE CATEGORIA = ?', [categoria], function (err, results) {
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
    };
    TutorialModel.prototype.createTutorial = function (tutoriais, res) {
        __1.default.query('INSERT INTO TUTORIAIS SET ?', tutoriais, function (err, results) {
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
    };
    TutorialModel.prototype.updateTutorial = function (id, tutoriais, res) {
        __1.default.query('UPDATE TUTORIAIS SET ? WHERE ID = ?', [tutoriais, id], function (err, results) {
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
    };
    TutorialModel.prototype.deleteTutorial = function (id, res) {
        __1.default.query('DELETE FROM TUTORIAIS WHERE ID = ?', [id], function (err, results) {
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
    };
    return TutorialModel;
}());
exports.default = new TutorialModel();
//# sourceMappingURL=tutorialModel.js.map