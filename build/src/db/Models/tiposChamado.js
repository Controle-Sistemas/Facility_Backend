"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var lodash_1 = __importDefault(require("lodash"));
var TiposModel = /** @class */ (function () {
    function TiposModel() {
    }
    TiposModel.prototype.getAll = function (res) {
        var data = {
            TYPES: {},
            SECTIONS: {},
            ITEMS: {}
        };
        __1.default.query("SELECT * FROM CHAMADOTYPE", function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                data['TYPES'] = results;
                __1.default.query("SELECT * FROM CHAMADOTYPESECTION", function (err, results) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        data['SECTIONS'] = results;
                        __1.default.query("SELECT * FROM CHAMADOTYPESECTIONITEM", function (err, results) {
                            if (err) {
                                res.status(500).send(err);
                            }
                            else {
                                data['ITEMS'] = results;
                                res.status(200).send({
                                    message: 'Checklistis completos listado com sucesso',
                                    data: data
                                });
                            }
                        });
                    }
                });
            }
        });
    };
    TiposModel.prototype.getAllItems = function (res) {
        __1.default.query("SELECT * FROM CHAMADOSECTIONITEM", function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send({ message: "Itens listados com sucesso", data: results });
            }
        });
    };
    TiposModel.prototype.getById = function (id, res) {
        try {
            __1.default.query("SELECT  CHAMADOTYPESECTIONITEM.ID as 'ITEMID', CHAMADOTYPESECTIONITEM.DESCRIPTION as 'DESCRIPTION', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.ID as 'IDSECTION', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.ID = '".concat(id, "' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID"), function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({ message: "Tipo de id - ".concat(id, " - listado com sucesso"), data: results });
                    }
                    else {
                        res.status(404).send({
                            message: 'Checklist não encontrada'
                        });
                    }
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    TiposModel.prototype.getByName = function (nome, res) {
        __1.default.query("SELECT CHAMADOTYPESECTIONITEM.DESCRIPTION as 'ITEM', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.TITLE = '".concat(nome, "' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID"), function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.length > 0) {
                    res.status(200).send({ message: "Tipo ".concat(nome, " listado com sucesso"), data: results });
                }
                else {
                    res.status(404).send({
                        message: 'Checklist não encontrada'
                    });
                }
            }
        });
    };
    TiposModel.prototype.getItemsByID = function (id) {
        __1.default.query("SELECT CHAMADOTYPESECTIONITEM.DESCRIPTION as 'ITEM', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.ID = '".concat(id, "' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID"), function (err, results) {
            if (err) {
                return { message: err };
            }
            else {
                console.log({ message: "Tipo ".concat(id, " listado com sucesso"), data: results });
                return { message: "Tipo ".concat(id, " listado com sucesso"), data: results };
            }
        });
    };
    TiposModel.prototype.getByChamadoId = function (id, res) {
        try {
            __1.default.query("SELECT * FROM CHAMADOSECTIONITEM WHERE IDCHAMADO = ".concat(id), function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({ message: "Tipo de do chamado de id - ".concat(id, " - listado com sucesso"), data: results });
                    }
                    else {
                        res.status(200).send({
                            message: 'Checklist não encontrada'
                        });
                    }
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    TiposModel.prototype.getItemByChamadoId = function (id, res) {
        try {
            __1.default.query("SELECT * FROM CHAMADOSECTIONITEM WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({ message: "Item  de id - ".concat(id, " - listado com sucesso"), data: results });
                    }
                    else {
                        res.status(404).send({
                            message: 'Item não encontrado'
                        });
                    }
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    TiposModel.prototype.createChamadoItems = function (data, res) {
        var statusCode = 200;
        var id = data.CHAMADOTYPE;
        var error = {};
        try {
            __1.default.query("SELECT  CHAMADOTYPESECTIONITEM.ID as 'ITEMID', CHAMADOTYPESECTIONITEM.DESCRIPTION as 'DESCRIPTION', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.ID as 'IDSECTION', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.ID = '".concat(id, "' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID"), function (err, results) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    if (results.length > 0) {
                        lodash_1.default.map(results, function (item) { return (__1.default.query("INSERT INTO CHAMADOSECTIONITEM (IDSECTIONITEMTYPE, IDCHAMADO, REQUIRED) VALUES ('".concat(item.ITEMID, "', '").concat(data.IDCHAMADO, "', '").concat(item.REQUIRED, "')"), function (err, results) {
                            if (err) {
                                statusCode = 500;
                                error = err;
                            }
                        })); });
                        if (statusCode == 200) {
                            res.status(statusCode).send({ message: "Items vinculados ao chamado ".concat(data.IDCHAMADO, " listado com sucesso"), data: results });
                        }
                        else {
                            res.status(statusCode).send({ message: "Erro", data: error });
                        }
                    }
                    else {
                        res.status(200).send({ message: "Tipo sem itens para incluir!" });
                    }
                }
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    };
    TiposModel.prototype.create = function (tipo, res) {
        var statusCode = 200;
        __1.default.query("INSERT INTO CHAMADOTYPE (ID , TITLE) VALUES ('".concat(tipo.ID, "', '").concat(tipo.TITLE, "')"), function (err, results) {
            if (err) {
                statusCode = 500;
            }
            else {
                if (tipo.SECTIONS) {
                    lodash_1.default.map(tipo.SECTIONS, function (section) { return (__1.default.query("INSERT INTO CHAMADOTYPESECTION (ID , TITLE, IDTYPE) VALUES ('".concat(section.ID, "', '").concat(section.TITLE, "', '").concat(tipo.ID, "')"), function (err, results) {
                        if (err) {
                            statusCode = 500;
                        }
                        else {
                            lodash_1.default.map(section.ITENS, function (item) { return (__1.default.query("INSERT INTO CHAMADOTYPESECTIONITEM (ID , IDSECTION, DESCRIPTION, REQUIRED) VALUES ('".concat(item.ID, "', '").concat(section.ID, "', '").concat(item.DESCRIPTION, "', ").concat(item.REQUIRED, ")"), function (err, results) {
                                if (err) {
                                    statusCode = 500;
                                }
                            })); });
                        }
                    })); });
                }
            }
            if (statusCode != 200) {
                res.status(statusCode).send({
                    data: err,
                    message: "Algo deu errado com a requisi\u00E7\u00E3o"
                });
            }
            else {
                res.status(statusCode).send({
                    data: tipo,
                    message: "Tipo '".concat(tipo.TITLE, "' criado com sucesso")
                });
            }
        });
    };
    TiposModel.prototype.update = function (id, item, res) {
        __1.default.query('UPDATE CHAMADOSECTIONITEM SET DONE ? WHERE ID = ?', [item.DONE, id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Item atualizado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Item não encontrado'
                    });
                }
            }
        });
    };
    TiposModel.prototype.updateItem = function (id, item, res) {
        __1.default.query('UPDATE CHAMADOSECTIONITEM SET DONE = ? WHERE ID = ?', [item.DONE, id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Item atualizado com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Item não encontrado'
                    });
                }
            }
        });
    };
    TiposModel.prototype.delete = function (id, res) {
        __1.default.query('DELETE FROM CHAMADOTYPE WHERE id = ?', [id], function (err, results) {
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
    TiposModel.prototype.deleteChamadoItems = function (id, res) {
        __1.default.query('DELETE FROM CHAMADOSECTIONITEM WHERE IDCHAMADO = ?', [id], function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Itens de chamado deletados com sucesso'
                    });
                }
                else {
                    res.status(404).send({
                        message: 'Itens não encontrados'
                    });
                }
            }
        });
    };
    return TiposModel;
}());
exports.default = new TiposModel();
//# sourceMappingURL=tiposChamado.js.map