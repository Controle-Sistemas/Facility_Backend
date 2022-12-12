import connection from '..';
import { MatrizType, FiliaisType, SysLoginType } from '../../types';

class ModeloGrupoEmpresas {

	getAllFiliais(res: any){
		try {
			connection.query('SELECT * FROM FILIAIS WHERE IDMATRIZ IN (SELECT ID FROM MATRIZES)', (err: any, results: any) => {
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
			connection.query('SELECT * FROM MATRIZES', (err: any, results: any) => {
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
		//Retorna uma matriz pelo id
		try {
			connection.query('SELECT * FROM MATRIZES WHERE id = '+id, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results) {
						res.status(200).send({
							message: 'Matriz listada com sucesso',
							data: results
						});
						console.log(res.data)
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
			connection.query(`SELECT * FROM FILIAIS WHERE IDMATRIZ = ${id}`, (err: any, results: any) => {
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


	createFilial(filial: FiliaisType, res: any) {
		//Cria uma filial
		try {
			connection.query('INSERT INTO FILIAIS SET ?', [ filial ],
			(err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: `Filial vinculada a matriz ${filial.IDMATRIZ} adicionada com sucesso`,
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	createMatriz(matrizDash: MatrizType, res: any) {
		//Cria uma matriz
		try {
			connection.query('INSERT INTO MATRIZES SET ?', [ matrizDash ],
			(err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Matriz adicionada com sucesso',
						data: results
					});
				}
			});
			
		} catch (error) {
			console.error(error);
		} 
	}

	updateMatriz(id: number, matrizDash: MatrizType, res: any) {
		//Atualiza uma matriz
		try {
			connection.query(
				'UPDATE MATRIZES SET ? WHERE id = ?',
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
		//Deleta uma matriz
		try {
			connection.query('DELETE FROM MATRIZES WHERE id = ?', [ id ], (err: any, results: any) => {
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

	deleteFilial(id: number, res: any) {
		//Deleta uma filial
		try {
			connection.query('DELETE FROM FILIAIS WHERE id = ?', [ id ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Filial deletada com sucesso',
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
