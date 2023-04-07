"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var Internos = /** @class */ (function () {
    function Internos() {
    }
    Internos.prototype.getAll = function (res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS", function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
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
    Internos.prototype.getInternalById = function (id, res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Interno encontrado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
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
    Internos.prototype.getInternalBySector = function (sector, res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS WHERE SETOR = ".concat(sector), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
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
    Internos.prototype.createInternal = function (internal, res) {
        try {
            __1.default.query("INSERT INTO INTERNOS SET ?", internal, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({
                        message: "Interno criado",
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
    Internos.prototype.updateInternal = function (id, internal, res) {
        try {
            __1.default.query("UPDATE INTERNOS SET ? WHERE ID = ".concat(id), internal, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    console.log(results);
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Interno atualizado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno Encontrado"
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
    Internos.prototype.deleteInternal = function (id, res) {
        try {
            __1.default.query("DELETE FROM INTERNOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Interno deletado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno deletado"
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
    return Internos;
}());
exports.default = new Internos();
//# sourceMappingURL=internalUserModel.js.map