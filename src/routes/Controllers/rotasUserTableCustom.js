"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sysUserTableCustom_1 = __importDefault(require("../../db/Models/sysUserTableCustom"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/:id/:idTable', (req, res) => {
    const id = Number(req.params.id); //Pega o id do usuario
    const idTable = Number(req.params.idTable); //Pega o id da tabela
    sysUserTableCustom_1.default.getTable(id, idTable, res); //Pega todos a tabela da base de dados
});
router.post('/', (req, res) => {
    const tableData = req.body; //Pega os dados da tabela
    console.log(tableData);
    tableData.fieldName.push('Ações');
    console.log(tableData.fieldName);
    for (let i = 0; i < tableData.fieldName.length; i++) {
        tableData.fieldName[i] = tableData.fieldName[i].toUpperCase();
        let newData = {
            idUser: tableData.idUser,
            idTable: tableData.idTable,
            fieldName: tableData.fieldName[i],
            fieldCaption: tableData.fieldName[i]
        };
        sysUserTableCustom_1.default.createTable(newData, res); //Cria a tabela na base de dados
    }
});
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id); //Pega o id do usuario
    const tableData = req.body; //Pega os dados da tabela
    console.log(tableData);
    //ordenar os dados pelo id
    tableData.fieldCaption.sort((a, b) => {
        return a.id - b.id;
    });
    if (tableData.fieldCaption.length > 0) {
        tableData.fieldCaption.forEach((element, index) => {
            console.log(element.nome);
            let newData = {
                id: element.id,
                idTable: tableData.idTable,
                fieldCaption: element.nome,
                defaultIndex: tableData.defaultIndex === index ? true : false,
                visible: tableData.visible[index].id === element.id && tableData.visible[index].visible, //verifica se o campo esta visivel
            };
            console.log(newData);
            sysUserTableCustom_1.default.editTable(newData, id, res); //Atualiza a tabela na base de dados
        });
        res.status(200).json({
            message: 'Tabela atualizada com sucesso!'
        });
    }
});
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id); //Pega o id do usuario
    sysUserTableCustom_1.default.deleteTable(id, res); //Deleta a tabela
});
exports.default = router;
