"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var StatusChamado = /** @class */ (function () {
    function StatusChamado() {
    }
    StatusChamado.prototype.getAll = function (res) {
        try {
            __1.default.query("SELECT * FROM STATUSCHAMADOS", function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    StatusChamado.prototype.getStatusChamadoById = function (id, res) {
        try {
            __1.default.query("SELECT * FROM STATUSCHAMADOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    StatusChamado.prototype.getStatusChamadoByName = function (nome, res) {
        try {
            __1.default.query("SELECT * FROM STATUSCHAMADOS WHERE NOME = ".concat(nome), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    StatusChamado.prototype.createStatusChamado = function (statusChamado, res) {
        try {
            __1.default.query("INSERT INTO STATUSCHAMADOS SET ?", statusChamado, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({
                        message: "Status de chamado criado",
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    StatusChamado.prototype.updateStatusChamado = function (id, statusChamado, res) {
        try {
            __1.default.query("UPDATE STATUSCHAMADOS SET ? WHERE ID = ".concat(id), statusChamado, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Status de chamado atualizado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    StatusChamado.prototype.deleteStatusChamado = function (id, res) {
        try {
            __1.default.query("DELETE FROM STATUSCHAMADOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Status de chamado deletado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    return StatusChamado;
}());
exports.default = new StatusChamado();
//# sourceMappingURL=statusChamadoModel.js.map