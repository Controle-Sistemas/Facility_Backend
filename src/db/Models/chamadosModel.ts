import connection from '..';
import { Request, Response } from 'express';
import { ChamadosType } from '../../types';
import tipoChamadosModel from '../../db/Models/tiposChamado';
interface CHAMADOTYPE {
	ID: string,
	TITLE: string,
	SECTIONS: Array<{
		ID: string,
		TITLE: string,
		ITENS: Array<{
			ID: string,
			DESCRIPTION: string,
			REQUIRED: boolean
		}>
	}>
}

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
			const dataPrevista = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
			console.log('Previsão: ' + dataPrevista, 'Data atual: ' + date + ' Atrasado?: ' + (dataPrevista <= new Date() ? 'Sim' : 'Não') )
			if (
				item.ATIVO === 1 &&
				dataPrevista <= new Date()
			) {
				item.STATUS = 5;
			}
		});

		return data;
	}

	getAll(res: Response) {
		try {
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND CHAMADOS.ID = ${id}`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND SETOR = ${sector}`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND STATUS = ${status}`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND IDINTERNO = ${id}`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND IDCLIENTE = ${id}`, (err, results: any) => {
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
			connection.query(`SELECT CHAMADOS.*, CHAMADOTYPE.TITLE AS CHAMADOTYPETITLE FROM CHAMADOS JOIN CHAMADOTYPE  WHERE CHAMADOS.TIPOCHAMADO = CHAMADOTYPE.ID AND INTERNORECEPTOR = '${username}'`, (err, results: any) => {
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

	async createChamado(chamadoData: any, res: Response) {
		var chamadoDataAux = chamadoData;
		console.log(chamadoDataAux)
		chamadoDataAux.DATAVENCIMENTO = chamadoData.PREVISAO;

		try {
			connection.query(`INSERT INTO CHAMADOS SET ?`, chamadoDataAux, (err, results: any) => {
				if (err) {
					console.log(err);
					res.status(400).send(err);
				} else {
					// Verificar se o tipo do chamado tem checklist ou não
					// Caso tenha -> Buscar o chamado com esses mesmos dados de chamadoData  para conseguir o ID
					// Verificar os itens q esse tipo deve conter e adicioná-los com esse ID
					res.status(200).send({
						message: 'Chamado criado com sucesso',
						data: results
					})
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

	updateChamadoType(id: number, chamadoData: any, res: Response) {
		try {
			connection.query(`UPDATE CHAMADOS SET TIPOCHAMADO = '${chamadoData.CHAMADOTYPE}' WHERE ID = ${id}`, (err, results: any) => {
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
