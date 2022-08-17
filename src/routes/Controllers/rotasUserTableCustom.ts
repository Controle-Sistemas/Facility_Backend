import UserTableCustomModel from '../../db/Models/sysUserTableCustom';
import express, { Request, Response } from 'express';
import conn from '../../db';

const router = express.Router();

router.get('/:id/:idTable', (req: Request, res: Response) => {
	const id = Number(req.params.id); //Pega o id do usuario
	const idTable = Number(req.params.idTable); //Pega o id da tabela
	UserTableCustomModel.getTable(id, idTable, res); //Pega todos a tabela da base de dados
});

router.post('/', (req: Request, res: Response) => {
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
		UserTableCustomModel.createTable(newData, res); //Cria a tabela na base de dados
	}
});

router.patch('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id); //Pega o id do usuario
	const tableData = req.body; //Pega os dados da tabela
	console.log(tableData);

    //ordenar os dados pelo id
    tableData.fieldCaption.sort((a: { id: number; }, b: { id: number; }) => {
        return a.id - b.id;
    })

	if (tableData.fieldCaption.length > 0) {
		tableData.fieldCaption.forEach((element: { id:number,nome: string }, index: any) => {
			console.log(element.nome)
			
				let newData = {
                    id: element.id,
					idTable: tableData.idTable,
					fieldCaption: element.nome, //Pega o nome do campo
                    defaultIndex: tableData.defaultIndex === index ? true : false,//index do campo de ordenação padrão
					visible: tableData.visible[index].id === element.id && tableData.visible[index].visible, //verifica se o campo esta visivel
				};
				console.log(newData)
			UserTableCustomModel.editTable(newData, id, res); //Atualiza a tabela na base de dados
		});
		res.status(200).json({
			message: 'Tabela atualizada com sucesso!'
			});
			
	}
});

router.delete('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id); //Pega o id do usuario
	UserTableCustomModel.deleteTable(id, res); //Deleta a tabela
});

export default router;
