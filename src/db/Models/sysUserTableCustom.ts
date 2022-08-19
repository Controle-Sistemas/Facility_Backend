import conn from '..';
import { Response } from 'express';

class UserTableCustomModel {
	editTable(tableData: any, idUser: number, res: Response) {
		try {
			conn.query(
				`UPDATE sysselecttablecolumn SET ? WHERE  idUser = ${idUser} and idTable = ${tableData.idTable} AND id = ${tableData.id}`,
				[ tableData ]
			);
		} catch (error) {
			res.status(500).send(error);
			console.log(error);
		}  
			
	}

	getTable(idUser: number, idTable: number, res: Response) {
		try {
			conn.query(
				`SELECT * FROM sysselecttablecolumn WHERE idUser = ${idUser} AND idTable = ${idTable}`,
				(err, results) => {
					if (err) {
						res.status(400).send({
							message: err
						});
					} else {
						console.log(typeof results);
						if (results.toString().length > 0) {
							res.status(200).send({
								message: 'Tabela listada com sucesso',
								data: results
							});
						} else {
							res.status(404).send({
								message: 'Tabela não encontrada'
							});
						}
					}
				}
			);
		} catch (error) {
			res.status(500).send(error);
			console.log(error);
		}  
			
	}

	createTable(tableData: any, res: Response) {
		try {
			conn.query(`INSERT INTO sysselecttablecolumn SET ?`, [ tableData ], (err) => {
				if (err) {
					console.log(err);
				}
			});
		} catch (error) {
			res.status(500).send(error);
			console.log(error);
		}  
			
	}

	deleteTable(idTable: number, res: Response) {
		try {
			conn.query(`DELETE FROM sysselecttablecolumn WHERE idUser = ${idTable}`, (err) => {
				if (err) {
					res.status(400).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Tabela deletada com sucesso'
					});
				}
			});
		} catch (error) {
			res.status(500).send(error);
			console.log(error);
		}  
			
	}

	deleteTableByUser(idUser: number, res: Response) {
		try {
			conn.query(`DELETE FROM sysselecttablecolumn WHERE  idUser = ${idUser}`);
		} catch (error) {
			res.status(500).send(error);
			console.log(error);
		}  
    }
}

export default new UserTableCustomModel();
