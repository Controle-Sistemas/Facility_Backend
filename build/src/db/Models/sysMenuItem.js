"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var MenuItemModel = /** @class */ (function () {
    function MenuItemModel() {
    }
    //Classe que conterá os métodos de acesso ao banco de dados
    MenuItemModel.prototype.getAllMenuItems = function (res) {
        //Retorna todos os itens do menu
        try {
            __1.default.query('SELECT * FROM SYSMENUITEM ORDER BY descricao', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Itens do menu retornados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MenuItemModel.prototype.getItemsByRamoDeAtividade = function (ramoAtividade, res) {
        //Retorna todos os itens do menu de acordo com o ramo de atividade
        try {
            __1.default.query("SELECT * FROM SYSMENUITEM", function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    var ramoAtividadeArray_1 = ramoAtividade.split(','); //Separa o ramo de atividade em um array
                    if (results) {
                        if (ramoAtividade === 'Todos') {
                            res.status(200).send({
                                message: 'Itens do menu retornados com sucesso',
                                data: results
                            });
                        }
                        else {
                            var filteredResults = results.filter(function (item) {
                                //Filtra os itens do menu pelo ramo de atividade
                                if (item.idPai) {
                                    //Se o item possuir um idPai
                                    return ramoAtividadeArray_1.some(function (ramo) {
                                        // Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
                                        return ramoAtividadeArray_1.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
                                    });
                                }
                                else {
                                    //Se o item não possuir um idPai
                                    if (item.RAMODEATIVIDADE) {
                                        if (item.RAMODEATIVIDADE.includes("Todos")) {
                                            return ramoAtividadeArray_1.some(function (ramo) {
                                                return ramoAtividadeArray_1.includes(ramo);
                                            });
                                        }
                                        else {
                                            //Se o item possuir um ramo de atividade
                                            var ramosDeAtividade = item.RAMODEATIVIDADE.split(','); //Separa o ramo de atividade do item em um array
                                            return ramosDeAtividade.some(function (ramo) {
                                                //Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
                                                return ramoAtividadeArray_1.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
                                            });
                                        }
                                    }
                                }
                            });
                            if (filteredResults.length > 0) {
                                res.status(200).send({
                                    data: filteredResults
                                });
                            }
                            else {
                                res.status(200).send({
                                    message: 'Nenhum item encontrado'
                                });
                            }
                        }
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MenuItemModel.prototype.getMenuItemById = function (id, res) {
        //Retorna um item do menu pelo id
        try {
            __1.default.query("SELECT * FROM SYSMENUITEM WHERE id = ".concat(id), function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: 'Item do menu retornado com sucesso',
                            data: results[0]
                        });
                    }
                    else {
                        res.status(404).send({
                            message: 'Item do menu não encontrado'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MenuItemModel.prototype.createMenuItem = function (menuItem, res) {
        //Cria um item para o menu
        try {
            __1.default.query('INSERT INTO SYSMENUITEM SET ?', [menuItem], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Menu item criado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MenuItemModel.prototype.updateMenuItem = function (id, menuItem, res) {
        //Atualiza um item do menu
        try {
            __1.default.query("UPDATE SYSMENUITEM SET ? WHERE id = ".concat(id), [menuItem], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Menu item atualizado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MenuItemModel.prototype.deleteMenuItem = function (id, res) {
        //Deleta um item do menu
        try {
            __1.default.query("DELETE FROM SYSMENUITEM WHERE id = ".concat(id), function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Menu item deletado com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return MenuItemModel;
}());
exports.default = new MenuItemModel();
//# sourceMappingURL=sysMenuItem.js.map