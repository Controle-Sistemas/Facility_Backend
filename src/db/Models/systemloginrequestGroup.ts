import connection from '..';
import { MatrizDashType, SysLoginType } from '../../types';

class ModeloGrupoEmpresas {

	getAllFiliais(res: any){
		try {
			connection.query('SELECT * FROM FILIAISDASHBOARD WHERE IDMATRIZ IN (SELECT ID FROM MATRIZESDASHBOARD)', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Filiais listadas com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getMatrizes(res: any) {
		//Retorna todos as contas Matrizes
		try {
			connection.query('SELECT * FROM MATRIZESDASHBOARD', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Matrizes listadas com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getMatrizById(id: number, res: any) {
		//Retorna um cliente pelo id
		try {
			connection.query('SELECT * FROM MATRIZESDASHBOARD WHERE id = ?', [ id ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.length > 0) {
						res.status(200).send({
							message: 'Matriz listada com sucesso',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Matriz não encontrada'
						});
					}
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	getFiliaisByMatriz(id: number, res: any) {
		//Retorna as filiais de um grupo pelo id da Matriz do grupo
		try {
			connection.query(`SELECT * FROM FILIAISDASHBOARD WHERE IDMATRIZ = ${id}`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.length > 0) {
						res.status(200).send({
							message: `Filiais do grupo com id -> ${id} listadas com sucesso`,
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Filiais não encontradas, verifique se o id do grupo está correto'
						});
					}
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	getFields(res: any) {
		//Retorna todos os campos de um cliente
		try {
			connection.query('DESCRIBE SYSLOGINREQUEST', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					results.push({
						Field: 'Ações',
						Type: 'button',
						Null: 'NO',
						Key: ''
					});
					res.status(200).send({
						message: 'Campos listados com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	createMatriz(matrizDash: MatrizDashType, res: any) {
		//Cria uma matriz
		try {
			connection.query('INSERT INTO MATRIZESDASHBOARD SET ?', [ matrizDash ]);
		} catch (error) {
			console.error(error);
		} 
	}

	updateMatriz(id: number, matrizDash: MatrizDashType, res: any) {
		//Atualiza uma matriz
		try {
			connection.query(
				'UPDATE MATRIZESDASHBOARD SET ? WHERE id = ?',
				[ matrizDash, id ],
				(err: any, results: any) => {
					if (err) {
						res.status(500).send({
							message: err
						});
					} else {
						res.status(200).send({
							message: 'Matriz atualizada com sucesso',
							data: results
						});
					}
				}
			);
		} catch (error) {
			console.error(error);
		} 
	}

	deleteMatriz(id: number, res: any) {
		//Deleta um cliente
		try {
			connection.query('DELETE FROM MATRIZESDASHBOARD WHERE id = ?', [ id ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Matriz deletada com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}


}

export default new ModeloGrupoEmpresas();
