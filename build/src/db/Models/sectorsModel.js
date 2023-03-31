"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var Sectors = /** @class */ (function () {
    function Sectors() {
    }
    Sectors.prototype.getSectors = function (res) {
        try {
            __1.default.query("SELECT * FROM SETORES", function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Setores encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
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
    Sectors.prototype.getSectorById = function (id, res) {
        try {
            __1.default.query("SELECT * FROM SETORES WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Setor encontrado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
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
    Sectors.prototype.createSector = function (sector, res) {
        try {
            __1.default.query("INSERT INTO SETORES SET ?", sector, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({
                        message: "Setor criado com sucesso"
                    });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Sectors.prototype.updateSector = function (id, sector, res) {
        try {
            __1.default.query("UPDATE SETORES SET ? WHERE ID = ".concat(id), sector, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Setor atualizado com sucesso"
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
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
    Sectors.prototype.deleteSector = function (id, res) {
        try {
            __1.default.query("DELETE FROM SETORES WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Setor deletado com sucesso"
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
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
    return Sectors;
}());
exports.default = new Sectors();
//# sourceMappingURL=sectorsModel.js.map