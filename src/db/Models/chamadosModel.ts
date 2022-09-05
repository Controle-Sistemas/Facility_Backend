import connection from '..';
import { Request, Response } from 'express';
import { ChamadosType } from '../../types';

class Chamados {
	getDate() {
		const date = new Date();
		const ano = date.getFullYear();
		const mes = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
		const dia = date.getDate().toString().length === 1 ? `0${date.getDate().toString()}` : date.getDate().toString()
		const hora =
			date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString();

		return `${dia}/${mes}/${ano}`;
	}

	isLate(data: ChamadosType[]) {
		const date = this.getDate();

		data.forEach((item: ChamadosType) => {
			const [ano, mes, dia] = item.PREVISAO.split('-');
			const dataPrevisao = `${dia}/${mes}/${ano}`
			if (
				item.ATIVO === 1 &&
				dataPrevisao < date
			) {
				item.STATUS = 5;
			}
		});

		return data;
	}

	getAll(res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);
						res.status(200).send({
							message: 'Chamados encontrados',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoById(id: number, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE ID = ${id}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoBySector(sector: number, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE SETOR = ${sector}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoByStatus(status: number, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE STATUS = ${status}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoByInternalId(id: number, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE IDINTERNO = ${id}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoByUserId(id: number, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE IDUSUARIO = ${id}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	getChamadoByInternalUsername(username: string, res: Response) {
		try {
			connection.query(`SELECT * FROM CHAMADOS WHERE INTERNORECEPTOR = '${username}'`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					if (results.length > 0) {
						results = this.isLate(results);

						res.status(200).send({
							message: 'Chamado encontrado',
							data: results
						});
					} else {
						console.log(results)
						res.status(404).send({
							message: 'Nenhum chamado encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	createChamado(chamadoData: any, res: Response) {
		try {
			connection.query(`INSERT INTO CHAMADOS SET ?`, chamadoData, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					res.status(200).send({
						message: 'Chamado criado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	updateChamado(id: number, chamadoData: any, res: Response) {
		try {
			connection.query(`UPDATE CHAMADOS SET ? WHERE ID = ${id}`, chamadoData, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					res.status(200).send({
						message: 'Chamado atualizado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}

	deleteChamado(id: number, res: Response) {
		try {
			connection.query(`DELETE FROM CHAMADOS WHERE ID = ${id}`, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					res.status(200).send({
						message: 'Chamado deletado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.log(error);
			res.status(400).send(error);
		}
	}
}

export default new Chamados();
