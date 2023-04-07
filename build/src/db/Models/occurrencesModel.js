"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var Ocorrencias = /** @class */ (function () {
    function Ocorrencias() {
    }
    Ocorrencias.prototype.getAll = function (res) {
        try {
            __1.default.query("SELECT * FROM OCORRENCIAS", function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencias encontradas",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.getOccurrenceById = function (id, res) {
        try {
            __1.default.query("SELECT * FROM OCORRENCIAS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.getOccurrenceBySector = function (sector, res) {
        try {
            __1.default.query("SELECT * FROM OCORRENCIAS WHERE SETOR = ".concat(sector), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.getOccurrenceByInterno = function (interno, res) {
        try {
            __1.default.query("SELECT * FROM OCORRENCIAS WHERE IDINTERNO = ".concat(interno), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.getOccurrenceByChamado = function (chamado, res) {
        try {
            __1.default.query("SELECT * FROM OCORRENCIAS WHERE IDCHAMADO = ".concat(chamado), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.createOccurrence = function (ocorrenciaData, res) {
        try {
            __1.default.query("INSERT INTO OCORRENCIAS SET ?", ocorrenciaData, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({
                        message: "Ocorrencia criada",
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
    Ocorrencias.prototype.updateOccurrence = function (id, ocorrenciaData, res) {
        try {
            __1.default.query("UPDATE OCORRENCIAS SET ? WHERE ID = ".concat(id), ocorrenciaData, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Ocorrencia atualizada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    Ocorrencias.prototype.deleteOccurrence = function (id, res) {
        try {
            __1.default.query("DELETE FROM OCORRENCIAS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Ocorrencia deletada",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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
    return Ocorrencias;
}());
exports.default = new Ocorrencias();
//# sourceMappingURL=occurrencesModel.js.map