"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class MenuItemModel {
    //Classe que conterá os métodos de acesso ao banco de dados
    getAllMenuItems(res) {
        //Retorna todos os itens do menu
        try {
            __1.default.query('SELECT * FROM sysmenuitem', (err, results) => {
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
    }
    getItemsByRamoDeAtividade(ramoAtividade, res) {
        //Retorna todos os itens do menu de acordo com o ramo de atividade
        try {
            __1.default.query(`SELECT * FROM sysmenuitem`, (err, results) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    const ramoAtividadeArray = ramoAtividade.split(','); //Separa o ramo de atividade em um array
                    if (results) {
                        if (ramoAtividade === 'Todos') {
                            res.status(200).send({
                                message: 'Itens do menu retornados com sucesso',
                                data: results
                            });
                        }
                        else {
                            const filteredResults = results.filter((item) => {
                                //Filtra os itens do menu pelo ramo de atividade
                                if (item.idPai) {
                                    //Se o item possuir um idPai
                                    return ramoAtividadeArray.some((ramo) => {
                                        // Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
                                        return ramoAtividadeArray.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
                                    });
                                }
                                else {
                                    //Se o item não possuir um idPai
                                    if (item.RAMODEATIVIDADE) {
                                        if (item.RAMODEATIVIDADE.includes(`Todos`)) {
                                            return ramoAtividadeArray.some((ramo) => {
                                                return ramoAtividadeArray.includes(ramo);
                                            });
                                        }
                                        else {
                                            //Se o item possuir um ramo de atividade
                                            const ramosDeAtividade = item.RAMODEATIVIDADE.split(','); //Separa o ramo de atividade do item em um array
                                            return ramosDeAtividade.some((ramo) => {
                                                //Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
                                                return ramoAtividadeArray.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
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
    }
    getMenuItemById(id, res) {
        //Retorna um item do menu pelo id
        try {
            __1.default.query(`SELECT * FROM sysmenuitem WHERE id = ${id}`, (err, results) => {
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
    }
    createMenuItem(menuItem, res) {
        //Cria um item para o menu
        try {
            __1.default.query('INSERT INTO sysmenuitem SET ?', [menuItem], (err, results) => {
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
    }
    updateMenuItem(id, menuItem, res) {
        //Atualiza um item do menu
        try {
            __1.default.query(`UPDATE sysmenuitem SET ? WHERE id = ${id}`, [menuItem], (err, results) => {
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
    }
    deleteMenuItem(id, res) {
        //Deleta um item do menu
        try {
            __1.default.query(`DELETE FROM sysmenuitem WHERE id = ${id}`, (err, results) => {
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
    }
}
exports.default = new MenuItemModel();
